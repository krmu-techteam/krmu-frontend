"use client";

import { ArrowUpRight } from "lucide-react";
import { PGTestimonialsBlock } from "../admission/PGType";
import TestimonialSlide from "./TestimonialSlide";

type Props = {
  data: PGTestimonialsBlock;
};

export default function Testimonials({ data }: Props) {
  const { header } = data;

  return (
    <section className="bg-gradient-to-b from-[#04162E] to-[#020B18] py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">
          <div>
            <p className="text-sm text-gray-300 mb-2">{header?.eyebrow}</p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              {header?.title}{" "}
              <span className="text-pink-300">{header?.highlight}</span>
            </h2>
          </div>

          {header.cta && (
            <a
              href={header.cta.href ?? "#"}
              className="group self-start lg:self-center flex items-center gap-3 border border-white/30 rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              {header.cta.label}
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-red-500 text-white group-hover:rotate-45 transition">
                <ArrowUpRight size={16} />
              </span>
            </a>
          )}
        </div>

        {/* Masonry Grid */}
        <div>
          <TestimonialSlide data={data} />
        </div>
        {/* <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`break-inside-avoid rounded-xl p-6 ${
                item.featured ? "text-white" : "text-black"
              } ${item.color}`}
            >
          
              {item.brand && (
                <p
                  className={`font-semibold mb-4 ${
                    item.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.brand}
                </p>
              )}

            
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  item.featured ? "text-white/90" : "text-gray-700"
                }`}
              >
                “{item.text}”
              </p>

             
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-300 shrink-0" />
                <span
                  className={`text-sm ${
                    item.featured ? "text-white" : "text-gray-600"
                  }`}
                >
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
