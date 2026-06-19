import React from "react";

interface SkillCardProps {
  heading: string;
  description: string;
}

const SkillCard = ({ heading, description }: SkillCardProps) => {
  return (
    <div className="gsap-stagger-item gsap-skills-card group flex flex-col bg-[#0b1a27] rounded-[8px] border border-white/5 hover:border-[#00A0E3] transition-colors duration-300 p-5 sm:p-6 h-full justify-between opacity-0">
      <div>
        <h4 className="text-[18px] sm:text-[20px] font-serif font-semibold text-white leading-tight mb-3">
          {heading}
        </h4>
        <p className="text-white/85 text-[14px] font-poppins font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
