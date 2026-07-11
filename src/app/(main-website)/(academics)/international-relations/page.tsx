import { STRAPI_URL } from "@/app/constant";
import InterRelaionForAdmission from "./comp/InterRelaionForAdmission";
import InterRelationActivities from "./comp/InterRelationActivities";
import InterRelationCertified from "./comp/InterRelationCertified";
import InterRelationContent from "./comp/InterRelationContent";
import InterRelationForeign from "./comp/InterRelationForeign";
import InterRelationForm from "./comp/InterRelationForm";
import InterRelationGlobal from "./comp/InterRelationGlobal";
import InterRelationHero from "./comp/InterRelationHero";
import InterRelationRoles from "./comp/InterRelationRoles";
import InterRelationStudentExchange from "./comp/InterRelationStudentExchange";
import InterRelationWorkshop from "./comp/InterRelationWorkshop";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";



export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("international-relations");
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

const page = () => {
  return (
    <>
      <InterRelationHero />
      <InterRelationContent />
      <InterRelationRoles />
      <InterRelationActivities /> 
      <InterRelationWorkshop />
      {/* <InterRelationCertified /> */}
      <InterRelationForeign />
      <InterRelationGlobal />
      <InterRelaionForAdmission />
      <InterRelationForm />
      <InterRelationStudentExchange />
    </>
  );
};

export default page;
