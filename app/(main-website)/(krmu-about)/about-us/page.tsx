import Image from "next/image";
import Link from "next/link";
import { getAboutKRMU } from "@/lib/api/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { STRAPI_URL } from "@/app/constant";
import AccrediationLogo from "./AccrediationLogo";
import KRMUGroupCard from "./KRMUGroupCard";
import HallofFame from "./HallofFame";
import AdvisoryOrDean from "./AdvisoryOrDean";
import IndustryCollabLogos from "./IndustryCollabLogos";
import { Eye, Target } from "lucide-react";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import PioneerExcellence from "@/app/(main-website)/Home/PioneerExcellence";

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
      <section className="min-h-[1px] h-full pt-44 lg:h-[600px] bg-[url(/krmabout.webp)] bg-cover bg-bottom relative overflow-hidden">
        {/* Bottom-Weighted Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051630] via-[#051630]/50 to-transparent z-0" />

        <div className="max-w-[1440px] mx-auto w-full text-white h-full flex flex-col justify-center items-center text-center px-4 relative z-10">
          <div className="max-w-6xl w-full">
            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-8xl font-bold mb-6 drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)] leading-tight whitespace-normal md:whitespace-nowrap">
              {aboutData?.title}
            </h1>
            <div className="w-20 h-1 bg-white mx-auto mb-8 rounded-full shadow-lg opacity-80" />
            <p className="text-base md:text-md xl:text-lg font-medium drop-shadow-md opacity-95 leading-relaxed max-w-5xl mx-auto">
              {aboutData?.subtitle}
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 bg-slate-50/50">
        <div className="max-w-[1440px] mx-auto w-full px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#051630]">
            {aboutData?.accrediation?.title}
          </h2>

          <div className="w-full pt-4 md:pt-8">
            <AccrediationLogo logosData={accrediationLogoData} />
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
        <div className="max-w-[1440px] mx-auto w-full px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <span className="bg-transparent text-slate-700 px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.2em] border border-slate-700 shadow-sm">
                {KRMGRP?.title}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#051630] mb-6 leading-tight">
              {KRMGRP?.subtitle}
            </h2>
            <p className="text-slate-600 text-md md:text-lg max-w-8xl mx-auto leading-relaxed">
              {KRMGRP?.description}
            </p>
          </div>
          <div className="p-4">
            <KRMUGroupCard krmBranchImages={krmBranchData} />
          </div>
        </div>
      </section>
      <section className="bg-[#051630] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-white/[0.03] to-transparent border-l-4 border-blue-500 p-8 md:p-10 rounded-r-2xl shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
              <div className="w-full md:w-1/3">
                <h2 className="text-2xl md:text-3xl text-pretty font-medium text-white leading-tight tracking-tight">
                  {aboutData?.thenexgentitle}
                </h2>
              </div>
              <div className="w-full md:w-2/3 border-l border-white/10 md:pl-12">
                <p className="text-slate-300 text-base md:text-lg leading-relaxed opacity-90 font-light">
                  {aboutData?.thenexgendescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 xl:px-8 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-sm shadow-xl border border-slate-100">
          {/* Vision Card - Dark Academic */}
          <div className="relative group p-8 md:p-10 xl:py-16 bg-[#051630] overflow-hidden min-h-[380px] flex flex-col justify-start">
            {/* Abstract Background Decoration */}
            <div className="absolute -top-10 -right-10 text-[350px] font-black text-white/[0.03] select-none pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-6 leading-none">
              V
            </div>
            {/* CSS Dot Pattern */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-xl rounded-sm mb-10 border border-white/20 shadow-xl transition-transform duration-500 group-hover:scale-110">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl lg:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.1] text-balance">
                {aboutData?.visionmission?.visiontitle}
              </h4>
              <div className="w-20 h-1.5 bg-white mb-10 rounded-full" />
              <div className="text-blue-50/90 text-md md:text-lg leading-relaxed max-w-xl font-light tick-li">
                <BlocksRenderer
                  content={aboutData?.visionmission?.visiondescription}
                />
              </div>
            </div>
          </div>

          {/* Mission Card - Light Academic */}
          <div className="relative group p-8 md:p-10 xl:py-16 bg-slate-50 overflow-hidden min-h-[550px] flex flex-col justify-start border-t md:border-t-0 md:border-l border-slate-200">
            {/* Abstract Background Decoration */}
            <div className="absolute -top-10 -right-10 text-[350px] font-black text-[#051630]/[0.03] select-none pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-6 leading-none">
              M
            </div>
            {/* CSS Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(#051630 1.5px, transparent 1.5px), linear-gradient(90deg, #051630 1.5px, transparent 1.5px)`,
                backgroundSize: "48px 48px",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-4 bg-[#051630]/5 rounded-sm mb-10 border border-[#051630]/10 shadow-sm transition-transform duration-500 group-hover:scale-110">
                <Target className="w-8 h-8 text-[#051630]" />
              </div>
              <h4 className="text-4xl lg:text-5xl font-bold text-[#051630] mb-8 tracking-tight leading-[1.1] text-balance">
                {aboutData?.visionmission?.missiontitle}
              </h4>
              <div className="w-20 h-1.5 bg-[#051630] mb-10 rounded-full" />
              <div className="text-slate-700 text-md md:text-lg leading-relaxed max-w-xl font-medium tick-li">
                <BlocksRenderer
                  content={aboutData?.visionmission?.missiondescription}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 md:px-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-wrap xl:flex-nowrap w-full">
            <div className="w-full xl:w-1/3 flex flex-col">
              <div className="bg-[url(/industry.webp)] flex flex-col justify-end bg-cover h-[200px] sm:h-[240px] bg-top xl:bg-center pt-8 pb-4 px-4 text-white font-semibold">
                <h3 className="text-xl sm:text-3xl md:text-4xl sm:mb-5">
                  Industry <br />
                  Collaborated
                </h3>
                <h5 className="text-2xl sm:mb-5">Academic Curriculum</h5>
              </div>
              <div className="bg-[url(/nep.webp)] bg-no-repeat bg-bottom-right p-4 h-64 text-black bg-[#e1e7e9]">
                <h3 className="text-3xl md:text-4xl font-semibold leading-[1.3]">
                  Successful <br /> NEP <br /> Implementation
                </h3>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <div className="bg-[url(/stellar.webp)] bg-cover pt-20 md:pt-40 pb-8 px-6 h-[400px] md:h-[500px] text-white flex flex-col justify-end font-semibold">
                <h4 className="text-3xl md:text-5xl mb-5">
                  Stellar <br />
                  Placements
                </h4>
                <h5 className="text-2xl mb-2.5">Kick Start Careers</h5>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <div className="bg-[url(/finance-assist.webp)] bg-no-repeat bg-cover pt-20 px-6 md:pt-40 pb-8 h-[400px] md:h-[500px] text-white flex flex-col justify-end font-semibold w-full">
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
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="bg-[url(/student.webp)] pt-16 md:pt-20 pb-8 px-8 text-white bg-cover h-[300px] md:h-[350px]">
                <h4 className="text-2xl">Experience</h4>
                <h5 className="md:text-3xl font-semibold leading-[1.3]">
                  Student Diversity & <br />
                  Vibrant Campus Life
                </h5>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-[url(/andi.jpg)] bg-cover pt-16 md:pt-32 pb-8 px-8 text-white h-[300px] md:h-[350px]">
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
        <div className="w-full   text-center">
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
        <div className="max-w-[1440px] mx-auto w-full">
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
        <div className="max-w-[1440px] mx-auto w-full text-white">
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
