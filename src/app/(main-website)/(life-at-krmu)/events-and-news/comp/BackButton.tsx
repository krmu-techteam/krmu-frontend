"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/happenings/news-and-events");
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go Back"
      className="w-10 h-10 shrink-0 border border-[#80C6FF] rounded-[3px] flex items-center justify-center text-[#80C6FF] hover:text-[#80C6FF] hover:border-[#80C6FF] transition-all bg-transparent hover:bg-white/10 cursor-pointer"
    >
      <ChevronLeft size={20} />
    </button>
  );
}
