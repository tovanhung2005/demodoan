export const mockConversations = [
  {
    id: 1,
    user: {
      name: "Mai Anh",
      username: "@maianh",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    lastMessage: "Chào bạn! Hẹn gặp lại nhé 😊",
    timestamp: "2 phút",
    unread: 3,
    isOnline: true,
  },
  {
    id: 2,
    user: {
      name: "Tuấn Kiệt",
      username: "@tuankiet",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    lastMessage: "Oke bạn, mình đã nhận được rồi",
    timestamp: "15 phút",
    unread: 0,
    isOnline: true,
  },
];

export const mockMessages = [
  { id: 1, text: "Chào bạn! Bạn có khỏe không?", sender: "other", timestamp: "10:30" },
  { id: 2, text: "Mình khỏe, còn bạn?", sender: "me", timestamp: "10:31" },
  { id: 3, text: "Cuối tuần đi cafe không?", sender: "other", timestamp: "10:32" },
];