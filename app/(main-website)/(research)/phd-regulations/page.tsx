import { folderRouteSEO } from "@/lib/api/siteseo";
import {
  getHeroSectionContent,
  HeroSection,
  PHDRegulationCardSection,
} from "@/modules/research/phd-regulations";

import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("phd-regulations");
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
  const { data } = await getHeroSectionContent();
  return (
    <>
      <section className="pt-[140px] lg:pt-[10%] md:pb-[100px]">
        <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
          <HeroSection heroSection={data.heroSection} />
          <PHDRegulationCardSection
            regulationCards={data.regulationCards}
            contactSection={data.contactSection}
          />
        </div>
      </section>
    </>
  );
};

export default page;
