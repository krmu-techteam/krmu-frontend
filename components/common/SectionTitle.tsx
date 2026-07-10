import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  variant?: "default" | "highlight";
  className?: string;
  highlightClassName?: string;
}

export function SectionTitle({
  title,
  highlight,
  subtitle,
  variant = "default",
  className,
  highlightClassName,
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-serif text-white text-3xl md:text-4xl xl:text-[42px] leading-[1.1] font-bold mb-6",
        className,
      )}
    >
      {variant === "default" ? (
        title
      ) : (
        <>
          {title}{" "}
          <span className={cn("text-brand-gold", highlightClassName)}>
            {highlight}
          </span>
          {subtitle && (
            <>
              <br />
              {subtitle}
            </>
          )}
        </>
      )}
    </h2>
  );
}
