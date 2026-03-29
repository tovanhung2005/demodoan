import axiosClient from "../api/axiosClient";

export const authService = {
  getToken: () => localStorage.getItem("nexus_token"),
  setToken: (token) => localStorage.setItem("nexus_token", token),
  removeToken: () => localStorage.removeItem("nexus_token"),

  /**
   * ĐĂNG NHẬP: Trả về lỗi thay vì in ra log
   */
  login: async (identifier, password) => {
    try {
      const response = await axiosClient.post("/auth/token", {
        username: identifier, 
        password: password,
      });
      
      authService.setToken(response.token);
      return { success: true, token: response.token };
    } catch (error) {
      // Ưu tiên lấy message từ Backend (ví dụ: "User unauthenticated")
      const errorMessage = error.response?.data?.message || "Sai tài khoản hoặc mật khẩu.";
      return { success: false, message: errorMessage };
    }
  },

  /**
   * ĐĂNG KÝ
   */
  register: async (data) => {
    try {
      const payload = {
        username: data.email || data.phone, 
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        dob: data.birthDate,
      };

      const response = await axiosClient.post("/users", payload);
      return { success: true, user: response };
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Đăng ký thất bại.";
      return { success: false, message: errorMessage };
    }
  },

  /**
   * ĐĂNG XUẤT: Im lặng dọn dẹp token
   */
  logout: async () => {
    try {
      const token = authService.getToken();
      if (token) {
        await axiosClient.post("/auth/logout", { token });
      }
    } catch (error) {
      // Không cần thiết phải hiện lỗi đăng xuất cho người dùng
    } finally {
      authService.removeToken();
    }
  }
};