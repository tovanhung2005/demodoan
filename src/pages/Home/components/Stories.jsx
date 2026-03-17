import { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export default function Stories({ stories }) {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <>
      <Card className="mb-6 shadow-sm">
        <CardContent className="p-4 flex space-x-4 overflow-x-auto scrollbar-hide">
          {stories.map((story) => (
            <div
              key={story.id}
              className="text-center flex-shrink-0 cursor-pointer group"
              onClick={() => setActiveStory(story)}
            >
              <div
                className={`w-14 h-14 rounded-full p-[2px] transition-transform group-hover:scale-105 ${
                  story.hasNew
                    ? "bg-gradient-to-tr from-pink-500 to-yellow-500"
                    : "bg-gray-300"
                }`}
              >
                <img
                  src={story.avatar}
                  alt={story.user}
                  className="w-full h-full rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="text-xs mt-1 truncate w-14">{story.user}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Story Viewer Overlay */}
      {activeStory && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveStory(null)}
        >
          <img
            src={activeStory.avatar}
            alt="Story content"
            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={() => setActiveStory(null)}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}