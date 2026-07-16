import { STRAPI_URL } from "@/app/constant";
import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { getAccreditationsService } from "@/features/about/accreditations-recognition-and-approvals";
import { AccreditationsSection } from "@/presentation/about/accreditations-recognition-and-approvals/sections";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO(
    "accreditations-recognition-and-approvals",
  );
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
  const accreditation = await getAccreditationsService().getData();

  return (
    <>
      <AccreditationsSection {...accreditation} />
    </>
  );
};

export default page;
