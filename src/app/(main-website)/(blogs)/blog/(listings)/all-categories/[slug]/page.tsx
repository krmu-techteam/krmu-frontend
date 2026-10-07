import { CommonBlogLayout } from "@/presentation/blog";
import { yoastToMetadata } from "@/lib/constants/yoastMeta";
import { getBlogService } from "@/features/blog";

import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
};

// ---------------------------
// ✅ Metadata
// ---------------------------
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const category = await getBlogService().getCategoryBySlug(slug);

    if (!category) {
        return {
            title: "Page Not Found | K.R. Mangalam University",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const seo = category.yoast_head_json;

    if (!seo) return {};

    return yoastToMetadata(seo, `all-categories/${slug}`);
}

const Page = async ({ params, searchParams }: Props) => {
    const resolvedParams = await params;
    const resolvedSearchParams = searchParams;

    const { slug } = resolvedParams;
    const category = await getBlogService().getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    return (
        <>
            <CommonBlogLayout
                slug={slug}
                searchParams={resolvedSearchParams}
                mainBlogClass={
                    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                }
            />
        </>
    );
};

export default Page;
