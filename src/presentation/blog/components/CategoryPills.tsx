"use client";

import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

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
    (pathname && pathname.includes("/all-categories/")
      ? pathname.split("/").filter(Boolean).pop()
      : "");

  if (!categories || categories.length === 0) return null;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (!val) {
      router.push("/blog");
    } else {
      router.push(`/blog/all-categories/${val}`);
    }
  };

  // Convert HTML entities for native select options
  const decodeHTML = (html: string) => {
    return html.replace(/&amp;/g, "&").replace(/&#038;/g, "&");
  };

  return (
    <div
      className={`border border-[#23425B] font-poppins rounded-[8px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
        isOpen ? "p-4 sm:p-5" : "p-4 sm:p-5 md:py-3 md:px-5"
      } ${className}`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ${isOpen ? "mb-4 sm:mb-5" : "mb-3 md:mb-0"}`}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title && (
              <h3 className="text-xl sm:text-[22px] font-medium text-white font-poppins tracking-tight m-0 group-hover:text-gray-200 transition-colors">
                {title}
              </h3>
            )}
          </div>

          {currentActiveSlug && (
            <Link
              href="/blog"
              className="ml-2 hidden md:flex items-center gap-1.5 text-[16px] text-[#E7C268] hover:text-[#f7d788] transition-colors group/reset"
            >
              Reset Filter
            </Link>
          )}
        </div>

        <div
          className="hidden md:flex p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDown
            size={20}
            className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Mobile/Tablet Dropdown */}
      <div className="block md:hidden relative w-full mb-2">
        <select
          value={currentActiveSlug || ""}
          onChange={handleSelectChange}
          className="w-full bg-[#061623] border border-white/20 text-white text-[15px] font-medium rounded-[8px] p-3.5 pr-10 focus:outline-none focus:ring-1 focus:ring-[#3b6d94] appearance-none"
        >
          <option value="">All Categories (Reset)</option>
          {categories.map((cat) => (
            <option key={cat.id || cat.slug} value={cat.slug}>
              {decodeHTML(cat.name)}
            </option>
          ))}
        </select>
        {/* Custom Caret Icon for Select */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/70">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

      {/* Desktop Pills */}
      <div
        className={`hidden md:flex flex-wrap gap-2.5 sm:gap-3 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0 m-0"}`}
      >
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
              className={`relative group text-xs sm:text-[13px] font-medium px-4 py-2 rounded-full inline-flex items-center cursor-pointer border transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-[#132737] text-white border-[#3b6d94] shadow-[0_4px_16px_rgba(35,66,91,0.6)] font-semibold ring-1 ring-[#3b6d94]/50"
                  : "bg-[#061623] hover:bg-[#132737] text-white/85 hover:text-white border-white/10 hover:border-[#356184] hover:shadow-[0_4px_12px_rgba(19,39,55,0.5)] active:scale-[0.98]"
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
