import { useState } from "react";
import { mockProfile, mockProfilePosts, mockFriends, mockPhotos } from "../../data/mockProfileData";

export function useProfile() {
  const [activeTab, setActiveTab] = useState("posts");
  const [profileData] = useState(mockProfile);
  const [posts, setPosts] = useState(mockProfilePosts);
  const [friends] = useState(mockFriends);
  const [photos] = useState(mockPhotos);

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              isLiked: !p.isLiked,
              likes: p.isLiked ? p.likes - 1 : p.likes + 1,
            }
          : p
      )
    );
  };

  const handleBookmark = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isBookmarked: !p.isBookmarked } : p
      )
    );
  };

  return {
    profileData,
    posts,
    friends,
    photos,
    activeTab,
    setActiveTab,
    handleLike,
    handleBookmark,
  };
}