import { STRAPI_URL } from "@/app/constant";
import IPRFacilities from "../research-and-innovation/comp/IPRFacilities";
import IPRAchievement from "./comp/IPRAchievement";
import IPRContactandEnquiries from "./comp/IPRContactandEnquiries";
import IPRContent from "./comp/IPRContent";
import IPRDrMessage from "./comp/IPRDrMessage";
import IPRGoal from "./comp/IPRGoal";
import IPRHeroSection from "./comp/IPRHeroSection";
import IPRMember from "./comp/IPRMember";
import IPRupcomingevent from "./comp/IPRupcomingevent";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("ipr-legal-ethical-matters-cell");
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

const page = () => {
  return (
    <>
      <IPRHeroSection />
      <IPRContent />
      <section className="py-[50px] px-4 bg-[url(/ipr/grad-2.png)]">
        <IPRDrMessage />
        <IPRMember />
      </section>
      <IPRGoal />
      <IPRFacilities />
      <IPRAchievement />
      <IPRupcomingevent />
      <IPRContactandEnquiries />
    </>
  );
};

export default page;
