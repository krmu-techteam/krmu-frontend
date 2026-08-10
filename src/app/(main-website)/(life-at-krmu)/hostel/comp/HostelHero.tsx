"use client";

import Image from "next/image";
import Link from "next/link";

const HostelHero = () => {
  const quickLinks = [
    { name: "Convenience Store", href: "#facilities" },
    { name: "Sports", href: "#sports" },
    { name: "Rooms", href: "#rooms" },
    { name: "Security", href: "#security" },
    { name: "Wifi", href: "#wifi" },
    { name: "Connect with Warden", href: "#warden", isHighlight: true },
  ];

  return (
    <section className="relative w-full overflow-visible pt-24 sm:pt-28 lg:pt-32">
      {/* Background Image Container */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[720px] flex items-end justify-center pb-18 sm:pb-24 lg:pb-28">
        <Image
          src="/images/hostel/hostel-hero.jpg"
          alt="KRMU Hostels"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Center Banner Box (Figma Spec: 926px x 175px, rounded-10px, gradient) */}
        <div
          className="relative z-10 w-[90%] max-w-[926px] py-6 sm:py-8 md:py-1 px-6 sm:px-10 text-center rounded-[10px] flex flex-col items-center justify-center transition-all duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(1, 19, 42, 0.85) 0%, rgba(1, 63, 141, 0.85) 100%)",
          }}
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[77px] font-semibold text-white tracking-tight leading-tight">
            KRMU Hostels
          </h1>
          <p className="font-poppins text-lg sm:text-xl md:text-[24px] lg:text-[50px] font-normal text-white/90 tracking-wide mt-1 sm:mt-2">
            Bringing Your Home Closer
          </p>
        </div>
      </div>

      {/* Bottom Floating Pill Navigation Bar (Figma Spec: 1390px Outer SVG Gradient Border, 7px Transparent Gap, 1374px Inner Blue Gradient Pill) */}
      <div className="relative z-20 max-w-[1430px] mx-auto px-4 -mt-10 sm:-mt-12 lg:-mt-14 pb-8 sm:pb-12 flex justify-center">
        {/* Outer 1px Gradient Border Ring Container (1390px max-width, 7px transparent gap) */}
        <div className="relative w-full max-w-[1390px] p-[7px] rounded-[50px]">
          {/* 1.5px Vector SVG Gradient Border Stroke with fill="none" */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: "visible" }}
          >
            <rect
              x="0.75"
              y="0.75"
              width="calc(100% - 1.5px)"
              height="calc(100% - 1.5px)"
              rx="49"
              ry="49"
              fill="none"
              stroke="url(#hostelPillBorderGradient)"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient
                id="hostelPillBorderGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#0055C4" />
                <stop offset="30%" stopColor="#0073E6" />
                <stop offset="50%" stopColor="#F5D061" />
                <stop offset="70%" stopColor="#E7C268" />
                <stop offset="100%" stopColor="#00408E" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Blue Gradient Pill (1374px max-width, 79px height) */}
          <div
            className="w-full max-w-[1374px] mx-auto min-h-[68px] sm:min-h-[79px] rounded-[50px] px-6 sm:px-10 lg:px-14 py-3 flex items-center justify-between gap-4 sm:gap-6 overflow-x-auto scrollbar-none text-white font-poppins shadow-xl relative z-10"
            style={{
              background: "linear-gradient(90deg, #001228 0%, #00408E 100%)",
            }}
          >
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`whitespace-nowrap text-sm sm:text-base lg:text-[24px] font-medium transition-colors ${
                  link.isHighlight
                    ? "text-[#E7C268] font-semibold hover:text-[#E7C268]/80 underline underline-offset-4"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelHero;
