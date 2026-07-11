import { getPhdAdmissionData } from "@/lib/api/admissionenroll";
import PersonalInterview from "./comp/PersonalInterview";
import PHDAdmissionAccordion from "./comp/PHDAdmissionAccordion";
import PHDAdmissionHero from "./comp/PHDAdmissionHero";
import PHDOfferedProgrammes from "./comp/PHDOfferedProgrammes";


import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";



export async function generateMetadata(): Promise<Metadata> { 
  const seoData = await folderRouteSEO("phd-admission");
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
  const phdAdmissionData = await getPhdAdmissionData();

  return (
    <>
      <PHDAdmissionHero
        heading={phdAdmissionData?.heading}
        subheading={phdAdmissionData?.subheading}
        content={phdAdmissionData?.content}
        herobtn={phdAdmissionData?.hero_btn}
        heroimg={phdAdmissionData?.heroimg}
      />
      <PHDOfferedProgrammes
        heading={phdAdmissionData?.phdprogramme_offered?.phdOffered_heading}
        offeredSchools={
          phdAdmissionData?.phdprogramme_offered?.phd_programmes_schools
        }
        evenOddCards={phdAdmissionData?.phdprogramme_offered?.even_odd_sem_card}
      />
      <PHDAdmissionAccordion acc={phdAdmissionData?.phd_admission_acc} />
      <PersonalInterview
        heading={phdAdmissionData?.personal_interview?.heading}
        content={phdAdmissionData?.personal_interview?.content}
        info_heading={phdAdmissionData?.personal_interview?.info_heading}
        interview_img_url={
          phdAdmissionData?.personal_interview?.personal_interview_img?.url
        }
      />
    </>
  );
};

export default page;
