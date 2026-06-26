"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getFacultyAndIndustryContent } from "../lib/getContent";
import { Fraunces, Inter } from "next/font/google";
import * as Icons from "lucide-react";
import { getFacultyBySlug } from "@/lib/api/faculty";
import * as cheerio from "cheerio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// Import SOMC faculties only
import { somcFaculties } from "@/lib/api/school-faculties/somc";
import Autoplay from "embla-carousel-autoplay";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

// Inner Component for handling individual Faculty Card's social link parsing
const FacultyCard = ({
  name,
  desg,
  qual,
  imgUrl,
  slug,
  isDean,
  linkedinUrlProp,
}: {
  name: string;
  desg: string;
  qual: string;
  imgUrl: string;
  slug?: string;
  isDean?: boolean;
  linkedinUrlProp?: string;
}) => {
  const [linkedinUrl, setLinkedinUrl] = useState<string>(
    linkedinUrlProp || "#",
  );

  useEffect(() => {
    if (isDean || !slug) return;
    let mounted = true;
    const fetchLinkedin = async () => {
      try {
        const res = await getFacultyBySlug(slug);
        if (!mounted || !res?.[0]?.content?.rendered) return;
        const $ = cheerio.load(res[0].content.rendered);
        $(".fusion-checklist li a").each((_, el) => {
          const href = $(el).attr("href")?.trim();
          if (href && href.includes("linkedin.com")) {
            setLinkedinUrl(href);
          }
        });
      } catch (e) {
        console.error("Error parsing LinkedIn for faculty card", e);
      }
    };
    fetchLinkedin();
    return () => {
      mounted = false;
    };
  }, [slug, isDean]);

  return (
    <div className="relative group overflow-hidden rounded-[5px] bg-white shadow-lg flex flex-col min-h-[400px] max-w-[267px]">
      {/* Top Image Section */}
      <div className="relative h-[250px] w-full overflow-hidden flex items-end justify-center">
        {/* LinkedIn Link Icon */}
        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 z-20  hover:scale-108 transition-transform"
        >
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/8e9127f3a23f0410f6e38ad1af59850e5bb1f1df_9de1bd0ecf.png"
            alt={name}
            width={1024}
            height={1024}
            className="object-cover w-[50px] h-[50px] "
          />
        </Link>

        {/* Portrait Image */}
        <div className="relative w-full h-full">
          <Image
            src={imgUrl}
            alt={name}
            fill
            className="object-cover object-top transition-transform  duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Bottom Profile Details */}
      <div
        className={`relative ${inter.className} flex-1 flex flex-col  text-center bg-[#012D52] z-10 `}
      >
        <div
          className="absolute h-[5px] top-[2px] w-full bg-[linear-gradient(90deg,#192F4B_1.92%,#006B6F_50.96%,#192F4B_100%)] 
"
        />
        <div className="pt-8">
          <h4 className="font-bold text-[14px] text-white tracking-wide mb-1 leading-snug">
            {name}
          </h4>
          <p className="text-[14px] text-[#EDBA55]  tracking-[0.5px] mb-2 leading-relaxed">
            {desg}
          </p>
          <p className="text-[14px] text-white  leading-relaxed px-2">{qual}</p>
        </div>
      </div>
    </div>
  );
};

const FacultyAndIndustry = () => {
  const data = getFacultyAndIndustryContent();
  const content = data.facultyAndIndustry;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Construct Cards List (Dean first, followed by top SOMC faculties)
  const cards: any[] = [];

  // 1. Add Dean Card statically from content
  if (content.dean) {
    cards.push({
      id: "dean",
      name: content.dean.name,
      desg: content.dean.designation,
      qual: content.dean.qualification,
      imgUrl: content.dean.image,
      isDean: true,
      linkedin: content.dean.linkedin,
    });
  }

  // 2. Add first 3 faculties from somc.ts
  somcFaculties.forEach((fac) => {
    cards.push({
      id: fac.id,
      name: fac.title?.rendered ?? "",
      desg: fac.acf?.staff_designation ?? "",
      qual: fac.acf?.["staff-qualification"] ?? "",
      imgUrl: fac.featured_media_url ?? "/blank.jpg",
      slug: fac.slug,
    });
  });

  return (
    <section className="w-full bg-[#FDF7EB] text-[#012D52]">
      {/* Top Part: Info & Grid */}
      <div className="w-full py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Subtitle & Title */}
          <div className="mb-6">
            <span
              className={`${inter.className} text-[#87601A] text-xs sm:text-[15px] font-semibold tracking-[0.7px] uppercase block mb-4`}
            >
              {content.badge}
            </span>
            <h2
              className={`${fraunces.className} text-[#0F2A4D] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight font-medium max-w-[712px]`}
            >
              {content.title}
            </h2>
          </div>

          <div className="w-full flex gap-8 lg:gap-12 items-center">
            {/* Left Column: Image Banner */}
            <div className="w-[50%]">
              <div className="relative min-w-[496px] min-h-[486px]  overflow-hidden shadow-xl shadow-slate-900/10">
                <Image
                  src={content.classroomImage}
                  alt="MBA Classroom setting"
                  width={1024}
                  height={1024}
                  className=" object-cover"
                />
              </div>
            </div>

            {/* Right Column: Three Sub-sections */}
            <div className=" flex flex-col gap-4 pr-0 lg:pr-8">
              {content.sections.map((sect, idx) => (
                <div
                  key={idx}
                  className="group pb-6 border-b border-[#C5A76B] last:border-b-0 last:pb-0"
                >
                  <h3
                    className={`${fraunces.className} text-[20px] sm:text-[23px] font-semibold text-[#012D52]`}
                  >
                    {sect.title}
                  </h3>
                  <p
                    className={`${inter.className} text-[14px] sm:text-[16px] leading-relaxed tracking-[0.7px]  text-[#012D52] mb-3`}
                  >
                    {sect.desc}
                  </p>
                  <Link
                    href={sect.link}
                    className="inline-flex items-center gap-1 font-semibold text-[14px] tracking-[0.7px] underline underline-offset-2 decoration-1 text-[#AA8324] transition-colors duration-300"
                  >
                    <span className="transition-transform group-hover:translate-x-0.5">
                      <Icons.Play
                        size={8}
                        fill="currentColor"
                        className="text-current"
                      />
                    </span>
                    {sect.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part: Faculty slider section */}
      {cards.length > 0 && (
        <div className="w-full bg-[#F7F0E0] py-16 ">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <h3
              className={`${fraunces.className} text-[28px] sm:text-[38px] font-bold text-[#0F2A4D] mb-8`}
            >
              Faculty
            </h3>

            {/* Carousel Slider */}
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full mb-10"
            >
              <CarouselContent className="-ml-6">
                {cards.map((card) => (
                  <CarouselItem
                    key={card.id}
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-6"
                  >
                    <FacultyCard
                      name={card.name}
                      desg={card.desg}
                      qual={card.qual}
                      imgUrl={card.imgUrl}
                      slug={card.slug}
                      isDean={card.isDean}
                      linkedinUrlProp={card.linkedin}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Slider Dots */}
            {count > 1 && (
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: count }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className={`h-2 rounded-[50px] transition-all duration-300 cursor-pointer ${
                      current === idx ? "w-12 bg-[#BCB093]" : "w-4 bg-[#244C7C]"
                    }`}
                    aria-label={`Page ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FacultyAndIndustry;
