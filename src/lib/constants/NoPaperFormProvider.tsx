"use client";

import { useEffect } from "react";

const NoPaperFormProvider = () => {
  useEffect(() => {
    // Load script only once
    if (document.querySelector('script[src="https://widgets.nopaperforms.com/emwgts.js"]')) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);
  }, []);

  return null; // no UI needed — it just loads script globally
};

export default NoPaperFormProvider;
