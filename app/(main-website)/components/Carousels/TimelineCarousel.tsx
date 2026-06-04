"use client";
import { timelineData } from "@/lib/constants/timelinedata";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TimelineCarousel = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  useEffect(() => {
    // Ensure the active year is scrolled into view horizontally without jumping the page vertically
    const activeBtn = document.getElementById(`timeline-year-${currentSlide}`);
    const container = document.getElementById("timeline-nav-container");
    
    if (activeBtn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      
      // Calculate the offset required to center the button in the container
      const offsetLeft = activeBtn.offsetLeft;
      const centerPos = offsetLeft - (containerRect.width / 2) + (btnRect.width / 2);
      
      container.scrollTo({
        left: centerPos,
        behavior: "smooth"
      });
    }
  }, [currentSlide]);

  // Timeline Slide Settings (Top Grid)
  const slideSettings: Settings = {
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    swipeToSlide: true,
    arrows: false,
    infinite: true,
    accessibility: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="pb-16 relative">
      <style>{`
        /* Hide border for all slides by default */
        .timeline-slider .slick-slide .my-slide-inner::before {
          content: "";
          position: absolute;
          left: -16px;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: transparent;
        }
        /* Show border ONLY for the 2nd and 3rd visible (active) slides */
        .timeline-slider .slick-active ~ .slick-active .my-slide-inner::before {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
      {/* Timeline Slides */}
      <div className="mb-16">
        <Slider
          {...slideSettings}
          ref={sliderRef2}
          className="timeline-slider -mx-4"
        >
          {timelineData.map((item, index) => {
            const isActive = index === currentSlide;
            return (
              <div key={index} className="px-4 outline-none">
                <div
                  className={`my-slide-inner relative flex flex-col h-full min-h-[350px] transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <h4
                    className={`text-3xl md:text-[40px] font-bold mb-2 font-poppins transition-colors duration-500 ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    {item.year}
                  </h4>
                  <p
                    className={`text-xl md:text-[22px] mb-1 font-poppins transition-colors duration-500 ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-[13px] sm:text-[14px] mb-6 font-poppins transition-colors duration-500 ${
                      isActive ? "text-white/60" : "text-white/30"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                  <div className="relative h-[220px] md:h-[250px] w-full mt-auto rounded-[8px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`timeline image ${item.year}`}
                      fill
                      className="object-cover rounded-[8px]"
                      unoptimized
                    />
                    {!isActive && (
                      <div className="absolute inset-0 transition-opacity duration-500"></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Timeline Nav (Bottom) */}
      <div className="timeline-nav-bottom px-4 max-w-[1200px] mx-auto mt-8">
        <div id="timeline-nav-container" className="flex overflow-x-auto no-scrollbar justify-start items-center space-x-6 md:space-x-8 pb-4 min-h-[80px]">
          {timelineData.map((item, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                id={`timeline-year-${index}`}
                onClick={() => sliderRef2.current?.slickGoTo(index)}
                className={`outline-none flex-shrink-0 transition-all duration-300 font-poppins ${
                  isActive
                    ? "text-3xl md:text-[38px] font-bold text-white"
                    : "text-lg md:text-[20px] text-white/60 hover:text-white/80"
                }`}
              >
                {item.year}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineCarousel;
