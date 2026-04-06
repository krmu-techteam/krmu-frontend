import { getNewsEvents } from "@/lib/api/news-events";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import NewsAndEventsCards from "./comp/NewsAndEventsCards";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("news-and-events");
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
  const newsEventsPage = await getNewsEvents();

  return (
    <section className="pt-[140px] px-4 lg:pt-[12%] pb-[9%] bg-[url(/bg-gradient.webp)] bg-no bg-cover bg-center">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center text-white">
        <div className="w-full lg:w-3/5 text-white font-semibold leading-[1.2] text-2xl md:text-3xl lg:text-[64px] mb-5">
          <BlocksRenderer content={newsEventsPage?.main_heading} />
        </div>
        <div className="w-full lg:w-2/5">
          <BlocksRenderer content={newsEventsPage?.main_desc} />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full py-10">
        <div className="border-t border-[#716d6c] pt-12">
          <NewsAndEventsCards />
        </div>
      </div>
    </section>
  );
};

export default page;
