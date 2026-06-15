"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  lines: string[];
  className?: string;
  lineColor?: string; // Can be hex like "#0055A4" or CSS class name like "text-[#0055A4]"
  stiffness?: number;
  damping?: number;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  lines,
  className = "text-4xl sm:text-5xl md:text-[64px] lg:text-[72px] font-bold leading-[1.08] tracking-tight font-poppins",
  lineColor = "#0055A4",
  stiffness = 140,
  damping = 18,
}) => {
  const isHexColor = lineColor.startsWith("#") || lineColor.startsWith("rgb") || lineColor.startsWith("hsl");

  // Variants for container stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02, // 20ms between characters
        delayChildren: 1.1,    // Start typing after circle/arrow drawing completes (1.1s)
      }
    }
  };

  // Variants for individual letters (springy slide-up and fade-in typing)
  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: stiffness,
        damping: damping,
        mass: 0.8
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-7 text-white">
      {/* 1. Circle & Arrow Drawing Animation */}
      <div className="flex-shrink-0">
        <svg className="w-14 h-14 md:w-16 md:h-16 text-white" viewBox="0 0 100 100" style={isHexColor ? { color: lineColor } : undefined}>
          {/* Animated Circle Outline */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="5.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: 1, rotate: 270 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Animated Arrow inside */}
          <motion.path
            d="M38 50h24 M50 38l12 12-12 12"
            stroke="currentColor"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* 2. Text Content (Typing effect with word wrapping protection) */}
      <motion.h1 
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, lineIdx) => (
          <span key={lineIdx} className="block overflow-hidden pb-3 -mb-3">
            <span className="inline-flex flex-wrap">
              {line.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-flex whitespace-nowrap mr-[0.25em]">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

 
