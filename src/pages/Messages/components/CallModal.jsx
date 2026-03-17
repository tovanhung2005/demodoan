import { Phone, Video, MicOff, PhoneOff } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";

export default function CallModal({ activeCall, conversation, onClose }) {
  if (!activeCall) return null;

  const isVideo = activeCall === "video";

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center text-white animate-in fade-in zoom-in duration-200">
      {/* Thông tin người đang gọi */}
      <div className="text-center mb-8">
        <Avatar className={`mx-auto mb-4 ${isVideo ? "w-24 h-24" : "w-32 h-32"} border-4 border-gray-700`}>
          <AvatarImage src={conversation.user.avatar} className="object-cover" />
          <AvatarFallback className="text-gray-900 text-3xl">{conversation.user.name[0]}</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold">{conversation.user.name}</h2>
        <p className="text-gray-400 mt-1 flex items-center justify-center">
          {isVideo ? <Video className="w-4 h-4 mr-2" /> : <Phone className="w-4 h-4 mr-2" />}
          Đang đổ chuông...
        </p>
      </div>

      {/* Camera preview (Giả lập nếu là video call) */}
      {isVideo && (
        <div className="w-64 h-80 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center mb-8 relative overflow-hidden shadow-2xl">
          <span className="text-gray-500">Camera của bạn</span>
        </div>
      )}

      {/* Các nút điều khiển */}
      <div className="flex items-center space-x-6">
        <Button variant="outline" size="icon" className="w-14 h-14 rounded-full border-gray-600 bg-gray-800 hover:bg-gray-700 text-white">
          <MicOff className="w-6 h-6" />
        </Button>
        
        <Button 
          variant="destructive" 
          size="icon" 
          className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20"
          onClick={onClose}
        >
          <PhoneOff className="w-7 h-7" />
        </Button>

        {isVideo && (
          <Button variant="outline" size="icon" className="w-14 h-14 rounded-full border-gray-600 bg-gray-800 hover:bg-gray-700 text-white">
            <Video className="w-6 h-6" />
          </Button>
        )}
      </div>
    </div>
  );
}