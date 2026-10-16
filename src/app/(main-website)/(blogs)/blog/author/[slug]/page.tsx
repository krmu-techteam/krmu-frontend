import { getBlogService } from "@/features/blog";
import AuthorHero from "../comp/AuthorHero";
import AuthorPosts from "../comp/AuthorPosts";

import { notFound } from "next/navigation";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";

export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const seoData = await folderRouteSEO(slug);
    const seo = seoData[0];

    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo.shareImg.url}`
        : undefined;

    // Fallback if SEO is missing
    if (!seo) {
        return {
            title: "K.R. Mangalam University",
            description: "",
            robots: {
                index: true,
                follow: true,
            },
        };
    }

    return {
        title: seo.title || "K.R. Mangalam University",
        description: seo.metaDescription || "",
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: seo.canonicalUrl || "#",
        },
        openGraph: {
            title: seo.title || "K.R. Mangalam University",
            description: seo.metaDescription || "",
            images: shareImageUrl ? [shareImageUrl] : [],
        },
    };
}

const page = async ({ params }: Props) => {
    const { slug } = await params;

    const authInfo = await getBlogService().getAuthInfoBySlug(slug);

    if (!authInfo || authInfo.length === 0 || slug !== authInfo[0]?.slug) {
        notFound();
    }

    const authData = authInfo[0];
    const AuthACF = authData?.acf;
    const AuthorImgId = AuthACF?.profile_image;
    const AuthId = authData?.id;
    const AuthName = AuthACF?.profile_name || authData?.name || "";
    const AuthDesg = AuthACF?.profile_position || "";
    const AuthAbout = AuthACF?.profile_about || "";

    // Pre-load all posts with embedded images and total count in parallel on the server
    const [AuthImgUrl, initialPosts, totalCount] = await Promise.all([
        getBlogService().getBlogImageById(AuthorImgId),
        getBlogService().getPostsByAuthId(AuthId, 1, 100),
        getBlogService().getPostsCountByAuthId(AuthId),
    ]);

    return (
        <main className="min-h-screen pt-[110px] md:pt-[140px] pb-16">
            <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8">
                {/* Author Hero Card */}
                <div className="mb-10">
                    <AuthorHero
                        imgUrl={AuthImgUrl || ""}
                        AuthName={AuthName}
                        AuthDesg={AuthDesg}
                        AuthAbout={AuthAbout}
                    />
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 mb-8" />

                {/* Posts Grid with preloaded cards */}
                <AuthorPosts
                    authId={AuthId}
                    initialPosts={initialPosts}
                    initialTotalCount={totalCount || initialPosts.length}
                />
            </div>
        </main>
    );
};

export default page;
