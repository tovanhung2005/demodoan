import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { FileText } from "lucide-react";

export default function MessageBubble({ message, conversation }) {
  const isMe = message.sender === "me";

  return (
    <div className={`flex items-end mb-4 ${isMe ? "justify-end" : "justify-start"}`}>
      {!isMe && (
        <Avatar className="w-8 h-8 mr-2 shrink-0 mb-1">
          <AvatarImage src={conversation.user.avatar} className="object-cover" />
          <AvatarFallback>{conversation.user.name[0]}</AvatarFallback>
        </Avatar>
      )}

      <div className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
        <div
          className={`p-1 max-w-[80%] md:max-w-md ${
            isMe
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl rounded-br-sm"
              : "bg-white border text-gray-800 rounded-2xl rounded-bl-sm shadow-sm"
          }`}
        >
          {/* Render File nếu có */}
          {message.file && (
            <div className={`flex items-center space-x-2 m-2 p-2 rounded-lg ${isMe ? 'bg-white/20' : 'bg-gray-100'}`}>
              <FileText className="w-6 h-6 shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{message.file.name}</p>
                <p className={`text-xs ${isMe ? 'text-blue-100' : 'text-gray-500'}`}>{message.file.size}</p>
              </div>
            </div>
          )}

          {/* Render Ảnh nếu có */}
          {message.image && (
            <img 
              src={message.image} 
              alt="attachment" 
              className={`max-w-full rounded-xl object-cover m-1 ${message.text ? 'mb-2' : ''}`} 
              style={{ maxHeight: '250px' }}
            />
          )}

          {/* Render Text nếu có */}
          {message.text && (
            <p className="text-sm md:text-base whitespace-pre-wrap px-3 py-1 pb-2">
              {message.text}
            </p>
          )}
        </div>
        <span className="text-[10px] text-gray-400 mt-1 mx-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}