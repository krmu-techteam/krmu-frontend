"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, FileText } from "lucide-react";
import { ContactSectionProps } from "@/features/placement/career-development-centre";
import { useGSAPScrollReveal } from "@/hooks/useGSAPScrollReveal";
import careerDevelopmentCentre from "@/features/placement/career-development-centre/data/career-development-centre.json";

const ContactSection = ({
  title: propTitle,
  description: propDescription,
  registrationLabel: propRegistrationLabel,
  registrationLink: propRegistrationLink,
  phone: propPhone,
  email: propEmail,
}: Partial<ContactSectionProps>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fallback to static JSON if props are missing/stale
  const fallbackData = careerDevelopmentCentre.data.contactSection;
  const title = propTitle || fallbackData.title;
  const description = propDescription || fallbackData.description;
  const registrationLabel = propRegistrationLabel || fallbackData.registrationLabel;
  const registrationLink = propRegistrationLink || fallbackData.registrationLink;
  const phone = propPhone || fallbackData.phone;
  const email = propEmail || fallbackData.email; 

  // Apply reusable GSAP scroll reveal
  useGSAPScrollReveal(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-16 lg:py-24 px-6 sm:px-10 lg:px-12 xl:px-16" 
    > 
      <div className="max-w-[1530px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Information & Registration CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <h3 className="gsap-reveal-up heading-primary text-left opacity-0">
            {title}
          </h3>
          
          <p className="gsap-reveal-up text-white/80 font-poppins text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] font-light text-justify opacity-0">
            {description}
          </p>

          {registrationLink && (
            <div className="gsap-reveal-up opacity-0 pt-2">
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-4 bg-[#0D1C28] border border-white/10 p-5 rounded-[12px] max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-[#00A0E3]/15 flex items-center justify-center shrink-0">
                    <FileText className="text-[#00A0E3]" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-poppins font-medium text-[15px]">
                      Recruiter Registration
                    </h5>
                    <p className="text-white/60 font-poppins text-[12px]">
                      {registrationLabel || "Company Registration Form"}
                    </p>
                  </div>
                </div>
                <Link
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#00A0E3] hover:bg-[#0082b5] text-white font-medium font-poppins text-[14px] rounded-[8px] transition-colors duration-300 shadow-md hover:shadow-[#00A0E3]/20 shrink-0 group"
                >
                  <span>Register Now</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Quick Action Contact Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 gsap-stagger-up-container">
          
          {/* Phone Card */}
          {phone && (
            <div className="gsap-stagger-item group relative flex items-center gap-5 bg-[#0b1a27]/80 backdrop-blur-md rounded-[12px] border border-white/10 hover:border-[#00A0E3] p-6 transition-all duration-300 shadow-xl opacity-0">
              <div className="w-12 h-12 rounded-[10px] bg-[#00A0E3]/10 border border-[#00A0E3]/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00A0E3]/20">
                <Phone className="text-[#00A0E3]" size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 font-poppins text-[12px] uppercase tracking-wider">
                  Call Representative
                </span>
                <Link
                  href={`tel:${phone}`}
                  className="text-white hover:text-[#00A0E3] font-poppins font-semibold text-[18px] sm:text-[20px] transition-colors mt-0.5"
                >
                  {phone}
                </Link>
              </div>
            </div>
          )}

          {/* Email Card */}
          {email && (
            <div className="gsap-stagger-item group relative flex items-center gap-5 bg-[#0b1a27]/80 backdrop-blur-md rounded-[12px] border border-white/10 hover:border-[#00A0E3] p-6 transition-all duration-300 shadow-xl opacity-0">
              <div className="w-12 h-12 rounded-[10px] bg-[#00A0E3]/10 border border-[#00A0E3]/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00A0E3]/20">
                <Mail className="text-[#00A0E3]" size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 font-poppins text-[12px] uppercase tracking-wider">
                  Email Assistance
                </span>
                <Link
                  href={`mailto:${email}`}
                  className="text-white hover:text-[#00A0E3] font-poppins font-semibold text-[16px] sm:text-[18px] transition-colors mt-0.5 break-all"
                >
                  {email}
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
