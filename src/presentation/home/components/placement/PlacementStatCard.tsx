import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface PlacementStatCardProps {
  value: string;
  label: string;
  style?: CSSProperties;
  className?: string;
}

export function PlacementStatCard({
  value,
  label,
  style,
  className,
}: PlacementStatCardProps) {
  return (
    <div
      style={style}
      className={cn(
        "flex h-[95px] w-full flex-col justify-center rounded-[4px] p-4 md:p-5",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10",
        className,
      )}
    >
      <p className="mb-[6px] text-2xl font-normal leading-none text-brand-gold md:text-[26px]">
        {value}
      </p>

      <p className="text-[14px] font-light leading-tight text-white/80 md:text-sm">
        {label}
      </p>
    </div>
  );
}
