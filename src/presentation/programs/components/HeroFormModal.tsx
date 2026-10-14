"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight } from "lucide-react";
import NoPaperForm from "@/lib/constants/NoPaperForm";

type HeroFormModalProps = {
    buttonText?: React.ReactNode;
    buttonClassName?: string;
    formId?: string;
    slug?: string;
    programme?: string;
    school?: string;
    showIcon?: boolean;
};

export default function HeroFormModal({
    buttonText = "Apply Now",
    buttonClassName = "",
    formId,
    slug,
    programme,
    school,
    showIcon = false,
}: HeroFormModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const handleOpen = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleOpen}
                className={`relative overflow-hidden group ${buttonClassName} cursor-pointer`}
            >
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none" />
                <span>{buttonText}</span>
                {showIcon && (
                    <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1.5 shrink-0"
                    />
                )}
            </button>

            {isOpen &&
                mounted &&
                createPortal(
                    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300">
                        {/* Backdrop Click */}
                        <div
                            className="absolute inset-0"
                            onClick={handleClose}
                            aria-hidden="true"
                        />

                        {/* Modal Box */}
                        <div
                            className="relative z-10 w-full max-w-[460px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={handleClose}
                                className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Close form"
                            >
                                <X size={18} strokeWidth={2} />
                            </button>

                            {/* Header (Same as Hero Section) */}
                            <div className="heroBannerForm-header pt-5 pb-1 px-6 text-center">
                                <p
                                    className="mb-0 font-bold text-[22px] md:text-[24px] leading-tight inline-block w-full text-center"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, #0055a4 0%, #CB000D 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Apply Today for <br /> K.R. Mangalam
                                    University
                                </p>
                            </div>

                            {/* Hero NoPaperForm iframe */}
                            <div className="px-2 pb-3">
                                {formId ? (
                                    <NoPaperForm
                                        formId={formId}
                                        height="500px"
                                        programme={programme || slug}
                                        school={school}
                                    />
                                ) : (
                                    <div className="p-8 text-center text-gray-500 font-poppins">
                                        <p>Form is currently unavailable.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}
