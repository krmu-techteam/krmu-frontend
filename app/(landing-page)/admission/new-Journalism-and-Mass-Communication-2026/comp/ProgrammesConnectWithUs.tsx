"use client";
import Image from "next/image";
import { Megaphone, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function LearnByDoingSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full bg-[#f3f4fb] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-serif text-[#131B2E] leading-tight">
            Learn by doing, not just reading
          </h2>

          <p className="mt-5 sm:mt-8 text-sm sm:text-base text-[#000000] leading-7 max-w-3xl mx-auto">
            At the MA level, your work is expected to look and feel
            professional. The programme is built around projects, labs and
            internships that mirror real world roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 sm:mt-14">
          <div className="h-full flex flex-col gap-6">
            <div className="relative h-[420px] sm:h-[520px] md:h-[650px] rounded-2xl overflow-hidden">
              <Image
                src="/new-Programmes-Hero/learn_by_doing.png"
                alt="Newsroom Lab"
                fill
                className="object-cover object-left"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 text-[#FFFFFF] z-10">
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold leading-snug">
                  Multimedia Newsroom Labs
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-7 max-w-lg text-[#FFFFFF]">
                  Work on real news stories, from pitch to publication. You
                  practise reporting, verification, scripting, anchoring,
                  editing and packaging stories for web, TV and mobile.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 h-full">
            <div className="bg-[#0161B0] rounded-2xl p-4 sm:p-8 md:p-10 flex items-end min-h-[240px] sm:min-h-[280px] flex-1">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFFFFF] leading-snug">
                  Fact Checking and Media Literacy Projects
                </h3>

                <p className="mt-3 text-sm sm:text-base font-medium text-[#E0E7FF] leading-7">
                  Analyse misinformation, run fact checking exercises and
                  build media literacy content for different audience groups.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              <div className="bg-[#DAE2FD] rounded-xl p-6 sm:p-7 md:p-8 h-full">
                <Megaphone className="w-6 h-6 text-purple-700" />

                <h4 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-lg font-bold text-[#131B2E] leading-snug">
                  Creator Economy & Community Studio
                </h4>

                <p className="mt-3 text-sm md:text-[13px] text-[#000000] leading-6">
                  Design creator led properties — channels, newsletters,
                  shows or communities — and learn how to grow and engage
                  audiences around them.
                </p>
              </div>

              <div className="bg-[#DAE2FD] rounded-xl p-6 sm:p-7 md:p-8 h-full">
                <BarChart3 className="w-6 h-6 text-purple-700" />

                <h4 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-lg font-bold text-[#131B2E] leading-snug">
                  Brand and Campaign Sprints
                </h4>

                <p className="mt-3 text-sm md:text-[13px] text-[#000000] leading-6">
                  Work on integrated marketing communication briefs. You
                  plan campaigns, content calendars and creator
                  collaborations for brands and organisations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {showAll && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-[#DAE2FD] rounded-xl p-6 sm:p-7 md:p-8 h-full">
              <Megaphone className="w-6 h-6 text-purple-700" />

              <h4 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-lg font-bold text-[#131B2E] leading-snug">
                Film & OTT Production Labs
              </h4>

              <p className="mt-3 text-sm md:text-[13px] text-[#000000] leading-6">
                Work in teams to conceptualise, shoot and edit short films or OTT style pilots, trailers or digital series concepts.
              </p>
            </div>
            <div className="bg-[#DAE2FD] rounded-xl p-6 sm:p-7 md:p-8 h-full">
              <BarChart3 className="w-6 h-6 text-purple-700" />

              <h4 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-lg font-bold text-[#131B2E] leading-snug">
                Data Storytelling and Visualisation Lab
              </h4>

              <p className="mt-3 text-sm md:text-[13px] text-[#000000] leading-6">
                Use data journalism tools to turn datasets into interactive stories, charts and visual explainers.
              </p>
            </div>
            <div className="bg-[#DAE2FD] rounded-xl p-6 sm:p-7 md:p-8 h-full">
              <Megaphone className="w-6 h-6 text-purple-700" />

              <h4 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-lg font-bold text-[#131B2E] leading-snug">
                Digital Media Entrepreneurship Project
              </h4>

              <p className="mt-3 text-sm md:text-[13px] text-[#000000] leading-6">
                Design and build a real digital media or content venture – a show, a micro agency, a niche media brand or a product around content.
              </p>
            </div>
            <div className="bg-[#DAE2FD] rounded-xl p-6 sm:p-7 md:p-8 h-full">
              <BarChart3 className="w-6 h-6 text-purple-700" />

              <h4 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-lg font-bold text-[#131B2E] leading-snug">
                Internship and Field Work
              </h4>
              <p className="mt-3 text-sm md:text-[13px] text-[#000000] leading-6">
                Complete internships with news channels, digital newsrooms, agencies, production houses or content teams in Delhi NCR and beyond.
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-10 sm:mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg cursor-pointer border border-[#DFDFDF] bg-white hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg font-medium text-[#000000]"
          >
            {showAll ? "Show Less" : "Explore More"}
          </button>
        </div>
      </div>
    </section>
  );
}