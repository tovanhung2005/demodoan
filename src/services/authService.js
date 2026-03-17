import users from "../data/mockUsers";

/**
 * LOGIN
 */
export const login = (identifier, password) => {
  if (!identifier?.trim() || !password?.trim()) {
    return {
      success: false,
      message: "Vui lòng nhập đầy đủ thông tin.",
    };
  }

  const existUser = users.find(
    (u) => u.email === identifier || u.std === identifier
  );

  if (!existUser) {
    return {
      success: false,
      message: "Tài khoản không tồn tại.",
    };
  }

  if (existUser.password !== password) {
    return {
      success: false,
      message: "Sai mật khẩu.",
    };
  }

  return {
    success: true,
    user: existUser,
  };
};


/**
 * REGISTER
 */
export const register = (data) => {

  const emailExist = users.find((u) => u.email === data.email);
  if (emailExist) {
    return {
      success: false,
      field: "email",
      message: "Email đã tồn tại.",
    };
  }

  const phoneExist = users.find((u) => u.std === data.phone);
  if (phoneExist) {
    return {
      success: false,
      field: "phone",
      message: "Số điện thoại đã tồn tại.",
    };
  }

  const newUser = {
    id: users.length + 1,
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    std: data.phone,
    birthDate: data.birthDate,
    gender: data.gender,
    password: data.password,
  };

  users.push(newUser);

  return {
    success: true,
    user: newUser,
  };
};