import { Mail, Lock, Eye, EyeOff, Facebook, Twitter, Github } from "lucide-react";
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
    message
  } = useLogin();

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Chào mừng trở lại
            </h1>
            <p className="text-gray-600">
              Đăng nhập để kết nối với bạn bè
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {message && (
              <p className="text-red-500 text-sm">
                {message}
              </p>
            )}
            <div className="space-y-2">
              <Label>Email hoặc Số điện thoại</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Email hoặc số điện thoại"
                  className="pl-10"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">
                Mật khẩu
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Ghi nhớ đăng nhập</span>
              </div>
              <a className="text-sm text-blue-600 hover:underline">
                Quên mật khẩu?
              </a>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
            >
              Đăng nhập
            </Button>
          </form>
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">
              Hoặc đăng nhập với
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="outline"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <Facebook size={18} />
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialLogin("Twitter")}
            >
              <Twitter size={18} />
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialLogin("Github")}
            >
              <Github size={18} />
            </Button>
          </div>
          <p className="mt-6 text-center text-sm">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-lg text-white text-center">
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/post.png"
              alt="Illustration"
              className="w-full h-80 object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Kết nối với mọi người trên khắp thế giới
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Chia sẻ khoảnh khắc, cập nhật trạng thái và giao lưu với bạn bè,
            gia đình. Khám phá những điều mới mẻ mỗi ngày.
          </p>
          <div className="flex justify-center space-x-8">
            <div>
              <div className="text-3xl font-bold">10M+</div>
              <div className="text-blue-100">Người dùng</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50M+</div>
              <div className="text-blue-100">Bài viết</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-blue-100">Quốc gia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}