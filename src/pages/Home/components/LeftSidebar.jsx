import { Card, CardContent } from "../../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { TrendingUp } from "lucide-react";
import { useAuth } from "../../../contexts/AuthContext";

export default function LeftSidebar() {
  const { user } = useAuth(); // Gọi user từ Context

  const fallbackChar = user?.firstName?.charAt(0)?.toUpperCase() || "U";
  const fullName = user ? `${user.firstName} ${user.lastName}` : "Đang tải...";
  // Lấy text trước @ của email làm username phụ (Ví dụ: tovan@gmail.com -> @tovan)
  const displayUsername = user?.username ? `@${user.username.split('@')[0]}` : "@user";

  return (
    <aside className="hidden lg:block lg:col-span-3">
      {/* Profile Card */}
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-6">
            <Avatar className="w-14 h-14">
              <AvatarImage src="" />
              <AvatarFallback className="bg-blue-100 text-blue-600 text-xl font-bold">{fallbackChar}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold line-clamp-1" title={fullName}>{fullName}</h3>
              <p className="text-sm text-gray-500 truncate">{displayUsername}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Bạn bè</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Người theo dõi</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Bài viết</span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trending Card (Giữ nguyên giao diện của bạn) */}
      <Card className="mt-4 shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
            Xu hướng
          </h3>
          <div className="space-y-3">
            <div className="hover:bg-gray-50 p-2 rounded cursor-pointer transition">
              <p className="text-sm font-semibold">#DuLịchViệtNam</p>
              <p className="text-xs text-gray-500">12.5K bài viết</p>
            </div>
            {/* ... Các trend khác ... */}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}