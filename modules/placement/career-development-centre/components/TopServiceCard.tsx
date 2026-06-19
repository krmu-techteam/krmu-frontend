import React from "react";
import { CircleArrowRight } from "lucide-react";

interface TopServiceCardProps {
  heading: string;
  items: string[];
}

const TopServiceCard = ({ heading, items }: TopServiceCardProps) => {
  return (
    <div className="gsap-stagger-item gsap-top-card group relative flex flex-col bg-[#0b1a27] rounded-[8px] border border-white/10 hover:border-[#00A0E3] transition-colors duration-300 h-full p-6 sm:p-8 opacity-0">
      <h3 className="text-[22px] sm:text-[24px] font-serif font-semibold text-white leading-tight mb-5">
        {heading}
      </h3>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-white/90 text-[15px] sm:text-[16px] font-poppins leading-normal">
            <span className="mt-1 flex-shrink-0 text-white/80">
              <CircleArrowRight size={18} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopServiceCard;
