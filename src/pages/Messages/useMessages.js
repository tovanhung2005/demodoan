import { useState } from "react";
import { mockConversations, mockMessages } from "../../data/mockData";

export function useMessages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [messageSearchQuery, setMessageSearchQuery] = useState("");
  
  const [showMessageSearch, setShowMessageSearch] = useState(false);
  const [showMobileChat, setShowMobileChat] = useState(false);

  // States mới cho File/Ảnh và Cuộc gọi
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeCall, setActiveCall] = useState(null); // null | 'audio' | 'video'

  const [conversations] = useState(mockConversations);
  const [messages, setMessages] = useState(mockMessages);

  // Xử lý chọn ảnh
  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setSelectedImage(reader.result);
    reader.readAsDataURL(file);
    e.target.value = ""; // Reset input
  };

  // Xử lý chọn file đính kèm
  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile({ name: file.name, size: (file.size / 1024).toFixed(1) + " KB" });
    e.target.value = ""; // Reset input
  };

  // Gửi tin nhắn (Cập nhật để gửi cả text, ảnh, file)
  const sendMessage = () => {
    if (!messageText.trim() && !selectedImage && !selectedFile) return;

    const newMessage = {
      id: Date.now(),
      text: messageText,
      sender: "me",
      timestamp: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isRead: false,
      image: selectedImage,
      file: selectedFile,
    };

    setMessages([...messages, newMessage]);
    setMessageText("");
    setSelectedImage(null);
    setSelectedFile(null);
  };

  return {
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
    // Trả về các hàm và state mới
    selectedImage,
    setSelectedImage,
    selectedFile,
    setSelectedFile,
    handleImageSelect,
    handleFileSelect,
    activeCall,
    setActiveCall,
  };
}