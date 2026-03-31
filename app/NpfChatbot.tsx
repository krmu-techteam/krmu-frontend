"use client";

import Script from "next/script";

export default function NpfChatbot() {
  return (
    <>
      {/* NoPaperForms main widget loader */}
      <Script
        src="https://widgets.nopaperforms.com/emwgts.js"
        strategy="afterInteractive"
      />

      {/* Chatbot container */}
      <div
        className="npf_chatbots"
        data-w="d40b0b6cfcc444b18529d58cfd3068ca"
        style={{ display: "none" }}
      />

      {/* Chatbo t script */}
      <Script
        src="https://chatbot.in1.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/6416018f1c55272a/d40b0b6cfcc444b18529d58cfd3068ca"
        strategy="afterInteractive"
      />
    </>
  );
}
