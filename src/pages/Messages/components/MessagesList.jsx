import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function MessagesList({ messages, conversation, messageSearchQuery }) {
  const scrollRef = useRef(null);

  // Lọc tin nhắn nếu có tìm kiếm
  const filteredMessages = messageSearchQuery
    ? messages.filter((m) =>
        m.text.toLowerCase().includes(messageSearchQuery.toLowerCase())
      )
    : messages;

  // Tính năng tự động cuộn xuống dưới cùng khi có tin nhắn mới
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50" ref={scrollRef}>
      <div className="max-w-4xl mx-auto flex flex-col justify-end min-h-full">
        {/* Lời chào đầu cuộc trò chuyện */}
        <div className="text-center my-6">
          <img 
            src={conversation.user.avatar} 
            alt="avatar" 
            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover shadow-sm"
          />
          <h3 className="font-bold text-lg">{conversation.user.name}</h3>
          <p className="text-sm text-gray-500">Các bạn đã kết nối trên Nexus</p>
        </div>

        {/* Danh sách tin nhắn */}
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message) => (
            <MessageBubble 
              key={message.id} 
              message={message} 
              conversation={conversation} 
            />
          ))
        ) : (
          <div className="text-center text-gray-500 text-sm mt-4">
            {messageSearchQuery ? "Không tìm thấy tin nhắn phù hợp" : "Hãy gửi lời chào!"}
          </div>
        )}
      </div>
    </div>
  );
}