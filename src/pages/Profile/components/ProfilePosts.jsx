import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export default function ProfilePosts({ posts, handleLike }) {
  if (posts.length === 0) {
    return <div className="text-center py-10 text-gray-500 bg-white rounded-lg border">Chưa có bài viết nào.</div>;
  }

  return (
    <div className="space-y-4 max-w-2xl">
      {posts.map((post) => (
        <Card key={post.id} className="shadow-sm hover:shadow-md transition">
          <CardContent className="p-4">
            {/* Header bài viết */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                  <p className="text-xs text-gray-500">{post.timestamp}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-5 h-5 text-gray-500" />
              </Button>
            </div>

            {/* Nội dung */}
            <p className="mb-4 text-gray-800 whitespace-pre-wrap">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post media" className="rounded-xl w-full max-h-96 object-cover mb-4 border" />
            )}

            {/* Thống kê */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3 pb-3 border-b">
              <div className="flex items-center text-blue-600">
                <Heart className="w-4 h-4 mr-1 fill-current" /> {post.likes}
              </div>
              <div className="flex space-x-4">
                <span>{post.comments} bình luận</span>
                <span>{post.shares} chia sẻ</span>
              </div>
            </div>

            {/* Nút hành động */}
            <div className="flex items-center justify-around pt-1">
              <Button 
                variant="ghost" 
                className={`flex-1 ${post.isLiked ? "text-red-500 hover:text-red-600 hover:bg-red-50" : "text-gray-600"}`} 
                onClick={() => handleLike(post.id)}
              >
                <Heart className={`w-5 h-5 mr-2 ${post.isLiked ? "fill-current" : ""}`} /> 
                Thích
              </Button>
              <Button variant="ghost" className="flex-1 text-gray-600">
                <MessageSquare className="w-5 h-5 mr-2" /> Bình luận
              </Button>
              <Button variant="ghost" className="flex-1 text-gray-600">
                <Share2 className="w-5 h-5 mr-2" /> Chia sẻ
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}