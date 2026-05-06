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
      <section className="bg-[url(/admission/faq-bg.webp)] bg-bottom lg:bg-cover bg-no-repeat px-4">
        <div className="max-w-[1664px] pt-[140px] pb-20 lg:py-[10%] mx-auto w-full text-white mx-15">
          <h1 className="text-[34px] md:text-4xl lg:text-8xl font-semibold my-5 lg:my-10 ">
            Questions? Look Here
          </h1>
          <h3 className="md:text-3xl lg:text-4xl text-lg font-semibold my-5 ">
            Can’t find an answer?
          </h3>
          <button
            className={`border border-white text-white flex justify-center items-center px-5 py-1.5 rounded-md gap-4 font-semibold`}
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
      </section>

      {/* FAQ Content Section */}
      <section className="relative pb-20 px-6 lg:px-0  font-sans overflow-hidden ">
        {/* Top right gradient */}
        {/* <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-radial-[at_60%_75%] from-sky-100 via-blue-200 to-indigo-900 to-80% rounded-full blur-3xl  to-transparent pointer-events-none"></div> */}
        {/* Bottom left gradient */}
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-radial-[at_60%_75%] from-sky-100 via-blue-200 to-indigo-900 to-80% rounded-full blur-3xl to-transparent  pointer-events-none"></div>
        <div className="max-w-[1560px] mx-auto lg:mx-32 my-10   w-full relative">
          <div className="flex flex-col lg:flex-row gap-18 items-start">
            {/* Left: Category Buttons */}
            <div className="w-full lg:w-[350px] flex flex-col gap-8 flex-shrink-0">
              {faqData.map((cat) => {
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
