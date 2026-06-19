import { STRAPI_URL } from "@/app/constant";
import { CdcTeamItem } from "@/lib/api/cdcteam";
import Image from "next/image";

type Props = {
  data: CdcTeamItem;
};

const TeamMemberCard = ({ data }: Props) => {
  return (
    <div className="gsap-stagger-item group relative flex flex-col bg-[#0b1a27] rounded-[12px] border border-white/10 hover:border-[#00A0E3] transition-colors duration-300 overflow-hidden shadow-xl w-full opacity-0">
      
      {/* Image container */}
      <div className="relative aspect-square w-full bg-white/5 overflow-hidden border-b border-white/10">
        {data?.cdc_team_img?.url ? (
          <Image
            src={`${STRAPI_URL}${data.cdc_team_img.url}`}
            alt={data.cdc_name || "Team Member"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/40">
            No Image Available
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="p-5 flex flex-col items-center justify-center text-center">
        <h4 className="text-[18px] sm:text-[20px] font-serif font-semibold text-white leading-tight mb-1.5">
          {data?.cdc_name}
        </h4>
        <p className="text-[#00A0E3] text-[12px] sm:text-[13px] font-poppins font-medium uppercase tracking-wider">
          {data?.cdc_designation}
        </p>
      </div>

    </div>
  );
};

export default TeamMemberCard;
