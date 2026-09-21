"use client";
import Image from "next/image";
import Link from "next/link";
import { Tv, GraduationCap, Clapperboard } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const facultyMembers = [
  {
    name: "Dr. Amit Chawla",
    designation: "Professor & Dean",
    degree: "PH.D.",
    image: "/new-Programmes-Hero/Dr. Amit Chawla.png",
  },
  {
    name: "Dr. Ritwik Ghosh",
    designation: "ASSISTANT PROFESSOR",
    degree: "PH.D.",
    image: "/new-Programmes-Hero/Dr. Ritwik Ghosh.png",
  },
  {
    name: "Dr. Sarina",
    designation: "ASSISTANT PROFESSOR",
    degree: "PH.D.",
    image: "/new-Programmes-Hero/Dr. Sarina.png",
  },
  {
    name: "Dr. Ritika Choudhary",
    designation: "Assistant Professor",
    degree: "PH.D.",
    image: "/new-Programmes-Hero/Ritika Choudhary.webp",
  },
  {
    name: "Ms. Aditi Agarwal",
    designation: "Assistant Professor",
    degree: "Ph.D (Pursuing)",
    image: "/new-Programmes-Hero/Aditi Agarwal.webp",
  },
  {
    name: "Yashika Khandelwal",
    designation: "Assistant Professor",
    degree: "Ph.D (Pursuing)",
    image: "/new-Programmes-Hero/Yashika Khandelwal.webp",
  },
  {
    name: "Dr. Aditi Khare",
    designation: "Assistant Professor",
    degree: "Ph.D",
    image: "/new-Programmes-Hero/Aditi Khare.webp",
  },
  {
    name: "Mr. Trilok Kumar Singh",
    designation: "Teaching Assistant & Research Scholar",
    degree: "Ph.D. (pursuing)",
    image: "/new-Programmes-Hero/Trilok Kumar Singh.jpg",
  },
  {
    name: "Mr. Karan Singh",
    designation: "ASSISTANT PROFESSOR",
    degree: "PH.D.",
    image: "/new-Programmes-Hero/Mr. Karan Singh.png",
  },
];

export default function FacultyMentorsSection() {
  return (
    <section className="w-full bg-[#F2F3FA] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#001B44] font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium">
              Faculty & Mentors
            </h2>
            <p className="mt-4 sm:mt-6 text-[#001B44] text-sm sm:text-base md:text-lg leading-6">
              A faculty mix that brings together newsroom experience, creator
              economy work and academic research.
            </p>
          </div>
        </div>

        {/* "At SEMCE, MA students learn from:" boxes */}
        <div className="mt-8 sm:mt-10">
          <p className="text-[#001B44] text-base sm:text-lg font-semibold mb-4">
            At SEMCE, MA students learn from:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl px-5 py-6 border border-[#001B44]/10 shadow-sm  items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white  flex items-center justify-center">
                <Tv className="w-5 h-5 text-[#8200db]" />
              </div>
              <p className="text-[#001B44] text-sm sm:text-base leading-relaxed mt-2">
                Faculty who have worked with organisations like BBC, All India
                Radio, Hindustan Times, Zee Media, Aaj Tak and leading digital
                media houses
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl px-5 py-6 border border-[#001B44]/10 shadow-sm  items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#8200db]" />
              </div>
              <p className="text-[#001B44] text-sm sm:text-base leading-relaxed mt-2">
                Academics with PhDs and published research in areas such as
                digital media, fake news, data journalism, visual communication,
                communication research, development communication and HCI
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl px-5 py-6 border border-[#001B44]/10 shadow-sm  items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white flex items-center justify-center">
                <Clapperboard className="w-5 h-5 text-[#8200db]" />
              </div>
              <p className="text-[#001B44] text-sm sm:text-base leading-relaxed mt-2">
                Practitioners who have produced films, shows, campaigns and
                digital content for brands, production houses and channels
              </p>
            </div>
          </div>
          <p className="text-[#001B44] text-sm sm:text-base  mt-6">
            The same core faculty that drives the SEMCE undergraduate programmes
            teaches at the MA level, with additional research focus, advanced
            project guidance and dissertation supervision.
          </p>
        </div>

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
          className="w-full mt-10"
        >
          <CarouselContent className="items-stretch ml-[-24px] sm:ml-[-32px]">
            {facultyMembers.map((faculty, index) => (
              <CarouselItem
                key={index}
                className="pl-6 sm:pl-8 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="group h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-sm shrink-0">
                    <div className="relative h-[320px] sm:h-[360px] md:h-[380px] lg:h-[320px] w-full">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-3 flex-1 flex flex-col">
                    <h3 className="text-[#000000] font-serif text-xl sm:text-2xl lg:text-xl leading-snug">
                      {faculty.name}
                    </h3>
                    <div className="mt-0.5 sm:mt-1 space-y-0.5">
                      <p className="text-[#001B44] text-[11px] sm:text-xs tracking-wide font-medium uppercase">
                        {faculty.designation}
                      </p>
                      <p className="text-[#001B44] text-[11px] sm:text-xs tracking-wide font-medium uppercase">
                        {faculty.degree}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
