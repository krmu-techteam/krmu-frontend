"use client";

import { loadNpfScript } from "@/lib/constants/loadNpfScript";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const StickyMobileBar = ({
  phoneNumber,
  formId,
}: {
  phoneNumber: string;
  formId?: string;
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!formId || !btnRef.current) return;

    loadNpfScript()
      .then(() => {
        const NpfWidgetsInit = (window as any).NpfWidgetsInit;
        if (typeof NpfWidgetsInit !== "undefined") {
          new NpfWidgetsInit({
            widgetId: formId,
            baseurl: "widgets.nopaperforms.com",
            formTitle: " ",
            titleColor: "#ffffff",
            backgroundColor: "#ffffff",
            iframeHeight: "520px",
            buttonTextColor: "#FFF",
            target: btnRef.current,
          });
        }
      })
      .catch((err) => {
        console.error("NPF init failed:", err);
      });
  }, [formId]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-14 w-full sm:hidden bg-[#d8232a] text-white">
      {formId ? (
        <button
          ref={btnRef}
          className={`npfWidget-${formId} flex w-1/2 items-center justify-center font-semibold text-lg hover:bg-red-700 transition-colors border-r border-white/20 cursor-pointer`}
        >
          Apply Now
        </button>
      ) : (
        <Link
          href="#apply-section"
          className="flex w-1/2 items-center justify-center font-semibold text-lg hover:bg-red-700 transition-colors border-r border-white/20"
        >
          Apply Now
        </Link>
      )}
      <a
        href={`tel:${phoneNumber}`}
        className="flex w-1/2 items-center justify-center gap-2 font-semibold text-lg hover:bg-red-700 transition-colors"
      >
        <PhoneCall size={18} fill="currentColor" />
        Call
      </a>
    </div>
  );
};

export default StickyMobileBar;
