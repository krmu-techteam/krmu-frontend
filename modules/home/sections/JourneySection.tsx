"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowUpRight, Play, PlayCircle, X } from "lucide-react";
import Button from "@/components/common/Button";
import SectionDivider from "@/components/common/SectionDivider";
import { JOURNEY_VIDEOS } from "../constants";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

export default function JourneySection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden py-6 px-6 md:px-11 xl:px-16 md:py-12 xl:py-20 font-poppins text-center transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.08)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-10 xl:mb-12">
          <h2 className="text-3xl md:text-4xl xl:text-[42px] font-serif font-bold text-white mb-6 leading-[1.2] tracking-tight">
            Your Journey to Excellence Begins Here
          </h2>

          <p className="max-w-4xl mx-auto text-white/70 text-base md:text-[16px] leading-relaxed mb-8 xl:mb-10 font-light font-poppins">
            Our multidisciplinary approach to education ensures students receive
            a well-rounded experience, blending theoretical knowledge with
            real-world applications. As the leading university in Gurugram, we
            commit to providing students with the necessary skills and knowledge
            to thrive in the ever-changing world.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 xl:gap-5 px-4 md:px-0">
           
              <Button
                href="/programmes"
                variant="outline"
                icon={ArrowUpRight}
                iconPosition="right"
                iconClassName="rotate-45 group-hover:rotate-0 transition-transform"
              >
                Explore Programs
              </Button>
             
            <CommonLeadPopup
              buttonClassName="w-full sm:w-auto flex items-center justify-center h-[45px] rounded-[3px] font-normal transition-all duration-300 ease-in-out uppercase text-[14px] md:text-[15px] leading-none tracking-wide relative overflow-hidden group px-6 border border-white/20 text-white hover:border-white/40"
              buttonText={
                <div className="flex items-center gap-2">
                  Download Brochure
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                </div>
              }
              redirectUrl={`https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_Prospectus_2025_26_05_Updated_4_1_4f9d19673e.pdf`}
              form_name="Download Prospectus"
            />
            <Link
              href="https://admissions.krmangalam.edu.in/?utm_source=website&utm_medium=Homepage&utm_campaign=journey-section&_gl=1*rfukfk*_ga*MTk4NDQwNDY4LjE3Nzc4NzU5MzU.*_ga_VJJK572TGN*czE3Nzc4NzU5MzUkbzEkZzEkdDE3Nzc4NzYwNDEkajYwJGwwJGgw"
              className="w-full sm:w-auto flex items-center justify-center gap-2 h-[45px] rounded-[3px] font-normal transition-all duration-300 ease-in-out uppercase text-[14px] md:text-[15px] leading-none tracking-wide relative overflow-hidden group px-6 bg-[#CB000D] text-white hover:bg-[#CB000D]/80 shadow-lg"
              target="_blank"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
              Apply Now
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5 mb-8 xl:mb-10">
          {JOURNEY_VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.link)}
            >
              <div className="relative aspect-video overflow-hidden rounded-[3px] shadow-xl mb-5 bg-black">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#CB000D] text-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-105 transition-all duration-300">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </div>

              <div className="px-4 text-center">
                <h3 className="text-white font-poppins font-normal text-[16px] mb-1.5 leading-[1.4] transition-colors group-hover:text-secondary max-w-[320px] mx-auto">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            href="https://www.youtube.com/@KRMangalamUniversity"
            variant="outline"
            target="_blank"
            icon={PlayCircle}
            className="h-auto py-3 px-6 text-[12px] tracking-[0.2em] border-white/20"
            iconClassName="group-hover:scale-110 transition-transform"
          >
            Watch More
          </Button>
        </div>
      </div>

      <SectionDivider />

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 cursor-pointer"
          >
            <X size={24} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 relative">
            <iframe 
              className="w-full h-full absolute inset-0"
              src={(() => {
                let videoId = "";
                if (selectedVideo.includes("watch?v=")) videoId = selectedVideo.split("watch?v=")[1].split("&")[0];
                else if (selectedVideo.includes("youtu.be/")) videoId = selectedVideo.split("youtu.be/")[1].split("?")[0];
                else if (selectedVideo.includes("embed/")) videoId = selectedVideo.split("embed/")[1].split("?")[0];
                return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : selectedVideo;
              })()}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
