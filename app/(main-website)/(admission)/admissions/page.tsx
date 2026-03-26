import { getAdmission2PageData } from "@/lib/api/Admission/admission2";
import AdmissionLocation from "./admission2Comp/AdmissionLocation";
import AdmissionTableOfContent from "./admission2Comp/AdmissionTableOfContent";
import ContactWithUs from "./admission2Comp/ContactWithUs";
import Admission2Alumni from "./admission2Comp/Admission2Alumni";
import Admission2Search from "./admission2Comp/Admission2Search";
import Admission2WhatMakes from "./admission2Comp/Admission2WhatMakes";
import Admission2Process from "./admission2Comp/Admission2Process";
import Admission2Hero from "./admission2Comp/Admission2Hero";
import Admission2Fee from "./admission2Comp/Admission2Fee";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { createBreadcrumbProgSchema, createProgFaqSchema } from "@/lib/api/common";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("admissions");
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
  const admission2Data = await getAdmission2PageData();

  const admTOC = admission2Data?.adm_toc;
  const admAlumni = admission2Data?.adm2_alumni;

  type FAQProg = {
    ques: string;
    ans: string;
  };

  const allFaqs: FAQProg[] = admTOC?.tocfaq.flatMap((section) =>
    section.faq.map((item) => ({
      id: item.id,
      ques: item.ques,
      ans: item.ans,
      tocpoint: section.tocpoint, // optional, keep category info
    })),
  );




  const singleProgFAQLD = createProgFaqSchema(allFaqs);

  const breadcrumbItems = [
    { name: "Home", url: "https://www.krmangalam.edu.in/" },
    { name: "Admissions", url: "https://www.krmangalam.edu.in/admissions" },
  ];
  const breadcrumbSchema = createBreadcrumbProgSchema(breadcrumbItems);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: singleProgFAQLD }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <Admission2Hero />
      <Admission2Process />
      <Admission2WhatMakes />
      <Admission2Search />
      {/* <ScholarshipSection />
      <FinancialAssistanceSection /> */}
      <Admission2Fee />
      <Admission2Alumni admAlumni={admAlumni} />
      <AdmissionTableOfContent
        heading={admTOC?.heading}
        highlight={admTOC?.highlightheading}
        desc={admTOC?.description}
        tocfaqs={admTOC?.tocfaq}
        tocimg={admTOC?.tocimg}
        tocbtn={admTOC?.tocbtn}
      />
      <AdmissionLocation />
      <ContactWithUs />
      {/* 



  */}
    </>
  );
};

export default page;
