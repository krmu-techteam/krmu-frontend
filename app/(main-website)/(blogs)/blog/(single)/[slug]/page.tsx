import { yoastToMetadata } from "@/lib/constants/yoastMeta";
import {
  getSingleBlogDataBySlug,
} from "@/lib/api/blogs/single-blog";
import { notFound } from "next/navigation";
import SingleBlogHero from "../../(listings)/single-blog-comp/SingleBlogHero";
import SingleBlogLayout from "../../(listings)/single-blog-comp/SingleBlogLayout";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createFaqSchema,
} from "@/lib/api/common";
import Script from "next/script";

// Incremental Static Regeneration (ISR)
export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

// -------------------------------
// ✅ Generate Metadata (Yoast)
// -------------------------------
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blogData = await getSingleBlogDataBySlug(slug);

  if (!blogData || blogData.length === 0 || !blogData[0]?.yoast_head_json) {
    return {
      title: "Blog - K.R. Mangalam University",
      description: "Read the latest blogs from K.R. Mangalam University.",
    };
  }

  return yoastToMetadata(blogData[0].yoast_head_json, slug);
}

const BlogPage = async ({ params }: Props) => {
  const { slug } = await params;

  // Next.js deduplicates this fetch due to react cache() in getSingleBlogDataBySlug
  const singleBlogData = await getSingleBlogDataBySlug(slug);

  if (!singleBlogData || singleBlogData.length === 0) return notFound();

  const currentSingleBlog = singleBlogData[0];

  if (!currentSingleBlog?.title) return notFound();

  // Extract author info from _embedded to avoid extra API calls
  const authorData = currentSingleBlog?._embedded?.author?.[0];
  const authorSlug = authorData?.slug;
  const authorName = authorData?.acf?.profile_name || "KRMU Team";
  const authorDesignation = authorData?.acf?.profile_position || "Content Team";
  const authorImageId = authorData?.acf?.profile_image;

  // Extract featured image from _embedded instead of calling getBlogImageById
  const featuredImageUrl =
    currentSingleBlog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
    currentSingleBlog?.yoast_head_json?.og_image?.[0]?.url;

  const publishedDate = currentSingleBlog?.date;
  const blogFaqSchema = currentSingleBlog?.acf?.faqs_section;
  
  // JSON-LD Structured Data
  const faqJsonLd = createFaqSchema(blogFaqSchema || []);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.krmangalam.edu.in/" },
    { name: "Blog", url: "https://www.krmangalam.edu.in/blog/" },
    {
      name: currentSingleBlog?.title?.rendered,
      url: `https://www.krmangalam.edu.in/blog/${currentSingleBlog?.slug}`,
    },
  ]);

  const articleJsonLd = createArticleSchema({
    url: `https://www.krmangalam.edu.in/blog/${currentSingleBlog?.slug}`,
    headline: currentSingleBlog?.title?.rendered,
    description: currentSingleBlog?.yoast_head_json?.description,
    image: currentSingleBlog?.yoast_head_json?.og_image?.[0]?.url,
    authorName: authorName,
    publisherName: "K.R. Mangalam University",
    publisherLogo:
      "https://www.krmangalam.edu.in/wp-content/uploads/2025/11/KRMU-Logo-NAAC.webp",
    datePublished: `${currentSingleBlog?.date_gmt}Z`,
    dateModified: `${currentSingleBlog?.modified_gmt}Z`,
  });

  return (
    <>
      {/* Optimized JSON-LD Scripts */}
      <Script
        id="blog-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        strategy="afterInteractive"
      />
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        strategy="afterInteractive"
      />
      <Script
        id="blog-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLd }}
        strategy="afterInteractive"
      />

      <SingleBlogHero
        title={currentSingleBlog?.title?.rendered}
        imgUrl={featuredImageUrl ?? ""}
        authorName={authorName}
        date={publishedDate}
        authorDesignation={authorDesignation}
        imgId={authorImageId}
        authorSlug={authorSlug}
      />
      <SingleBlogLayout content={currentSingleBlog?.content?.rendered} />
    </>
  );
};

export default BlogPage;

