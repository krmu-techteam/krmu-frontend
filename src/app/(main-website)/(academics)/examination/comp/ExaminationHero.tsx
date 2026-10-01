import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
    title: string;
    bgImgUrl?: string;
};

const ExaminationHero = ({ title, bgImgUrl }: Props) => {
    const defaultBg =
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/13_7935a4e75e.webp";
    const bg = bgImgUrl || defaultBg;

    return (
        <section className="relative pt-[140px] sm:pt-[170px] pb-12 sm:pb-16 px-4 overflow-hidden">
            {/* Background Image with Dark Gradient Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#061623] via-[#061623]/90 to-[#061623]/70" />
            </div>

            <div className="max-w-[1440px] mx-auto w-full relative z-10">
                {/* Hero Nav / Breadcrumbs */}
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 mb-4 text-xs sm:text-sm text-white/70 font-poppins"
                >
                    <Link
                        href="/"
                        className="hover:text-white transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    <span className="text-white/70">Academics</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    <span className="text-[#38bdf8] font-medium">{title}</span>
                </nav>

                <h1 className="text-3xl font-serif sm:text-5xl lg:text-[70px] font-bold text-white">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default ExaminationHero;
