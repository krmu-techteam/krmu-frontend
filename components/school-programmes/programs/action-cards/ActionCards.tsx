"use client";

import { useState, useRef, MouseEvent } from "react";
import {
  ArrowRight,
  Phone,
  Download,
} from "lucide-react";
import Link from "next/link";

export const ActionCards = () => {
  const actionCards = [
    {
      id: 1,
      title: "Apply Now",
      description: "Login to your application page to start your application and reserve your place in the class of 2026.",
      buttonText: "Apply Now",
      link: "#apply-form",
      icon: <ArrowRight className="w-4 h-4 ml-2" />,
      cardBg: "bg-[#002952]",
      buttonBg: "bg-[#E31E24] text-white hover:bg-[#c41a1f]",
      textColor: "text-white",
      glowColor: "rgba(227, 30, 36, 0.15)"
    },
    {
      id: 2,
      title: "Connect",
      description: "If you would like to speak to a admission counselor please connect with us.",
      buttonText: "Talk Now",
      link: "tel:9311411717",
      icon: <Phone className="w-4 h-4 mr-2" />,
      cardBg: "bg-[#021429]",
      buttonBg: "bg-white text-[#021429] hover:bg-gray-100",
      textColor: "text-white",
      glowColor: "rgba(255, 255, 255, 0.1)"
    },
    {
      id: 3,
      title: "Brochure",
      description: "Download our latest prospectus for a detailed look at our program offerings.",
      buttonText: "Download Now",
      link: "/admission/download-brochure",
      icon: <Download className="w-4 h-4 mr-2" />,
      cardBg: "bg-[#127173]",
      buttonBg: "bg-[#021429] text-white hover:bg-[#051d38]",
      textColor: "text-white",
      glowColor: "rgba(2, 20, 41, 0.2)"
    }
  ];

  return (
    <div className="bg-[#EFF4FF] py-12 md:py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
        {actionCards.map((actionCard) => (
          <ActionCard key={actionCard.id} actionCard={actionCard} />
        ))}
      </div>
    </div>
  );
};

interface ActionCardProps {
  actionCard: {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    link: string;
    icon: React.ReactNode;
    cardBg: string;
    buttonBg: string;
    textColor: string;
    glowColor: string;
  };
}

const ActionCard = ({ actionCard }: ActionCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`${actionCard.cardBg} ${actionCard.textColor} rounded-xl p-4 md:p-8 flex flex-col items-center text-center shadow-lg transition-all duration-500 hover:scale-[1] hover:-translate-y-[2px] h-full relative overflow-hidden group`}
    >
      {/* Spotlight Effect Layer */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: opacity,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${actionCard.glowColor}, transparent 40%)`,
        }}
      />

      <h3 className="text-xl md:text-2xl font-semibold mb-6 tracking-tight relative">{actionCard.title}</h3>
      <p className="text-sm md:text-base opacity-80 leading-relaxed mb-10 min-h-[80px]  relative">
        {actionCard.description}
      </p>
      
      <Link 
        href={actionCard.link}
        className={`${actionCard.buttonBg} w-full py-3 rounded-sm font-semibold flex items-center justify-center transition-all duration-500 shadow-md  relative`}
      >
        <span className="flex items-center">
          {actionCard.id === 2 || actionCard.id === 3 ? (
            <span className="transition-transform duration-500 ">{actionCard.icon}</span>
          ) : null}
          <span className="text-[17px]">{actionCard.buttonText}</span>
          {actionCard.id === 1 ? (
            <span className="transition-transform duration-500 ">{actionCard.icon}</span>
          ) : null}
        </span>
      </Link>
    </div>
  );
};
