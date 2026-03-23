"use client";

import Script from "next/script";
import { useEffect } from "react";

type Props = {
  widgetId: string;
  height?: string;
};

export default function NoPaperFormsWidget({
  widgetId,
  height = "550px",
}: Props) {

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof (window as any).npf_w === "function") {
        (window as any).npf_w();
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="npf_wgts" data-height={height} data-w={widgetId}></div>

      <Script id="npf-vars" strategy="afterInteractive">
        {`
          if (!window.npf_c) {
            window.npf_d = "https://admissions.krmangalam.edu.in";
            window.npf_c = "641";
            window.npf_m = "1";
          }
        `}
      </Script>

      <Script
        src="https://track.nopaperforms.com/js/track.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://widgets.nopaperforms.com/emwgts.js"
        strategy="afterInteractive"
      />
    </>
  );
}