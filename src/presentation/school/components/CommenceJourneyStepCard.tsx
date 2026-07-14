import Link from "next/link";
import Image from "next/image";

type Step = {
  number: number;
  title: string;
  linkText?: string;
  linkUrl?: string;
  desc?: string;
};

type StepCardProps = {
  step: Step;
  isActive: boolean;
};

export function CommenceJourneyStepCard({ step, isActive }: StepCardProps) {
  return (
    <div
      className={`flex items-center gap-5 p-3 xl:p-5 rounded-sm border transition-all duration-300 ${
        isActive
          ? "border-[#00a2ff]/60 "
          : "border-[#4c4c4c] "
      }`}
    >
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center font-bold text-base md:text-xl transition-all duration-300 shrink-0 ${
          isActive
            ? "border-[#00a2ff] text-[#00a2ff] "
            : "border-[#4c4c4c] text-[#4c4c4c] "
        }`}
      >
        {step.number}
      </div>
      <div className="flex-1">
        <h4 className={`font-poppins font-medium text-md xl:text-lg leading-snug ${isActive ? "text-[#00a2ff]" : "text-white"}`}>
          {step.title}{" "}
          {step.linkUrl && (
            <Link
              href={step.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00a2ff] hover:underline"
            >
              {step.linkText}
            </Link>
          )}
        </h4>
        {step.desc && (
          <p className={`font-poppins font-normal text-xs md:text-sm mt-1 leading-relaxed ${isActive ? "text-[#00a2ff]" : "text-white"}`}>
            {step.desc}
          </p>
        )}
      </div>
    </div>
  );
}

type MobileStepProps = {
  title: string;
  desc?: string;
  iconSrc: string;
  linkText?: string;
  linkUrl?: string;
  shadowColor?: string;
  isActive?: boolean;
};

export function CommenceJourneyMobileStepCard({
  title,
  desc,
  iconSrc,
  linkText,
  linkUrl,
  shadowColor = "0px 5px 20px rgb(29 66 197 / 38%)",
  isActive = false,
}: MobileStepProps) {
  return (
    <div className={`w-full p-5 rounded-md transition-all duration-300 border mb-2 ${
      isActive 
        ? "border-[#00a2ff]/60 bg-[#00a2ff]/5" 
        : "border-white/10 bg-transparent"
    }`}>
      <span
        className={`p-4 flex items-center justify-center w-[60px] h-[60px] rounded-full mb-5 transition-all duration-300 ${
          isActive ? "bg-[#00a2ff]/20" : "bg-[#001732]"
        }`}
        style={{
          boxShadow: isActive ? "0px 5px 25px rgba(0, 162, 255, 0.4)" : shadowColor,
        }}
      >
        <Image
          src={iconSrc}
          width={30}
          height={30}
          alt={title}
          className={iconSrc.includes("start01") ? "p-1.5" : ""}
        />
      </span>
      <p className={`text-lg font-semibold transition-all duration-300 ${isActive ? "text-[#00a2ff]" : "text-white"}`}>{title}</p>
      {desc ? (
        <p className={`transition-all duration-300 ${isActive ? "text-[#00a2ff]/80" : "text-white/70"}`}>{desc}</p>
      ) : (
        linkUrl && linkText && (
          <p className={`transition-all duration-300 ${isActive ? "text-[#00a2ff]/80" : "text-white/70"}`}>
            At{" "}
            <Link
              href={linkUrl}
              className="underline text-[#00a2ff]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </Link>
          </p>
        )
      )}
    </div>
  );
}
