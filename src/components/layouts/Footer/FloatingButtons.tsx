"use client";

import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop Version: Premium Side-floating Contact Panel */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-1 z-[9999] font-poppins w-[40px] items-end">
        {/* Call Button */}
        <a
          href="tel:+911242867700"
          className="!bg-[#0060a9] hover:!bg-[#005090] !text-white w-[40px] h-[40px] min-w-[40px] max-w-[40px] p-0 box-border flex items-center justify-center transition-all duration-300 rounded-l-[2px] group relative shrink-0"
          title="Call Us"
        >
          <Phone size={22} className="!text-white" />
          <span className="absolute right-full mr-2 !bg-[#0060a9] !text-white text-[13px] font-medium py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Call Us: +91 124 2867700
          </span>
        </a>

        {/* Admission Enquiry Button */}
        <button
          className="!bg-[#e31e24] hover:!bg-[#c31a1e] !text-white w-[40px] h-[180px] min-w-[40px] max-w-[40px] p-0 box-border flex items-center justify-center transition-all duration-300 rounded-l-[2px] group relative cursor-pointer shrink-0 border-none outline-none overflow-hidden"
          onClick={() => {
            const form =
              document.getElementById("admission-form") ||
              document.querySelector("form") ||
              document.querySelector('[id*="enquire"]') ||
              document.querySelector('[id*="admission"]');
            if (form) {
              form.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="[writing-mode:vertical-lr] rotate-180 font-medium tracking-wide text-[13px] whitespace-nowrap leading-none flex items-center justify-center transition-all">
            Admission Enquiry
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918800697010"
          target="_blank"
          rel="noopener noreferrer"
          className="!bg-[#25D366] hover:!bg-[#20bd5a] !text-white w-[40px] h-[40px] min-w-[40px] max-w-[40px] p-0 box-border flex items-center justify-center transition-all duration-300 rounded-l-[2px] group relative shrink-0"
          title="WhatsApp Us"
        >
          <FaWhatsapp size={22} className="!text-white" />
          <span className="absolute right-full mr-2 !bg-[#25D366] !text-white text-[13px] font-medium py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Version: Sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] grid grid-cols-3 w-full border-none outline-none overflow-hidden">
        <a
          href="tel:+911242867700"
          className="!bg-[#0060a9] font-poppins !text-white py-3.5 px-1 text-center text-[14px] font-normal tracking-wide active:bg-[#005090] flex items-center justify-center gap-1.5 border-0 outline-none select-none"
        >
          <Phone size={15} className="!text-white shrink-0" />
          <span className="truncate">Call Us</span>
        </a>
        <button
          onClick={() => {
            const form =
              document.getElementById("admission-form") ||
              document.querySelector("form") ||
              document.querySelector('[id*="enquire"]') ||
              document.querySelector('[id*="admission"]');
            if (form) {
              form.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="!bg-[#e31e24] font-poppins !text-white py-3.5 px-1 text-center text-[14px] font-normal tracking-wide active:bg-[#c31a1e] cursor-pointer border-0 outline-none select-none"
        >
          <span className="truncate">Enquire Now</span>
        </button>
        <a
          href="https://wa.me/918800697010"
          target="_blank"
          rel="noopener noreferrer"
          className="!bg-[#25D366] !text-white py-3.5 px-1 text-center text-[14px] font-normal tracking-wide active:bg-[#20bd5a] flex items-center justify-center gap-1.5 border-0 outline-none select-none"
        >
          <FaWhatsapp size={17} className="!text-white shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </>
  );
}
