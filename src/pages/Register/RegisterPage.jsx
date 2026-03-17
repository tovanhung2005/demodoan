import { Mail, Lock, Eye, EyeOff, User, Phone, Calendar } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Link } from "react-router-dom";
import { useRegister } from "./useRegister";

export default function RegisterPage() {

  const {
    formData,
    errors,
    message,
    showPassword,
    showConfirmPassword,
    handleChange,
    togglePassword,
    toggleConfirmPassword,
    handleSubmit
  } = useRegister();

  return (

    <div className="min-h-screen flex">

      {/* LEFT */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">

        <div className="w-full max-w-md">

          <div className="mb-8 text-center">

            <img
              src="/logo.png"
              className="w-16 mx-auto mb-4"
            />

            <h1 className="text-3xl font-bold text-gray-900">
              Tạo tài khoản mới
            </h1>

            <p className="text-gray-600">
              Điền thông tin để bắt đầu kết nối
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {message && (
              <p className="text-red-500 text-sm text-center font-medium">
                {message}
              </p>
            )}

            {/* NAME */}
            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-2">
                <Label>Họ và tên đệm</Label>

                <div className="relative">

                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

                  <Input
                    className="pl-10"
                    placeholder="Họ và tên đệm"
                    value={formData.firstName}
                    onChange={(e)=>handleChange("firstName",e.target.value)}
                  />

                </div>

                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}

              </div>

              <div className="space-y-2">

                <Label>Tên</Label>

                <div className="relative">

                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

                  <Input
                    className="pl-10"
                    placeholder="Tên"
                    value={formData.lastName}
                    onChange={(e)=>handleChange("lastName",e.target.value)}
                  />

                </div>

                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}

              </div>

            </div>

            {/* EMAIL */}
            <div className="space-y-2">

              <Label>Email</Label>

              <div className="relative">

                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

                <Input
                  className="pl-10"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e)=>handleChange("email",e.target.value)}
                />

              </div>

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

            </div>

            {/* PHONE */}
            <div className="space-y-2">

              <Label>Số điện thoại</Label>

              <div className="relative">

                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

                <Input
                  className="pl-10"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={(e)=>handleChange("phone",e.target.value)}
                />

              </div>

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

            </div>

            {/* BIRTH */}
            <div className="space-y-2">

              <Label>Ngày sinh</Label>

              <div className="relative">

                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

                <Input
                  type="date"
                  className="pl-10"
                  value={formData.birthDate}
                  onChange={(e)=>handleChange("birthDate",e.target.value)}
                />

              </div>

              {errors.birthDate && (
                <p className="text-red-500 text-sm">{errors.birthDate}</p>
              )}

            </div>

            {/* GENDER */}
            <div className="space-y-2">

              <Label>Giới tính</Label>

              <select
                className="w-full border rounded-md p-2 mt-1"
                value={formData.gender}
                onChange={(e)=>handleChange("gender",e.target.value)}
              >
                <option value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>

              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              )}

            </div>

            {/* PASSWORD */}
            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-2">

                <Label>Mật khẩu</Label>

                <div className="relative">

                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

                  <Input
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10"
                    placeholder="Mật khẩu"
                    value={formData.password}
                    onChange={(e)=>handleChange("password",e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                  </button>

                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}

              </div>

              <div className="space-y-2">

                <Label>Xác nhận mật khẩu</Label>

                <div className="relative">

                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    className="pl-10 pr-10"
                    placeholder="Xác nhận mật khẩu"
                    value={formData.confirmPassword}
                    onChange={(e)=>handleChange("confirmPassword",e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={toggleConfirmPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                  </button>

                </div>

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}

              </div>

            </div>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
              Đăng ký
            </Button>

          </form>

          <p className="text-center mt-3 text-sm">
            Đã có tài khoản?{" "}
            <Link to="/" className="text-blue-600 font-semibold">
              Đăng nhập ngay
            </Link>
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-500 to-pink-600 items-center justify-center p-12 relative overflow-hidden">

        {/* background blur effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* content */}
        <div className="relative z-10 max-w-lg text-white">

          {/* image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <img
              src="/post1.png"
              alt="Illustration"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* title */}
          <h2 className="text-4xl font-bold mb-4">
            Tham gia cộng đồng của chúng tôi
          </h2>

          {/* description */}
          <p className="text-lg text-purple-100 mb-8">
            Tạo tài khoản miễn phí và bắt đầu chia sẻ những khoảnh khắc đáng nhớ
            cùng với hàng triệu người dùng trên toàn thế giới.
          </p>

          {/* features */}
          <div className="space-y-4">

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-lg">Kết nối không giới hạn</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-lg">Chia sẻ ảnh & video</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-lg">Bảo mật tuyệt đối</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}