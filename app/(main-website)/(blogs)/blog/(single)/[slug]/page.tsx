import { yoastToMetadata } from "@/lib/constants/yoastMeta";
import {
  getBlogImageById,
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

type Props = {
  params: Promise<{ slug: string }>;
};

// -------------------------------
// ✅ Generate Metadata (Yoast)
// -------------------------------
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const blog = await getSingleBlogDataBySlug(slug);
  console.log("blog data", blog)

  if (!blog || !blog[0]?.yoast_head_json) return {};

  return yoastToMetadata(blog[0].yoast_head_json, slug);
}
const page = async ({ params }: Props) => {
  const { slug } = await params;

  const singleBlogData = await getSingleBlogDataBySlug(slug);

  if (!singleBlogData) return notFound();

  const currentSingleBlog = singleBlogData.find((blog) => blog?.slug === slug);

  if (!currentSingleBlog?.title) return notFound();

  // const schemaScript = singleBlogData[0]?.acf?.krmscript;

  // const featuredImageUrl =
  //   currentSingleBlog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const authorSlug = currentSingleBlog?._embedded?.author?.[0]?.slug;
  console.log("currentSingleBlog",currentSingleBlog)

  const featuedImageId = currentSingleBlog?.featured_media;
  const featuredImageUrl = await getBlogImageById(featuedImageId);

  const authorName =
    currentSingleBlog?._embedded?.author?.[0]?.acf?.profile_name;
  const authorDesignation =
    currentSingleBlog?._embedded?.author?.[0]?.acf?.profile_position;
  const publishedDate = currentSingleBlog?.date;
  const authorImageId =
    currentSingleBlog?._embedded?.author?.[0]?.acf?.profile_image;

  const blogFaqSchema = currentSingleBlog?.acf?.faqs_section;
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
    authorName: "KRMU Team",
    publisherName: "K.R. Mangalam University",
    publisherLogo:
      "https://www.krmangalam.edu.in/wp-content/uploads/2025/11/KRMU-Logo-NAAC.webp",
    datePublished: `${currentSingleBlog?.date_gmt}Z`,
    dateModified: `${currentSingleBlog?.modified_gmt}Z`,
  });

  // const personJsonLd = createPersonSchema({
  //   name: "KRMU Team",
  //   url: "https://www.krmangalam.edu.in/faculty/dr-john-doe/",
  //   image:
  //     "https://www.krmangalam.edu.in/wp-content/uploads/2026/01/john-doe.webp",
  // });

  return (
    <>
      {/* {schemaScript && (
        <Script
          id="yoast-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaScript
              .replace(/<script[^>]*>/g, "")
              .replace(/<\/script>/g, ""), 
          }}
          strategy="beforeInteractive"
        />
      )} */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLd }}
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

export default page;
