import { useMessages } from "./useMessages";
import MessagesHeader from "./components/MessagesHeader";
import ConversationsList from "./components/ConversationsList";
import ChatHeader from "./components/ChatHeader";
import MessagesList from "./components/MessagesList";
import MessageInput from "./components/MessageInput";
import CallModal from "./components/CallModal"; // Import mới

export default function MessagesPage() {
  const {
    conversations,
    messages,
    selectedChat,
    setSelectedChat,
    messageText,
    setMessageText,
    searchQuery,
    setSearchQuery,
    messageSearchQuery,
    setMessageSearchQuery,
    showMessageSearch,
    setShowMessageSearch,
    showMobileChat,
    setShowMobileChat,
    sendMessage,
    // Trích xuất các state mới
    selectedImage,
    setSelectedImage,
    selectedFile,
    setSelectedFile,
    handleImageSelect,
    handleFileSelect,
    activeCall,
    setActiveCall
  } = useMessages();

  const selectedConversation = conversations.find((c) => c.id === selectedChat);

  return (
    <div className="h-screen flex flex-col bg-white relative">
      <MessagesHeader />

      <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full border-x">
        <ConversationsList
          conversations={conversations}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          showMobileChat={showMobileChat}
          setShowMobileChat={setShowMobileChat}
        />

        <div className={`${showMobileChat ? "flex" : "hidden md:flex"} flex-1 flex-col bg-[#f0f2f5] relative w-full`}>
          {selectedConversation ? (
            <>
              <ChatHeader
                conversation={selectedConversation}
                showMessageSearch={showMessageSearch}
                setShowMessageSearch={setShowMessageSearch}
                messageSearchQuery={messageSearchQuery}
                setMessageSearchQuery={setMessageSearchQuery}
                setShowMobileChat={setShowMobileChat}
                setActiveCall={setActiveCall} // Truyền setActiveCall
              />
              <MessagesList
                messages={messages}
                conversation={selectedConversation}
                messageSearchQuery={messageSearchQuery}
              />
              <MessageInput
                messageText={messageText}
                setMessageText={setMessageText}
                sendMessage={sendMessage}
                // Truyền props cho file/ảnh
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                handleImageSelect={handleImageSelect}
                handleFileSelect={handleFileSelect}
              />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Chọn cuộc trò chuyện
            </div>
          )}
        </div>
      </div>

      {/* Cửa sổ hiển thị khi có cuộc gọi */}
      <CallModal 
        activeCall={activeCall} 
        conversation={selectedConversation} 
        onClose={() => setActiveCall(null)} 
      />
    </div>
  );
}