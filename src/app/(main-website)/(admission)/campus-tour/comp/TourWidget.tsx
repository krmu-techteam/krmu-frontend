"use client";
import { useEffect, useRef } from "react";

export default function TourWidget() {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clear widget container when navigating
    if (widgetRef.current) {
      widgetRef.current.innerHTML = "";
    }

    // Remove old script if present
    const oldScript = document.getElementById("npf-script");
    if (oldScript) oldScript.remove();

    // Create new script exactly as NPF docs require
    const script = document.createElement("script");
    script.id = "npf-script";
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";

    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={widgetRef}
      className="npf_wgts npfblog-form"
      data-height="550px"
      data-w="3361934ae196b2866c52648f2f212f58"
    ></div>
  );
}


// "use client";

// import { useEffect } from "react";

// const TourWidget = () => {
//   useEffect(() => {
//     // Load widget script only once
//     const existingScript = document.getElementById("npf-script");

//     if (!existingScript) {
//       const script = document.createElement("script");
//       script.id = "npf-script";
//       script.src = "https://assets.tumblr.com/post.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div
//       className="npf_wgts"
//       style={{ overflow: "hidden", maxWidth: "750px" }}
//       data-height="600px"
//       data-w="3361934ae196b2866c52648f2f212f58"
//     ></div>
//   );
// };

// export default TourWidget;


