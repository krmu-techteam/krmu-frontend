import { folderRouteSEO } from "@/lib/api/siteseo";
import AcademicResources from "./comp/AcademicResources";
import ContactEnquiries from "./comp/ContactEnquiries";
import PublicationAchievements from "./comp/PublicationAchievements";
import ResearchAchievements from "./comp/ResearchAchievements";
import TeamLibrary from "./comp/TeamLibrary";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";
import {
  CIFSection,
  getResearchandinnovationContent,
  HeroSection,
  IPRLegalEthicsSection,
  KEICSection,
  OnGoingProjectsSection,
  RDCSection,
  ResearchDeanMessageSection,
  ResearchHighlightSection,
  TeamRDCSection,
} from "@/modules/research/research-and-innovation";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("research-and-innovation");
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

const ResearchAndInnovationPage = async () => {
  const { data } = await getResearchandinnovationContent();

  return (
    <>
      <HeroSection heroSection={data?.heroSection} />
      <RDCSection rdcSection={data?.rdcSection} />
      <ResearchDeanMessageSection
        researchDeanMessageSection={data?.researchDeanMessageSection}
      />
      <TeamRDCSection teamRdcSection={data?.teamRdcSection} />
      <CIFSection cifSection={data?.cifSection} />
      <KEICSection keicSection={data?.keicSection} />
      <IPRLegalEthicsSection
        iprLegalEthicsSection={data?.iprLegalEthicsSection}
      />
      <OnGoingProjectsSection onGoingProjectsSection={data?.onGoingProjectsSection} />
      <ResearchHighlightSection  researchHighlightSection={data?.researchHighlightSection} />
      <ResearchAchievements />
      <PublicationAchievements />
      <section className="py-[50px] px-4 bg-[url(/research/acadbg.webp)] bg-cover">
        <AcademicResources />
        <TeamLibrary />
      </section>
      <ContactEnquiries />
    </>
  );
};

export default ResearchAndInnovationPage;
