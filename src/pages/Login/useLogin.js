import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { authService } from "../../services/authService";
import toast from "react-hot-toast";

export function useLogin() {
  const { loginContext } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // State cho checkbox

  // Lấy username đã lưu khi load trang
  useEffect(() => {
    const savedIdentifier = localStorage.getItem("nexus_remember_user");
    if (savedIdentifier) {
      setIdentifier(savedIdentifier);
      setRememberMe(true);
    }
  }, []);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!identifier.trim() || !password.trim()) {
      setMessage("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const result = await authService.login(identifier, password);

      if (result.success) {
        // Xử lý Remember Me
        if (rememberMe) {
          localStorage.setItem("nexus_remember_user", identifier);
        } else {
          localStorage.removeItem("nexus_remember_user");
        }

        toast.success("Đăng nhập thành công!");
        await loginContext(result.token);
      } else {
        // Việt hóa thông báo lỗi từ Backend
        let friendlyMessage = "Đăng nhập thất bại.";
        if (result.message === "User not existed") {
          friendlyMessage = "Tài khoản không tồn tại.";
        } else if (result.message === "Unauthenticated") {
          friendlyMessage = "Mật khẩu không chính xác.";
        } else {
          friendlyMessage = result.message;
        }
        
        setMessage(friendlyMessage);
        toast.error(friendlyMessage);
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    toast(`Chức năng đăng nhập bằng ${provider} đang được phát triển!`);
  };

  return {
    showPassword,
    identifier,
    password,
    setIdentifier,
    setPassword,
    togglePassword,
    handleSubmit,
    handleSocialLogin,
    message,
    isLoading,
    rememberMe,
    setRememberMe,
  };
}