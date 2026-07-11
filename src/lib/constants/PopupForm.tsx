"use client";

import { useEffect, useState } from "react";

type PopupFormProps = {
  formId: string; // e.g. 'Hj.YIw'
  buttonText?: string;
  containerClass?: string;
  buttonClass?: string;
  buttonIcon?: React.ReactNode;
  containerId?: string;
};

const PopupForm = ({
  formId,
  buttonText = "Download Prospectus",
  containerClass = "",
  buttonClass = "",
  buttonIcon = "",
  containerId = "",
}: PopupFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  //   const uniqueContainerId = `formContainer-${formId.replace(/\W/g, "")}`;
  const uniqueContainerId = containerId;

  // ✅ Load the EasyForms script once (global)
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="//cof.avnweb.com/static_files/js/form.widget.js"]'
    );
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "//cof.avnweb.com/static_files/js/form.widget.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  // ✅ Initialize form only once when popup opens and script is ready
  useEffect(() => {
    if (!isOpen || !scriptLoaded) return;
    const container = document.getElementById(uniqueContainerId);
    if (!container) return;

    // Prevent double-initialization
    if (container.dataset.initialized === "true") return;

    try {
      // @ts-expect-error - test
      new EasyForms()
        .initialize({
          id: formId,
          container: uniqueContainerId,
          height: "100%",
          form: "//cof.avnweb.com/app/embed",
        })
        .display();

      container.dataset.initialized = "true";
    } catch (e) {
      console.error("EasyForm init error:", e);
    }
  }, [isOpen, scriptLoaded, formId, uniqueContainerId]);

  return (
    <div className={`popup-form ${containerClass || ''}`}>
      {/* Trigger Button */}
      <button className={buttonClass} onClick={() => setIsOpen(true)}>
        <span>{buttonText}</span> {buttonIcon}
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: "800px",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "20px",
              borderRadius: "16px",
              position: "relative",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            <div id={uniqueContainerId}>Loading form...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
