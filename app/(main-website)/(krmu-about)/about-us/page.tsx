import Image from "next/image";
import Link from "next/link";
import { getAboutKRMU } from "@/lib/api/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { STRAPI_URL } from "@/app/constant";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import PioneerExcellence from "@/app/(main-website)/Home/PioneerExcellence";
import HallofFame from "../about-krmu/HallofFame";
import IndustryCollabLogos from "../about-krmu/IndustryCollabLogos";
import {
  HeroSection,
  AccreditationSection,
  GroupInstitutionsSection,
  NextGenerationSection,
  VisionMissionSection,
  WhyKRMUSection,
  AdvisoryOrDeanSection,
  HallOfFameSection,
} from "@/modules/about";
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

  const accrediationLogoData = aboutData?.accrediation?.accrediationlogos;
  const KRMGRP = aboutData?.krmugroup;
  const krmBranchData = aboutData?.krmugroup?.krmbranch;
  const hallOfFameData = aboutData?.halloffame;

  return (
    <>
      <HeroSection title={aboutData.title} subtitle={aboutData.subtitle} />
      <AccreditationSection
        title={aboutData?.accrediation?.title}
        logosData={accrediationLogoData}
      />
      <GroupInstitutionsSection
        title={KRMGRP?.title}
        subtitle={KRMGRP?.subtitle}
        description={KRMGRP?.description}
        krmBranchData={krmBranchData}
      />
      <NextGenerationSection
        thenexgentitle={aboutData?.thenexgentitle}
        thenexgendescription={aboutData?.thenexgendescription}
      />
      <VisionMissionSection />
       <WhyKRMUSection />
      <AdvisoryOrDeanSection />
      <HallOfFameSection title={hallOfFameData?.title} hallfame={hallOfFameData?.hallfame} />

      <section className="py-16 px-4">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-3/5">
              <h3 className="text-4xl md:text-5xl font-semibold max-w-lg w-full leading-[1.14] mb-2.5">
                {aboutData?.internationcollaboration?.title}
              </h3>
              <BlocksRenderer
                content={aboutData?.internationcollaboration?.description}
              />
              {(aboutData?.internationcollaboration?.intcollabbtn?.buttonlink ||
                aboutData?.internationcollaboration?.intcollabbtn
                  ?.buttonclass) && (
                <Link
                  href={
                    aboutData?.internationcollaboration?.intcollabbtn
                      ?.buttonlink
                  }
                  className={`p-2.5 px-[18px] bg-[#cb000d] text-base inline-block rounded-sm leading-4 text-white ${aboutData?.internationcollaboration?.intcollabbtn?.buttonclass}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    aboutData?.internationcollaboration?.intcollabbtn
                      ?.buttontext
                  }
                </Link>
              )}
              <IndustryCollabLogos
                indusLogos={
                  aboutData?.internationcollaboration?.internationcollablogos
                }
              />
            </div>
            <div className="w-full md:w-2/5">
              <Image
                src={`${STRAPI_URL}${aboutData?.internationcollaboration?.image.url}`}
                width={600}
                height={600}
                alt="about collab"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 bg-[url(/krmu-committee.webp)] bg-cover bg-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000080]">
        <div className="max-w-[1600px] mx-auto w-full text-white">
          <div className="w-full xl:w-1/2 relative z-10">
            <h4 className="text-5xl lg:text-[80px] mb-5 leading-[1.13]">
              {aboutData?.krmucommittee?.title}
            </h4>
            <BlocksRenderer content={aboutData?.krmucommittee?.description} />
            {(aboutData?.krmucommittee?.committeebtn?.buttonlink ||
              aboutData?.krmucommittee?.committeebtn?.buttonclass) && (
              <Link
                href={aboutData?.krmucommittee?.committeebtn?.buttonlink}
                className={`mt-5 p-2.5 px-[18px] bg-[#cb000d] text-base inline-block rounded-sm leading-4 text-white ${aboutData?.krmucommittee?.committeebtn?.buttonclass}`}
              >
                {aboutData?.krmucommittee?.committeebtn?.buttontext}
              </Link>
            )}
          </div>
        </div>
      </section>
      <PioneerExcellence />
    </>
  );
};

export default page;
