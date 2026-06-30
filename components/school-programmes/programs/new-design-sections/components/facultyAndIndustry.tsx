"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getFacultyAndIndustryContent } from "../lib/getContent";
import { Fraunces, Inter } from "next/font/google";
import * as Icons from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FacultyCardType } from "../types/contentFacultyAndIndustry";
import Link from "next/link";

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

// Inner Component for handling individual Faculty Card
const FacultyCard = ({
  name,
  desg,
  qual,
  imgUrl,
  linkedin,
  onOpenProfile,
}: {
  name: string;
  desg: string;
  qual: string;
  imgUrl: string;
  linkedin: string;
  onOpenProfile: () => void;
}) => {
  return (
    <div className="relative group flex flex-col min-h-[374px] w-full max-w-[268px] mx-auto border border-[#D0C6B1]/30 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer rounded-[5px]">
      {linkedin && (
        <Link href={linkedin}>
          <div className="absolute w-13 h-13 bg-[url(https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/8e9127f3a23f0410f6e38ad1af59850e5bb1f1df_9de1bd0ecf.png)] bg-cover bg-center right-1 top-1 z-99 " />
        </Link>
      )}

      {/* Top Portrait Image Container */}
      <div
        onClick={onOpenProfile}
        className="relative w-full min-h-[200px] overflow-hidden bg-white"
      >
        <Image
          src={imgUrl}
          alt={name}
          fill
          className="object-contain  transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
        />
      </div>

      {/* Bottom Profile Details */}
      <div
        onClick={onOpenProfile}
        className={`relative ${inter.className} flex-1 flex flex-col  p-6 bg-[#012D52] text-center`}
      >
        <div className="absolute h-[7px] top-0 left-0 w-full bg-[linear-gradient(90deg,#192F4B_1.92%,#006B6F_50.96%,#192F4B_100%)]" />

        <div className="flex flex-col items-center flex-1 justify-center">
          <h4 className="font-bold text-[14px] text-white tracking-wide mb-1 leading-snug">
            {name}
          </h4>
          <p className="text-[14px] text-[#E7C268] uppercase  tracking-[0.5px] mb-2 ">
            {desg}
          </p>
          <p className="text-[14px] text-white leading-relaxed  ">{qual}</p>
        </div>
      </div>
    </div>
  );
};

type Props = {
  slug: string;
};

const FacultyAndIndustry = ({ slug }: Props) => {
  const data = getFacultyAndIndustryContent();
  const content = data.facultyAndIndustry;

  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activeFaculty, setActiveFaculty] = useState<FacultyCardType | null>(
    null,
  );

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

  const cards = content.faculties || [];

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

          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Column: Image Banner */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full max-w-[496px] aspect-[496/486] overflow-hidden shadow-xl shadow-slate-900/10 mx-auto">
                <Image
                  src={
                    slug === "mba-fintech"
                      ? content.classroomImage
                      : slug === "mba-digital-marketing"
                        ? "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1562_47c760d501.jpg"
                        : slug === "mba"
                          ? "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1562_1_e3e2d575b4.jpg"
                          : ""
                  }
                  alt="MBA Classroom setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 496px"
                />
              </div>
            </div>

            {/* Right Column: Three Sub-sections */}
            <div className="flex flex-col gap-6 pr-0 lg:pr-8 w-full lg:w-1/2 max-w-[580px]">
              {content.sections.map((sect, idx) => {
                const isOpen = activeSection === idx;
                return (
                  <div
                    key={idx}
                    className="pb-6 border-b border-[#C5A76B] last:border-b-0 last:pb-0"
                  >
                    <h3
                      className={`${fraunces.className} text-[20px] sm:text-[23px] font-semibold text-[#012D52]`}
                    >
                      {sect.title}
                    </h3>
                    <p
                      className={`${inter.className} text-[14px] sm:text-[16px] leading-relaxed tracking-[0.7px] text-[#012D52] mb-3`}
                    >
                      {sect.desc}
                    </p>

                    {/* Read More Trigger Button */}
                    <button
                      onClick={() => {
                        if (sect.details || sect.partners) {
                          setActiveSection(isOpen ? null : idx);
                        }
                      }}
                      className="group inline-flex items-center gap-1.5 font-semibold text-[14px] tracking-[0.7px] underline underline-offset-2 decoration-1 text-[#AA8324] transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0 text-left"
                    >
                      <span className="transition-transform duration-300">
                        <Icons.Play
                          size={8}
                          fill="currentColor"
                          className={`text-current transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                        />
                      </span>
                      {isOpen ? "Read Less" : sect.linkText}
                    </button>

                    {/* Smooth Expandable Content Panel */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* Detailed Text Block */}
                        {sect.details && (
                          <p
                            className={`${inter.className} text-[14px] sm:text-[15px] leading-relaxed text-black/80 mb-2`}
                          >
                            {sect.details}
                          </p>
                        )}

                        {/* Curriculum Partners Grid Block */}
                        {sect.partners && (
                          <div className="flex flex-col gap-4 mt-2">
                            {sect.partners.map((partner, pIdx) => (
                              <div
                                key={pIdx}
                                className="border-b border-[#BCB093]/20 pb-3 last:border-b-0 last:pb-0"
                              >
                                <h4
                                  className={`${inter.className} font-bold text-xs sm:text-[13px] text-[#012D52] mb-1`}
                                >
                                  {partner.name}
                                </h4>
                                <p
                                  className={`${inter.className} text-[12px] sm:text-[13px] leading-relaxed text-black/80`}
                                >
                                  {partner.role}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part: Faculty slider section */}
      {cards.length > 0 && (
        <div className="w-full bg-[#F7F0E0] py-16">
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
                {cards.map((card, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-6"
                  >
                    <FacultyCard
                      name={card.name}
                      desg={card.designation}
                      qual={card.qualification}
                      imgUrl={card.image}
                      linkedin={card.linkedin}
                      onOpenProfile={() => setActiveFaculty(card)}
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

      {/* Faculty Profile Modal Overlay */}
      {activeFaculty && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <div
            onClick={() => setActiveFaculty(null)}
            className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] lg:max-h-[85vh] overflow-hidden rounded-3xl bg-[#FDF7EB] shadow-[0_25px_80px_rgba(0,0,0,0.25)] border border-[#BCB093]/30 animate-in fade-in zoom-in-95 duration-300 flex flex-col">
            {/* Close */}
            <button
              onClick={() => setActiveFaculty(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#012D52] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Icons.X size={22} />
            </button>

            <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] overflow-y-auto lg:overflow-hidden max-h-[90vh] lg:max-h-[85vh]">
              {/* Left Side */}
              <div className="bg-gradient-to-b from-[#F6E8C9] to-[#FDF7EB] p-6 flex justify-center items-start flex-shrink-0">
                <div className="relative w-[220px] h-[220px] lg:w-full lg:h-auto lg:max-w-[260px] aspect-square lg:aspect-auto overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={activeFaculty.image}
                    alt={activeFaculty.name}
                    fill
                    className="object-cover lg:object-contain object-top"
                    sizes="(max-width: 1024px) 220px, 260px"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col flex-1 lg:max-h-[85vh] lg:overflow-hidden">
                {/* Header */}
                <div className="border-b border-[#BCB093]/30 px-8 pt-8 pb-6">
                  <h2
                    className={`${fraunces.className} flex items-center gap-2 text-3xl lg:text-4xl font-semibold text-[#012D52] leading-tight`}
                  >
                    {activeFaculty.name}

                    {activeFaculty.linkedin && (
                      <a href={activeFaculty.linkedin}>
                        <div className="w-15 h-15 bg-[url(https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/8e9127f3a23f0410f6e38ad1af59850e5bb1f1df_9de1bd0ecf.png)] bg-cover bg-center z-99 " />
                      </a>
                    )}
                  </h2>

                  <div className="mt-3 flex flex-col items-start gap-3">
                    <span
                      className={`${inter.className} rounded-full bg-[#A17200]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#A17200]`}
                    >
                      {activeFaculty.designation}
                    </span>

                    <span
                      className={`${inter.className} text-sm px-4 font-medium text-[#012D52]/75`}
                    >
                      {activeFaculty.qualification}
                    </span>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-visible lg:overflow-y-auto px-8 py-7">
                  <div
                    className={`${inter.className} space-y-5 text-[15px] leading-8 text-[#2F3A45]`}
                  >
                    {activeFaculty.details.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacultyAndIndustry;
