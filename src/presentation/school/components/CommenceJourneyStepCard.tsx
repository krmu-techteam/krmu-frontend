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
  shadowColor = "0px 5px 20px rgb(29 66 197 / 38%)",
  isActive = false,
}: MobileStepProps) {
  return (
    <div
      className={`w-full p-5 rounded-md transition-all duration-300 border mb-2 ${
        isActive
          ? "border-[#00a2ff]/60 bg-[#00a2ff]/5"
          : "border-white/10 bg-transparent"
      }`}
    >
      <span
        className={`p-4 flex items-center justify-center w-[60px] h-[60px] rounded-full mb-5 transition-all duration-300 ${
          isActive ? "bg-[#00a2ff]/20" : "bg-[#001732]"
        }`}
        style={{
          boxShadow: isActive
            ? "0px 5px 25px rgba(0, 162, 255, 0.4)"
            : shadowColor,
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
      <p
        className={`text-lg font-semibold transition-all duration-300 ${isActive ? "text-[#00a2ff]" : "text-white"}`}
      >
        {title}
      </p>
      {desc ? (
        <p
          className={`transition-all duration-300 ${isActive ? "text-[#00a2ff]/80" : "text-white/70"}`}
        >
          {desc}
        </p>
      ) : (
        linkUrl &&
        linkText && (
          <p
            className={`transition-all duration-300 ${isActive ? "text-[#00a2ff]/80" : "text-white/70"}`}
          >
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
