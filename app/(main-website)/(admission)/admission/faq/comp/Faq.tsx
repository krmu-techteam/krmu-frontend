"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ClipboardList,
  BookOpen,
  BadgeDollarSign,
  Briefcase,
  Building2,
  FileCheck,
  Users,
} from "lucide-react";
// import BG from "@/public/FAQimg/FAQbg.jpg";
import faqCategories from "../faqData/faqD.json";
import Link from "next/link";
import SectionDivider from "@/components/common/SectionDivider";

const iconMap: { [key: string]: React.ElementType } = {
  ClipboardList,
  BookOpen,
  BadgeDollarSign,
  Briefcase,
  Building2,
  FileCheck,
  Users,
};

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    "admissions",
  );
  const [openItem, setOpenItem] = useState<string>("item-0");
  const faqData = faqCategories.mainEntity;
  const currentCategory = faqData.find((cat) => cat.id === activeCategory);

  return (
    <>
      {/* Hero Section with Diagonal Lines */}
      <section className="bg-[url(/admission/faq-bg.webp)] relative z-4 bg-[#0c2538] bg-bottom lg:bg-cover bg-no-repeat px-4">
        <div className="max-w-[1530px] pt-[140px] pb-20 lg:py-[10%] mx-auto w-full text-white px-16">
          <h1 className="text-[34px] md:text-4xl lg:text-8xl font-semibold my-5 lg:my-10 ">
            Questions? Look Here
          </h1>
          <h3 className="md:text-3xl lg:text-4xl text-lg font-semibold my-5 ">
            Can’t find an answer?
          </h3>
          <button
            className={`border border-white hover:border-white/70 hover:bg-white/5 hover:text-white duration-300 font-poppins text-white flex justify-center items-center px-8 py-1.5 rounded-[3px] gap-4 font-normal`}
          >
            <Link
              href="https://www.krmangalam.edu.in/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us 
            </Link>
          </button>
        </div>
        <SectionDivider />
      </section>

      {/* FAQ Content Section */}
      <section className="relative pb-20 px-6 lg:px-0  font-sans overflow-hidden ">
        {/* Top right gradient */}
        {/* <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-radial-[at_60%_75%] from-sky-100 via-blue-200 to-indigo-900 to-80% rounded-full blur-3xl  to-transparent pointer-events-none"></div> */}
        {/* Bottom left gradient */}
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px]  to-indigo-900 to-80% rounded-full blur-3xl to-transparent  pointer-events-none"></div>
        <div className="max-w-[1530px] mx-auto   my-10   w-full relative px-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Category Buttons */}
            <div className="w-full lg:w-[350px] flex flex-col gap-4 flex-shrink-0">
              {faqData.map((cat) => {
                const Icon = iconMap[cat.icon];
                const isActive = cat.id === activeCategory;
                return (
                  <div key={cat.id} className="w-full">
                    <button
                      onClick={() =>
                        setActiveCategory(isActive ? null : cat.id)
                      }
                      className={`relative overflow-hidden isolate flex items-center gap-4 w-full h-[70px] text-left px-5 py-3 rounded-xs font-medium lg:text-xl text-md transition-all duration-300 ease-out border cursor-pointer group ${
                        isActive
                          ? "bg-[#004B8D] text-white font-poppins border-[#004B8D] shadow-xl border-l-3"
                          : "bg-[#061623] text-white/80 font-poppins border-[#061623] hover:text-white hover:border-white/20 hover:translate-x-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-l-3"
                      }`}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderLeftColor = cat.iconBg;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderLeftColor = "";
                        }
                      }}
                      onTouchStart={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderLeftColor = cat.iconBg;
                        }
                      }}
                      onTouchEnd={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderLeftColor = "";
                        }
                      }}
                    >
                      {/* Background Sweep Layer */}
                      {!isActive && (
                        <div
                          className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0 pointer-events-none"
                          style={{
                            backgroundColor: `${cat.iconBg}1e`, // ~12% opacity
                          }}
                        />
                      )}

                      <span
                        className="relative z-10 flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          backgroundColor: cat.iconBg,
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </span>
                      <span className="relative z-10">{cat.label}</span>
                    </button>

                    {/* Mobile FAQ Accordion - shows below active button */}
                    {isActive && (
                      <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-sm border border-[#dde6f0] p-6  ">
                        <Accordion
                          type="single"
                          collapsible
                          defaultValue="item-0"
                          // value={openItem}
                          // onValueChange={setOpenItem}
                        >
                          {cat.faqs.map((faq, i) => (
                            <AccordionItem
                              key={i}
                              value={`item-${i}`}
                              className="border-b border-[#f0f4f8] last:border-b-0"
                            >
                              {/* Add [&>svg]:hidden for (+)*/}
                              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-800 hover:text-[#0060aa] font-poppins hover:no-underline py-4 cursor-pointer data-[state=open]:text-[#0060aa] ">
                                {faq.question}
                                {/* <span className="text-xl font-bold">
                                  {openItem === `item-${i}` ? "−" : "+"}
                                </span> */}
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: FAQ Accordion - Desktop only */}
            {/* Right: FAQ Accordion - Desktop only */}
            {activeCategory && currentCategory ? (
              <div className="hidden lg:block flex-1 rounded-[3px] shadow-xl border border-white/20 p-6">
                <Accordion
                  type="single"
                  collapsible
                  value={openItem}
                  onValueChange={setOpenItem}
                  key={activeCategory}
                >
                  {currentCategory.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-[#f0f4f8] last:border-b-0"
                    >
                      {/* Add [&>svg]:hidden for (+)*/}
                      <AccordionTrigger className="text-left text-sm md:text-base font-medium text-white hover:text-white/80 font-poppins hover:no-underline py-4 cursor-pointer data-[state=open]:text-white/80 ">
                        {faq.question}
                        {/* <span className="text-xl font-bold">
                          {openItem === `item-${i}` ? "−" : "+"}
                        </span> */}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/60 font-poppins text-sm leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className="hidden lg:flex w-full   items-center justify-center bg-white rounded-2xl shadow-xl border border-[#dde6f0] p-6">
                <h2 className="text-[120px] font-bold text-gray-200">FAQ...</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
