import { getProgrammePageData } from "@/lib/api/programme";
import ProgrammesAlumni from "./comp/ProgrammesAlumni";
import ProgrammesOurLocation from "./comp/ProgrammesOurLocation";
import ProgrammesSearch from "./comp/ProgrammesSearch";
import { STRAPI_URL } from "@/app/constant";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";
import { createBreadcrumbProgSchema } from "@/lib/api/common";
import Script from "next/script";
import ProgrammesHero from "./comp/ProgrammesHero";
import LearnByDoingSection from "./comp/ProgrammesConnectWithUs";
import CareerPathsSection from "./comp/CareerPathsSection";
import ExpertsSection from "./comp/ExpertsSection";
import FacultyMentorsSection from "./comp/FacultyMentorsSection";
import PostgraduatePortfolio from "./comp/PostgraduatePortfolio";
import EligibilitySection from "./comp/EligibilitySection";
import FAQSection from "./comp/FAQSection";
import MediaCTASection from "./comp/MediaCTASection";

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

  const heroSection: any = {
    id: 3440,
    subtitle:
      "Master AI & Machine Learning with IBM and Microsoft — From Day One’ ",
    description:
      "Step into the future with a B.Tech. CSE (AI & ML) programme designed to fuel intelligence, innovation, and industry excellence.\n\n\n",
    imgvideo: "Video",
    videofield: "https://www.youtube.com/watch?v=39uHV_rcawc",
    formField: null,
    formId: "acdc7065c22d12fc12a12848d5db1825",
    herobtn: {
      id: 43853,
      buttontext: "Apply Now",
      buttonlink:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/B_Tech_Computer_Science_and_Engineering_AI_and_ML_with_academic_support_of_IBM_and_powered_by_Microsoft_Certifications_c28e9ff274.jpg",
      buttonclass: "npfWidget-acdc7065c22d12fc12a12848d5db1825",
      popupFormId: null,
      containerPopupFormId: null,
    },
    heroimg: {
      id: 4976,
      documentId: "kbtysvh7d8bet4pa209hf3gz",
      name: "Hero Image.png",
      alternativeText: "BTech CSE (AI & ML) Students Image at KRMU",
      caption: null,
      width: 640,
      height: 600,
      formats: {
        small: {
          ext: ".png",
          url: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/small_Hero_Image_f55fa9fd76.png",
          hash: "small_Hero_Image_f55fa9fd76",
          mime: "image/png",
          name: "small_Hero Image.png",
          path: null,
          size: 499.86,
          width: 500,
          height: 469,
          sizeInBytes: 499860,
        },
        thumbnail: {
          ext: ".png",
          url: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/thumbnail_Hero_Image_f55fa9fd76.png",
          hash: "thumbnail_Hero_Image_f55fa9fd76",
          mime: "image/png",
          name: "thumbnail_Hero Image.png",
          path: null,
          size: 68.85,
          width: 166,
          height: 156,
          sizeInBytes: 68847,
        },
      },
      hash: "Hero_Image_f55fa9fd76",
      ext: ".png",
      mime: "image/png",
      size: 173.68,
      url: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Hero_Image_f55fa9fd76.png",
      previewUrl: null,
      provider: "strapi-provider-upload-strapi-cloud",
      provider_metadata: null,
      createdAt: "2025-10-08T10:20:25.590Z",
      updatedAt: "2026-05-11T06:39:22.981Z",
      publishedAt: "2025-10-08T10:20:25.592Z",
      related: [
        "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
        "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
      ],
    },
  };

  return (
    <>
      <Script
        id="programmes-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <ProgrammesHero heroSection={heroSection} />
      <ProgrammesSearch />
      <ProgrammesAlumni heroSection={heroSection} />
      <ProgrammesOurLocation />
      <LearnByDoingSection />
      <CareerPathsSection />
      <ExpertsSection />
      <FacultyMentorsSection />
      <PostgraduatePortfolio heroSection={heroSection} />
      <EligibilitySection heroSection={heroSection} />
      <FAQSection />
      <MediaCTASection heroSection={heroSection} />
    </>
  );
};

export default JournalismAndMassCommunication;
