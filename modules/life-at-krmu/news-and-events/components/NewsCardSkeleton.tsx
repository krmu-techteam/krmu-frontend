import { Skeleton } from "@/components/ui/skeleton";

const NewsCardSkeleton = () => {
  return (
    <div className="p-2 space-y-4">
      {/* Image Skeleton */}
      <div className="relative aspect-[3/2] rounded-sm overflow-hidden bg-white/5">
        <Skeleton className="w-full h-full bg-white/10" />
      </div>
      {/* Date Skeleton */}
      <Skeleton className="h-4 w-[40%] bg-white/10 rounded" />
      {/* Title Skeletons */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-full bg-white/10 rounded" />
        <Skeleton className="h-5 w-[85%] bg-white/10 rounded" />
      </div>
    </div>
  );
};
export default NewsCardSkeleton;
