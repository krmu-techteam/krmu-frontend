import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { DEFAULT_OG_IMAGE, STRAPI_URL } from "@/app/constant";
import {
  getLeadershipService,
  LeadershipConfig,
} from "@/features/about/leadership";
import { SectionsRenderer } from "@/components/common/SectionRenderer";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("leadership");
  const seo = seoData?.[0];

  const title =
    seo?.title || "University Leadership | K.R. Mangalam University";
  const description =
    seo?.metaDescription ||
    "Meet the leadership team of K.R. Mangalam University, including the Chancellor, Vice Chancellor, and senior academic leaders.";
  const canonical =
    seo?.canonicalUrl || "https://www.krmangalam.edu.in/leadership";
  const shareImageUrl = seo?.shareImg?.url
    ? `${STRAPI_URL}${seo?.shareImg?.url}`
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords:
      seo?.keyword ||
      "Leadership, Chancellor, Vice Chancellor, K.R. Mangalam University",
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "K.R. Mangalam University",
      locale: "en_IN",
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImageUrl],
    },
  };
}

const LeadershipPage = async () => {
  const leadershipService = getLeadershipService();
  const [data] = await Promise.all([leadershipService.getData()]);

  return <SectionsRenderer sections={LeadershipConfig} data={data} />;
};

export default LeadershipPage;
