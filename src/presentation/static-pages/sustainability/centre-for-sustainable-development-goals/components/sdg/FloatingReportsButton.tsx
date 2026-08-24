"use client";

import React from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingReportsButtonProps {
    show: boolean;
    onOpenDrawer: () => void;
}

const FloatingReportsButton: React.FC<FloatingReportsButtonProps> = ({
    show,
    onOpenDrawer,
}) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: "spring", damping: 22, stiffness: 350 }}
                    className="fixed left-4 sm:left-[0px] lg:left-[6px] 2xl:left-24 bottom-4 sm:bottom-6 z-40 flex flex-col items-center justify-center shrink-0"
                >
                    <button
                        onClick={onOpenDrawer}
                        className="w-[30px] h-[30px] xl:w-[60px] xl:h-[60px] rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group shadow-2xl"
                        aria-label="Open Sustainability Reports Drawer"
                    >
                        <Menu className="w-[20px] h-[20px] xl:w-[35px] xl:h-[35px] text-slate-800 group-hover:text-black transition-colors" />
                    </button>
                    <span className="text-[10px] lg:hidden xl:text-[14px] font-normal tracking-widest text-white uppercase mt-2 sm:mt-3 font-sans">
                        REPORTS
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingReportsButton;
