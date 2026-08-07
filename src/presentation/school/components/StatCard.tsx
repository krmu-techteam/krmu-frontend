import { StatCardProps } from "@/features/school";
import { ABOUT_STAT_BG_COLORS } from "@/features/home";

const StatCard = ({ title, desc, index = 0 }: StatCardProps) => {
  const bgColor = ABOUT_STAT_BG_COLORS[index % ABOUT_STAT_BG_COLORS.length];
  const shadowColor =
    bgColor && bgColor.startsWith("#") && bgColor.length === 7
      ? `${bgColor}99`
      : bgColor;

  return (
    <div
      style={
        {
          backgroundColor: bgColor,
          "--card-shadow-color": shadowColor,
        } as React.CSSProperties
      }
      className="group relative overflow-hidden rounded-[4px] py-7 px-6 hover:border-white/20 hover:shadow-[0_15px_30px_-5px_var(--card-shadow-color,rgba(0,0,0,0.4))] hover:-translate-y-1 transition-all duration-500 ease-out cursor-default text-start min-h-[100px] xl:min-h-[120px] flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

      <div className="text-3xl md:text-[36px] font-poppins font-light text-brand-gold mb-2 leading-none relative z-10 transition-colors duration-500 ease-out">
        {title}
      </div>
      <div className="text-white/80 font-poppins text-[14px] 2xl:text-[16px] capitalize tracking-wide font-light leading-tight relative z-10 transition-colors">
        {desc}
      </div>
    </div>
  );
};

export default StatCard;
