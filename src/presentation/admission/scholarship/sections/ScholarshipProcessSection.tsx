"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    GraduationCap,
    FileText,
    ShieldCheck,
    Medal,
    ThumbsUp,
} from "lucide-react";

interface ProcessStep {
    step: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
    {
        step: 1,
        title: "Apply for Admission",
        description:
            "Fill out the online admission form through the university admission portal.",
        icon: (
            <GraduationCap className="w-5 h-5 text-[#FF9D00] stroke-[1.75]" />
        ),
    },
    {
        step: 2,
        title: "Submit Scholarship Documents",
        description: "12th Class Mark-sheet, Sports Certificate, CUET/JEE...",
        icon: <FileText className="w-5 h-5 text-[#FF9D00] stroke-[1.75]" />,
    },
    {
        step: 3,
        title: "Document Verification",
        description: "Admission team verify all submitted documents.",
        icon: <ShieldCheck className="w-5 h-5 text-[#FF9D00] stroke-[1.75]" />,
    },
    {
        step: 4,
        title: "Sports Scholarship",
        description:
            "Sports Scholarship Applicants may also need certificate verification and physical test.",
        icon: <Medal className="w-5 h-5 text-[#FF9D00] stroke-[1.75]" />,
    },
    {
        step: 5,
        title: "Scholarship Approval",
        description:
            "Eligible students receive scholarship approval based on the university criteria.",
        icon: <ThumbsUp className="w-5 h-5 text-[#FF9D00] stroke-[1.75]" />,
    },
];

// Initial angles (degrees) spaced evenly by 72° along the circle
// Step 1: -54° (top-right), Step 2: 18° (middle-right), Step 3: 90° (bottom-center), Step 4: 162° (middle-left), Step 5: 234° (top-left)
const INITIAL_ANGLES = [-54, 18, 90, 162, 234];
const ORBIT_RADIUS = 290; // Radius in px: well-spaced from center text and leaves clean bottom padding

const ScholarshipProcessSection = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const rotationRef = useRef(0);
    const isPausedRef = useRef(false);

    // Continuous ultra-smooth clockwise loop running on GPU compositor
    useEffect(() => {
        let animId: number;
        let lastTime = performance.now();

        // Initial positioning
        for (let i = 0; i < processSteps.length; i++) {
            const el = cardRefs.current[i];
            if (el) {
                const deg = INITIAL_ANGLES[i];
                const rad = (deg * Math.PI) / 180;
                const x = ORBIT_RADIUS * Math.cos(rad);
                const y = ORBIT_RADIUS * Math.sin(rad);
                el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            }
        }

        const update = (time: number) => {
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            if (!isPausedRef.current) {
                // Smooth 6.5 deg/sec - graceful, readable, ultra-smooth motion
                rotationRef.current = (rotationRef.current + delta * 6.5) % 360;
                const rot = rotationRef.current;

                for (let i = 0; i < processSteps.length; i++) {
                    const el = cardRefs.current[i];
                    if (el) {
                        const deg = (INITIAL_ANGLES[i] + rot) % 360;
                        const rad = (deg * Math.PI) / 180;
                        const x = ORBIT_RADIUS * Math.cos(rad);
                        const y = ORBIT_RADIUS * Math.sin(rad);
                        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
                    }
                }
            }
            animId = requestAnimationFrame(update);
        };

        animId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <section className="relative w-full overflow-hidden font-poppins min-h-[750px] lg:min-h-[950px] flex flex-col items-center justify-start pt-8 pb-8 sm:pb-10 lg:pt-12 lg:pb-12 select-none">
            {/* Background Image with #001732 overlay at 0.88 opacity */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/scholarship/scholarship.png"
                    alt="Scholarship Availing Process"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div
                    className="absolute inset-0 bg-[#061623]"
                    style={{ opacity: 0.88 }}
                />
            </div>

            {/* Top Heading */}
            <div className="relative z-10 w-full text-center mb-4 lg:mb-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-white tracking-tight">
                    How to get scholarship?
                </h2>
            </div>

            {/* DESKTOP VIEW (lg and above): Trigonometric Clockwise Orbit with Upright Cards (0 deg) */}
            <div
                className="hidden lg:flex relative z-10 w-full max-w-[1441px] h-[720px] xl:h-[740px] items-center justify-center mx-auto px-4"
                onMouseEnter={() => {
                    isPausedRef.current = true;
                }}
                onMouseLeave={() => {
                    isPausedRef.current = false;
                }}
            >
                {/* 2px Circular Track connecting the card centers */}
                <div
                    className="absolute rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_25px_rgba(245,158,11,0.08)]"
                    style={{
                        width: `${ORBIT_RADIUS * 2}px`,
                        height: `${ORBIT_RADIUS * 2}px`,
                        border: "2px solid rgba(184, 120, 42, 0.45)",
                    }}
                />

                {/* Center Title inside the circle (Always static and clear) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 max-w-[280px] pointer-events-none">
                    <h3 className="text-2xl xl:text-[32px] font-bold text-white tracking-tight leading-tight">
                        Scholarship
                        <br />
                        Availing Process
                    </h3>
                </div>

                {/* Cards placed along the circle with 0 deg rotation (always perfectly upright) */}
                {processSteps.map((step, idx) => {
                    const initialDeg = INITIAL_ANGLES[idx];
                    const initialRad = (initialDeg * Math.PI) / 180;
                    const initialX = ORBIT_RADIUS * Math.cos(initialRad);
                    const initialY = ORBIT_RADIUS * Math.sin(initialRad);

                    return (
                        <div
                            key={step.step}
                            ref={(el) => {
                                cardRefs.current[idx] = el;
                            }}
                            className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer will-change-transform z-20"
                            style={{
                                transform: `translate3d(${initialX}px, ${initialY}px, 0) translate(-50%, -50%)`,
                            }}
                        >
                            <ProcessCard item={step} />
                        </div>
                    );
                })}
            </div>

            {/* MOBILE & TABLET VIEW (< lg): Responsive Timeline Steps */}
            <div className="block lg:hidden relative z-10 w-full px-6 max-w-[500px] mx-auto mt-8">
                <div className="relative flex flex-col gap-4">
                    {/* Vertical connecting line */}
                    <div
                        className="absolute left-6 top-6 bottom-6 w-[2px] z-0"
                        style={{ background: "rgba(184, 120, 42, 0.45)" }}
                    />

                    {processSteps.map((item) => (
                        <div key={item.step} className="relative z-10">
                            <ProcessCard item={item} isMobile />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface ProcessCardProps {
    item: ProcessStep;
    isMobile?: boolean;
}

const ProcessCard = ({ item, isMobile = false }: ProcessCardProps) => {
    return (
        <div
            className={`relative rounded-[24px] bg-[#061623]/70 border border-[#0161B0]/70 px-4 py-3.5 transition-all duration-300 hover:border-[#FF9D00]/70 hover:bg-[#032042]/95 hover:scale-[1.03] group ${
                isMobile
                    ? "w-full min-h-[140px] flex flex-col justify-center pl-14"
                    : "w-[250px] h-[173px] flex flex-col items-center justify-center text-center"
            }`}
        >
            {/* Step Number in Top-Right */}
            <span className="absolute top-2.5 right-4 text-3xl font-light font-mono text-[#0161B0] select-none group-hover:text-[#FF9D00]/80 transition-colors">
                {item.step}
            </span>

            {/* Gold Circular Icon */}
            <div className="w-10 h-10 rounded-full border-[1.5px] border-[#FF9D00] bg-[#FF9D00]/10 flex items-center justify-center mx-auto mb-2 shadow-[0_0_10px_rgba(245,158,11,0.18)] group-hover:scale-110 transition-transform shrink-0">
                {item.icon}
            </div>

            {/* Step Title */}
            <h4 className="text-white font-bold text-[14px] text-center leading-snug tracking-tight">
                {item.title}
            </h4>

            {/* Step Description */}
            <p className="text-white/90 text-[11px] text-center mt-1 leading-snug max-w-[215px] mx-auto">
                {item.description}
            </p>
        </div>
    );
};

export default ScholarshipProcessSection;
