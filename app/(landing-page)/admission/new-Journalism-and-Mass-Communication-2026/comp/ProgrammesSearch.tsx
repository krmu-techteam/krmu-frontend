"use client";
import {
  HiOutlineCube,
  HiOutlineVideoCamera,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi";

import { PiDatabase } from "react-icons/pi";

const ProgrammesSearch = () => {
  const features = [
    {
      icon: <HiOutlineDocumentDuplicate className="w-6 h-6 text-violet-600" />,
      text: "Strengthen your professional abilities and widen your current media knowledge",
    },
    {
      icon: <HiOutlineCube className="w-6 h-6 text-violet-600" />,
      text: "Prepare you for digital and cyber media worlds, not just traditional print and TV",
    },
    {
      icon: <HiOutlineVideoCamera className="w-6 h-6 text-violet-600" />,
      text: "Help you specialise in the areas that matter today – digital journalism, creator economy, integrated communication, film and OTT, data storytelling and digital entrepreneurship",
    },
    {
      icon: <PiDatabase className="w-6 h-6 text-violet-600" />,
      text: "Build your confidence as a socially responsible, research driven and industry ready media professional",
    },
  ];

  return (
    <section>
      <section className="bg-[#f3f3f7] pb-10 sm:pb-12 lg:pb-16 px-6 lg:px-16">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-[120px] pt-8 sm:pt-12 lg:pt-[120px] pb-10 sm:pb-12 lg:pb-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#5B00DF] mb-5">
                The Context
              </p>

              <h2 className="font-serif text-[#111827] text-3xl sm:text-4xl lg:text-[48px] leading-tight sm:leading-snug lg:leading-12 font-semibold">
                Why an MA in
                <br />
                Journalism and Digital
                <br />
                Media now
              </h2>
            </div>

            <div>
              <p className="text-[#44474F] text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[30.5px] font-normal">
                Media has shifted from slow, one way communication to real time,
                multi platform storytelling. Newsrooms, brands, creators and
                platforms are all fighting for one thing – sharp minds who can
                research deeply, think critically and create content that cuts
                through noise.
              </p>
              <h3 className="mt-10 text-base sm:text-lg lg:text-[20px] font-bold text-[#44474F] leading-relaxed lg:leading-[32.5px]">
                The MA (Journalism & Mass Communication) at SEMCE is designed
                to:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-10">
                {features.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">{item.icon}</div>
                    <p className="text-[#44474F] font-normal leading-5 text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white rounded-[10px] w-[95%] sm:w-[90%] lg:max-w-[80%] shadow-sm border border-gray-100 py-5 mx-auto px-4 sm:px-8 lg:px-[120px]">
          <p className="text-center text-sm sm:text-base lg:text-[19px] font-semibold text-[#000000] max-w-5xl mx-auto leading-relaxed lg:leading-7">
            If you already understand basics of media and content, this
            programme is for the next step – leading, designing and researching
            media in a world where everything is online, measurable and global.
          </p>
        </div>
      </section>
    </section>
  );
};

export default ProgrammesSearch;
