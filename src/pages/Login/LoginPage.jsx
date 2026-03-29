import { Mail, Lock, Eye, EyeOff, Facebook, Twitter, Github, AlertCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

export default function LoginPage() {
  const {
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
    setRememberMe
  } = useLogin();

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Chào mừng trở lại</h1>
            <p className="text-gray-600">Đăng nhập để kết nối với bạn bè</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Alert Error chuẩn UI */}
            {message && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2.5 rounded-lg text-sm font-medium animate-in fade-in zoom-in-95">
                <AlertCircle className="w-4 h-4" />
                <span>{message}</span>
              </div>
            )}
            
            <div className="space-y-2">
              <Label>Email hoặc Số điện thoại</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Nhập email hoặc số điện thoại"
                  className="pl-10"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="remember"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading} 
                />
                <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer select-none">
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <a className="text-sm text-blue-600 hover:underline cursor-pointer">Quên mật khẩu?</a>
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full h-11 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all font-semibold ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Đang xác thực..." : "Đăng nhập"}
            </Button>
          </form>
          
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Hoặc đăng nhập với</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" onClick={() => handleSocialLogin("Facebook")} disabled={isLoading}>
              <Facebook size={18} className="text-blue-600" />
            </Button>
            <Button variant="outline" onClick={() => handleSocialLogin("Twitter")} disabled={isLoading}>
              <Twitter size={18} className="text-sky-500" />
            </Button>
            <Button variant="outline" onClick={() => handleSocialLogin("Github")} disabled={isLoading}>
              <Github size={18} />
            </Button>
          </div>
          
          <p className="mt-8 text-center text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">Đăng ký ngay</Link>
          </p>
        </div>
      </div>
      
      {/* RIGHT SIDE PANEL */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10 max-w-lg text-white text-center">
          <div className="mb-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img src="/post.png" alt="Nexus Connect" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Kết nối với thế giới chỉ trong một chạm</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Hàng triệu người đang chia sẻ những khoảnh khắc tuyệt vời. Tham gia ngay để không bỏ lỡ!
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
            <div>
              <div className="text-2xl font-bold">10M+</div>
              <div className="text-blue-200 text-sm">Thành viên</div>
            </div>
            <div>
              <div className="text-2xl font-bold">50M+</div>
              <div className="text-blue-200 text-sm">Bài viết</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-blue-200 text-sm">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}