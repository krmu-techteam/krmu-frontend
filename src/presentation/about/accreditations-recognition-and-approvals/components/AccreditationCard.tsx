import Image from "next/image";
import Link from "next/link";
import { STRAPI_URL } from "@/app/constant";
import { Accreditation } from "@/features/about/accreditations-recognition-and-approvals";

type AccreditationCardProps = {
  member: Accreditation["accrediationrecogapprovals"][0];
};

export const AccreditationCard = ({ member }: AccreditationCardProps) => {
  return (
    <div className=" rounded-[4px] bg-[#061623] border border-white/10 p-6 flex flex-col items-center justify-between min-h-[400px] hover:border-[#0060aa] hover:-translate-y-1 transition-all duration-300 group text-center">
      {/* Accreditation Logo Container */}
      <div className="w-full flex-1 flex items-center justify-center p-4 bg-[#fff]/90 rounded-[4px]">
        {member?.cardurl ? (
          <Link
            href={member.cardurl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full"
          >
            <Image
              src={`${STRAPI_URL}${member.cardimg.url}`}
              width={220}
              height={220}
              className="max-w-[220px] max-h-[180px] object-contain transition-transform duration-500 group-hover:scale-105"
              alt={member.cardtitle || "acu"}
            />
          </Link>
        ) : (
          <Image
            src={`${STRAPI_URL}${member.cardimg.url}`}
            width={220}
            height={220}
            className="max-w-[220px] max-h-[170px] object-contain transition-transform duration-500 group-hover:scale-105"
            alt={member.cardtitle || "acu"}
          />
        )}
      </div>

      {/* Title Section */}
      <div className="mt-6 w-full flex flex-col justify-end min-h-[60px] px-2">
        {member?.cardurl ? (
          <Link
            href={member.cardurl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[18px] text-[#94a3b8] hover:text-white group-hover:text-white transition-colors duration-200 line-clamp-2 leading-snug font-poppins"
          >
            {member.cardtitle}
          </Link>
        ) : (
          <p className="font-semibold text-[18px] text-[#94a3b8] line-clamp-2 leading-snug font-poppins">
            {member.cardtitle}
          </p>
        )}
      </div>
    </div>
  );
};
