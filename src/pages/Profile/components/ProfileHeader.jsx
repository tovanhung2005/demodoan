import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Edit2, Plus, MapPin, Link as LinkIcon, Calendar } from "lucide-react";

export default function ProfileHeader({ profileData }) {
  return (
    <div className="bg-white shadow-sm border-b ">
      {/* Cover Photo */}
      <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-100 to-purple-100 relative group">
        <img
          src={profileData.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <Button variant="secondary" size="sm" className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
          <Edit2 className="w-4 h-4 mr-2" /> Thay đổi ảnh bìa
        </Button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-6">
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end -mt-20 sm:-mt-16 mb-4 space-y-4 sm:space-y-0 sm:space-x-5">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-lg bg-white">
              <AvatarImage src={profileData.avatar} className="object-cover" />
              <AvatarFallback className="text-4xl">{profileData.name[0]}</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <Edit2 className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Info & Actions */}
          <div className="flex-1 text-center sm:text-left pt-2 sm:pt-16 pb-2 w-full">
            <div className="flex flex-col md:flex-row md:items-start justify-between">
              
              {/* Thông tin cá nhân & Thống kê */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
                <p className="text-gray-500 font-medium">{profileData.username}</p>
                <p className="mt-2 text-gray-700 max-w-lg">{profileData.bio}</p>

                {/* Phần Thống kê (Stats) mới thêm */}
                       <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1"/> {profileData.location}</span>
              <span className="flex items-center"><LinkIcon className="w-4 h-4 mr-1"/> <a href={`https://${profileData.website}`} className="text-blue-500 hover:underline">{profileData.website}</a></span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1"/> Tham gia {profileData.joinedDate}</span>
            </div>
              </div>

              {/* Các nút hành động */}
              <div className="flex items-center justify-center sm:justify-start space-x-3 mt-6 md:mt-0">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" /> Thêm vào tin
                </Button>
                <Button variant="outline" className="bg-gray-50">
                  <Edit2 className="w-4 h-4 mr-2" /> Chỉnh sửa
                </Button>
              </div>
            </div>

            {/* Basic Stats / Quick Info */}
     
            <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-8 mt-2">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="font-bold text-xl text-gray-900">{profileData.stats?.posts || 0}</span>
                    <span className="text-sm text-gray-500">Bài viết</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="font-bold text-xl text-gray-900">{profileData.stats?.friends || 0}</span>
                    <span className="text-sm text-gray-500">Bạn bè</span>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="font-bold text-xl text-gray-900">{profileData.stats?.followers || 0}</span>
                    <span className="text-sm text-gray-500">Người theo dõi</span>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}