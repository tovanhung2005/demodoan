import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import toast from "react-hot-toast";

export function useRegister() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    const getAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
    };
  const validateField = (field, value) => {

    let error = "";

    switch (field) {

      case "firstName":
        if (!value.trim()) error = "Vui lòng nhập họ";
        else if (!nameRegex.test(value))
          error = "Họ không được chứa ký tự đặc biệt";
        break;

      case "lastName":
        if (!value.trim()) error = "Vui lòng nhập tên";
        else if (!nameRegex.test(value))
          error = "Tên không được chứa ký tự đặc biệt";
        break;

      case "email":
        if (!value.trim()) error = "Vui lòng nhập email";
        else if (!emailRegex.test(value))
          error = "Email không đúng định dạng";
        break;

      case "phone":
        if (!value.trim()) {
          error = "Vui lòng nhập số điện thoại";
        } 
        else if (!/^[0-9]{10,11}$/.test(value)) {
          error = "Số điện thoại không hợp lệ";
        }
        break;

      case "gender":
        if (!value) error = "Vui lòng chọn giới tính";
        break;

      case "password":
        if (!value) error = "Vui lòng nhập mật khẩu";
        else if (!passwordRegex.test(value))
          error = "Mật khẩu >=6 ký tự, có chữ hoa và ký tự đặc biệt";
        break;

      case "confirmPassword":
        if (!value) error = "Vui lòng xác nhận mật khẩu";
        else if (value !== formData.password)
          error = "Mật khẩu xác nhận không khớp";
        break;
      case "birthDate":
        if (!value) {
            error = "Vui lòng nhập ngày sinh";
        }
        else if (getAge(value) < 18) {
            error = "Bạn phải đủ 18 tuổi";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error
    }));
  };

  const handleChange = (field, value) => {

    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));

    validateField(field, value);

    if (field === "password" && formData.confirmPassword) {
      validateField("confirmPassword", formData.confirmPassword);
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

  Object.keys(formData).forEach((field) => {

    let value = formData[field];
    let error = "";

    switch (field) {

      case "firstName":
        if (!value.trim()) error = "Vui lòng nhập họ";
        else if (!nameRegex.test(value))
          error = "Họ không được chứa ký tự đặc biệt";
        break;

      case "lastName":
        if (!value.trim()) error = "Vui lòng nhập tên";
        else if (!nameRegex.test(value))
          error = "Tên không được chứa ký tự đặc biệt";
        break;

      case "email":
        if (!value.trim()) error = "Vui lòng nhập email";
        else if (!emailRegex.test(value))
          error = "Email không đúng định dạng";
        break;

      case "phone":
        if (!value.trim()) {
          error = "Vui lòng nhập số điện thoại";
        } 
        else if (!/^[0-9]{10,11}$/.test(value)) {
          error = "Số điện thoại không hợp lệ";
        }
        break;

      case "birthDate":
        if (!value)
          error = "Vui lòng nhập ngày sinh";
        else if (getAge(value) < 18)
          error = "Bạn phải đủ 18 tuổi";
        break;

      case "gender":
        if (!value)
          error = "Vui lòng chọn giới tính";
        break;

      case "password":
        if (!value)
          error = "Vui lòng nhập mật khẩu";
        else if (!passwordRegex.test(value))
          error = "Mật khẩu >=6 ký tự, có chữ hoa và ký tự đặc biệt";
        break;

      case "confirmPassword":
        if (!value)
          error = "Vui lòng xác nhận mật khẩu";
        else if (value !== formData.password)
          error = "Mật khẩu xác nhận không khớp";
        break;

      default:
        break;
    }

    if (error) {
      newErrors[field] = error;
    }

  });

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    setMessage("Đăng ký thất bại");
    return;
  }

  const result = register(formData);

  if (!result.success) {
    setErrors((prev) => ({
      ...prev,
      [result.field]: result.message
    }));

    setMessage("Đăng ký thất bại");
    return;
  }

  setMessage("");
  setErrors({});

  toast.success("Đăng ký thành công");

  setTimeout(() => {
    navigate("/login");
  }, 1200);
};

  return {
    formData,
    errors,
    message,
    showPassword,
    showConfirmPassword,
    handleChange,
    togglePassword,
    toggleConfirmPassword,
    handleSubmit
  };
}