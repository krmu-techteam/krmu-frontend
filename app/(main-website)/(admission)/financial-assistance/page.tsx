import React from "react";
import FinanceAssistanceHero from "./comp/FinanceAssistanceHero";
import BankNbfc from "./comp/BankNbfc";
import FinanceAssistancePointer from "./comp/FinanceAssistancePointer";
import { getFinancialPageData } from "@/lib/api/financialAssistance";
import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";



export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("financial-assistance");
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
  const financialAssistanceData = await getFinancialPageData();

  return (
    <>
      <FinanceAssistanceHero
        heading={financialAssistanceData?.heading}
        subheading={financialAssistanceData?.subheading}
        content={financialAssistanceData?.content} 
      />
      <BankNbfc
        bankLoansCards={financialAssistanceData?.bank_loan}
        nbfccardsData={financialAssistanceData?.nbfc_card}
      />

      <FinanceAssistancePointer />
    </>
  );
};

export default page;
