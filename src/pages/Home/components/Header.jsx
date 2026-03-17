import { Home, Bell, Compass, MessageCircle } from "lucide-react";
import { Avatar, AvatarImage } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              NEXUS
            </span>
          </div>

          {/* Search */}
          <div className="hidden md:block w-96">
            <Input placeholder="Tìm kiếm..." />
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Home />
            </Button>

            <Button variant="ghost" size="icon">
              <Compass />
            </Button>

            {/* Notification */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            {/* Messages */}
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="relative">
                <MessageCircle />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </Link>

            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}