"use client";

import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
    const handleApplyNow = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof window === "undefined") return;

        // 1. Check if hero NPF button exists on current page (.progherobtn)
        const heroBtn = document.querySelector<HTMLElement>(".progherobtn");
        if (heroBtn) {
            e.preventDefault();
            heroBtn.click();
            return;
        }

        // 2. Check if any NPF popup button exists
        const anyNpfBtn = document.querySelector<HTMLElement>(
            'button[class*="progherobtn"], [data-npf-widget]'
        );
        if (anyNpfBtn) {
            e.preventDefault();
            anyNpfBtn.click();
            return;
        }

        // 3. Check if an embedded form exists on the page
        const formEl =
            document.getElementById("apply-form-mobile") ||
            document.getElementById("apply-form") ||
            document.querySelector<HTMLElement>(".cinematic-form-wrapper");
        if (formEl) {
            e.preventDefault();
            formEl.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }
    };

    return (
        <>
            {/* Desktop Version: Premium Side-floating Contact Panel */}
            <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-1 z-[9999] font-poppins w-[40px] items-end select-none">
                {/* Call Button */}
                <a
                    href="tel:+911242867700"
                    className="!bg-[#0060a9] hover:!bg-[#005090] hover:rounded-l-none !text-white w-[40px] h-[40px] min-w-[40px] max-w-[40px] p-0 box-border flex items-center justify-center transition-all duration-300 rounded-l-[2px] group relative shrink-0"
                    title="Call Us"
                >
                    <Phone
                        size={22}
                        className="!text-white shrink-0 relative z-10"
                    />
                    <span className="absolute right-full top-0 h-full flex items-center !bg-[#0060a9] group-hover:!bg-[#005090] !text-white text-[13px] font-medium rounded-l-[2px] rounded-r-none max-w-0 opacity-0 px-0 group-hover:max-w-[280px] group-hover:opacity-100 group-hover:px-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap overflow-hidden pointer-events-none group-hover:pointer-events-auto shadow-[-4px_0_12px_rgba(0,0,0,0.15)]">
                        <span className="whitespace-nowrap">
                            Call Us: +91 124 2867700
                        </span>
                        {/* Smooth wave light shimmer */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                    </span>
                </a>

                {/* Admission Enquiry Button */}
                <a
                    href="https://admissions.krmangalam.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleApplyNow}
                    className="!bg-[#e31e24] hover:!bg-[#c31a1e] !text-white w-[40px] h-[180px] min-w-[40px] max-w-[40px] p-0 box-border flex items-center justify-center transition-all duration-300 rounded-l-[2px] group relative cursor-pointer shrink-0 border-none outline-none overflow-hidden"
                    title="Apply Now"
                >
                    <span className="[writing-mode:vertical-lr] rotate-180 font-medium tracking-wide text-[13px] whitespace-nowrap leading-none flex items-center justify-center transition-all">
                        Apply Now
                    </span>
                </a>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/918800697010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!bg-[#27AB00] hover:!bg-[#229500] hover:rounded-l-none !text-white w-[40px] h-[40px] min-w-[40px] max-w-[40px] p-0 box-border flex items-center justify-center transition-all duration-300 rounded-l-[2px] group relative shrink-0"
                    title="WhatsApp Us"
                >
                    <FaWhatsapp
                        size={22}
                        className="!text-white shrink-0 relative z-10"
                    />
                    <span className="absolute right-full top-0 h-full flex items-center !bg-[#27AB00] group-hover:!bg-[#229500] !text-white text-[13px] font-medium rounded-l-[2px] rounded-r-none max-w-0 opacity-0 px-0 group-hover:max-w-[280px] group-hover:opacity-100 group-hover:px-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap overflow-hidden pointer-events-none group-hover:pointer-events-auto shadow-[-4px_0_12px_rgba(0,0,0,0.15)]">
                        <span className="whitespace-nowrap">
                            Chat on WhatsApp
                        </span>
                        {/* Smooth wave light shimmer */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                    </span>
                </a>
            </div>

            {/* Mobile Version: Sticky bottom bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] grid grid-cols-3 w-full border-none outline-none overflow-hidden font-poppins">
                <a
                    href="tel:+911242867700"
                    className="!bg-[#0060a9] !text-white py-2.5 px-0.5 text-center text-[11px] xs:text-[12px] sm:text-[13px] font-medium tracking-tight active:bg-[#005090] flex items-center justify-center gap-1 border-0 outline-none select-none"
                >
                    <Phone size={13} className="!text-white shrink-0" />
                    <span className="whitespace-nowrap">Call Us</span>
                </a>
                <a
                    href="https://admissions.krmangalam.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleApplyNow}
                    className="!bg-[#e31e24] !text-white py-2.5 px-0.5 text-center text-[10.5px] xs:text-[11.5px] sm:text-[13px] font-semibold tracking-tight active:bg-[#c31a1e] cursor-pointer border-0 outline-none select-none flex items-center justify-center"
                >
                    <span className="whitespace-nowrap">Apply Now</span>
                </a>
                <a
                    href="https://wa.me/918800697010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!bg-[#27AB00] !text-white py-2.5 px-0.5 text-center text-[11px] xs:text-[12px] sm:text-[13px] font-medium tracking-tight active:bg-[#27AB00] flex items-center justify-center gap-1 border-0 outline-none select-none"
                >
                    <FaWhatsapp size={14} className="!text-white shrink-0" />
                    <span className="whitespace-nowrap">WhatsApp</span>
                </a>
            </div>
        </>
    );
}
