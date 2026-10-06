import { ReactNode } from "react";
import {
    HeroSection,
    CommonBlogRightSidebar,
    MostPopularBlogsSection,
} from "@/presentation/blog";
import { getBlogService } from "@/features/blog";

type Props = {
    children: ReactNode;
};

const HIDE_CATEGORIES: string[] = ["uncategorized"];

const layout = async ({ children }: Props) => {
    const allCategories = await getBlogService().getAllBlogCategories();

    const categories = (allCategories || [])
        .filter(
            (cat) =>
                cat?.name && !HIDE_CATEGORIES.includes(cat?.slug.toLowerCase())
        )
        .map((cat, idx) => ({
            id: cat.id || idx,
            name: cat.name,
            slug: cat.slug,
        }));

    return (
        <>
            <HeroSection categories={categories} />
            <section
                id="blog-listing"
                className="py-8 sm:py-[40px] scroll-mt-24"
            >
                <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 flex flex-col lg:flex-row items-start justify-between gap-6 xl:gap-8">
                    {/* MAIN BLOG CONTENT */}
                    <main className="w-full lg:flex-1 order-1">{children}</main>

                    {/* RIGHT SIDEBAR */}
                    <aside className="w-full lg:w-[330px] xl:w-[350px] flex-shrink-0 order-2 h-fit">
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
