import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Stories from "./components/Stories";
import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";
import RightSidebar from "./components/RightSidebar";
import PostSkeleton from "./components/PostSkeleton"; // Nhớ import Skeleton
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
    
    // Lấy thêm trạng thái từ hook
    isFetching,
    hasMore,
  } = useHome();

  // Truyền đủ 3 tham số
  useInfiniteScroll(loadMorePosts, isFetching, hasMore);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <LeftSidebar />

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

              {/* Hiển thị hiệu ứng loading khi đang fetch dữ liệu */}
              {isFetching && (
                <>
                  <PostSkeleton />
                  <PostSkeleton />
                </>
              )}

              {/* Thông báo khi đã cuộn hết dữ liệu */}
              {!hasMore && (
                <p className="text-center text-gray-500 py-4 font-medium">
                  Bạn đã xem hết bài viết!
                </p>
              )}
            </div>
          </main>

          <RightSidebar />
        </div>
      </div>
    </div>
  );
}