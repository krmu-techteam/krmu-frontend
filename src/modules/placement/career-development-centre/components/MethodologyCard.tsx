import React from "react";

interface MethodologyCardProps {
  heading: string;
  items: string[];
}

const MethodologyCard = ({ heading, items }: MethodologyCardProps) => {
  return (
    <div className="gsap-stagger-item gsap-methodology-card group flex flex-col bg-[#0b1a27] rounded-[8px] border border-white/5 hover:border-[#00A0E3] transition-colors duration-300 p-5 sm:p-6 h-full opacity-0">
      <h4 className="text-[18px] sm:text-[20px] font-serif font-semibold text-white leading-tight mb-4 border-b border-white/10 pb-2.5">
        {heading}
      </h4>
      <ul className="space-y-3 flex-1 flex flex-col justify-start">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-white/85 text-[14px] font-poppins leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00A0E3] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MethodologyCard;
