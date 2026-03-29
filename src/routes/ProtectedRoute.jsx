// File: src/routes/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loader2 } from "lucide-react"; // Icon loading

export const ProtectedRoute = () => {
  const { isAuthenticated, isInitializing } = useAuth();

  // Đang check token thì hiện loading, tránh việc bị đá về login nhầm
  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
      </div>
    );
  }

  // Nếu không có quyền, đá về login. Dùng Outlet để render các component con
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};