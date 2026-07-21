import { BlogCardSkeleton } from "@/app/(main-website)/components/Skeleton/BlogCardSkeleton";

export default function Loading() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Render 8 skeletons matching grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
