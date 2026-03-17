import { motion } from "framer-motion";
import { Heart, MessageSquare, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";

export default function PostCard({ post, handleLike, handleBookmark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow-sm hover:shadow-lg transition">
        <CardContent className="p-4">
          {/* Post Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={post.user.avatar} />
                <AvatarFallback>{post.user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.user.name}</p>
                <p className="text-xs text-gray-500">
                  {post.user.username} • {post.timestamp}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>

          {/* Post Content */}
          <p className="mb-4 text-gray-700 whitespace-pre-wrap">
            {post.content}
          </p>

          {/* Post Image */}
          {post.image && (
            <img
              src={post.image}
              alt="post media"
              className="rounded-xl mb-4 w-full object-cover"
            />
          )}

          {/* Post Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3 pb-3 border-b">
            <span>{post.likes} lượt thích</span>
            <div className="flex space-x-4">
              <span>{post.comments} bình luận</span>
              <span>{post.shares} chia sẻ</span>
            </div>
          </div>

          {/* Post Actions */}
          <div className="flex items-center justify-around">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleLike(post.id)}
              className={post.isLiked ? "text-red-500 hover:text-red-600" : ""}
            >
              <Heart
                className={`w-5 h-5 mr-1 ${post.isLiked ? "fill-current" : ""}`}
              />
              Thích
            </Button>

            <Button variant="ghost" size="sm">
              <MessageSquare className="w-5 h-5 mr-1" />
              Bình luận
            </Button>

            <Button variant="ghost" size="sm">
              <Share2 className="w-5 h-5 mr-1" />
              Chia sẻ
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleBookmark(post.id)}
              className={post.isBookmarked ? "text-blue-500 hover:text-blue-600" : ""}
            >
              <Bookmark
                className={`w-5 h-5 ${post.isBookmarked ? "fill-current" : ""}`}
              />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}