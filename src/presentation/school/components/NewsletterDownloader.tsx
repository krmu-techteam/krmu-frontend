"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/features/school";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

interface Props {
    newsLetterBtns: Button[];
}

const NewsletterDownloader = ({ newsLetterBtns }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState<number | "">("");

    const selectedBtn =
        selectedIndex !== "" &&
        newsLetterBtns &&
        newsLetterBtns[selectedIndex as number]
            ? newsLetterBtns[selectedIndex as number]
            : null;

    const handleDownloadClick = (e: React.MouseEvent) => {
        if (!selectedBtn?.buttonlink) {
            e.preventDefault();
            alert("Please select a year first to download the newsletter.");
        }
    };

    return (
        <div className="flex gap-4 justify-start flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center w-full">
            {/* SELECT YEAR DROPDOWN */}
            <div className="relative w-full sm:w-[280px] lg:w-full xl:w-[280px] shrink-0">
                <select
                    value={selectedIndex}
                    onChange={(e) => {
                        const val = e.target.value;
                        setSelectedIndex(val === "" ? "" : Number(val));
                    }}
                    className="w-full bg-[#08121C] border border-white/20 rounded-[4px] text-white/90 hover:border-white/40 focus:outline-none transition-colors h-[50px] px-5 pr-12 text-[15px] font-medium appearance-none cursor-pointer"
                >
                    <option value="" className="bg-[#08121C] text-white">
                        Select Year
                    </option>
                    {newsLetterBtns?.map((btn, index) => (
                        <option
                            key={btn?.id || index}
                            value={index}
                            className="bg-[#08121C] text-white py-2 text-[15px]"
                        >
                            {btn?.buttontext}
                        </option>
                    ))}
                </select>
                <div className="border-l border-white/20 w-[50px] h-full flex items-center justify-center absolute right-0 top-0 pointer-events-none text-white/90">
                    <ChevronDown size={18} />
                </div>
            </div>

            {/* DOWNLOAD BUTTON / LEAD POPUP */}
            {selectedBtn?.buttonclass === "propPopup" ? (
                <CommonLeadPopup
                    buttonText={
                        <div className="flex items-center gap-3 justify-center">
                            <Download size={18} className="shrink-0" />
                            <span className="uppercase tracking-wide text-sm font-medium">
                                DOWNLOAD
                            </span>
                        </div>
                    }
                    buttonClassName="border border-white/30 py-3.5 px-7 transition-all rounded-sm text-white hover:bg-white/5 w-full sm:w-auto lg:w-full xl:w-auto shrink-0 inline-block cursor-pointer"
                    redirectUrl={selectedBtn?.buttonlink || "#"}
                    form_name={selectedBtn?.buttontext || "Download Newsletter"}
                />
            ) : (
                <Link
                    href={selectedBtn?.buttonlink || "#"}
                    onClick={handleDownloadClick}
                    className="border border-white/30 py-3 md:py-3.5 px-3 md:px-7 transition-all !rounded-[4px] flex items-center justify-center gap-3 text-white hover:bg-white/5 w-full sm:w-auto lg:w-full xl:w-auto shrink-0"
                    target={selectedBtn?.buttonlink ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                >
                    <Download size={18} className="shrink-0" />
                    <span className="uppercase tracking-wide text-sm font-medium">
                        DOWNLOAD
                    </span>
                </Link>
            )}
        </div>
    );
};

export default NewsletterDownloader;
