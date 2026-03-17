import { Search } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { ScrollArea } from "../../../components/ui/scroll-area";
import ConversationItem from "./ConversationItem";

export default function ConversationsList({
  conversations,
  selectedChat,
  setSelectedChat,
  searchQuery,
  setSearchQuery,
  showMobileChat,
  setShowMobileChat,
}) {
  const filtered = conversations.filter((conv) =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`${
        showMobileChat ? "hidden md:flex" : "flex"
      } w-full md:w-80 lg:w-96 bg-white border-r flex-col shrink-0`}
    >
      <div className="p-4 border-b shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-gray-100 border-0"
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        {filtered.length > 0 ? (
          filtered.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              active={selectedChat === conversation.id}
              onClick={() => {
                setSelectedChat(conversation.id);
                setShowMobileChat(true);
              }}
            />
          ))
        ) : (
          <div className="p-4 text-center text-gray-500 text-sm">
            Không tìm thấy cuộc trò chuyện nào
          </div>
        )}
      </ScrollArea>
    </div>
  );
}