"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trainers = [
  {
    name: "Jyoti",
    designation: "Lead - Employability & Coaching",
    image: "/images/trainers/jyoti.jpg",
  },
  {
    name: "Vijay Purohit",
    designation: "Lead Sr. Soft Skills Trainer",
    image: "/images/trainers/vijay-purohit.jpg",
  },
  {
    name: "Rohit Agarwal",
    designation: "Lead Sr. Aptitude Trainer",
    image: "/images/trainers/rohit-agarwal.jpg",
  },
  {
    name: "Pradeep",
    designation: "Soft Skills Trainer",
    image: "/images/trainers/pradeep.jpg",
  },
  {
    name: "Vikas Singh",
    designation: "Lead Sr. Aptitude Trainer",
    image: "/images/trainers/vikas-singh.jpg",
  },
  {
    name: "Ankit Verma",
    designation: "Soft Skills Trainer",
    image: "/images/trainers/ankit-verma.jpg",
  },
];

const Trainers = () => {
  return (
    <section className="overflow-hidden bg-[#f8f5f0] py-10 md:py-12">
      <div className="mx-auto max-w-[1150px] px-5 md:px-8">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="font-newsreader text-[38px] leading-none text-[#162a43] sm:text-[42px] md:text-[46px]">
            Trainers
          </h2>

          <p className="text-[13px] text-[#454545]">
            Industry veterans guiding our curriculum.
          </p>
        </div>

        {/* Trainers */}
        <div className="relative mt-12">
          {/* Previous */}
          <button
            aria-label="Previous trainer"
            className="absolute -left-10 top-[80px] z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#122942] text-white transition hover:scale-105"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-[14px]">
            {trainers.map((trainer) => (
              <article key={trainer.name} className="min-w-0">
                {/* Image */}
                <div className="relative aspect-[0.95/1] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-newsreader text-[15px] font-bold leading-tight text-[#242424]">
                    {trainer.name}
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.45] text-[#343434]">
                    {trainer.designation}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Next */}
          <button
            aria-label="Next trainer"
            className="absolute -right-10 top-[80px] z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#122942] text-white transition hover:scale-105"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;