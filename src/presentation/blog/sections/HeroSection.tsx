"use client";

import Image from "next/image";
import NoPaperFormsWidget from "@/app/(main-website)/(blogs)/blog/(listings)/comp/NoPaperFormsWidget";
import { SocialShareBar, CategoryPills } from "@/presentation/blog";
import { CategoryItem } from "@/presentation/blog/components/CategoryPills";

type Props = {
  catName?: string;
  featuredTitle?: string;
  featuredDate?: string;
  featuredImage?: string;
  formId?: string;
  categories?: CategoryItem[];
};

const DEFAULT_CATEGORIES: CategoryItem[] = [
  { name: "Admission Tips & Process", slug: "admission-tips-process" },
  { name: "Agriculture & Sustainability", slug: "agriculture-sustainability" },
  { name: "Arts & Culture", slug: "arts-culture" },
  { name: "Campus Life and Activities", slug: "campus-life-activities" },
  { name: "Career Guidance", slug: "career-guidance" },
  { name: "Design and Architecture", slug: "design-architecture" },
  { name: "Faculty", slug: "faculty" },
  {
    name: "Hotel Management and Catering Technology",
    slug: "hotel-management",
  },
  {
    name: "Journalism and Mass Communication",
    slug: "journalism-mass-communication",
  },
  { name: "Law and Legal Studies", slug: "law-legal-studies" },
  { name: "Campus Life and Activities", slug: "campus-life-and-activities" },
  { name: "Liberal Arts", slug: "liberal-arts" },
  { name: "Management and commerce", slug: "management-commerce" },
  {
    name: "Physiotherapy & Rehabilitation",
    slug: "physiotherapy-rehabilitation",
  },
  { name: "Student Life", slug: "student-life" },
];

const HeroSection = ({
  catName,
  featuredTitle = "Why K.R. Mangalam University Best University in 2026",
  featuredDate = "15 July 2026",
  featuredImage = "/images/blog/hero/hero.jpg",
  formId = "0d2d6e28c86e4213b353bfe132035965",
  categories,
}: Props) => {
  const categoryList =
    categories && categories.length > 0 ? categories : DEFAULT_CATEGORIES;

  return (
    <section className="pt-[110px] md:pt-[155px] pb-6 md:pb-8">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 relative z-10 flex flex-col gap-6 md:gap-8">
        {/* Main Grid: Left Featured Banner + Right Admission Form */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-[31px] w-full">
          {/* LEFT COLUMN: FEATURED BLOG HERO BANNER */}
          <div className="w-full lg:flex-1 lg:max-w-[1038px] h-[480px] sm:h-[520px] lg:h-[584px] relative rounded-[10px] overflow-hidden flex flex-col justify-end">
            {/* Background Image */}
            <Image
              src={featuredImage}
              alt={featuredTitle}
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />

            {/* Teal Clip Image Overlay (Bottom Left) */}
            <div className="absolute bottom-0 left-0 z-10 w-[95%] sm:w-[84%] md:w-[72%] lg:w-[65%] xl:w-[660px] h-[210px] sm:h-[230px] md:h-[200px] flex items-end">
              {/* Clip Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/blog/hero/clip.png"
                  alt="Clip Overlay"
                  fill
                  className="object-fill object-left-bottom pointer-events-none"
                  unoptimized
                />
              </div>

              {/* Text Content inside Teal Clip */}
              <div className="relative z-10 p-5 sm:p-7 lg:p-8 text-white flex flex-col justify-end w-full">
                {/* Category / Featured Pill Badge */}
                <div className="inline-block bg-black/90 text-white text-xs sm:text-[15px] font-semibold px-4 py-1 rounded-full mb-2.5 sm:mb-3 self-start tracking-wide font-poppins">
                  Featured Article
                </div>

                {/* Title */}
                <h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[30px] font-bold text-white leading-tight font-serif mb-2 sm:mb-3 tracking-tight drop-shadow-sm pr-6"
                  dangerouslySetInnerHTML={{
                    __html: catName || featuredTitle,
                  }}
                />

                {/* Date */}
                <p className="text-xs sm:text-sm text-white/90 font-poppins font-light tracking-wide">
                  {featuredDate}
                </p>
              </div>
            </div>

            {/* Bottom Right Overlay: KRMU Logo & Social Share Icons (Centered) */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 flex flex-col items-center gap-2">
              {/* KRMU Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/blog/hero/krmu-logo.png"
                  alt="K.R. Mangalam University"
                  width={140}
                  height={40}
                  className="object-contain max-h-[36px] sm:max-h-[40px] w-auto drop-shadow-md"
                  unoptimized
                />
              </div>

              {/* Reusable Social Share Bar Component */}
              <SocialShareBar title={catName || featuredTitle} />
            </div>
          </div>

          {/* RIGHT COLUMN: ADMISSION OPEN NPF FORM CARD */}
          <div className="w-full lg:w-[370px] h-[520px] sm:h-[550px] lg:h-[585px] bg-white rounded-[10px] p-3 sm:p-4 pt-3 sm:pt-4 shadow-2xl flex flex-col justify-between text-black flex-shrink-0">
            <div>
              <h2 className="text-xl sm:text-[22px] font-bold text-center text-black mb-1 font-poppins tracking-tight">
                Admission Open
              </h2>

              {/* Live NPF Admission Open Widget */}
              <div className="w-full overflow-hidden rounded-[8px]">
                <NoPaperFormsWidget widgetId={formId} height="510px" />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section directly below Hero grid */}
        <div className="w-full">
          <CategoryPills categories={categoryList} title="Categories" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
