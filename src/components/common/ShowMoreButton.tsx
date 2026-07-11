import { cn } from "@/lib/utils";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface ShowMoreButtonProps {
  expanded: boolean;
  onClick: () => void;
  expandedText?: string;
  collapsedText?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showIcon?: boolean;
}

export default function ShowMoreButton({
  expanded,
  onClick,
  expandedText = "Show Less",
  collapsedText = "Show More",
  className,
  iconClassName,
  textClassName,
  showIcon = true,
}: ShowMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group mx-auto flex items-center gap-2 transition-colors cursor-pointer",
        className,
      )}
    >
      {showIcon && (
        <span
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full border border-white transition-colors group-hover:border-white/80",
            iconClassName,
          )}
        >
          {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      )}
      <span
        className={cn(
          "text-md font-normal capitalize tracking-wide text-white group-hover:text-white/80",
          textClassName,
        )}
      >
        {expanded ? expandedText : collapsedText}
      </span>
    </button>
  );
}
