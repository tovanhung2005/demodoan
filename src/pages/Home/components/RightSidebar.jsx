import { Card, CardContent } from "../../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";

export default function RightSidebar() {
  const suggestedUsers = [
    {
      name: "Phạm Minh Hằng",
      username: "@minhhang",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hang",
      mutualFriends: 12,
    },
    {
      name: "Đỗ Quốc Anh",
      username: "@quocanh",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Quoc",
      mutualFriends: 8,
    },
    {
      name: "Vũ Thị Lan",
      username: "@thilan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lan",
      mutualFriends: 15,
    },
  ];

  return (
    <aside className="hidden lg:block lg:col-span-3">
      {/* Friend Suggestions */}
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4">Gợi ý kết bạn</h3>
          <div className="space-y-4">
            {suggestedUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-500">
                      {user.mutualFriends} bạn chung
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="h-8">
                  Kết bạn
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="mt-4 shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4">Sự kiện sắp tới</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 hover:bg-blue-100 transition cursor-pointer rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-600">
                  15 THÁNG 3
                </span>
              </div>
              <p className="text-sm font-semibold mb-1">Meetup Developers HN</p>
              <p className="text-xs text-gray-600">200 người quan tâm</p>
            </div>

            <div className="p-3 bg-purple-50 hover:bg-purple-100 transition cursor-pointer rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-purple-600">
                  20 THÁNG 3
                </span>
              </div>
              <p className="text-sm font-semibold mb-1">Workshop Design 2026</p>
              <p className="text-xs text-gray-600">150 người quan tâm</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}