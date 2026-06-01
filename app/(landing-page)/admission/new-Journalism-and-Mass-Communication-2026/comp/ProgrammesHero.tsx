"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

const AutoScrollPlugin = (AutoScroll as any).default ?? AutoScroll;

const ProgrammesHero = ({ heroSection }: any) => {
  return (
    <section className="pt-18 sm:pt-20 lg:pt-20 xl:pt-28 min-h-screen bg-[#f3f3f7] flex flex-col lg:flex-row items-stretch">
      {" "}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 sm:px-8 pt-10 pb-10 sm:pt-12 sm:pb-12 lg:px-20 lg:pt-4 lg:pb-4 order-2 lg:order-1">
        <div className="xl:max-w-xl w-full">
          <h1 className="mt-2 text-[#07255B] font-serif text-4xl sm:text-5xl   xl:text-7xl leading-tight sm:leading-16.25 md:leading-tight xl:leading-18.75 tracking-tight">
            MA in
            <br />
            (Journalism  
            <br />
            and Mass
            <br />
           Communication)
          </h1>
          {/* MA in<br>Journalism,<br>Digital Media<br>and the Creator<br>Economy */}
          <p className="mt-4 text-[#44474F] text-base sm:text-lg font-normal line-height-[5px] leading-7">
            A 2 year postgraduate programme for journalists, storytellers and
            media professionals who want to lead newsrooms, content teams and
            creator-led brands in a digital first world.
          </p>
          <div className="mt-3 sm:mt-5 flex flex-col xl:flex-row flex-wrap gap-4 sm:gap-5">
            <button className="w-full flex items-center justify-center gap-2 sm:flex-1 bg-[#0161B0] cursor-pointer hover:bg-[#095999] text-white px-8 py-3 rounded-md subpixel-antialiased font-medium text-base sm:text-lg shadow-md transition text-center whitespace-nowrap">
              <Download className="w-5 h-5 shrink-0" />
              <Link
                href="https://www.krmangalam.edu.in/pdfs/handbooks/majmc-handbook-2025-27.pdf"
                target="_blank"
              >
                Download Brochure
              </Link>
            </button>
            <NpfPopup
              formId="acdc7065c22d12fc12a12848d5db1825"
              btnClass={`hero-common-btn-b  ${heroSection.herobtn.buttonclass || ""} !flex !items-center !justify-center gap-2 !w-full sm:!flex-1 !bg-[#E21F21] hover:!bg-[#db3123] !text-white !font-medium !text-base sm:!text-lg !px-8 !py-3 !rounded-md !shadow-md transition !text-center !whitespace-nowrap`}
              btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
              showIcon={true}
            />
          </div>
          <div className="mt-5 sm:mt-8">
            <h3 className="font-bold text-base sm:text-lg text-[#000000]">
              Connecting Talent to Dream Careers
            </h3>
            <Carousel
              plugins={[
                AutoScroll({
                  // speed: 1.5,
                  speed: 1,
                  stopOnInteraction: false,
                  playOnInit: true,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full mt-2 sm:mt-3"
            >
              <CarouselContent className="items-center">
                <CarouselItem className="basis-1/3 sm:basis-1/4 pl-4 flex justify-center">
                  <Image
                    src="/new-Programmes-Hero/google.png"
                    alt="Google"
                    width={100}
                    height={100}
                    priority
                    className="h-8 sm:h-12 object-contain"
                  />
                </CarouselItem>

                <CarouselItem className="basis-1/3 sm:basis-1/4 pl-4 flex justify-center">
                  <Image
                    src="/new-Programmes-Hero/durdarshan.png"
                    alt="DD"
                    width={100}
                    height={100}
                    priority
                    className="h-10 sm:h-14 object-contain"
                  />
                </CarouselItem>

                <CarouselItem className="basis-1/3 sm:basis-1/4 pl-4 flex justify-center">
                  <Image
                    src="/new-Programmes-Hero/danik bhashkar.png"
                    alt="Dainik Bhaskar"
                    width={100}
                    height={100}
                    priority
                    className="h-24 sm:h-28 object-contain"
                  />
                </CarouselItem>

                <CarouselItem className="basis-1/3 sm:basis-1/4 pl-4 flex justify-center">
                  <Image
                    src="/new-Programmes-Hero/zeenews.png"
                    alt="ZEE"
                    width={100}
                    height={100}
                    priority
                    className="h-8 sm:h-12 object-contain"
                  />
                </CarouselItem>

                <CarouselItem className="basis-1/3 sm:basis-1/4 pl-4 flex justify-center">
                  <Image
                    // src="/new-Programmes-Hero/all-india-radio.png"
                    src="/new-Programmes-Hero/air-transparent.png"
                    alt="all-india-radio"
                    width={100}
                    height={100}
                    priority
                    className="h-8 sm:h-12 object-contain"
                  />
                </CarouselItem>

                <CarouselItem className="basis-1/3 sm:basis-1/4 pl-4 flex justify-center">
                  <Image
                    src="/new-Programmes-Hero/outlook.png"
                    alt="outlook"
                    width={100}
                    height={100}
                    priority
                    className="h-8 sm:h-12 object-contain"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-70 sm:min-h-95 md:min-h-125 lg:min-h-screen order-1 lg:order-2">
        <Image
          src="/new-Programmes-Hero/new programmes hero.jpg"
          alt="Journalist"
          fill
          priority
          className="object-cover object-[75%_top] lg:object-[75%_15%]"
        />
      </div>
    </section>
  );
};

export default ProgrammesHero;
