"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Popup from "@/app/(main-website)/components/Popup";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/features/school/types";

interface Props {
  newsLetterBtns: Button[];
}

const NewsletterDownloader = ({ newsLetterBtns }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | "">("");
  const [isOpen, setIsOpen] = useState(false);

  const selectedBtn = selectedIndex !== "" ? newsLetterBtns[selectedIndex] : null;

  const handleDownloadClick = (e: React.MouseEvent) => {
    if (!selectedBtn?.buttonlink) {
      e.preventDefault();
      alert("Please select a year first to download the newsletter.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.newsletter-dropdown')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex gap-4 justify-start flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center w-full">
      <div className="relative w-full sm:w-[280px] lg:w-full xl:w-[280px] shrink-0 newsletter-dropdown z-20">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-[#0A131C] border border-white/20 rounded-md flex items-center justify-between text-white/90 hover:border-white/40 focus:outline-none transition-colors h-[50px] overflow-hidden"
        >
          <span className="px-5 text-[15px] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
            {selectedIndex === "" ? "Select Period" : newsLetterBtns[selectedIndex as number].buttontext}
          </span>
          <div className="border-l border-white/20 w-[50px] h-full flex items-center justify-center shrink-0">
            <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-[#08121C] border border-white/20 rounded-md overflow-hidden shadow-2xl flex flex-col z-50">
            <button
              type="button"
              onClick={() => {
                setSelectedIndex("");
                setIsOpen(false);
              }}
              className={`text-left px-5 py-3 text-[15px] transition-all ${
                selectedIndex === "" ? "bg-white/10 backdrop-blur-md text-white font-medium" : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              Select Period
            </button>
            {newsLetterBtns?.map((btn, index) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => {
                  setSelectedIndex(index);
                  setIsOpen(false);
                }}
                className={`text-left px-5 py-3 text-[15px] transition-all ${
                  selectedIndex === index ? "bg-white/10 backdrop-blur-md text-white font-medium" : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {btn.buttontext}
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedBtn?.buttonclass === "propPopup" ? (
        <Popup
          buttonText={
            <div className="flex items-center gap-3 justify-center">
              <Download size={18} className="shrink-0" />
              <span className="uppercase tracking-wide text-sm font-medium">DOWNLOAD</span>
            </div>
          }
          buttonClass="border border-white/30 py-3.5 px-7 transition-all rounded-sm text-white hover:bg-white/5 w-full sm:w-auto lg:w-full xl:w-auto shrink-0 inline-block"
          buttonIcon=""
        >
          <p>This is the content inside the popup.</p>
        </Popup>
      ) : (
        <Link
          href={selectedBtn?.buttonlink || "#"}
          onClick={handleDownloadClick}
          className="border border-white/30 py-3.5 px-7 transition-all rounded-sm flex items-center justify-center gap-3 text-white hover:bg-white/5 w-full sm:w-auto lg:w-full xl:w-auto shrink-0"
          target={selectedBtn?.buttonlink ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <Download size={18} className="shrink-0" />
          <span className="uppercase tracking-wide text-sm font-medium">DOWNLOAD</span>
        </Link>
      )}
    </div>
  );
};

export default NewsletterDownloader;
