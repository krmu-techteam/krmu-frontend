import React from "react";
import Image from "next/image";

export const SwayamFooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-white py-10 lg:py-12 px-4 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto max-w-[1260px] flex flex-col items-center justify-center space-y-4">
        {/* Partner Logos Banner (footer-logo.png) */}
        <div className="relative w-full max-w-[650px] h-[70px] sm:h-[90px] md:h-[100px]">
          <Image
            src="/swayam/footer-logo.png"
            alt="KRMU SWAYAM Ministry of Education Partner Logos"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Footer Navigation & Copyright Text */}
        <div className="text-center">
          <p className="text-[#000000] text-[15px] font-medium tracking-wide">
            <a
              href="#useful-links"
              className="hover:underline transition-all duration-200"
            >
              Useful Links
            </a>{" "}
            |{" "}
            <a
              href="#contact"
              className="hover:underline transition-all duration-200"
            >
              Contact
            </a>{" "}
            | Copyright © K.R. Mangalam University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SwayamFooterSection;
