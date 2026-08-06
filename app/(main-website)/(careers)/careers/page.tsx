import { getCareerPageData } from "@/lib/api/careers/career";
import CareerCurrentOpeningSection from "./comp/CareerCurrentOpeningSection";
import CareerHeroSection from "./comp/CareerHeroSection";
import CareerJobListings from "./comp/CareerJobListings";
import CareerSubmitResume from "./comp/CareerSubmitResume";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("careers");
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
  const careerPageData = await getCareerPageData();

  const openings = careerPageData?.openings;

  return (
    <>
      <Script
        id="keka-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.khConfig = {
              identifier: "88fbde14-f9d3-4b37-ba20-301992a3e8ea",
              domain: "https://krmu.keka.com/careers/",
              targetContainer: "#khembedjobs"
            };
          `,
        }}
      />

      <Script
        src="https://krmu.keka.com/careers/api/embedjobs/js/88fbde14-f9d3-4b37-ba20-301992a3e8ea"
        strategy="afterInteractive"
      />
      <CareerHeroSection />
      <CareerCurrentOpeningSection />
      <CareerJobListings />
      <CareerSubmitResume openings={openings} />
    </>
  );
};

export default page;
