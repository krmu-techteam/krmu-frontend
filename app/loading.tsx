import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-transparent z-50 relative">
      {/* Header Skeleton */}
      <div className="w-full h-20 border-b border-white/10 flex items-center justify-between px-4 md:px-10 lg:px-20">
        <Skeleton className="w-32 md:w-48 h-10 bg-white/10" />
        <div className="hidden md:flex items-center space-x-6">
          <Skeleton className="w-20 h-6 bg-white/10" />
          <Skeleton className="w-20 h-6 bg-white/10" />
          <Skeleton className="w-20 h-6 bg-white/10" />
          <Skeleton className="w-20 h-6 bg-white/10" />
          <Skeleton className="w-28 h-10 rounded-[3px] bg-white/10" />
          
        </div>
        <Skeleton className="w-10 h-10 md:hidden rounded-[3px] bg-white/10" />
      </div>

      {/* Hero Section Skeleton */}
      <div className="w-full px-4 md:px-10 lg:px-20 py-10">
        <Skeleton className="w-full h-[300px] md:h-[450px] lg:h-[680px] rounded-[3px] bg-white/5" />
      </div>
      <div className="w-full h-20 bg-white/10 flex items-center justify-between px-4 md:px-10 lg:px-20">
        
        <div className="hidden md:flex items-center space-x-6">
          <Skeleton className="w-10 h-10 bg-white/10" />
          <Skeleton className="w-28 h-6 bg-white/10" />
          <Skeleton className="w-28 h-6 bg-white/10" />
          <Skeleton className="w-28 h-6 bg-white/10" />
          <Skeleton className="w-28 h-6 bg-white/10" />
          <Skeleton className="w-28 h-6 rounded-[3px] bg-white/10" />
        </div>
         <Skeleton className="w-32 md:w-48 h-10 bg-white/10" />
        <Skeleton className="w-10 h-10 md:hidden rounded-[3px] bg-white/10" />
      </div>
      {/* Content Grid Skeleton */}
      <div className="w-full px-4 md:px-10 lg:px-20 py-10 flex flex-col space-y-10">
        {/* Section Title Skeleton */}
        <div className="flex flex-col space-y-3 items-center">
          <Skeleton className="w-48 h-8 md:h-10 bg-white/10" />
          <Skeleton className="w-3/4 md:w-1/2 h-4 bg-white/5" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col space-y-4">
              <Skeleton className="w-full h-48 md:h-56 rounded-[3px] bg-white/5" />
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-3/4 h-6 bg-white/10" />
                <Skeleton className="w-full h-4 bg-white/5" />
                <Skeleton className="w-5/6 h-4 bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
