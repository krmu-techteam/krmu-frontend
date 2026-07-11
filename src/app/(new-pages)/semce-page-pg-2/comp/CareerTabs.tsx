"use client";

import { useState } from "react";

type TabType = {
  label: string;
  content: string[];
};

const tabs: TabType[] = [
  {
    label: "Roles you can prepare for",
    content: [
      "Journalist, reporter or producer in print, TV, digital or OTT",
      "News editor, bulletin producer or digital editor",
      "Content strategist or creative strategist for agencies and brands",
      "Social media and community manager for media houses, creators and organisations",
      "Film, OTT and video production professional",
      "Advertising and brand communication specialist",
      "Public relations and corporate communication professional",
      "Data journalist or visual storyteller",
      "Digital marketing and campaign manager",
      "Digital media entrepreneur or creator founder",
      "Researcher or academic in media and communication",
    ],
  },
  {
    label: "For working professionals",
    content: [
      "Upskill in multimedia storytelling",
      "Learn creator economy strategies",
      "Build advanced digital media skills",
      "Leadership roles in media & communication",
    ],
  },
];

export default function CareerTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-6 min-h-[500px]">
      {/* LEFT TABS */}
      <div className="bg-[#0b5fa5] rounded-2xl p-6 text-white flex flex-col justify-center items-center">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`block w-full text-left px-4 py-3 rounded-lg mb-3 transition
              ${
                active === i
                  ? "bg-white text-[#0b5fa5] font-semibold"
                  : "hover:bg-white/10"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 border rounded-2xl p-5 md:p-10 xl:p-20">
        <ul className="list-disc pl-6 space-y-2 font-medium text-lg">
          {tabs[active].content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
