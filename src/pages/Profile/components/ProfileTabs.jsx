import { FileText, User, Users, Image as ImageIcon } from "lucide-react";

export default function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "posts", label: "Bài viết", icon: FileText },
    { id: "about", label: "Giới thiệu", icon: User },
    { id: "friends", label: "Bạn bè", icon: Users },
    { id: "photos", label: "Ảnh", icon: ImageIcon },
  ];

  return (
    <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
      <div className="max-w-5xl mx-auto flex overflow-x-auto scrollbar-hide px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center py-4 px-4 sm:px-6 font-semibold text-sm transition-colors relative whitespace-nowrap ${
                isActive ? "text-blue-600" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              <Icon className={`w-5 h-5 mr-2 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
              {tab.label}
              
              {/* Thanh gạch dưới khi active */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-md" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}