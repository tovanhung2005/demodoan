import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { Toaster } from "react-hot-toast";
import { navigation } from "./utils/navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import { Loader2 } from "lucide-react";

import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import HomePage from "./pages/Home/HomePage";
import MessagesPage from "./pages/Messages/MessagesPage";
import ProfilePage from "./pages/Profile/ProfilePage";

// Component phụ trợ để đăng ký navigate cho global object
const NavigationSetter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigation.setNavigate(navigate);
  }, [navigate]);
  return null;
};

// Màn hình loading toàn cục
const GlobalLoading = () => {
  const { isLoadingGlobal } = useAuth();
  if (!isLoadingGlobal) return null;
  return (
    <div className="fixed inset-0 z-[9999] bg-white/60 backdrop-blur-sm flex items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <NavigationSetter />
        <AuthProvider>
          <GlobalLoading />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          <Toaster position="top-right" />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;