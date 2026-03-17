import { Home, Bell, User, Users } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

export default function MessagesHeader() {
  return (
    <header className="bg-white border-b px-4 py-3 shrink-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/home">
            <Button variant="ghost" className="w-10 h-10 p-0 rounded-full hover:bg-gray-100">
              <Home size={36} className="text-gray-700" />
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-3xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tin nhắn
            </span>
          </div>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
}