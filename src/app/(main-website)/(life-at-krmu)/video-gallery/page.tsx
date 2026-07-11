import { getVideoGallery } from "@/lib/api/video-gallery";
import VideoGalleryCard from "./VideoGalleryCard";
import VideoGalleryHero from "./VideoGalleryHero";





import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("video-gallery");
  const seo = seoData[0];

  const shareImageUrl = seo?.shareImg?.url
    ? `${STRAPI_URL}${seo?.shareImg?.url}`
    : undefined;

  // ✅ Fallback if SEO is missing
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
    title: seo?.title || "K.R. Mangalam University",
    description: seo?.metaDescription || "",
    keywords: seo?.keyword || "",
    alternates: {
      canonical: seo?.canonicalUrl || "",
    },
    robots: {
      index: true,
      follow: true,
    },

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      url: seo?.canonicalUrl || "",
      siteName: "K.R. Mangalam University",
      images: shareImageUrl
        ? [
            {
              url: shareImageUrl,
              width: 1200,
              height: 630,
              alt: seo?.title || "K.R. Mangalam University",
            },
          ]
        : [],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      images: shareImageUrl ? [shareImageUrl] : [],
    },
  };
}

const page = async () => {
  const videoGalleryPageData = await getVideoGallery();

  const videosData = videoGalleryPageData?.videos;

  return (
    <>
      <VideoGalleryHero
        title={videoGalleryPageData?.Title}
        bgurl={videoGalleryPageData?.bgimage}
      />
      <section className="py-10 md:pt-20 md:pb-[60px] px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videosData &&
              videosData.map((video) => {
                return (
                  <VideoGalleryCard
                    key={video?.id}
                    title={video?.title}
                    videoframe={video?.videofield}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
