import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Image as ImageIcon, Video, Smile, X } from "lucide-react";

export default function CreatePost({
  postText,
  setPostText,
  handlePost,
  selectedImage,
  selectedVideo,
  showEmotionPicker,
  setShowEmotionPicker,
  handleImageSelect,
  handleVideoSelect,
  handleRemoveImage,
  handleRemoveVideo,
  handleEmotionSelect
}) {
  return (
    <Card className="mb-6 shadow-sm hover:shadow-md transition">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          {/* Avatar */}
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            {/* Text input */}
            <Input
              placeholder="Bạn đang nghĩ gì?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="mb-3"
            />

            {/* Image Preview */}
            {selectedImage && (
              <div className="relative mb-3">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="rounded-lg w-full object-cover"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                  onClick={handleRemoveImage}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Video Preview */}
            {selectedVideo && (
              <div className="relative mb-3">
                <video
                  src={selectedVideo}
                  controls
                  className="rounded-lg w-full"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                  onClick={handleRemoveVideo}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Emotion Picker */}
            {showEmotionPicker && (
              <div className="mb-3 flex flex-wrap gap-2">
                {["😊", "❤️", "😂", "🔥", "🎉", "😎", "👍", "😢"].map((emoji) => (
                  <Button
                    key={emoji}
                    variant="ghost"
                    className="text-xl px-2 py-1 h-auto"
                    onClick={() => handleEmotionSelect(emoji)}
                  >
                    {emoji}
                  </Button>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {/* Image upload */}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  id="imageUpload"
                  onChange={handleImageSelect}
                />
                <label htmlFor="imageUpload">
                  <Button variant="ghost" size="sm" asChild>
                    <span className="cursor-pointer">
                      <ImageIcon className="w-5 h-5 text-green-500 mr-1" />
                      Ảnh
                    </span>
                  </Button>
                </label>

                {/* Video upload */}
                <input
                  type="file"
                  accept="video/*"
                  hidden
                  id="videoUpload"
                  onChange={handleVideoSelect}
                />
                <label htmlFor="videoUpload">
                  <Button variant="ghost" size="sm" asChild>
                    <span className="cursor-pointer">
                      <Video className="w-5 h-5 text-red-500 mr-1" />
                      Video
                    </span>
                  </Button>
                </label>

                {/* Emotion */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowEmotionPicker(!showEmotionPicker)}
                >
                  <Smile className="w-5 h-5 text-yellow-500 mr-1" />
                  Cảm xúc
                </Button>
              </div>

              {/* Post button */}
              <Button
                onClick={handlePost}
                disabled={!postText.trim() && !selectedImage && !selectedVideo}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Đăng
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}