export function NocCodeToolsSkeleton() {
    return (
      <div className="animate-pulse bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-orange-100/50 p-6 text-center">
        <div className="w-20 h-20 mb-4 mx-auto bg-gray-200 rounded-xl" />
        <div className="h-5 w-2/3 mx-auto bg-gray-300 rounded mb-2" />
        <div className="h-4 w-3/4 mx-auto bg-gray-200 rounded mb-4" />
        <div className="flex justify-center gap-4 mt-auto">
          <div className="h-8 w-24 bg-gray-200 rounded" />
          <div className="h-8 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }