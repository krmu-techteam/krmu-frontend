import Image from "next/image";
import Link from "next/link";
import { getAboutKRMU } from "@/lib/api/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { STRAPI_URL } from "@/app/constant";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import PioneerExcellence from "@/app/(main-website)/Home/PioneerExcellence";
import AccrediationLogo from "../about-krmu/AccrediationLogo";
import KRMUGroupCard from "../about-krmu/KRMUGroupCard";
import AdvisoryOrDean from "../about-krmu/AdvisoryOrDean";
import HallofFame from "../about-krmu/HallofFame";
import IndustryCollabLogos from "../about-krmu/IndustryCollabLogos";

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
      <section className="min-h-[1px] h-full pt-44 lg:h-[600px] bg-[url(/krmabout.webp)] bg-cover bg-bottom relative prog-banner-shade">
        <div className="max-w-[1600px] mx-auto w-full text-white h-full flex flex-col justify-center px-4">
          <div className="z-10 max-w-7xl w-full">
            <h1 className="text-2xl md:text-6xl xl:text-8xl font-semibold mb-5">
              {aboutData?.title}
            </h1>
            <p className="text-lg md:text-[22px] mb-10">
              {aboutData?.subtitle}
            </p>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="max-w-[1600px] mx-auto w-full px-4">
          <h2 className="text-4xl md:text-5xl font-semibold">
            {aboutData?.accrediation?.title}
          </h2>
          <div className="w-full">
            <AccrediationLogo logosData={accrediationLogoData} />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1600px] mx-auto w-full px-4">
          <div className="mb-5">
            <h3 className="text-[#00A0E3] text-4xl">{KRMGRP?.title}</h3>
            <h4 className="text-4xl font-semibold leading-[1.3] mt-2.5 mb-3.5">
              {KRMGRP?.subtitle}
            </h4>
            <p className="mb-5">{KRMGRP?.description}</p>
          </div>
          <div className="mb-10">
            <KRMUGroupCard krmBranchImages={krmBranchData} />
          </div>
        </div>
      </section>
      <section className="mt-5 bg-[#051630] py-[60px] px-4 xl:px-14">
        <div className="max-w-[1600px] mx-auto w-full text-white">
          <h4 className="md:leading-[2] text-2xl font-semibold mb-5">
            {aboutData?.thenexgentitle}
          </h4>
          <p>{aboutData?.thenexgendescription}</p>
        </div>
      </section>
      <section className="py-[50px] px-4 xl:px-[30px] bg-[#000E8B1A]">
        <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto w-full gap-2.5">
          <div className="w-full md:w-2/5 p-5 xl:mr-2.5 xl:ml-8 bg-[url(/aboutvision.webp)] text-white bg-cover">
            <h4 className="text-3xl md:text-5xl mb-5 lg:text-[64px] font-semibold">
              {aboutData?.visionmission?.visiontitle}
            </h4>

            <BlocksRenderer
              content={aboutData?.visionmission?.visiondescription}
            />
          </div>
          <div className="w-full md:w-3/5 p-5 xl:mr-2.5 xl:ml-8 bg-[url(/aboutmission.webp)] bg-cover text-white tick-li">
            <h4 className="text-3xl md:text-5xl mb-5 lg:text-[64px] font-semibold">
              {aboutData?.visionmission?.missiontitle}
            </h4>
            <BlocksRenderer
              content={aboutData?.visionmission?.missiondescription}
            />
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-20 px-4 md:px-[30px]">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-wrap xl:flex-nowrap  gap-5 w-full">
            <div className="w-full xl:w-1/3 flex flex-col gap-5">
              <div className="bg-[url(/industry.webp)] flex flex-col justify-end bg-cover h-[250px] sm:h-[300px] bg-top xl:bg-center pt-12 md:pt-[272px] pb-2.5 px-2.5 text-white font-semibold">
                <h3 className="text-xl sm:text-3xl md:text-4xl sm:mb-5">
                  Industry <br />
                  Collaborated
                </h3>
                <h5 className="text-2xl sm:mb-5">Academic Curriculum</h5>
              </div>
              <div className="bg-[url(/nep.webp)] bg-no-repeat bg-bottom-right p-2.5 min-h-0.5 h-80 text-black bg-[#e1e7e9]">
                <h3 className="text-3xl md:text-4xl font-semibold leading-[1.3]">
                  Successful <br /> NEP <br /> Implementation
                </h3>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <div className="bg-[url(/stellar.webp)] bg-cover pt-40 md:pt-[440px] pb-[30px] px-2.5 xl:px-[30px] h-full text-white flex flex-col justify-end font-semibold">
                <h4 className="text-3xl md:text-5xl mb-5">
                  Stellar <br />
                  Placements
                </h4>
                <h5 className="text-2xl mb-2.5">Kick Start Careers</h5>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <div className="bg-[url(/finance-assist.webp)] bg-no-repeat bg-cover pt-40 px-4 md:pt-[440px] pb-[30px] md:px-[30px] h-full text-white flex flex-col justify-end font-semibold w-full">
                <h4 className="text-3xl md:text-5xl mb-5">
                  Financial <br />
                  Assistance
                </h4>
                <h5 className="text-2xl mb-2.5">
                  Through Scholarships & Loans
                </h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 gap-5">
            <div className="w-full md:w-1/2">
              <div className="bg-[url(/student.webp)] pt-32 xl:pt-64 pb-[30px] px-[30px] text-white bg-cover h-full">
                <h4 className="text-3xl">Experience</h4>
                <h5 className="md:text-5xl font-semibold leading-[1.3]">
                  Student Diversity & <br />
                  Vibrant Campus Life
                </h5>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-[url(/andi.jpg)] bg-cover pt-32 xl:pt-64 pb-[30px] px-[30px] text-white  h-full">
                <h4 className="text-3xl">Our Excellent</h4>
                <h5 className="md:text-5xl font-semibold leading-[1.3]">
                  Teacher Pedagogy
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdvisoryOrDean />
      {/* <AdvisoryDean /> */}
      <section className="py-16 bg-[url(/kree-bg.webp)] bg-cover">
        <div className="max-w-[1600px] mx-auto w-full text-center">
          <h3 className="text-white text-5xl font-semibold mb-5">
            {hallOfFameData?.title}
          </h3>
          <HallofFame fameData={hallOfFameData?.hallfame} />
          <Link
            href="/awards-and-achievements"
            className="p-2.5 px-[18px] bg-white text-base inline-block rounded-sm leading-4 text-[#cb000d]"
          >
            Know More
          </Link>
        </div>
      </section>

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
