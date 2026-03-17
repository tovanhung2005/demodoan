import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";

export default function ConversationItem({ conversation, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer hover:bg-gray-50 transition ${
        active ? "bg-blue-50" : ""
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Avatar className="w-12 h-12">
            <AvatarImage src={conversation.user.avatar} className="object-cover" />
            <AvatarFallback>{conversation.user.name[0]}</AvatarFallback>
          </Avatar>
          {conversation.isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline">
            <h4 className="font-semibold text-sm truncate pr-2">
              {conversation.user.name}
            </h4>
            <span className="text-xs text-gray-500 shrink-0">
              {conversation.timestamp}
            </span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <p className={`text-sm truncate ${conversation.unread > 0 ? "font-semibold text-black" : "text-gray-500"}`}>
              {conversation.lastMessage}
            </p>
            {conversation.unread > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shrink-0 ml-2">
                {conversation.unread}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}