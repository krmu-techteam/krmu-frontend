"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["italic", "normal"],
});

const DownloadScrollbtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show after one full screen (start of the second screen)
            setIsVisible(window.scrollY >= window.innerHeight);
        };

        toggleVisibility(); // Check on initial render

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <div
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group fixed bottom-6 lg:bottom-10 left-6 z-[999] h-[49px] w-[309px] rounded-full p-[2px] bg-gradient-to-r from-[#D5A647] via-[#70B8F3] to-[red] transition-all duration-300 hover:scale-105 cursor-pointer scrolltoptest shadow-lg"
        >
            <div className="flex h-full w-full items-center rounded-full bg-white px-2">
                <Link
                    href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/DSW_Magazine_2026_27_8e19b9a92d.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${poppins.className} flex h-full w-full items-center gap-3 text-[19px] font-semibold text-black`}
                >
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-[#D5A647] via-[#70B8F3] to-[red]">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-1">
                            <Image
                                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Frame_6d39ae97d2.png"
                                alt="download arrow"
                                width={1024}
                                height={1024}
                                className="transition-transform duration-600 group-hover:[transform:rotateY(180deg)]"
                            />
                        </div>
                    </div>
                    DSW Magazine 2025-26
                </Link>
            </div>
        </div>
    );
};

export default DownloadScrollbtn;
