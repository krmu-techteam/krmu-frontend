"use client";

import { loadNpfScript } from "@/lib/constants/loadNpfScript";
import { MoveRight } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  formId?: string;
  btnClass?: string;
  btnText?: string;
  showIcon?: boolean;
};

const NpfPopup = ({
  formId,
  btnClass = "",
  btnText = "Apply Now",
  showIcon = false,
}: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!formId || !btnRef.current) return;

    loadNpfScript()
      .then(() => {
        if (typeof window !== "undefined" && (window as any).NpfWidgetsInit) {
          new (window as any).NpfWidgetsInit({
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
  }, [formId, btnText]);

  return (
    <button ref={btnRef} className={`${btnClass} cursor-pointer`}>
      {btnText} {showIcon && <MoveRight size={16} />}
    </button>
  );
};

export default NpfPopup;
