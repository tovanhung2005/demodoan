import { useState } from "react";
import mockPosts from "../../data/mockPosts";
import mockStories from "../../data/mockStories";

export function useHome() {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState(mockPosts);

  const stories = mockStories;

  // Media + emotion state
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [showEmotionPicker, setShowEmotionPicker] = useState(false);

  // Thêm 2 state cho Infinite Scroll
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Load more posts
  const loadMorePosts = () => {
    if (isFetching || !hasMore) return;

    setIsFetching(true); 

    setTimeout(() => {
      const morePosts = mockPosts.map((post) => ({
        ...post,
        id: Date.now() + Math.random(),
      }));

      setPosts((prev) => {
        const newPosts = [...prev, ...morePosts];
        if (newPosts.length >= 20) {
          setHasMore(false);
        }
        
        return newPosts;
      });

      setIsFetching(false); 
    }, 1500);
  };

  // Like
  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  // Bookmark
  const handleBookmark = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      )
    );
  };

  // Chọn ảnh
  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setSelectedImage(reader.result);
    reader.readAsDataURL(file);
  };

  // Chọn video
  const handleVideoSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setSelectedVideo(reader.result);
    reader.readAsDataURL(file);
  };

  // Xóa media
  const handleRemoveImage = () => setSelectedImage(null);
  const handleRemoveVideo = () => setSelectedVideo(null);

  // Chọn cảm xúc
  const handleEmotionSelect = (emoji) => {
    setSelectedEmotion(emoji);
    setShowEmotionPicker(false);
  };

  // Đăng bài
  const handlePost = () => {
    if (!postText && !selectedImage && !selectedVideo && !selectedEmotion) return;

    const newPost = {
      id: Date.now(),
      user: {
        name: "Nguyễn Văn An",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
        username: "@vanan",
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
    posts,
    stories,
    postText,
    setPostText,
    selectedImage,
    selectedVideo,
    selectedEmotion,
    showEmotionPicker,
    setShowEmotionPicker,
    handlePost,
    handleLike,
    handleBookmark,
    handleImageSelect,
    handleVideoSelect,
    handleRemoveImage,
    handleRemoveVideo,
    handleEmotionSelect,
    loadMorePosts,
    
    // Trả về state để dùng ở HomePage
    isFetching,
    hasMore,
  };
}