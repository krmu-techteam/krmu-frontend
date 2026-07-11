"use client";

import { useEffect, useRef } from "react";
import iFrameResize from "iframe-resizer/js/iframeResizer";

const UniviserIframe = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    iFrameResize(
      {
        enablePublicMethods: true,
        heightCalculationMethod: "lowestElement",
      },
      iframeRef.current
    );

    const handleMessage = (event: MessageEvent) => {
      if (event?.data?.type === "SCROLL_PARENT_TO_TOP") {
        iframeRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="Univiser"
      src="https://krm.univiser.io/?wordpress=true"
      style={{
        width: "1px",
        minWidth: "100%",
        position: "relative",
        border: "0",
      }}
    />
  );
};

export default UniviserIframe;
