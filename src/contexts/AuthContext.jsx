import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { userService } from "../services/userService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(false); 
  
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      const token = authService.getToken();
      if (token) {
        try {
          const userInfo = await userService.getMyInfo();
          setUser(userInfo);
          setIsAuthenticated(true);
        } catch (error) {
          authService.removeToken();
        }
      }
      setIsInitializing(false);
    };
    initializeAuth();
  }, []);

  const loginContext = async (token) => {
    setIsLoadingGlobal(true);
    try {
      authService.setToken(token);
      const userInfo = await userService.getMyInfo();
      setUser(userInfo);
      setIsAuthenticated(true);
      navigate("/home");
    } catch (error) {
      console.error("Login Context Error:", error);
      authService.removeToken();
    } finally {
      setIsLoadingGlobal(false);
    }
  };

  const logoutContext = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isInitializing, 
      isLoadingGlobal, 
      setIsLoadingGlobal,
      loginContext, 
      logoutContext 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);