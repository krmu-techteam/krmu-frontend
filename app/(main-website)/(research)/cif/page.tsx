import { STRAPI_URL } from "@/app/constant";
import CIFAchievements from "./comp/CIFAchievements";
import CIFFacilities from "./comp/CIFFacilities";
import { CIFIntegral } from "./comp/CIFIntegral";
import CIFUpcomingEvents from "./comp/CIFUpcomingEvents";
import MessageDirector from "./comp/MessageDirector";
import TeamCIF from "./comp/TeamCIF";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";
import { SectionsRenderer } from "@/components/common/SectionRenderer";
import { CIFConfig, getCIFContent } from "@/modules/research/cif";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("cif");
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

const CifPage = async () => {
  const { data } = await getCIFContent();
  return (
    <>
      <SectionsRenderer
        sections={CIFConfig}
        data={data}
        key={CIFConfig.map((item) => item.key).join("-")}
      />
      <CIFIntegral />
      <section className="bg-[url(/research/bg-gradient.webp)] bg-no-repeat bg-cover py-[30px] px-4">
        <MessageDirector />
        <TeamCIF />
      </section>
      <CIFFacilities />
      <CIFAchievements />
      <CIFUpcomingEvents />
    </>
  );
};

export default CifPage;
