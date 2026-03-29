import Header from "@/components/layout/Header"; 
import LeftSidebar from "./components/LeftSidebar";
import Stories from "./components/Stories";
import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";
import RightSidebar from "./components/RightSidebar";
import PostSkeleton from "./components/PostSkeleton"; 
import { useHome } from "./useHome";

import useInfiniteScroll from "../../hooks/useInfiniteScroll";

export default function HomePage() {
  const {
    posts,
    stories,
    postText,
    setPostText,
    selectedImage,
    selectedVideo,
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
    
    // Trạng thái từ hook
    isFetching,
    hasMore,
  } = useHome();

  // Kích hoạt cuộn vô hạn
  useInfiniteScroll(loadMorePosts, isFetching, hasMore);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header dùng chung cho toàn app */}
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar trái: Thông tin cá nhân & Xu hướng */}
          <LeftSidebar />

          {/* Cột chính: Newsfeed */}
          <main className="lg:col-span-6">
            <Stories stories={stories} />

            <CreatePost
              postText={postText}
              setPostText={setPostText}
              selectedImage={selectedImage}
              selectedVideo={selectedVideo}
              showEmotionPicker={showEmotionPicker}
              setShowEmotionPicker={setShowEmotionPicker}
              handlePost={handlePost}
              handleImageSelect={handleImageSelect}
              handleVideoSelect={handleVideoSelect}
              handleRemoveImage={handleRemoveImage}
              handleRemoveVideo={handleRemoveVideo}
              handleEmotionSelect={handleEmotionSelect}
            />

            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  handleLike={handleLike}
                  handleBookmark={handleBookmark}
                />
              ))}

              {/* Hiển thị hiệu ứng chờ khi đang lấy thêm dữ liệu */}
              {isFetching && (
                <div className="space-y-6">
                  <PostSkeleton />
                  <PostSkeleton />
                </div>
              )}

              {/* Thông báo kết thúc danh sách */}
              {!hasMore && posts.length > 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 font-medium">
                    Bạn đã xem hết bài viết của hôm nay! 🎉
                  </p>
                </div>
              )}
            </div>
          </main>

          {/* Sidebar phải: Gợi ý kết bạn & Sự kiện */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}