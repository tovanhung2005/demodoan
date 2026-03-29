import { Home, Bell, Compass, MessageCircle, LogOut } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"; 
export default function Header() {
  const { user, logoutContext } = useAuth();
  const fallbackChar = user?.firstName?.charAt(0)?.toUpperCase() || "U";
  const fullName = user ? `${user.firstName} ${user.lastName}` : "User";

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              NEXUS
            </span>
          </div>

          <div className="hidden md:block w-96">
            <Input placeholder="Tìm kiếm..." />
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/home"><Button variant="ghost" size="icon"><Home /></Button></Link>
            <Button variant="ghost" size="icon"><Compass /></Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="relative">
                <MessageCircle /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </Link>

            <div className="flex items-center space-x-2 ml-4 pl-4 border-l">
              <Link to="/profile" title={fullName}>
                <Avatar className="w-8 h-8 cursor-pointer hover:opacity-80 transition">
                  <AvatarImage src="" /> 
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">{fallbackChar}</AvatarFallback>
                </Avatar>
              </Link>
              <Button variant="ghost" size="icon" onClick={logoutContext} title="Đăng xuất">
                <LogOut className="w-5 h-5 text-gray-500 hover:text-red-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}