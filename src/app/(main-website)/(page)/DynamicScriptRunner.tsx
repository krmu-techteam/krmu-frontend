"use client";
import { useEffect } from "react";

export default function DynamicScriptRunner({ code }: { code?: string | null }) {
  useEffect(() => {
    if (!code) return;

    try {
      const wrappedCode = `(function(){ ${code} })();`;

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.text = wrappedCode;
      script.setAttribute("data-dynamic", "true");

      // Remove old script if exists (prevents duplicate runs)
      document.querySelectorAll('script[data-dynamic="true"]').forEach(s => s.remove());

      document.body.appendChild(script);
    } catch (err) {
      console.error("CMS Script Error:", err);
    }
  }, [code]);

  return null;
}
