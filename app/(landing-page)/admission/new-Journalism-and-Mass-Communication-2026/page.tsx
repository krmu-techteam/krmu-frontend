import { getProgrammePageData } from "@/lib/api/programme";
import ProgrammesAlumni from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/ProgrammesAlumni";
import ProgrammesOurLocation from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/ProgrammesOurLocation";
import ProgrammesSearch from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/ProgrammesSearch";
import { STRAPI_URL } from "@/app/constant";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";
import { createBreadcrumbProgSchema } from "@/lib/api/common";
import Script from "next/script";
import ProgrammesHero from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/ProgrammesHero";
import LearnByDoingSection from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/ProgrammesConnectWithUs";
import CareerPathsSection from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/CareerPathsSection";
import ExpertsSection from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/ExpertsSection";
import FacultyMentorsSection from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/FacultyMentorsSection";
import PostgraduatePortfolio from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/PostgraduatePortfolio";
import EligibilitySection from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/EligibilitySection";
import FAQSection from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/FAQSection";
import MediaCTASection from "../../../(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/comp/MediaCTASection";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("programmes");
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

const JournalismAndMassCommunication = async () => {
  const ProgrammeData = await getProgrammePageData();
  const programmeAlumnis = ProgrammeData?.alumni;
  const breadcrumbItems = [
    { name: "Home", url: "https://www.krmangalam.edu.in/" },
    { name: "Programs", url: "https://www.krmangalam.edu.in/programmes" },
  ];

  const breadcrumbSchema = createBreadcrumbProgSchema(breadcrumbItems);

  return (
    <>
      <Script
        id="programmes-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <ProgrammesHero />
      <ProgrammesSearch />
      <ProgrammesAlumni />
      <ProgrammesOurLocation />
      <LearnByDoingSection />
      <CareerPathsSection />
      <ExpertsSection />
      <FacultyMentorsSection />
      <PostgraduatePortfolio />
      <EligibilitySection />
      <FAQSection />
      <MediaCTASection />
    </>
  );
};

export default JournalismAndMassCommunication;
