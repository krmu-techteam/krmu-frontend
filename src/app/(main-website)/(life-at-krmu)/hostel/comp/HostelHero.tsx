import React from "react";

const HostelHero = () => {
  return (
    <section className="pt-20 sm:pt-[10%] pb-[5%] bg-[#035185] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000080] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 text-white">
        <div className="lg:w-1/2 relative z-10 mb-5 lg:mb-0">
          <h2 className="leading-[3] text-xl md:text-2xl font-semibold">
            Discover You Second Home
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.13] font-semibold">
            KRMU Hostels – Bringing Your Home Closer
          </h1>
        </div>
        <div className="lg:w-1/2 relative z-10">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/0FECW-Go_oc?si=FVKEs-HaMOoIGkKN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HostelHero;
