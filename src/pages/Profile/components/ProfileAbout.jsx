import { Card, CardContent } from "../../../components/ui/card";
import {
  Briefcase,
  MapPin,
  Link as LinkIcon,
  Calendar,
  Info,
} from "lucide-react";

export default function ProfileAbout({ profileData }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-6">Thông tin chi tiết</h3>

        <div className="space-y-4">

          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
              Công việc
            </h4>
            <p className="text-gray-700 ml-7">{profileData.work}</p>
          </div>

        <hr/>

          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-500" />
              Sống tại
            </h4>
            <p className="text-gray-700 ml-7">{profileData.location}</p>
          </div>

        <hr/>

          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <LinkIcon className="w-5 h-5 mr-2 text-gray-500" />
              Website
            </h4>
            <a
              href={`https://${profileData.website}`}
              className="text-blue-500 hover:underline ml-7"
            >
              {profileData.website}
            </a>
          </div>

        <hr/>

          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <Info className="w-5 h-5 mr-2 text-gray-500" />
              Giới thiệu
            </h4>
            <p className="text-gray-700 ml-7">{profileData.bio}</p>
          </div>

        <hr/>

          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-gray-500" />
              Tham gia
            </h4>
            <p className="text-gray-700 ml-7">{profileData.joinedDate}</p>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}