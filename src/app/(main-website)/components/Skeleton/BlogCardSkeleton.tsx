export function BlogCardSkeleton() {
  return (
    <div className="w-full h-full relative">
      <div className="relative flex flex-col h-full bg-[#071726] border border-[#14283c] overflow-hidden font-poppins animate-pulse">
        {/* Image Banner Skeleton */}
        <div className="w-full aspect-[16/9] bg-[#0d2235]" />

        {/* Content Body Skeleton */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-3">
            {/* Category Pill Skeleton */}
            <div className="h-6 w-28 bg-[#102b45] rounded-full mb-1" />

            {/* Title Skeleton lines */}
            <div className="h-5 w-4/5 bg-[#102b45] rounded" />
            <div className="h-5 w-3/5 bg-[#102b45] rounded" />

            {/* Excerpt Skeleton lines */}
            <div className="h-3.5 w-full bg-[#102b45] rounded mt-1" />
            <div className="h-3.5 w-4/5 bg-[#102b45] rounded" />

            {/* Read More Link Skeleton */}
            <div className="h-4 w-20 bg-[#102b45] rounded mt-1" />
          </div>

          <div className="mt-4">
            {/* Divider Line */}
            <div className="w-full h-[1px] bg-[#14283c] my-3.5" />

            {/* Footer Metadata Skeleton */}
            <div className="flex items-center gap-8">
              <div className="h-4 w-16 bg-[#102b45] rounded" />
              <div className="h-4 w-24 bg-[#102b45] rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
