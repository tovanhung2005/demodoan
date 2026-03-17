import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Grid, Image as ImageIcon } from "lucide-react";

export default function ProfilePhotos({ photos }) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-xl">Ảnh</h3>
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm">
              <Grid className="w-4 h-4 mr-2" /> Lưới
            </Button>
            <Button variant="ghost" size="sm">
              <ImageIcon className="w-4 h-4 mr-2" /> Album
            </Button>
          </div>
        </div>

        {photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border shadow-sm"
              >
                <img
                  src={photo}
                  alt={`Photo ${index}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.src = "https://placehold.co/400?text=Error" }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">Chưa có hình ảnh nào.</div>
        )}
      </CardContent>
    </Card>
  );
}