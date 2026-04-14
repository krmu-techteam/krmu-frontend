"use client";
import { useState } from "react";
import { faqData } from "../content";

export default function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {faqData.map((item, i) => (
        <div key={i} className="border-b-[2px] border-[rgba(5,22,48,0.05)]">
          {/* HEADER */}
          <div
            onClick={() => setActive(active === i ? null : i)}
            className="flex items-center justify-between cursor-pointer py-2.5  lg:max-w-[500px] xl:max-w-full"
          >
            <span className="font-bold pr-10 sm:pr-0">{item.ques}</span>

            <svg
              className={`transition-transform duration-300 ${
                active === i ? "rotate-90" : ""
              }`}
              width="14"
              height="14"
              viewBox="0 0 320 512"
              fill="currentColor"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>

          {/* CONTENT */}
          <div
            className={`px-[15px] pb-[10px] text-gray-600 text-[14px] transition-all duration-300 ${
              active === i ? "block" : "hidden"
            }`}
          >
            <p>{item.ans}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
