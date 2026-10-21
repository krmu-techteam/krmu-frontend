import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
    "relative inline-flex items-center justify-center shrink-0",
    {
        variants: {
            size: {
                sm: "h-5 w-5",
                default: "h-8 w-8",
                md: "h-10 w-10",
                lg: "h-14 w-14",
                xl: "h-18 w-18",
                "2xl": "h-24 w-24",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface SpinnerProps
    extends
        React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof spinnerVariants> {
    className?: string;
    strokeWidth?: number;
}

export function Spinner({
    className,
    size = "default",
    strokeWidth = 4,
    ...props
}: SpinnerProps) {
    return (
        <div
            className={cn(spinnerVariants({ size }), className)}
            role="status"
            aria-label="Loading..."
            {...props}
        >
            <svg
                className="w-full h-full animate-spin text-[#cb000d]"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background track circle */}
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="opacity-20"
                />
                {/* Animated active arc */}
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray="80 140"
                    className="opacity-100"
                />
            </svg>
        </div>
    );
}

export { spinnerVariants };
export default Spinner;
