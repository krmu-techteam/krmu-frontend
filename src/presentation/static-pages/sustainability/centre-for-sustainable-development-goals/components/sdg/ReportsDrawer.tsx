"use client";

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sustainTriggers } from "./data";

interface ReportsDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    activeAccordion: string | null;
    onSelectTab: (id: string) => void;
}

const ReportsDrawer: React.FC<ReportsDrawerProps> = ({
    isOpen,
    onClose,
    activeAccordion,
    onSelectTab,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Sliding Left Drawer Panel */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-[310px] bg-[#181B1E] text-white flex flex-col justify-between z-50 h-full border-r border-white/10 overflow-hidden py-4 px-4 shadow-2xl"
                    >
                        {/* Tab Buttons List */}
                        <div className="flex-1 flex flex-col justify-between py-1 overflow-y-auto custom-scrollbar pr-0.5">
                            {sustainTriggers.map((trigger) => {
                                const isActive = activeAccordion === trigger.id;
                                return (
                                    <button
                                        key={trigger.id}
                                        onClick={() => onSelectTab(trigger.id)}
                                        className={`w-full text-left py-1.5 xl:py-2  px-2 xl:px-3.5 rounded-[4px] border transition-all duration-200 cursor-pointer flex items-center ${
                                            isActive
                                                ? "bg-white/20 border-white/40 text-white font-medium shadow-sm"
                                                : "bg-white/5 border-white/20 hover:bg-white/10 text-gray-200 font-light"
                                        }`}
                                    >
                                        <span className="text-xs xl:text-[13px] leading-snug block">
                                            {trigger.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Left-Aligned Bottom Circular X Close Button with REPORTS label */}
                        <div className="pt-3 mb-3 xl:pb-1 flex flex-col items-start shrink-0 px-1">
                            <button
                                onClick={onClose}
                                className="w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group shadow-xl"
                                aria-label="Close Sustainability Reports Drawer"
                            >
                                <X className="w-7 h-7 text-black transition-transform group-hover:scale-110" />
                            </button>
                            <span className="text-[11px] sm:text-[13px] font-normal tracking-widest text-white uppercase mt-2 font-sans pl-1">
                                REPORTS
                            </span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ReportsDrawer;
