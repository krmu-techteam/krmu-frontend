import Image from "next/image";
import Link from "next/link";
import { DisclosureCard } from "../components";
import {
  LEFT_COLUMN_DOCUMENTS,
  RIGHT_COLUMN_DOCUMENTS,
} from "../constants/disclosures.constants";

export const DisclosuresSection = () => {
  return (
    <section className="max-w-[1530px] mx-auto px-6 md:px-7 lg:px-16 pb-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Columns - List of 12 main disclosure documents */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {LEFT_COLUMN_DOCUMENTS.map((card) => (
            <DisclosureCard key={card.id} card={card} />
          ))}
        </div>

        {/* Right Column - Samadhaan banner & Mandatory disclosures */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Samadhaan Banner Card */}
          <div className="rounded-[4px] bg-[#061623] border border-white/10 p-6 flex flex-col items-center justify-center hover:border-[#0060aa] transition-all duration-300 group">
            <Link
              href="https://samadhaan.ugc.ac.in/Home/Index"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-white p-4 rounded-[4px] min-h-[160px] overflow-hidden"
            >
              <Image
                src="https://www.krmangalam.edu.in/wp-content/uploads/2025/06/Untitled-400x195.png"
                alt="UGC Samadhaan"
                width={300}
                height={146}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Right Column Documents */}
          <div className="flex flex-col gap-5">
            {RIGHT_COLUMN_DOCUMENTS.map((card) => (
              <DisclosureCard key={card.id} card={card} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
