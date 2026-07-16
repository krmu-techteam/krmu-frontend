import { FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { DisclosureDocument } from "../constants/disclosures.constants";

interface DisclosureCardProps {
  card: DisclosureDocument;
}

export const DisclosureCard = ({ card }: DisclosureCardProps) => {
  return (
    <Link
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-[4px] bg-[#061623] border border-white/10 p-5 flex items-center justify-between hover:border-[#0060aa] hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        {/* Document Icon Container */}
        <div className="w-12 h-12 rounded-[4px] bg-[#0f2435] flex items-center justify-center text-[#94a3b8] group-hover:bg-[#0060aa] group-hover:text-white transition-all duration-300 shrink-0">
          <FileText size={22} />
        </div>
        
        {/* Title */}
        <p className="font-medium text-base sm:text-[17px] text-[#edf3f7] group-hover:text-white transition-colors duration-200 font-poppins leading-snug">
          {card.title}
        </p>
      </div>

      {/* External Link Indicator */}
      <div className="text-white/30 group-hover:text-white transition-colors duration-200 pr-2 shrink-0">
        <ExternalLink size={18} />
      </div>
    </Link>
  );
};
