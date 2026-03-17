import { useProfile } from "./useProfile";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";
import ProfileAbout from "./components/ProfileAbout";
import ProfilePosts from "./components/ProfilePosts";
import ProfileFriends from "./components/ProfileFriends";
import ProfilePhotos from "./components/ProfilePhotos";
import Hearder from "../Home/components/Header";
export default function ProfilePage() {
  const {
    profileData,
    posts,
    friends,
    photos,
    activeTab,
    setActiveTab,
    handleLike,
    handleBookmark
  } = useProfile();

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Nếu bạn có component Header dùng chung (như navbar của HomePage),
        bạn có thể import và đặt ở đây:
        <Header /> 
      */}
<Hearder />
      <ProfileHeader profileData={profileData} />

      <ProfileTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex justify-center">
        {/* Nếu là tab Posts, bạn có thể chia layout 2 cột: Trái là About mini, Phải là Posts */}
        <div className="w-full">
          {activeTab === "posts" && (
            <ProfilePosts
              posts={posts}
              handleLike={handleLike}
              handleBookmark={handleBookmark}
            />
          )}

          {activeTab === "about" && (
            <ProfileAbout profileData={profileData} />
          )}

          {activeTab === "friends" && (
            <ProfileFriends friends={friends} />
          )}

          {activeTab === "photos" && (
            <ProfilePhotos photos={photos} />
          )}
        </div>
      </div>
    </div>
  );
}