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

const AutoScrollPlugin = (AutoScroll as any).default ?? AutoScroll;

const ProgrammesHero = () => {
  const heroSection = {
    id: 3440,
    subtitle:
      "Master AI & Machine Learning with IBM and Microsoft — From Day One’ ",
    description:
      "Step into the future with a B.Tech. CSE (AI & ML) programme designed to fuel intelligence, innovation, and industry excellence.\n\n\n",
    imgvideo: "Video",
    videofield: "https://www.youtube.com/watch?v=39uHV_rcawc",
    formField: null,
    formId: "31c1452015d32698095f833b3e7eb9c5",
    herobtn: {
      id: 43853,
      buttontext: "Apply Now",
      buttonlink:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/B_Tech_Computer_Science_and_Engineering_AI_and_ML_with_academic_support_of_IBM_and_powered_by_Microsoft_Certifications_c28e9ff274.jpg",
      buttonclass: "npfWidget-31c1452015d32698095f833b3e7eb9c5",
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
    <section className="pt-18 sm:pt-24 lg:pt-28 min-h-screen bg-[#f3f3f7] flex flex-col lg:flex-row items-stretch">
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 sm:px-8 pt-10 pb-10 sm:pt-12 sm:pb-12 lg:px-20 lg:pt-4 lg:pb-4 order-2 lg:order-1">
        <div className="max-w-xl w-full">
          <h1 className="mt-[8px] text-[#07255B] font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[65px] lg:leading-[75px] tracking-tight">
            MA in
            <br />
            Journalism,
            <br />
            Digital Media
            <br />
            and the Creator
            <br />
            Economy
          </h1>
          <p className="mt-4 text-[#44474F] text-base sm:text-lg font-normal leading-7 sm:leading-[32px]">
            A 2 year postgraduate programme for journalists, storytellers and
            media professionals who want to lead newsrooms, content teams and
            creator-led brands in a digital first world.
          </p>
          <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <button className="w-full flex items-center gap-2 sm:w-auto bg-[#0161B0] cursor-pointer hover:bg-[#095999] text-white px-8 py-3 rounded-sm subpixel-antialiased font-medium text-base sm:text-lg shadow-md transition text-center">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
            <NpfPopup
              formId="31c1452015d32698095f833b3e7eb9c5"
              btnClass={`hero-common-btn-b  ${heroSection.herobtn.buttonclass || ""} rounded-md`}
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
                  speed: 1.5,
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
                    src="/new-Programmes-Hero/all-india-radio.png"
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

      <div className="w-full lg:w-1/2 relative min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[auto] order-1 lg:order-2">
        <Image
          src="/new-Programmes-Hero/new programmes hero.jpg"
          alt="Journalist"
          fill
          priority
          className="object-cover object-top sm:object-center"
        />
      </div>
    </section>
  );
};

export default ProgrammesHero;
