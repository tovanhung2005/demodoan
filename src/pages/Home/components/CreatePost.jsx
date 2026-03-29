// File: src/pages/Home/components/CreatePost.jsx
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/popover";
import { Image as ImageIcon, Video, Smile, X, SmilePlus } from "lucide-react";
import { useAuth } from "../../../contexts/AuthContext";

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
  const { user } = useAuth();
  const fallbackChar = user?.firstName?.charAt(0)?.toUpperCase() || "U";
  const dynamicPlaceholder = user?.lastName 
    ? `${user.lastName} ơi, bạn đang nghĩ gì?` 
    : "Bạn đang nghĩ gì?";

  return (
    <Card className="mb-6 shadow-sm border-none sm:border">
      <CardContent className="p-3 sm:p-5">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <Avatar className="w-9 h-9 sm:w-11 sm:h-11 ring-1 ring-gray-100 shrink-0">
            <AvatarImage src="" />
            <AvatarFallback className="bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 font-bold text-sm sm:text-base">
              {fallbackChar}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <Input
              placeholder={dynamicPlaceholder}
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="mb-3 text-sm sm:text-base focus-visible:ring-blue-400 border-gray-100 bg-gray-50/50 h-10 sm:h-12"
            />

            {/* Preview Area (Ảnh/Video) */}
            {(selectedImage || selectedVideo) && (
              <div className="relative mb-3 border border-gray-100 rounded-xl overflow-hidden bg-gray-50 max-h-60 sm:max-h-96">
                {selectedImage && <img src={selectedImage} alt="Preview" className="w-full h-full object-contain mx-auto" />}
                {selectedVideo && <video src={selectedVideo} controls className="w-full h-full object-contain mx-auto" />}
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full w-7 h-7 sm:w-9 sm:h-9 shadow-md"
                  onClick={selectedImage ? handleRemoveImage : handleRemoveVideo}
                >
                  <X size={16} />
                </Button>
              </div>
            )}

            <input type="file" id="imageInput" accept="image/*" className="hidden" onChange={handleImageSelect} />
            <input type="file" id="videoInput" accept="video/*" className="hidden" onChange={handleVideoSelect} />

            {/* Action Bar - ĐÃ FIX RESPONSIVE TẠI ĐÂY */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-around sm:justify-start sm:space-x-1">
                {/* Nút Ảnh */}
                <label htmlFor="imageInput" className="flex-1 sm:flex-none">
                  <Button variant="ghost" size="sm" className="w-full text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg sm:rounded-full h-9 px-2 sm:px-4">
                    <ImageIcon className="w-5 h-5 sm:mr-2 text-green-500" />
                    <span className="hidden sm:inline text-sm">Ảnh</span>
                  </Button>
                </label>

                {/* Nút Video */}
                <label htmlFor="videoInput" className="flex-1 sm:flex-none">
                  <Button variant="ghost" size="sm" className="w-full text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg sm:rounded-full h-9 px-2 sm:px-4">
                    <Video className="w-5 h-5 sm:mr-2 text-purple-500" />
                    <span className="hidden sm:inline text-sm">Video</span>
                  </Button>
                </label>

                {/* Nút Cảm xúc */}
                <div className="flex-1 sm:flex-none">
                  <Popover open={showEmotionPicker} onOpenChange={setShowEmotionPicker}>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg sm:rounded-full h-9 px-2 sm:px-4">
                        <Smile className="w-5 h-5 sm:mr-2 text-amber-500" />
                        <span className="hidden sm:inline text-sm">Cảm xúc</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[90vw] sm:w-72 p-3 shadow-xl rounded-xl" side="top" align="center">
                      <div className="grid grid-cols-6 gap-2">
                        {["😀", "😂", "🥰", "😎", "🤔", "🥳", "😢", "😡", "😱", "👍", "❤️", "🎉"].map((emoji) => (
                          <button key={emoji} type="button" onClick={() => handleEmotionSelect(emoji)} className="text-2xl hover:bg-gray-100 p-1.5 rounded-lg">
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Nút Đăng bài */}
              <Button
                onClick={handlePost}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:rounded-full h-9 sm:h-10 px-8 shadow-sm font-semibold text-sm sm:text-base"
                disabled={!postText.trim() && !selectedImage && !selectedVideo}
              >
                Đăng bài
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}