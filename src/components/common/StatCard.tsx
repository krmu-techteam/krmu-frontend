import React from "react";

interface StatCardProps {
    number: React.ReactNode;
    label: string;
    bgColor?: string;
    className?: string;
    numberClassName?: string;
    labelClassName?: string;
}

export function StatCard({
    number,
    label,
    bgColor,
    className = "",
    numberClassName = "",
    labelClassName = "",
}: StatCardProps) {
    return (
        <div
            style={
                bgColor
                    ? {
                          backgroundColor: bgColor,
                      }
                    : undefined
            }
            className={`relative rounded-[4px] py-4 px-6 cursor-default text-start min-h-[100px] xl:min-h-[120px] flex flex-col justify-center ${className}`}
        >
            {/* Stat Number */}
            <div
                className={`text-3xl md:text-4xl font-light text-brand-gold mb-2 leading-none relative z-10 ${numberClassName}`}
            >
                {number}
            </div>

            {/* Stat Label */}
            <div
                className={`text-white/80 text-[14px] 2xl:text-[16px] capitalize tracking-wide font-light leading-tight relative z-10 ${labelClassName}`}
            >
                {label}
            </div>
        </div>
    );
}
