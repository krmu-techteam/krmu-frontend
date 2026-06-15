import { getKREEData } from "@/lib/api/kree";
import KREEAdmissionOnline from "./comp/KREEAdmissionOnline";
import KREEApplyOnline from "./comp/KREEApplyOnline";
import KREEEnroll from "./comp/KREEEnroll";
import KREEExaminationPattern from "./comp/KREEExaminationPattern";
 
import KREEOnlineExam from "./comp/KREEOnlineExam";
import KREESection from "./comp/KREESection";
import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { AdmissionHelplineSection, ApplyOnlineSection, EnrollSection, HeroSection } from "@/modules/admission/kree";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("kree");
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
  const kreeData = await getKREEData();
  const kreeEnrol = kreeData?.kree_enrol;

  const applyOnline = kreeData?.kree_apply_online

  return (
    <>
      <HeroSection />
      <EnrollSection kreeEnrolData={kreeEnrol} />
      <ApplyOnlineSection appl_btn={applyOnline?.apply_btn} />
      <AdmissionHelplineSection />
      <KREEExaminationPattern />
      <KREESection />
      <KREEOnlineExam />
    </>
  );
};

export default page;
