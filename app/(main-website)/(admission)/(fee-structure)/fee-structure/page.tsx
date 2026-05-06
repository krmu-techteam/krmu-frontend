import FeeStructureTable from "./FeeStructureTable";
import FeeStructureHero from "./FeeStructureHero";
import FeeStructurePaymentProc from "./FeeStructurePaymentProc";
import FeeStructureSaarc from "./FeeStructureSaarc";
import { getFeeStructurePageData } from "@/lib/api/feestructure";
import FeeStructureSearch from "./FeeStructureSearch";


import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";



export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("fee-structure");
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
  const feeStructure = await getFeeStructurePageData();


  // API response → fee_structure_tab array
  const feeStructTab = feeStructure?.fee_structure_tab;
  const feeStructHero = feeStructure?.fee_structure_hero;
  const feeStructSAARC = feeStructure?.fee_structure_saarc;

  return (
    <>
      <FeeStructureHero feeStructHero={feeStructHero} />
      <FeeStructureSearch />
      <FeeStructureTable feeStructTab={feeStructTab} />
      <FeeStructurePaymentProc />
      {/* <FeeStructureSaarc feeStructSAARC={feeStructSAARC} /> */}
    </>
  );
};

export default page;
