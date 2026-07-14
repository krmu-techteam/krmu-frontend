import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";
import { getResearchOverviewContent } from "@/features/research/research-overview/services";
import { HeroSection, PhdStudentTestimonialSection } from "@/presentation/research/research-overview/sections";;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("research-overview");
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
  const researchOverview = await getResearchOverviewContent();
  const { title, stats, paragraphs, links } = researchOverview.heroSection;

  return (
    <>
      <HeroSection
        heroTitle={title}
        stats={stats}
        content={paragraphs}
        links={links}
      />
      <PhdStudentTestimonialSection testimonials={researchOverview.testimonials}/>
    </>
  );
};

export default page;
