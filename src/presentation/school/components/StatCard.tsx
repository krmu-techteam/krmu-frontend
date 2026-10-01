import { StatCardProps } from "@/features/school";
import { ABOUT_STAT_BG_COLORS } from "@/features/home";

const StatCard = ({ title, desc, index = 0 }: StatCardProps) => {
    const bgColor = ABOUT_STAT_BG_COLORS[index % ABOUT_STAT_BG_COLORS.length];

    return (
        <div
            style={{
                backgroundColor: bgColor,
            }}
            className="relative rounded-[4px] p-3 md:py-7 md:px-6 cursor-default text-start min-h-[100px] xl:min-h-[120px] flex flex-col justify-center"
        >
            <div className="text-2xl md:text-[36px] font-poppins font-light text-brand-gold mb-2 leading-none relative z-10">
                {title}
            </div>
            <div className="text-white font-poppins text-[14px] 2xl:text-[16px] capitalize tracking-wide font-light leading-tight relative z-10">
                {desc}
            </div>
        </div>
    );
};

export default StatCard;
