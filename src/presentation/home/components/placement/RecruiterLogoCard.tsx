import { cn } from "@/lib/utils";
import Image from "next/image";
import { CSSProperties } from "react";

interface RecruiterLogoCardProps {
  logo: string;
  name: string;
  style?: CSSProperties;
  className?: string;
}

export function RecruiterLogoCard({
  logo,
  name,
  style,
  className,
}: RecruiterLogoCardProps) {
  return (
    <div
      style={style}
      className={cn(
        "flex h-[100px] items-center justify-center overflow-hidden rounded-[4px] border border-brand-gray bg-transparent",
        "transition-all duration-500 hover:border-white/30 hover:bg-white/5",
        className,
      )}
    >
      <div className="relative h-20 w-full transition-transform duration-500 hover:scale-110">
        <Image
          src={logo}
          alt={name}
          fill
          sizes="(max-width:640px)50vw,(max-width:1024px)33vw,20vw"
          className="object-contain px-4 py-3"
        />
      </div>
    </div>
  );
}
