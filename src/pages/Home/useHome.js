import { useState } from "react";
import mockPosts from "../../data/mockPosts";
import mockStories from "../../data/mockStories";
import { useAuth } from "../../contexts/AuthContext"; // Dùng context trong Hook luôn

export function useHome() {
  const { user } = useAuth(); // Gọi info user hiện tại
  
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState(mockPosts);
  const stories = mockStories;

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [showEmotionPicker, setShowEmotionPicker] = useState(false);

  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Load more posts (Giữ nguyên)
  const loadMorePosts = () => { /* ... Giữ nguyên code cũ của bạn ... */ };
  const handleLike = (postId) => { /* ... Giữ nguyên code cũ của bạn ... */ };
  const handleBookmark = (postId) => { /* ... Giữ nguyên code cũ của bạn ... */ };
  const handleImageSelect = (e) => { /* ... Giữ nguyên code cũ của bạn ... */ };
  const handleVideoSelect = (e) => { /* ... Giữ nguyên code cũ của bạn ... */ };
  const handleRemoveImage = () => setSelectedImage(null);
  const handleRemoveVideo = () => setSelectedVideo(null);
  const handleEmotionSelect = (emoji) => {
    setSelectedEmotion(emoji);
    setShowEmotionPicker(false);
  };

  // Sửa lại hàm Đăng bài để lấy tên thật
  const handlePost = () => {
    if (!postText && !selectedImage && !selectedVideo && !selectedEmotion) return;

    const fullName = user ? `${user.firstName} ${user.lastName}` : "Khách";
    const displayUsername = user?.username ? `@${user.username.split('@')[0]}` : "@guest";

    const newPost = {
      id: Date.now(),
      user: {
        name: fullName,
        avatar: "", // Hiện tại xài fallback của PostCard
        username: displayUsername,
      },
      content: `${postText} ${selectedEmotion}`,
      image: selectedImage || selectedVideo || null,
      timestamp: "Vừa xong",
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isBookmarked: false,
    };

    setPosts((prev) => [newPost, ...prev]);

    setPostText("");
    setSelectedImage(null);
    setSelectedVideo(null);
    setSelectedEmotion("");
  };

  return {
    posts, stories, postText, setPostText, selectedImage, selectedVideo,
    selectedEmotion, showEmotionPicker, setShowEmotionPicker, handlePost,
    handleLike, handleBookmark, handleImageSelect, handleVideoSelect,
    handleRemoveImage, handleRemoveVideo, handleEmotionSelect, loadMorePosts,
    isFetching, hasMore,
  };
}