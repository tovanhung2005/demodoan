import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const RoleBasedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
  
  // Kiểm tra xem role của user có nằm trong danh sách được cho phép không
  const hasAccess = user?.roles?.some(role => allowedRoles.includes(role.name));

  return hasAccess ? <Outlet /> : <Navigate to="/home" replace />;
};