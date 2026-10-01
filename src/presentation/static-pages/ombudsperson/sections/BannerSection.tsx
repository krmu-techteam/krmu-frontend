import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BannerSection = () => {
    return (
        <section className="relative text-center pt-[150px] md:pt-[180px] pb-[50px] md:pb-[70px] px-4 overflow-hidden bg-gradient-to-b from-[#07141E] via-[#0b2238] to-[#07141E]">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#0060aa]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-serif font-bold tracking-tight drop-shadow-sm">
                    Ombudsperson
                </h1>

                <div className="w-16 h-1 bg-[#0060aa] mx-auto mt-4 rounded-full" />

                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center justify-center gap-2 mt-5 text-sm md:text-base font-poppins text-white/70"
                >
                    <Link
                        href="/"
                        className="hover:text-white transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                    <span className="text-[#38bdf8] font-medium">
                        Ombudsperson
                    </span>
                </nav>
            </div>
        </section>
    );
};

export default BannerSection;
