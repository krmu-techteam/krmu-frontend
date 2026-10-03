"use client";

import { useEffect, useRef, useState } from "react";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import { CinematicFormProps } from "@/features/programs";

const FormSkeleton = () => {
    return (
        <div className="w-full h-[500px] px-4 sm:px-6 pt-2 pb-3 space-y-2.5 animate-pulse overflow-hidden">
            {/* Field 1: Name */}
            <div className="space-y-1">
                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                <div className="h-8 w-full bg-gray-100 border border-gray-200 rounded-[3px] flex items-center px-3">
                    <div className="h-2.5 w-24 bg-gray-200/70 rounded"></div>
                </div>
            </div>

            {/* Field 2: Email */}
            <div className="space-y-1">
                <div className="h-2 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-full bg-gray-100 border border-gray-200 rounded-[3px] flex items-center px-3">
                    <div className="h-2.5 w-32 bg-gray-200/70 rounded"></div>
                </div>
            </div>

            {/* Field 3: Mobile */}
            <div className="space-y-1">
                <div className="h-2 w-24 bg-gray-200 rounded"></div>
                <div className="h-8 w-full bg-gray-100 border border-gray-200 rounded-[3px] flex items-center px-2.5 gap-2">
                    <div className="h-5 w-7 bg-gray-200 rounded text-[10px] flex items-center justify-center text-gray-400 font-bold">
                        +91
                    </div>
                    <div className="h-2.5 w-28 bg-gray-200/70 rounded"></div>
                </div>
            </div>

            {/* Field 4 & 5: State & City */}
            <div className="grid grid-cols-2 gap-2.5">
                <div className="space-y-1">
                    <div className="h-2 w-14 bg-gray-200 rounded"></div>
                    <div className="h-8 w-full bg-gray-100 border border-gray-200 rounded-[3px] flex items-center justify-between px-2.5">
                        <div className="h-2.5 w-16 bg-gray-200/70 rounded"></div>
                        <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="h-2 w-12 bg-gray-200 rounded"></div>
                    <div className="h-8 w-full bg-gray-100 border border-gray-200 rounded-[3px] flex items-center justify-between px-2.5">
                        <div className="h-2.5 w-14 bg-gray-200/70 rounded"></div>
                        <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Field 6: Course */}
            <div className="space-y-1">
                <div className="h-2 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-full bg-gray-100 border border-gray-200 rounded-[3px] flex items-center justify-between px-2.5">
                    <div className="h-2.5 w-36 bg-gray-200/70 rounded"></div>
                    <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                </div>
            </div>

            {/* Field 7: Captcha */}
            <div className="flex gap-2 items-center">
                <div className="h-8 flex-1 bg-gray-100 border border-gray-200 rounded-[3px]"></div>
                <div className="h-8 w-20 bg-gray-200 rounded-[3px]"></div>
            </div>

            {/* Field 8: Consent */}
            <div className="flex items-start gap-2 pt-0.5">
                <div className="h-3.5 w-3.5 mt-0.5 bg-gray-200 border border-gray-300 rounded-[2px] shrink-0"></div>
                <div className="h-2.5 w-full bg-gray-100 rounded"></div>
            </div>

            {/* Submit Button */}
            <div className="pt-1">
                <div className="h-10 w-full bg-gradient-to-r from-[#0055a4] to-[#CB000D] rounded-[4px] shadow-sm flex items-center justify-center text-white text-xs font-semibold gap-2">
                    <svg
                        className="animate-spin h-3.5 w-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    <span>Loading Application Form...</span>
                </div>
            </div>
        </div>
    );
};

const CinematicForm = ({
    formId,
    isMobile = false,
    programTitle,
    slug,
    school,
}: CinematicFormProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDesktopView, setIsDesktopView] = useState<boolean | null>(null);
    const formContainerRef = useRef<HTMLDivElement>(null);

    // Responsive check to mount only 1 iframe across mobile & desktop
    useEffect(() => {
        const mql = window.matchMedia("(min-width: 1024px)");
        setIsDesktopView(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsDesktopView(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        const container = formContainerRef.current;
        if (!container) return;

        const checkIframeReady = () => {
            const iframe = container.querySelector("iframe");
            if (iframe) {
                if (iframe.offsetHeight > 100) {
                    setIsLoaded(true);
                    return true;
                }
                iframe.addEventListener("load", () => {
                    setTimeout(() => setIsLoaded(true), 150);
                });
                setTimeout(() => setIsLoaded(true), 1200);
                return true;
            }
            return false;
        };

        if (checkIframeReady()) return;

        const observer = new MutationObserver(() => {
            if (checkIframeReady()) {
                observer.disconnect();
            }
        });

        observer.observe(container, { childList: true, subtree: true });

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 5000);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, [formId, isDesktopView]);

    // Avoid mounting a duplicate hidden iframe on the wrong breakpoint
    const shouldMountIframe =
        isDesktopView === null
            ? false // On SSR, don't mount iframe until hydrated viewport is known
            : isMobile
              ? !isDesktopView
              : isDesktopView;

    if (isMobile) {
        // If desktop view is active, do not render mobile DOM container to prevent duplicate elements
        if (isDesktopView === true) return null;

        return (
            <div
                id="apply-form-mobile"
                className="lg:hidden w-full bg-[#061623] pb-6 lg:pb-0 px-4 lg:px-0"
            >
                <div className="heroBannerForm__form w-full max-w-md sm:max-w-full mx-auto rounded-[4px] !pt-4 !pb-3 h-[570px] min-h-[570px] bg-white relative overflow-hidden flex flex-col">
                    <div className="heroBannerForm-header shrink-0">
                        <p
                            className="mb-0 text-center font-bold font-poppins !text-[20px] inline-block w-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #0055a4 0%, #CB000D 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Apply Today for <br /> K.R. Mangalam University
                        </p>
                    </div>

                    <div className="relative flex-1 w-full h-[500px] min-h-[500px] overflow-hidden">
                        {/* Skeleton loader with smooth fade-out */}
                        <div
                            className={`absolute inset-0 z-10 bg-white transition-opacity duration-500 ${
                                isLoaded
                                    ? "opacity-0 pointer-events-none"
                                    : "opacity-100"
                            }`}
                        >
                            <FormSkeleton />
                        </div>

                        {/* Actual NPF Form with smooth fade-in */}
                        <div
                            ref={formContainerRef}
                            className={`p-1 h-[500px] min-h-[500px] transition-opacity duration-500 ${
                                isLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {shouldMountIframe && (
                                <NoPaperForm
                                    formId={formId}
                                    height="500px"
                                    programme={programTitle || slug}
                                    school={school}
                                    onLoaded={() => setIsLoaded(true)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // If mobile view is active, do not render desktop DOM container
    if (isDesktopView === false) return null;

    return (
        <div
            id="apply-form"
            className="hidden lg:flex w-full lg:w-[40%] xl:w-2/5 xl:pl-20 justify-center lg:justify-end"
        >
            <div className="heroBannerForm__form w-full max-w-md mx-0 shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-[4px] !pt-5 !pb-3 h-[570px] min-h-[570px] bg-white relative overflow-hidden flex flex-col">
                <div className="heroBannerForm-header shrink-0">
                    <p
                        className="mb-0 text-center font-bold font-poppins !text-[26px] lg:text-[22px] xl:text-[26px] inline-block w-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #0055a4 0%, #CB000D 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Apply Today for <br /> K.R. Mangalam University
                    </p>
                </div>

                <div className="relative flex-1 w-full h-[500px] min-h-[500px] overflow-hidden">
                    {/* Skeleton loader with smooth fade-out */}
                    <div
                        className={`absolute inset-0 z-10 bg-white transition-opacity duration-500 ${
                            isLoaded
                                ? "opacity-0 pointer-events-none"
                                : "opacity-100"
                        }`}
                    >
                        <FormSkeleton />
                    </div>

                    {/* Actual NPF Form with smooth fade-in */}
                    <div
                        ref={formContainerRef}
                        className={`h-[500px] min-h-[500px] transition-opacity duration-500 ${
                            isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {shouldMountIframe && (
                            <NoPaperForm
                                formId={formId}
                                height="500px"
                                programme={programTitle || slug}
                                school={school}
                                onLoaded={() => setIsLoaded(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CinematicForm;
