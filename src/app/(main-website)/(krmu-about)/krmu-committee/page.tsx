import {
  GenderSensitisationSection,
  AntiDiscriminationSection,
  HeroSection,
  InternalComplaintsSection,
  AntiRaggingSection,
  GrievanceRedressalSection,
  StudentDisciplineSection,
} from "@/presentation/about/krmu-committee";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { getCommitteeService } from "@/features/about/krmu-committee";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("krmu-committee");
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

const KrmuCommitteePage = async () => {
  const {
    heroSection,
    antiDiscriminationSection,
    genderSensitisationSection,
    internalComplaintsSection,
    antiRaggingSection,
    grievanceRedressalSection,
    studentDisciplineSection,
  } = await getCommitteeService().getStaticData();

  return (
    <div className="pt-[140px] md:pt-[6.5%]">
      <HeroSection {...heroSection} />
      <AntiDiscriminationSection {...antiDiscriminationSection} />
      <GenderSensitisationSection {...genderSensitisationSection} />
      <InternalComplaintsSection {...internalComplaintsSection} />
      <AntiRaggingSection {...antiRaggingSection} />
      <GrievanceRedressalSection {...grievanceRedressalSection} />
      <StudentDisciplineSection {...studentDisciplineSection} />
    </div>
  );
};

export default KrmuCommitteePage;
