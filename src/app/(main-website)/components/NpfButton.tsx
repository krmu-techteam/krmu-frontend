"use client";

import Script from "next/script";

type Props = {
  formId: string;
  text?: string;
};

export default function NpfButton({
  formId,
  text = "Click Here!",
}: Props) {
  return (
    <>
      {/* Load NPF script */}
      <Script
        src="https://cdn.npfs.co/js/widget/npfwpopup.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).NpfWidgetsInit) {
            new (window as any).NpfWidgetsInit({
              widgetId: formId,
              baseurl: "widgets.nopaperforms.com",
              formTitle: "Feedback Form",
              titleColor: "#FF0033",
              backgroundColor: "#ddd",
              iframeHeight: "500px",
              buttonbgColor: "#ff0000",
              buttonTextColor: "#FFF",
            });
          }
        }}
      />

      {/* Button */}
      <button
        type="button"
        className={`npfWidgetButton  npfWidget-${formId}`}
      >
        {text}
      </button>
    </>
  );
}