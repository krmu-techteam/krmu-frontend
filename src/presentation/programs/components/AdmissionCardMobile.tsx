import Link from "next/link";
import { AdmisionProcessCard } from "@/features/programs";

interface Props {
    card: AdmisionProcessCard;
}

const AdmissionCardMobile = ({ card }: Props) => {
    const isLink =
        card?.link === "admissions.krmangalam.edu.in" ||
        card?.description === "admissions.krmangalam.edu.in ";

    if (isLink) {
        return (
            <div className="w-full text-center px-4 py-4 rounded-[2px] bg-[#061623]/30 flex flex-col items-center justify-center min-h-[100px] transition-all antialiased [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
                {card?.mobcounting && (
                    <span className="text-[11px] font-bold tracking-widest uppercase text-white bg-white/15 border border-white/25 px-3 py-0.5 rounded-full mb-2 font-poppins">
                        STEP {card.mobcounting}
                    </span>
                )}
                <h3 className="text-[20px] md:text-lg font-serif font-semibold text-white mb-1.5 antialiased">
                    {card?.title}
                </h3>
                <p className="leading-tight text-sm md:text-base text-[#38bdf8] break-all font-medium font-poppins antialiased">
                    <Link
                        href={`https://${card?.description?.trim()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-all"
                    >
                        {card?.description}
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div className="w-full text-center px-4 py-4 rounded-[2px] bg-[#061623]/30 flex flex-col items-center justify-center min-h-[100px] transition-all antialiased [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
            {card?.mobcounting && (
                <span className="text-[11px] font-bold tracking-widest uppercase text-white bg-white/15 border border-white/25 px-3 py-0.5 rounded-full mb-2 font-poppins">
                    STEP {card.mobcounting}
                </span>
            )}
            <h3 className="text-[20px] md:text-lg font-serif font-semibold text-white mb-1.5 antialiased">
                {card?.title}
            </h3>
            <p className="leading-relaxed text-[13px] text-white break-words font-medium font-poppins antialiased">
                <span>{card?.description}</span>
            </p>
        </div>
    );
};

export default AdmissionCardMobile;
