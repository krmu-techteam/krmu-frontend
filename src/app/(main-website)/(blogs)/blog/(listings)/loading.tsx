import { BlogCardSkeleton } from "@/app/(main-website)/components/Skeleton/BlogCardSkeleton";

export default function Loading() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Render 12 skeletons matching 3-cols grid */}
      {Array.from({ length: 12 }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
