
export default function SkeletonCard() {
    return (
      <div className="animate-pulse bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
        <div className="h-6 w-full bg-gray-200 rounded mb-3"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
        <div className="flex items-center gap-3 mt-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  