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
      className={`w-full max-w-[408px] min-h-[90px] h-[90px] px-5 py-3 rounded-[6px] border transition-all duration-300 flex items-center gap-4 ${
        isActive ? "border-[#0091FF]" : "border-[#4C4C4C]"
      }`}
    >
      <div
        className={`w-[59px] h-[59px] rounded-full border flex items-center justify-center font-bold text-[36px] transition-all duration-300 shrink-0 ${
          isActive
            ? "border-[#0091FF] bg-[#0091FF]/20 text-[#0091FF]"
            : "border-[#4C4C4C] text-[#4C4C4C]"
        }`}
      >
        {step.number}
      </div>
      <div className="flex-1 min-w-0">
        <h4
          className={`font-poppins font-semibold text-[15px] leading-tight ${
            isActive ? "text-[#0091FF]" : "text-white"
          }`}
        >
          {step.title}{" "}
          {step.linkUrl && (
            <Link
              href={step.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline font-normal"
            >
              {step.linkText}
            </Link>
          )}
        </h4>
        {step.desc && (
          <p
            className={`font-poppins font-light text-[13px] leading-snug mt-1 ${
              isActive ? "text-[#0091FF]/90" : "text-white/70"
            }`}
          >
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
  shadowColor = "0px 4px 12px rgba(29, 66, 197, 0.15)",
  isActive = false,
}: MobileStepProps) {
  return (
    <div
      className={`w-full p-3.5 sm:p-4 rounded-[3px] transition-all duration-300 flex items-center gap-3.5 sm:gap-4 ${
        isActive ? " bg-[#00a2ff]/10" : " bg-[#000000]/30"
      }`}
    >
      <span
        className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full shrink-0 transition-all duration-300 ${
          isActive ? "bg-[#00a2ff]/20" : "bg-[#000000]/60"
        }`}
        style={{
          boxShadow: isActive
            ? "0px 4px 15px rgba(0, 162, 255, 0.25)"
            : shadowColor,
        }}
      >
        <Image
          src={iconSrc}
          width={22}
          height={22}
          alt={title}
          className={iconSrc.includes("start01") ? "p-0.5" : ""}
        />
      </span>

      <div className="flex-1 min-w-0">
        <p
          className={`text-[14px] sm:text-[15px] font-semibold leading-snug transition-all duration-300 ${
            isActive ? "text-[#00a2ff]" : "text-white"
          }`}
        >
          {title}
        </p>

        {desc ? (
          <p
            className={`text-[12px] sm:text-[13px] leading-relaxed mt-0.5 font-light transition-all duration-300 ${
              isActive ? "text-[#00a2ff]/90" : "text-white/90"
            }`}
          >
            {desc}
          </p>
        ) : (
          linkUrl &&
          linkText && (
            <p
              className={`text-[12px] sm:text-[13px] leading-relaxed mt-0.5 font-light transition-all duration-300 ${
                isActive ? "text-[#00a2ff]/90" : "text-white/90"
              }`}
            >
              At{" "}
              <Link
                href={linkUrl}
                className="underline text-[#00a2ff] font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkText}
              </Link>
            </p>
          )
        )}
      </div>
    </div>
  );
}
