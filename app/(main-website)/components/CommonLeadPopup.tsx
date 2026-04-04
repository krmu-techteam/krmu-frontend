"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { useState, FormEvent } from "react";
import { createPortal } from "react-dom";

type Props = {
  buttonText: string;
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

      window.location.href = redirectUrl;
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button onClick={() => setOpen(true)} className={`${buttonClassName} cursor-pointer`}>
        {buttonText}
      </button>

      {/* Modal — portalled to document.body so it escapes all parent stacking contexts */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[99999] bg-black/60 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-[520px] rounded-2xl shadow-2xl relative">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-purple-600 text-xl font-bold"
              >
                ✕
              </button>

              {/* Header */}
              <div className="bg-[#005da9] text-white text-center py-3 rounded-t-2xl text-lg font-semibold">
                {form_name}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <input
                  name="name"
                  required
                  placeholder="Your Name*"
                  className="w-full h-12 px-4 rounded-lg border text-black border-gray-300"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address*"
                  className="w-full h-12 px-4 rounded-lg border text-black border-gray-300"
                />

                <input
                  name="mobile"
                  required
                  placeholder="Enter Mobile Number*"
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[6-9]{1}[0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  className="w-full h-12 px-4 rounded-lg text-black border border-gray-300"
                />

                <label className="flex items-start gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                    defaultChecked
                  />
                  I agree to receive information about my enquiry by signing up at
                  K.R. Mangalam University.
                </label>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#e11c2a] text-white rounded-lg font-semibold disabled:opacity-60"
                >
                  {loading ? "Please wait..." : "DOWNLOAD"}
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default CommonLeadPopup;
