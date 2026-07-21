"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export type CategoryItem = {
  id?: number | string;
  name: string;
  slug: string;
};

type Props = {
  categories: CategoryItem[];
  title?: string;
  className?: string;
  activeSlug?: string;
};

const CategoryPills = ({
  categories,
  title = "Categories",
  className = "",
  activeSlug,
}: Props) => {
  const pathname = usePathname();
  const params = useParams();

  // Determine active category from prop, route params (slug), or pathname
  const paramSlug =
    typeof params?.slug === "string"
      ? params.slug
      : Array.isArray(params?.slug)
        ? params.slug[0]
        : "";

  const currentActiveSlug =
    activeSlug ||
    paramSlug ||
    (pathname ? pathname.split("/").filter(Boolean).pop() : "");

  if (!categories || categories.length === 0) return null;

  return (
    <div
      className={`border border-[#23425B] font-poppins p-5 sm:p-6 lg:p-7 rounded-[10px] ${className}`}
    >
      {title && (
        <h3 className="text-xl sm:text-[22px] font-medium text-white mb-4 sm:mb-5 font-poppins tracking-tight flex items-center gap-2">
          {title}
        </h3>
      )}

      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {categories.map((cat) => {
          const activeSlugLower = currentActiveSlug
            ? currentActiveSlug.toLowerCase()
            : "";
          const catSlugLower = cat.slug ? cat.slug.toLowerCase() : "";
          const isActive =
            Boolean(activeSlugLower) &&
            (activeSlugLower === catSlugLower ||
              (pathname
                ? pathname.toLowerCase().endsWith(`/${catSlugLower}`)
                : false));

          return (
            <Link
              key={cat.id || cat.slug}
              href={`/blog/all-categories/${cat.slug}`}
              className={`relative group text-xs sm:text-[13px] font-medium px-4 py-2 rounded-full inline-flex items-center cursor-pointer border transition-all duration-300 ease-[cubic-bezier(0.34,1.3,0.64,1)] ${
                isActive
                  ? "bg-[#132737] text-white border-[#3b6d94] shadow-[0_4px_16px_rgba(35,66,91,0.6)] font-semibold ring-1 ring-[#3b6d94]/50 scale-[1.02] -translate-y-[2px]"
                  : "bg-[#061623] hover:bg-[#132737] text-white/85 hover:text-white border-white/10 hover:border-[#356184] hover:-translate-y-[2.5px] hover:scale-[1.02] hover:shadow-[0_6px_18px_rgba(19,39,55,0.5)] active:scale-95"
              }`}
            >
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] mr-2 shadow-[0_0_8px_#00e5ff] animate-pulse" />
              )}
              <span dangerouslySetInnerHTML={{ __html: cat.name }} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPills;
