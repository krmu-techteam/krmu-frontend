"use client";

import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function FloatingButtons() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Version: Premium Side-floating Contact Panel */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-2 z-[9999] font-poppins">
        {/* Call Button */}
        <a
          href="tel:+911242867700"
          className="!bg-[#0060a9] hover:!bg-[#005090] !text-white w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 shadow-lg rounded-l-sm border-l border-y border-white/10 group relative"
          title="Call Us"
        >
          <Phone size={22} className="!text-white" />
          <span className="absolute right-full mr-2 !bg-[#0060a9] !text-white text-[12px] font-medium py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Call Us: +91 124 2867700
          </span>
        </a>
        
        {/* Admission Enquiry Button */}
        <button
          className="!bg-[#e31e24] hover:!bg-[#c31a1e] !text-white w-[40px] h-[180px] flex items-center justify-center transition-all duration-300 shadow-lg rounded-l-sm border-l border-y border-white/10 group relative cursor-pointer"
          onClick={() => {
             const form = document.getElementById('admission-form') || document.querySelector('form') || document.querySelector('[id*="enquire"]') || document.querySelector('[id*="admission"]');
             if (form) {
               form.scrollIntoView({ behavior: 'smooth' });
             }
          }}
        >
          <span className="[writing-mode:vertical-lr] rotate-180 font-bold uppercase tracking-widest text-[13px] whitespace-nowrap leading-none flex items-center justify-center transition-all">
            Admission Enquiry
          </span>
        </button>
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918800697010"
          target="_blank"
          rel="noopener noreferrer"
          className="!bg-[#25D366] hover:!bg-[#20bd5a] !text-white w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 shadow-lg rounded-l-sm border-l border-y border-white/10 group relative"
          title="WhatsApp Us"
        >
          <FaWhatsapp size={26} className="!text-white" />
          <span className="absolute right-full mr-2 !bg-[#25D366] !text-white text-[12px] font-medium py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Version: Sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] flex shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
        <a
          href="tel:+911242867700"
          className="flex-1 !bg-[#0060a9] !text-white py-3.5 px-2 text-center text-[13px] font-semibold uppercase tracking-wider border-r border-white/20 active:bg-[#005090] flex items-center justify-center gap-2"
        >
          <Phone size={15} className="!text-white" />
          Call Us
        </a>
        <button
          onClick={() => {
             const form = document.getElementById('admission-form') || document.querySelector('form') || document.querySelector('[id*="enquire"]') || document.querySelector('[id*="admission"]');
             if (form) {
               form.scrollIntoView({ behavior: 'smooth' });
             }
          }}
          className="flex-1 !bg-[#e31e24] !text-white py-3.5 px-2 text-center text-[13px] font-semibold uppercase tracking-wider border-r border-white/20 active:bg-[#c31a1e]"
        >
          Enquire Now
        </button>
        <a
          href="https://wa.me/918800697010"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 !bg-[#25D366] !text-white py-3.5 px-2 text-center text-[13px] font-semibold uppercase tracking-wider active:bg-[#20bd5a] flex items-center justify-center gap-2"
        >
          <FaWhatsapp size={17} className="!text-white" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
