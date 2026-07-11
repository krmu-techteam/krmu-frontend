"use client";

import { yearTimeline } from "../data/YearTimeline";




export default function YearTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">
            What you will study over 4 years
          </h2>
          <p className="text-gray-500 mt-2">
            From foundations to deep skills to specialisation and launch
          </p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-300" />

          <div className="space-y-16">
            {yearTimeline.map((item) => (
              <div key={item.id} className="relative pl-14">
                {/* circle number */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-black bg-white flex items-center justify-center text-sm font-semibold">
                  {item.id}
                </div>

                {/* content */}
                <h3 className="text-xl md:text-2xl font-semibold text-red-600">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-1 mb-4">{item.desc}</p>

                <ul className="space-y-2 text-gray-800">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}