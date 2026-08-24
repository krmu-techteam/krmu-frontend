"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { useState, FormEvent, ReactNode } from "react";
import { createPortal } from "react-dom";
import { X, User, Mail, Phone } from "lucide-react";

type Props = {
    buttonText: ReactNode;
    buttonClassName?: string;
    redirectUrl: string;
    form_name: string;
    shadowGradient?: boolean;
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
            console.log("NPF response:", npfResult);
        } catch (err) {
            console.error("Submission failed:", err);
        } finally {
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

            {/* Modal — portalled to document.body */}
            {open &&
                createPortal(
                    <div className="fixed inset-0 z-[99999] bg-black/40  flex items-center justify-center px-4 transition-all duration-300">
                        <div className="bg-white border border-gray-100 w-full max-w-[460px] rounded-[2px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 font-poppins">
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
                                <h3 className="text-gray-900 text-base md:text-lg font-poppins font-semibold tracking-tight">
                                    {form_name}
                                </h3>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer p-1"
                                    title="Close"
                                >
                                    <X size={20} strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="p-6 space-y-5 font-poppins"
                            >
                                <div>
                                    <label className="block text-[11px] text-gray-500 font-poppins mb-1 font-medium uppercase tracking-wider">
                                        Full Name*
                                    </label>
                                    <div className="relative group flex items-center border-b border-gray-200 pb-0.5">
                                        <User
                                            size={18}
                                            className="text-gray-400 group-focus-within:text-[#061623] transition-colors duration-300 shrink-0 mr-2.5"
                                            strokeWidth={1.5}
                                        />
                                        <input
                                            name="name"
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full h-[40px] bg-transparent border-none text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-0 text-[14px] font-poppins font-normal"
                                        />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#061623] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 ease-out origin-left pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] text-gray-500 font-poppins mb-1 font-medium uppercase tracking-wider">
                                        Email Address*
                                    </label>
                                    <div className="relative group flex items-center border-b border-gray-200 pb-0.5">
                                        <Mail
                                            size={18}
                                            className="text-gray-400 group-focus-within:text-[#061623] transition-colors duration-300 shrink-0 mr-2.5"
                                            strokeWidth={1.5}
                                        />
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Enter your email address"
                                            className="w-full h-[40px] bg-transparent border-none text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-0 text-[14px] font-poppins font-normal"
                                        />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#061623] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 ease-out origin-left pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] text-gray-500 font-poppins mb-1 font-medium uppercase tracking-wider">
                                        Mobile Number*
                                    </label>
                                    <div className="relative group flex items-center border-b border-gray-200 pb-0.5">
                                        <Phone
                                            size={18}
                                            className="text-gray-400 group-focus-within:text-[#061623] transition-colors duration-300 shrink-0 mr-2.5"
                                            strokeWidth={1.5}
                                        />
                                        <input
                                            name="mobile"
                                            required
                                            placeholder="10-digit mobile number"
                                            maxLength={10}
                                            inputMode="numeric"
                                            pattern="[6-9]{1}[0-9]{9}"
                                            title="Enter a valid 10-digit Indian mobile number"
                                            className="w-full h-[40px] bg-transparent border-none text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-0 text-[14px] font-poppins font-normal"
                                        />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#061623] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 ease-out origin-left pointer-events-none" />
                                    </div>
                                </div>

                                <label className="flex items-start gap-3 text-xs text-gray-600 cursor-pointer pt-1 font-poppins">
                                    <input
                                        type="checkbox"
                                        required
                                        className="mt-0.5 w-4 h-4 rounded-[2px] border-gray-300 bg-white checked:bg-[#061623] checked:border-[#061623] transition-all cursor-pointer accent-[#061623]"
                                        defaultChecked
                                    />
                                    <span className="leading-relaxed font-medium text-[#061623] font-poppins">
                                        I agree to receive information about my
                                        enquiry by signing up at K.R. Mangalam
                                        University.
                                    </span>
                                </label>

                                {error && (
                                    <p className="text-red-600 text-xs font-medium font-poppins">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full h-[45px] bg-[#061623] hover:bg-[#0c2438] active:scale-[0.99] text-white font-poppins font-bold text-sm tracking-wider uppercase rounded-[2px] cursor-pointer transition-all duration-200 shadow-md mt-2 flex items-center justify-center"
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
