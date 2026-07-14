import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { SectionsRenderer } from "@/components/common/SectionRenderer";
import { getLifeAtKRMUOverviewData, getOverviewContent } from "@/features/life-at-krmu/overview/services";
import { Sections } from "@/features/life-at-krmu/overview/config";;

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

const OverviewPage = async () => {
  const overviewData = await getLifeAtKRMUOverviewData();
  const { data } = await getOverviewContent();
  return (
    <>
      <SectionsRenderer
        sections={Sections}
        data={data}
        extraProps={{ overviewData }}
      />
    </>
  );
};

export default OverviewPage;
