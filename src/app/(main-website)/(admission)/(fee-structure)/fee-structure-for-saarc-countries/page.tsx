import FeeStructureSearch from "../fee-structure/FeeStructureSearch";
import { getFeeStructureSAARCPageData } from "@/lib/api/feestructuresaarc";
import FeeStructureSAARCTable from "./FeeStructureSAARCTable";
import FeeStructureSAARCHero from "./FeeStructureSAARCHero";
import FeeStructureSaarcApproval from "./FeeStructureSaarcApproval";



import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";



export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("fee-structure-for-saarc-countries");
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
  const feeStructureSAARC = await getFeeStructureSAARCPageData();

  // API response → fee_structure_tab array
  const feeStructSAARCTab = feeStructureSAARC?.fee_structure_saarc_tab;

  // const feeStructHero = feeStructureSAARC?.fee_structure_hero;
  const feeStructSAARCApproval = feeStructureSAARC?.fee_struct_saarc_approval;

  return (
    <>
      <FeeStructureSAARCHero
        heading={feeStructureSAARC?.heading}
        url={feeStructureSAARC?.saarc_url}
        subHeading={feeStructureSAARC?.subheading}
      />
      <FeeStructureSearch />
      <FeeStructureSAARCTable feeStructSAARCTab={feeStructSAARCTab} />
      <FeeStructureSaarcApproval
        feeStructSAARCApproval={feeStructSAARCApproval}
      />
    </>
  );
};

export default page;
