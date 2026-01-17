
export default function SkeletonCaseStudyCard() {
    return (
      <div className="animate-pulse bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <div className="w-full h-48 bg-gray-200 rounded-xl mb-4" />
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-3" />
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="h-5 w-20 bg-gray-200 rounded-full" />
          <div className="h-5 w-16 bg-gray-200 rounded-full" />
        </div>
      </div>
    );
  }
  