import FeeStructureTable from "./FeeStructureTable";
import FeeStructureHero from "./FeeStructureHero";
import FeeStructurePaymentProc from "./FeeStructurePaymentProc";
import FeeStructureSaarc from "./FeeStructureSaarc";
import { getFeeStructurePageData } from "@/lib/api/feestructure";
import FeeStructureSearch from "./FeeStructureSearch";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { createBreadcrumbSchema, createWebPageSchema } from "@/lib/api/common";
import Script from "next/script";

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
      alternates: {
        canonical: "https://www.krmangalam.edu.in/fee-structure",
      },
      // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
      openGraph: {
        title: "K.R. Mangalam University",
        description: "",
        url: "https://www.krmangalam.edu.in/fee-structure",
        siteName: "K.R. Mangalam University",
        images: {
          url: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/fav_457c1acb7e.png",
          width: 1200,
          height: 630,
          alt: "K.R. Mangalam University",
        },

        type: "website",
      },

      // ✅ Twitter Card
      twitter: {
        card: "summary_large_image",
        title: "K.R. Mangalam University",
        description: "",
        images: {
          url: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/fav_457c1acb7e.png",
          width: 1200,
          height: 630,
          alt: "K.R. Mangalam University",
        },
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

  const webPageSchema = createWebPageSchema({
    name: "Fee structure | K.R. Mangalam University",
    url: "https://www.krmangalam.edu.in/fee-structure",
    description:
      "Explore the latest K.R. Mangalam University fee structure for undergraduate, postgraduate, diploma, and doctoral programmes.",
    aboutName: "K.R. Mangalam University",
    aboutUrl: "https://www.krmangalam.edu.in/",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Home",
      url: "https://www.krmangalam.edu.in/",
    },
    {
      name: "Fee structure",
      url: "https://www.krmangalam.edu.in/fee-structure",
    },
  ]);

  // API response → fee_structure_tab array
  const feeStructTab = feeStructure?.fee_structure_tab;
  const feeStructHero = feeStructure?.fee_structure_hero;
  const feeStructSAARC = feeStructure?.fee_structure_saarc;

  return (
    <>
      {webPageSchema && (
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: webPageSchema }}
        />
      )}
      {breadcrumbSchema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
      )}

      <FeeStructureHero feeStructHero={feeStructHero} />
      <FeeStructureSearch />
      <FeeStructureTable feeStructTab={feeStructTab} />
      <FeeStructurePaymentProc />
      {/* <FeeStructureSaarc feeStructSAARC={feeStructSAARC} /> */}
    </>
  );
};

export default page;
