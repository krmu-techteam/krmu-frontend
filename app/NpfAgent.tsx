"use client";

import Script from "next/script";

export default function NpfAgent() {
  return (
    <>
      <Script
        id="npf-agent-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://z62gj5o2lx.in1.agent.nopaperforms.com/en-gb/backend/agents/aiagentscpt.js/6416018f1c55272a/cc38ad8a3a50478e8cd17f8ff4cafc87";
            document.body.appendChild(s);
          `,
        }}
      />

      <div
        className="npf_ai_agents"
        data-w="cc38ad8a3a50478e8cd17f8ff4cafc87"
        style={{ display: "none" }}
      />
    </>
  );
}