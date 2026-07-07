"use client";

import { useState, useRef, MouseEvent } from "react";
import {
  ArrowRight,
  Phone,
  Download,
  GraduationCap,
  Headphones,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { SchoolCategoryType } from "@/lib/types/school-programme";

type Props = {
  schoolCat: SchoolCategoryType;
};

export const ActionCards = ({ schoolCat }: Props) => {
  const brochureLinks: Record<string, string> = {
    soet: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOET_Print2_2174445457.pdf",

    somc: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOMC_a992b7ec7f.pdf",

    sols: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOLS_Print_399f0d11d3.pdf",
    smas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SMAS_Print_ec7f43f883.pdf",
    sprs: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SPRS_Print_3_17f374576b.pdf",
    sola: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOLA_Print2_d64c6893cd.pdf",
    soad: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOAD_Print_bede034fe7.pdf",
    sbas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SBAS_Print_e7613fb246.pdf",
    semce:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SJMC_Print2_dadeaa8143.pdf",
    // sohmct: "",
    soed: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOED_Print2_ea2b3a76ee.pdf",
    soas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOAS_Print_d94bbd699d.pdf",
  };

  const brochureLink = brochureLinks[schoolCat?.slug] || "#";

  const actionCards = [
    {
      id: 1,
      title: "Apply Now",
      description:
        "Login to your application page to start your application and reserve your place in the class of 2026.",
      buttonText: "Apply Now",
      link: "#apply-form",
      icon: (
        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
      ),
      mainIcon: (
        <GraduationCap
          className="w-10 h-10 text-[#CB000D] group-hover:-translate-y-1 transition-transform duration-500"
          strokeWidth={1.5}
        />
      ),
      cardBg: "bg-gradient-to-br from-[#002952] to-[#051730]",
      buttonBg:
        "bg-[#CB000D] text-white hover:bg-[#c41a1f] border border-transparent",
      textColor: "text-white",
      glowColor: "rgba(227, 30, 36, 0.2)",
      borderColor: "border-white/10 hover:border-red-500/30",
    },
    {
      id: 2,
      title: "Connect",
      description:
        "If you would like to speak to an admission counselor please connect with us.",
      buttonText: "Talk Now",
      link: "tel:8800697010",
      icon: (
        <Phone className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:rotate-12" />
      ),
      mainIcon: (
        <Headphones
          className="w-10 h-10 text-blue-400 group-hover:-translate-y-1 transition-transform duration-500"
          strokeWidth={1.5}
        />
      ),
      cardBg: "bg-gradient-to-br from-[#021429] to-[#010a14]",
      buttonBg:
        "bg-white text-[#021429] hover:bg-gray-100 border border-transparent",
      textColor: "text-white",
      glowColor: "rgba(96, 165, 250, 0.15)",
      borderColor: "border-white/10 hover:border-blue-400/30",
    },
    {
      id: 3,
      title: "Brochure",
      description:
        "Download our latest brochure for a detailed look at our programme offerings.",
      buttonText: "Download Now",
      link: brochureLink,
      icon: (
        <Download className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
      ),
      mainIcon: (
        <BookOpen
          className="w-10 h-10 text-teal-400 group-hover:-translate-y-1 transition-transform duration-500"
          strokeWidth={1.5}
        />
      ),
      cardBg: "bg-gradient-to-br from-[#0a3a40] to-[#041a1d]",
      buttonBg:
        "bg-[#051730] text-white hover:bg-[#0a264a] border border-white/20 hover:border-teal-400/50",
      textColor: "text-white",
      glowColor: "rgba(45, 212, 191, 0.15)",
      borderColor: "border-white/10 hover:border-teal-400/30",
    },
  ];

  return (
    <section className="relative py-8 md:p-6 lg:py-10 xl:py-12 2xl:py-16 px-4 lg:px-10 2xl:px-0 bg-[#f8f9fa] overflow-hidden">
      {/* Modern Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 xl:gap-4 2xl:gap-8">
          {actionCards.map((actionCard) => (
            <ActionCard key={actionCard.id} actionCard={actionCard} />
          ))}
        </div>
      </div>
    </section>
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
    mainIcon: React.ReactNode;
    cardBg: string;
    buttonBg: string;
    textColor: string;
    glowColor: string;
    borderColor: string;
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
      className={`${actionCard.cardBg} ${actionCard.textColor} ${actionCard.borderColor} border rounded-md p-6 md:p-6 xl:p-6 2xl:p-6 flex flex-col items-center text-center shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full relative overflow-hidden group`}
    >
      {/* Spotlight Effect Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: opacity,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${actionCard.glowColor}, transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full w-full items-center">
        <div className="mb-4 xl:mb-3 2xl:mb-4 p-3 xl:p-2 2xl:p-3 bg-white/5 rounded-full ring-1 ring-white/10 group-hover:bg-white/10 transition-colors duration-500">
          {actionCard.mainIcon}
        </div>

        <h3 className="text-xl md:text-xl xl:text-lg 2xl:text-2xl font-bold mb-3 xl:mb-2 2xl:mb-3 tracking-wide">
          {actionCard.title}
        </h3>

        <p className="text-sm md:text-[14px] xl:text-[15px] 2xl:text-[15px] opacity-75 leading-relaxed mb-8 xl:mb-4 2xl:mb-8 flex-grow">
          {actionCard.description}
        </p>

        <Link
          href={actionCard.link}
          className={`${actionCard.buttonBg} w-auto px-6 py-2 xl:py-2.5 2xl:py-3 rounded-md font-semibold flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg group/btn mt-auto`}
        >
          <span className="flex items-center text-[15px] xl:text-[14px] 2xl:text-[15px] tracking-wide">
            {actionCard.buttonText}
            {actionCard.icon}
          </span>
        </Link>
      </div>
    </div>
  );
};
