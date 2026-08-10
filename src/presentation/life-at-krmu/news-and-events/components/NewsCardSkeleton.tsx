import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedBannerSkeleton = () => {
  return (
    <div className="w-full mt-4 md:mt-6 mb-8 md:mb-12">
      <div className="rounded-[10px] border-2 border-[#0D7377]/40 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 xl:gap-12 min-h-[380px] animate-pulse">
        {/* Left Image Skeleton */}
        <div className="w-full lg:w-[50%] xl:w-[681px] max-w-[681px] shrink-0 rounded-[10px] overflow-hidden relative aspect-[16/10] bg-white/5 border border-[#294861]">
          <Skeleton className="w-full h-full bg-white/10" />
        </div>

        {/* Right Content Skeleton */}
        <div className="w-full lg:w-[48%] xl:flex-1 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 text-white py-2">
          {/* Date */}
          <Skeleton className="h-4 w-[160px] bg-[#E7C268]/20 rounded" />
          {/* Title Lines */}
          <div className="w-full flex flex-col items-center gap-2">
            <Skeleton className="h-8 w-[90%] bg-white/10 rounded" />
            <Skeleton className="h-8 w-[75%] bg-white/10 rounded" />
          </div>
          {/* View More Link */}
          <Skeleton className="h-5 w-[100px] bg-[#00B7FF]/20 rounded mt-2" />
        </div>
      </div>
    </div>
  );
};

export const NewsCardSkeleton = () => {
  return (
    <div className="h-full">
      <div className="block h-full w-full border border-[#294861] rounded-[10px] flex flex-col justify-between animate-pulse">
        <div>
          {/* Image Skeleton */}
          <div className="relative aspect-[16/10] w-full rounded-[8px] border border-[#294861] overflow-hidden mb-3.5 bg-white/5">
            <Skeleton className="w-full h-full bg-white/10" />
          </div>

          <div className="p-3.5 space-y-3">
            {/* Date Skeleton */}
            <Skeleton className="h-4 w-[45%] bg-[#E7C268]/20 rounded" />
            {/* Title Skeletons */}
            <div className="space-y-2 pt-1">
              <Skeleton className="h-5 w-full bg-white/10 rounded" />
              <Skeleton className="h-5 w-[80%] bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCardSkeleton;
