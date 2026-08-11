"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { useState, FormEvent, ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  buttonText: ReactNode;
  buttonClassName?: string;
  redirectUrl: string;
  form_name: string;
};

const CommonLeadPopup = ({
  buttonText,
  buttonClassName,
  redirectUrl,
  form_name,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const mobile = data.get("mobile")?.toString().trim();

    const indianMobileRegex = /^[6-9]\d{9}$/;

    if (!mobile || !indianMobileRegex.test(mobile)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      setLoading(false);
      return;
    }

    const payload = {
      name,
      email,
      mobile,
      form_name,
      page_url: window.location.href,
    };

    try {
      /* 1️⃣ SAVE TO STRAPI */
      await fetch(`${FETCH_STRAPI_URL}/api/prospect-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: payload }),
      });

      /* 2️⃣ SEND TO NOPAPERFORMS */
      const npfRes = await fetch("/api/send-to-npf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const npfResult = await npfRes.json();

      // Optional: log success/error message
      console.log("NPF response:", npfResult);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      /* ✅ ALWAYS REDIRECT (SUCCESS OR ERROR) */
      setLoading(false);
      setOpen(false);
      form.reset();

      window.open(redirectUrl, "_blank");
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className={`relative overflow-hidden group ${buttonClassName} cursor-pointer`}
      >
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
        {buttonText}
      </button>

      {/* Modal — portalled to document.body so it escapes all parent stacking contexts */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[99999] bg-black/60 flex items-center justify-center px-4 transition-all duration-300">
            <div className="bg-[#323232] w-full max-w-[500px] rounded-[0px] relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E7C268] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full cursor-pointer flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
              >
                ✕
              </button>

              {/* Header */}
              <div className="border-b font-poppins border-white/10 bg-white/[0.02] py-5 px-6">
                <h3 className="text-white text-xl font-medium tracking-wide">
                  {form_name}
                </h3>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-5 relative z-10"
              >
                <input
                  name="name"
                  required
                  placeholder="Your Name*"
                  className="w-full h-[45px] px-4 rounded-[2px] bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#E7C268] focus:ring-1 focus:ring-[#E7C268] transition-all text-[14px] font-poppins"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address*"
                  className="w-full h-[45px] px-4 rounded-[2px] bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#E7C268] focus:ring-1 focus:ring-[#E7C268] transition-all text-[14px] font-poppins"
                />

                <input
                  name="mobile"
                  required
                  placeholder="Enter Mobile Number*"
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[6-9]{1}[0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  className="w-full h-[45px] px-4 rounded-[2px] bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#E7C268] focus:ring-1 focus:ring-[#E7C268] transition-all text-[14px] font-poppins"
                />

                <label className="flex items-start gap-3 text-[13px] text-white/70 cursor-pointer group font-poppins">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 w-4 h-4 rounded-[2px] border-white/20 bg-transparent checked:bg-[#E7C268] checked:border-[#E7C268] transition-all cursor-pointer accent-[#E7C268]"
                    defaultChecked
                  />
                  <span className="leading-snug group-hover:text-white/90 transition-colors">
                    I agree to receive information about my enquiry by signing
                    up at K.R. Mangalam University.
                  </span>
                </label>

                {error && (
                  <p className="text-[#CB000D] text-sm font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[45px] bg-[#E7C268] hover:bg-[#d8b054] rounded-[2px] text-[#000000] font-bold tracking-wide uppercase text-[14px] transition-all cursor-pointer mt-2 font-poppins"
                >
                  {loading ? "Please wait..." : "DOWNLOAD"}
                </button>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default CommonLeadPopup;
