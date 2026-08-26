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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [agreed, setAgreed] = useState(true);

    const [fieldErrors, setFieldErrors] = useState<{
        name?: string;
        email?: string;
        mobile?: string;
    }>({});

    const isFormValid =
        name.trim().length > 0 &&
        email.trim().length > 0 &&
        mobile.trim().length === 10 &&
        agreed;

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        // Do not allow starting with numbers
        if (/^[0-9]/.test(val)) return;
        // Filter out numeric characters and special symbols, allow alphabets and spaces
        const sanitized = val.replace(/[^a-zA-Z\s.'-]/g, "");
        setName(sanitized);
        if (fieldErrors.name) {
            setFieldErrors((prev) => ({ ...prev, name: undefined }));
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (fieldErrors.email) {
            setFieldErrors((prev) => ({ ...prev, email: undefined }));
        }
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        // Allow ONLY numeric digits (no a-z or letters)
        const sanitized = val.replace(/[^0-9]/g, "").slice(0, 10);
        setMobile(sanitized);
        if (fieldErrors.mobile) {
            setFieldErrors((prev) => ({ ...prev, mobile: undefined }));
        }
    };

    const handleClose = () => {
        setOpen(false);
        setFieldErrors({});
        setName("");
        setEmail("");
        setMobile("");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors: { name?: string; email?: string; mobile?: string } = {};

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMobile = mobile.trim();

        // 1. Name validation
        if (!trimmedName) {
            errors.name = "Full name is required";
        } else if (/^[0-9]/.test(trimmedName)) {
            errors.name = "Name cannot start with a number";
        } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
            errors.name = "Name should only contain alphabets";
        }

        // 2. Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!trimmedEmail) {
            errors.email = "Email address is required";
        } else if (!emailRegex.test(trimmedEmail)) {
            errors.email = "Please enter a valid email address";
        }

        // 3. Mobile validation
        const indianMobileRegex = /^[6-9]\d{9}$/;
        if (!trimmedMobile) {
            errors.mobile = "Mobile number is required";
        } else if (!indianMobileRegex.test(trimmedMobile)) {
            errors.mobile = "Enter a valid 10-digit Indian mobile number";
        }

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        setFieldErrors({});
        setLoading(true);

        const payload = {
            name: trimmedName,
            email: trimmedEmail,
            mobile: trimmedMobile,
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
            handleClose();

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
                                    onClick={handleClose}
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
                                            value={name}
                                            onChange={handleNameChange}
                                            placeholder="Enter your full name"
                                            className="w-full h-[40px] bg-transparent border-none text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-0 text-[14px] font-poppins font-normal"
                                        />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#061623] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 ease-out origin-left pointer-events-none" />
                                    </div>
                                    {fieldErrors.name && (
                                        <p className="text-red-500 text-[11px] font-poppins mt-1 font-normal">
                                            {fieldErrors.name}
                                        </p>
                                    )}
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
                                            value={email}
                                            onChange={handleEmailChange}
                                            placeholder="Enter your email address"
                                            className="w-full h-[40px] bg-transparent border-none text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-0 text-[14px] font-poppins font-normal"
                                        />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#061623] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 ease-out origin-left pointer-events-none" />
                                    </div>
                                    {fieldErrors.email && (
                                        <p className="text-red-500 text-[11px] font-poppins mt-1 font-normal">
                                            {fieldErrors.email}
                                        </p>
                                    )}
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
                                            value={mobile}
                                            onChange={handleMobileChange}
                                            placeholder="10-digit mobile number"
                                            maxLength={10}
                                            inputMode="numeric"
                                            className="w-full h-[40px] bg-transparent border-none text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-0 text-[14px] font-poppins font-normal"
                                        />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#061623] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 ease-out origin-left pointer-events-none" />
                                    </div>
                                    {fieldErrors.mobile && (
                                        <p className="text-red-500 text-[11px] font-poppins mt-1 font-normal">
                                            {fieldErrors.mobile}
                                        </p>
                                    )}
                                </div>

                                <label className="flex items-start gap-3 text-xs text-gray-600 cursor-pointer pt-1 font-poppins">
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) =>
                                            setAgreed(e.target.checked)
                                        }
                                        className="mt-0.5 w-4 h-4 rounded-[2px] border-gray-300 bg-white checked:bg-[#061623] checked:border-[#061623] transition-all cursor-pointer accent-[#061623]"
                                    />
                                    <span className="leading-relaxed font-medium text-[#061623] font-poppins">
                                        I agree to receive information about my
                                        enquiry by signing up at K.R. Mangalam
                                        University.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={!isFormValid || loading}
                                    className="w-full h-[45px] bg-[#061623] hover:bg-[#0c2438] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#061623] disabled:active:scale-100 text-white font-poppins font-bold text-sm tracking-wider uppercase rounded-[2px] cursor-pointer transition-all duration-200 shadow-md mt-2 flex items-center justify-center"
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
