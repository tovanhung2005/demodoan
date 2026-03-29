// File: src/services/userService.js
import axiosClient from "../api/axiosClient";

export const userService = {
  /**
   * Lấy thông tin user đang đăng nhập
   * Gọi API: GET /users/my-info
   * (Token đã được axiosClient tự động gắn vào Header rồi nên ta không cần truyền gì thêm)
   */
  getMyInfo: async () => {
    // Vì interceptor của chúng ta đã bóc tách vỏ response, 
    // hàm này sẽ trả thẳng về object thông tin User
    const response = await axiosClient.get("/users/my-info");
    return response;
  }
};