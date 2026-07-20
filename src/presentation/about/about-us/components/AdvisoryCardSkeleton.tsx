import { Skeleton } from "@/components/ui/skeleton";

export const AdvisoryCardSkeleton = () => (
  <div className="flex flex-col bg-[#061623] border-[1px] border-transparent h-full rounded-[4px] overflow-hidden">
    <div className="w-full h-[240px] sm:h-[260px] p-4">
      <Skeleton className="w-full h-full rounded-[4px] bg-white/10" />
    </div>
    <div className="p-5 flex flex-col flex-grow text-left space-y-3">
      <Skeleton className="h-6 w-3/4 rounded-[2px] bg-white/15" />
      <div className="space-y-2 flex-grow">
        <Skeleton className="h-3.5 w-full rounded-[2px] bg-white/10" />
        <Skeleton className="h-3.5 w-4/5 rounded-[2px] bg-white/10" />
        <Skeleton className="h-3.5 w-2/3 rounded-[2px] bg-white/10" />
      </div>
      <Skeleton className="h-4 w-1/2 rounded-[2px] bg-[#4DAFFF]/20 mt-auto" />
    </div>
  </div>
);
