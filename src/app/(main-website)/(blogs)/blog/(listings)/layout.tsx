import { ReactNode } from "react";
import {
    HeroSection,
    CommonBlogRightSidebar,
    MostPopularBlogsSection,
    CategoryPills,
} from "@/presentation/blog";
import { getBlogService } from "@/features/blog";

type Props = {
    children: ReactNode;
};

const HIDE_CATEGORIES: string[] = ["uncategorized"];

const layout = async ({ children }: Props) => {
    const [allCategories, initialData] = await Promise.all([
        getBlogService().getAllBlogCategories(),
        getBlogService().getAllBlogsByPerPageOrCategorySlug(1, 1),
    ]);

    const categories = (allCategories || [])
        .filter(
            (cat) =>
                cat?.name && !HIDE_CATEGORIES.includes(cat?.slug.toLowerCase())
        )
        .map((cat, idx) => ({
            id: cat.id || idx,
            name: cat.name,
            slug: cat.slug,
            count: typeof cat.count === "number" ? cat.count : undefined,
        }));

    return (
        <>
            <HeroSection />
            <section id="blog-listing" className="py-4 sm:py-6 scroll-mt-24">
                <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 flex flex-col lg:flex-row items-start justify-between gap-6 xl:gap-8">
                    {/* MAIN BLOG CONTENT */}
                    <main className="w-full lg:flex-1 order-1 flex flex-col gap-6">
                        <CategoryPills
                            categories={categories}
                            title="Categories"
                            totalBlogsCount={initialData?.totalBlogs}
                        />
                        {children}
                    </main>

                    {/* RIGHT SIDEBAR */}
                    <aside className="w-full lg:w-[320px] xl:w-[350px] 2xl:w-[370px] flex-shrink-0 order-2 lg:self-stretch">
                        <CommonBlogRightSidebar />
                    </aside>
                </div>
            </section>

            {/* FULL WIDTH MOST POPULAR BLOGS SECTION */}
            <section className="max-w-[1530px] mx-auto w-full px-6 md:px-8 pb-12 sm:pb-16">
                <MostPopularBlogsSection />
            </section>
        </>
    );
};

export default layout;
