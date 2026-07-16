import { getAboutKRMU } from "@/lib/api/about";
import { STRAPI_URL } from "@/app/constant";
import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import PioneerExcellence from "@/app/(main-website)/Home/PioneerExcellence";
import {
  AccreditationSection,
  GroupInstitutionsSection,
  NextGenerationSection,
  VisionMissionSection,
  WhyKRMUSection,
  AdvisoryOrDeanSection,
  HallOfFameSection,
  GlobalPartnershipsSection,
  KrmuCommitteeSection,
  HeroSection,
} from "@/presentation/about/sections";
import { getAboutService, IAboutService } from "@/features/about/about-us";
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("the-university");
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
  const aboutData = await getAboutKRMU();

  const aboutService: IAboutService = getAboutService();

  const [
    aboutPage,
    accrediation,
    krmugroup,
    halloffame,
    visionmission,
    internationcollaboration,
    krmucommittee,
  ] = await Promise.all([
    aboutService.getData(),
    aboutService.getSection("accrediation"),
    aboutService.getSection("krmugroup"),
    aboutService.getSection("halloffame"),
    aboutService.getSection("visionmission"),
    aboutService.getSection("internationcollaboration"),
    aboutService.getSection("krmucommittee"),
  ]);

  return (
    <>
      <HeroSection title={aboutPage.title} subtitle={aboutPage.subtitle} />
      <AccreditationSection
        title={accrediation?.title || ""}
        accrediationlogos={accrediation?.accrediationlogos || []}
      />
      <GroupInstitutionsSection
        title={krmugroup?.title || ""}
        subtitle={krmugroup?.subtitle || ""}
        description={krmugroup?.description || ""}
        krmBranchData={krmugroup?.krmbranch || []}
      />
      <NextGenerationSection
        thenexgentitle={aboutPage?.thenexgentitle}
        thenexgendescription={aboutPage?.thenexgendescription}
      />
      <VisionMissionSection />
      <WhyKRMUSection />
      <AdvisoryOrDeanSection />
      <HallOfFameSection
        title={halloffame?.title || ""}
        hallfame={halloffame?.hallfame || []}
      />

      <GlobalPartnershipsSection aboutData={aboutData} />

      <KrmuCommitteeSection aboutData={aboutData} />
      <PioneerExcellence />
    </>
  );
};

export default page;
