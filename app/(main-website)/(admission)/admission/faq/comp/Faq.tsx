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
import BG from "@/public/FAQimg/FAQbg.jpg";
import faqCategories from "../faqData/faqD.json";

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
  const currentCategory = faqCategories.find((c) => c.id === activeCategory)!;

  return (
    <>
      {/* Hero Section with Diagonal Lines */}
      <section
        className="relative  px-4 overflow-hidden font-serif"
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative max-w-[1664px] pt-[140px] pb-20 lg:py-[8%] mx-auto w-full text-white text-center">
          <h1 className="text-[80px] md:text-[120px] lg:text-[160px] font-bold tracking-wider ">
            IQAC
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-5xl font-normal tracking-wide">
            Internal Quality Assurance Cell
          </h3>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="relative py-20 px-6 lg:px-0  font-sans overflow-hidden ">
        {/* Top right gradient */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-radial-[at_60%_75%] from-sky-100 via-blue-200 to-indigo-900 to-80% rounded-full blur-3xl  to-transparent pointer-events-none"></div>
        {/* Bottom left gradient */}
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-radial-[at_60%_75%] from-sky-100 via-blue-200 to-indigo-900 to-80% rounded-full blur-3xl to-transparent  pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto w-full relative">
          <div className="flex flex-col lg:flex-row gap-18 items-start">
            {/* Left: Category Buttons */}
            <div className="w-full lg:w-[350px] flex flex-col gap-8 flex-shrink-0">
              {faqCategories.map((cat) => {
                const Icon = iconMap[cat.icon];
                const isActive = cat.id === activeCategory;
                return (
                  <div key={cat.id} className="w-full">
                    <button
                      onClick={() =>
                        setActiveCategory(isActive ? null : cat.id)
                      }
                      className={`flex items-center gap-3 w-full h-[80px] text-left px-4 py-3 rounded-xl shadow-2xl font-semibold lg:text-xl text-md transition-all duration-200 border cursor-pointer group ${
                        isActive
                          ? "bg-[#004B8D] text-white border-[#004B8D] shadow-xl border-l-6"
                          : "bg-white text-[#0060aa] border-[#dde6f0] hover:shadow-lg hover:border-l-6"
                      }`}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderLeftColor = cat.iconBg;
                        }
                      }}
                      onTouchStart={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderLeftColor = cat.iconBg;
                        }
                      }}
                    >
                      <span
                        className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-all duration-200"
                        style={{
                          backgroundColor: cat.iconBg,
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </span>
                      {cat.label}
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
                              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-800 hover:text-[#0060aa] hover:no-underline py-4 cursor-pointer data-[state=open]:text-[#0060aa] ">
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
              <div className="hidden lg:block flex-1 bg-white rounded-2xl shadow-xl border border-[#dde6f0] p-6">
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
                      <AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-800 hover:text-[#0060aa] hover:no-underline py-4 cursor-pointer data-[state=open]:text-[#0060aa] ">
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
