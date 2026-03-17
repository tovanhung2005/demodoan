import { Card, CardContent } from "../../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export default function ProfileFriends({ friends }) {
  return (
    <Card>
      <CardContent className="p-6">

        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-xl">
            Bạn bè ({friends.length})
          </h3>

          <Input
            placeholder="Tìm bạn bè..."
            className="max-w-xs"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">

          {friends.map((friend) => (
            <Card
              key={friend.id}
              className="hover:shadow-lg transition cursor-pointer"
            >
              <CardContent className="p-4">

                <div className="flex items-center space-x-3 mb-3">

                  <Avatar className="w-12 h-12">
                    <AvatarImage src={friend.avatar} />
                    <AvatarFallback>
                      {friend.name[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h4 className="font-semibold">{friend.name}</h4>
                    <p className="text-sm text-gray-500">
                      {friend.username}
                    </p>
                  </div>

                </div>

                <p className="text-xs text-gray-500 mb-3">
                  {friend.mutualFriends} bạn chung
                </p>

                <Button variant="outline" size="sm" className="w-full">
                  Xem trang cá nhân
                </Button>

              </CardContent>
            </Card>
          ))}

        </div>

      </CardContent>
    </Card>
  );
}