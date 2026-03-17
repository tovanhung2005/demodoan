import { ArrowLeft, Search, Phone, Video, Info, X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export default function ChatHeader({
  conversation,
  showMessageSearch,
  setShowMessageSearch,
  messageSearchQuery,
  setMessageSearchQuery,
  setShowMobileChat,
  setActiveCall // Thêm prop này
}) {
  return (
    <div className="bg-white border-b px-4 py-3 shrink-0 z-10 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setShowMobileChat(false)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="relative">
            <Avatar className="w-10 h-10">
              <AvatarImage src={conversation.user.avatar} className="object-cover" />
              <AvatarFallback>{conversation.user.name[0]}</AvatarFallback>
            </Avatar>
            {conversation.isOnline && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base">{conversation.user.name}</h3>
            <p className="text-xs text-gray-500">{conversation.isOnline ? "Đang hoạt động" : "Không hoạt động"}</p>
          </div>
        </div>

        {/* Nút Gọi hoạt động */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setShowMessageSearch(!showMessageSearch)} className={showMessageSearch ? "bg-gray-100" : ""}>
            <Search className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex hover:bg-blue-50" onClick={() => setActiveCall("audio")}>
            <Phone className="w-5 h-5 text-blue-500" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hover:bg-blue-50" onClick={() => setActiveCall("video")}>
            <Video className="w-6 h-6 text-blue-500" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Info className="w-5 h-5 text-blue-500" />
          </Button>
        </div>
      </div>

      {showMessageSearch && (
        <div className="mt-3 relative animate-in fade-in slide-in-from-top-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Tìm kiếm trong cuộc trò chuyện..." value={messageSearchQuery} onChange={(e) => setMessageSearchQuery(e.target.value)} className="pl-9 pr-9 bg-gray-100 border-0" autoFocus />
          {messageSearchQuery && (
            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2" onClick={() => setMessageSearchQuery("")}>
              <X className="w-4 h-4 text-gray-500" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}