import { Metadata } from "next";
import Script from "next/script";

import { STRAPI_URL } from "@/app/constant";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { getCareerPageData } from "@/lib/api/careers/career";

import CareerHeroSection from "./comp/CareerHeroSection";
import CareerCurrentOpeningSection from "./comp/CareerCurrentOpeningSection";
import CareerSubmitResume from "./comp/CareerSubmitResume";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("careers");
  const seo = seoData[0];

  const shareImageUrl = seo?.shareImg?.url
    ? `${STRAPI_URL}${seo.shareImg.url}`
    : undefined;

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
    title: seo.title || "K.R. Mangalam University",
    description: seo.metaDescription || "",
    keywords: seo.keyword || "",
    alternates: {
      canonical: seo.canonicalUrl || "",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: seo.title || "K.R. Mangalam University",
      description: seo.metaDescription || "",
      url: seo.canonicalUrl || "",
      siteName: "K.R. Mangalam University",
      images: shareImageUrl
        ? [
            {
              url: shareImageUrl,
              width: 1200,
              height: 630,
              alt: seo.title || "K.R. Mangalam University",
            },
          ]
        : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title || "K.R. Mangalam University",
      description: seo.metaDescription || "",
      images: shareImageUrl ? [shareImageUrl] : [],
    },
  };
}

export default async function Page() {
  const careerPageData = await getCareerPageData();
  const openings = careerPageData?.openings;

  return (
    <>
      {/* Keka Configuration */}
      <Script
        id="keka-config"
        strategy="beforeInteractive"
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

      {/* Keka Jobs Script */}
      <Script
        id="keka-script"
        src="https://krmu.keka.com/careers/api/embedjobs/js/88fbde14-f9d3-4b37-ba20-301992a3e8ea"
        strategy="afterInteractive"
      />

      <CareerHeroSection />

      <CareerCurrentOpeningSection />

      {/* Keka Job Listings */}
      <div className="max-w-[1664px] mx-auto w-full">

      <section className="container py-16">
        <div id="khembedjobs" />
      </section>
      </div>

      <CareerSubmitResume openings={openings} />
    </>
  );
}