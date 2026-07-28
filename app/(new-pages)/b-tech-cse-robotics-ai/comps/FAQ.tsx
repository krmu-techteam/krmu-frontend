"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { faqData } from "../content";



const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const currentFaqs = faqData[activeTab].faqs;

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setOpenIndex(0);
  };

  return (
    <section className="pb-10">
      <div className="max-w-7xl mx-auto w-full px-5">
        <h4 className="text-3xl xl:text-5xl font-bold text-center">
          Any Question? We're Here To Help!
        </h4>

        <p className="text-center my-2 text-sm md:text-base">
          Can't find your query? Call us at <strong>8800697010</strong> or email
          us at{" "}
          <strong>
            <Link href="mailto:welcome@krmangalam.edu.in">
              welcome@krmangalam.edu.in
            </Link>
          </strong>
        </p>

        <div className="flex flex-col lg:flex-row my-12 lg:my-20 max-w-5xl mx-auto gap-8 lg:gap-10">
          {/* Left Tabs */}
          <div className="w-full lg:w-[20%]">
            <ul className="text-[#001732] space-y-3 font-semibold">
              {faqData.map((item, index) => (
                <li
                  key={item.category}
                  onClick={() => handleTabChange(index)}
                  className={`py-2 px-4 cursor-pointer transition-all duration-300 ${
                    activeTab === index
                      ? "bg-[linear-gradient(90deg,#D5F1F1_0%,#FBFBFB_100%)]"
                      : "bg-[linear-gradient(90deg,#EDEDED_0%,#FBFBFB_100%)]"
                  }`}
                >
                  {item.category}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Accordion */}
          <div className="w-full lg:w-[80%] space-y-4">
            {currentFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#ccd1d6] pb-4"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="w-full flex justify-between items-center text-left font-bold cursor-pointer"
                  >
                    <h4>{faq.question}</h4>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "grid-rows-[1fr] mt-4"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-[600px]">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;