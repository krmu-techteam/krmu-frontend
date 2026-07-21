import { ReactNode } from "react";
import CommonBlogRightSidebar from "./comp/CommonBlogRightSidebar";
import { HeroSection } from "@/presentation/blog";
import { getAllBlogCategories } from "@/lib/api/blogs/single-blog";

type Props = {
  children: ReactNode;
};

const HIDE_CATEGORIES: string[] = [
  "general",
  "medical-and-allied-science",
  "school-of-management-and-commerce",
  "travel-and-tourism",
  "education",
  "uncategorized",
];

const layout = async ({ children }: Props) => {
  const allCategories = await getAllBlogCategories();

  const categories = (allCategories || [])
    .filter(
      (cat) => cat?.name && !HIDE_CATEGORIES.includes(cat?.slug.toLowerCase()),
    )
    .map((cat, idx) => ({
      id: cat.id || idx,
      name: cat.name,
      slug: cat.slug,
    }));

  return (
    <>
      <HeroSection categories={categories} />
      <section className="py-8 sm:py-[40px]">
        <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 flex flex-col lg:flex-row justify-between gap-6 xl:gap-8">
          {/* MAIN BLOG CONTENT */}
          <main className="w-full lg:flex-1 order-1 min-h-screen">
            {children}
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full lg:w-[330px] xl:w-[350px] flex-shrink-0 order-2">
            <CommonBlogRightSidebar />
          </aside>
        </div>
      </section>
    </>
  );
};

export default layout;
