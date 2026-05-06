import { getLifeAtKRMUOverviewData } from "@/lib/api/lkoverview";
import OverviewHearit from "./comp/OverviewHearit";
import OverviewHero from "./comp/OverviewHero";
import OverviewImpacting from "./comp/OverviewImpacting";
import OverviewInnovate from "./comp/OverviewInnovate";
import OverviewLifeBeyond from "./comp/OverviewLifeBeyond";
import OverviewTreasure from "./comp/OverviewTreasure";
import OveviewSecondHome from "./comp/OveviewSecondHome";
import OverviewYourInterest from "./comp/OverviewYourInterest";
import OverviewYourWellBeing from "./comp/OverviewYourWellBeing";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("life-at-krmu-overview");
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
  const overviewData = await getLifeAtKRMUOverviewData();
  const overviewVideo = overviewData?.overview_video;
  const testimonials = overviewData?.hear_it_testimonials;
  return (
    <>
      <OverviewHero overviewVideo={overviewVideo} />
      <OverviewLifeBeyond />
      <OverviewInnovate />
      <OverviewYourWellBeing />
      <OverviewYourInterest />
      <OverviewHearit testimonials={testimonials} />
      <OveviewSecondHome />
      <section className="md:px-4 px-0">
        <div className="max-w-[1664px] mx-auto w-full">
          <OverviewImpacting />
          <OverviewTreasure />
        </div>
      </section>
    </>
  );
};

export default page;
