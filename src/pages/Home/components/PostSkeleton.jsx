export default function PostSkeleton() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm animate-pulse mb-6 border">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-300 rounded w-32"></div>
          <div className="h-3 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
      <div className="h-4 bg-gray-200 rounded mb-3 w-full"></div>
      <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
      <div className="h-56 bg-gray-200 rounded-xl w-full"></div>
    </div>
  );
}