export const mockProfile = {
  name: "Nguyễn Văn An",
  username: "@vanan",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
  coverPhoto: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2000&auto=format&fit=crop",
  bio: "Software Engineer tại Hà Nội 💻 | Yêu thích React & Spring Boot",
  location: "Hà Nội, Việt Nam",
  work: "Software Engineer",
  website: "www.vanan.dev",
  joinedDate: "Tháng 3 năm 2024",
  stats: {
    posts: 342,
    friends: 1234,
    followers: 5678,
  },
};

export const mockProfilePosts = [
  {
    id: 1,
    user: mockProfile,
    content: "Hôm nay vừa hoàn thành xong module Profile cho mạng xã hội Nexus! Cảm giác code mượt mà thật sự 🚀",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    timestamp: "2 giờ trước",
    likes: 128,
    comments: 24,
    shares: 5,
    isLiked: true,
  },
  {
    id: 2,
    user: mockProfile,
    content: "Đang tìm hiểu sâu hơn về kiến trúc Microservices với Spring Boot. Có ai có tài liệu hay cho mình xin với nhé!",
    timestamp: "1 ngày trước",
    likes: 56,
    comments: 12,
    shares: 2,
    isLiked: false,
  },
];

export const mockFriends = [
  {
    id: 1,
    name: "Mai Anh",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mai",
    username: "@maianh",
    mutualFriends: 15,
  },
  {
    id: 2,
    name: "Tuấn Kiệt",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
    username: "@tuankiet",
    mutualFriends: 8,
  },
  {
    id: 3,
    name: "Hoàng Đức",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Duc",
    username: "@hoangduc",
    mutualFriends: 32,
  },
  {
    id: 4,
    name: "Linh Chi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linh",
    username: "@linhchi",
    mutualFriends: 3,
  },
];

export const mockPhotos = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop",
];