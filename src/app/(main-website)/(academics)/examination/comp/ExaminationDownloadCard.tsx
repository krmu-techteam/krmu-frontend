import { DownloadButton } from "@/lib/types/examination";
import Link from "next/link";
import {
    CalendarDays,
    FileText,
    BookOpen,
    Users,
    Download,
    FileCheck,
    FileSpreadsheet,
} from "lucide-react";

type Props = {
    title: string;
    btn: DownloadButton;
    index?: number;
};

// Color palettes matching the user's exact design
const COLOR_THEMES = [
    { bg: "bg-[#dbeafe]", text: "text-[#1d4ed8]" }, // 0: Sky Blue
    { bg: "bg-[#fee2e2]", text: "text-[#dc2626]" }, // 1: Coral / Red
    { bg: "bg-[#dcfce7]", text: "text-[#16a34a]" }, // 2: Mint Green
    { bg: "bg-[#fef3c7]", text: "text-[#d97706]" }, // 3: Amber Yellow
    { bg: "bg-[#ede9fe]", text: "text-[#7c3aed]" }, // 4: Soft Purple
    { bg: "bg-[#ffedd5]", text: "text-[#ea580c]" }, // 5: Light Orange
    { bg: "bg-[#ffe4e6]", text: "text-[#e11d48]" }, // 6: Rose Pink
    { bg: "bg-[#d1fae5]", text: "text-[#059669]" }, // 7: Emerald Green
    { bg: "bg-[#e0e7ff]", text: "text-[#4f46e5]" }, // 8: Indigo
];

function getDocMetadata(rawTitle: string, index: number) {
    const cleanTitle = rawTitle
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " ")
        .trim();

    const lower = cleanTitle.toLowerCase();

    let category = "Examination Notice";
    let iconType:
        "calendar" | "notice" | "form" | "regulation" | "guidelines" | "users" =
        "notice";

    if (
        lower.includes("application") ||
        lower.includes("exam form") ||
        lower.includes("application form")
    ) {
        if (lower.includes("application notice")) {
            category = "Examination Notice";
            iconType = "users";
        } else {
            category = "Application Form";
            iconType = "form";
        }
    } else if (lower.includes("regulation") || lower.includes("ordinance")) {
        category = "Regulation Document";
        iconType = "regulation";
    } else if (
        lower.includes("rechecking") ||
        lower.includes("guidelines") ||
        lower.includes("attainment") ||
        lower.includes("co-po") ||
        lower.includes("answer books")
    ) {
        category = "Guidelines";
        iconType = "guidelines";
    } else if (
        lower.includes("date sheet") ||
        lower.includes("datesheet") ||
        lower.includes("calendar")
    ) {
        if (
            lower.startsWith("notice") ||
            lower.includes("examination notice")
        ) {
            category = "Examination Notice";
            iconType = "calendar";
        } else {
            category = "Date Sheet";
            iconType = "calendar";
        }
    } else if (lower.includes("question paper")) {
        category = "Question Paper";
        iconType = "notice";
    } else if (lower.includes("notice") || lower.includes("notification")) {
        category = "Examination Notice";
        iconType = "notice";
    }

    const theme = COLOR_THEMES[index % COLOR_THEMES.length];

    return {
        cleanTitle,
        category,
        iconType,
        theme,
    };
}

export const ExaminationDownloadCard = ({ title, btn, index = 0 }: Props) => {
    const { cleanTitle, category, iconType, theme } = getDocMetadata(
        title || "",
        index
    );

    // Pick icon based on classification
    const renderIcon = () => {
        const className = "w-5 h-5 sm:w-6 sm:h-6 stroke-[2]";
        switch (iconType) {
            case "calendar":
                return <CalendarDays className={className} />;
            case "regulation":
            case "guidelines":
                return <BookOpen className={className} />;
            case "users":
                return <Users className={className} />;
            case "form":
                return <FileSpreadsheet className={className} />;
            case "notice":
            default:
                return <FileText className={className} />;
        }
    };

    return (
        <div className="bg-[#061623] hover:bg-[#061623]/90  hover:border-[#0055a4]/60 rounded-[4px] p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,85,164,0.15)] group">
            {/* Left: Pastel Icon Box */}
            <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${theme.bg} ${theme.text} group-hover:scale-105 transition-transform duration-200`}
            >
                {renderIcon()}
            </div>

            {/* Middle: Title & Category Subtitle */}
            <div className="flex-1 min-w-0 pr-1">
                <h3
                    className="text-white font-medium text-[13px] sm:text-[14px] leading-snug line-clamp-2 group-hover:text-white transition-colors"
                    title={cleanTitle}
                >
                    {cleanTitle}
                </h3>
                <p className="text-[#8ea4b8] text-[11px] sm:text-[12px] font-normal mt-1 truncate">
                    {category}
                </p>
            </div>

            {/* Right: Download Pill Button */}
            {btn?.btn_link ? (
                <Link
                    href={btn.btn_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0055a4] hover:bg-[#0066cc] text-white text-[12px] font-semibold flex items-center gap-1.5 shrink-0 transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(0,102,204,0.4)] hover:scale-[1.03] active:scale-[0.97]"
                >
                    <Download className="w-3.5 h-3.5 stroke-[2.4]" />
                    <span>{btn.btn_text || "Download"}</span>
                </Link>
            ) : (
                <button
                    disabled
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-700/50 text-slate-400 text-[12px] font-medium flex items-center gap-1.5 shrink-0 cursor-not-allowed opacity-60"
                >
                    <Download className="w-3.5 h-3.5 stroke-[2.4]" />
                    <span>Download</span>
                </button>
            )}
        </div>
    );
};
