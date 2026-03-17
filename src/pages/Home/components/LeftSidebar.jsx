import { Card, CardContent } from "../../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { TrendingUp } from "lucide-react";

export default function LeftSidebar() {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      {/* Profile Card */}
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-6">
            <Avatar className="w-14 h-14">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
              <AvatarFallback>NVA</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Nguyễn Văn An</h3>
              <p className="text-sm text-gray-500">@vanan</p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Bạn bè</span>
              <span className="font-semibold">1,234</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Người theo dõi</span>
              <span className="font-semibold">5,678</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Bài viết</span>
              <span className="font-semibold">342</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trending Card */}
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
            <div className="hover:bg-gray-50 p-2 rounded cursor-pointer transition">
              <p className="text-sm font-semibold">#ẨmThựcSàiGòn</p>
              <p className="text-xs text-gray-500">8.3K bài viết</p>
            </div>
            <div className="hover:bg-gray-50 p-2 rounded cursor-pointer transition">
              <p className="text-sm font-semibold">#CôngNghệ2026</p>
              <p className="text-xs text-gray-500">6.7K bài viết</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}