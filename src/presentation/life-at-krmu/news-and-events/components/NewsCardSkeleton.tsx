import { Skeleton } from "@/components/ui/skeleton";

const NewsCardSkeleton = () => {
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
