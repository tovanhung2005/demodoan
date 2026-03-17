const mockPosts = [
  {
    id: 1,
    user: {
      name: "Nguyễn Mai Anh",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mai",
      username: "@maianh",
    },
    content: "Buổi sáng tuyệt vời tại Đà Lạt!",
    image:
      "https://images.unsplash.com/photo-1656741349015-3404ed142271",
    timestamp: "2 giờ trước",
    likes: 324,
    comments: 45,
    shares: 12,
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 2,
    user: {
      name: "Trần Tuấn Kiệt",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
      username: "@tuankiet",
    },
    content: "Món mới tại quán mình!",
    image:
      "https://images.unsplash.com/photo-1762898842219-ca8136061b76",
    timestamp: "5 giờ trước",
    likes: 567,
    comments: 89,
    shares: 34,
    isLiked: true,
    isBookmarked: false,
  },
];

export default mockPosts;