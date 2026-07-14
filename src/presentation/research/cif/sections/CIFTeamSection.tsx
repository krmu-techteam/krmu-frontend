import Link from "next/link";
import Image from "next/image";
import { CIFTeamCard } from "../components";
import { CIFTeamSectionProps } from "@/features/research/cif/types";

const CIFTeamSection = ({
  cifTeamSection,
}: {
  cifTeamSection: CIFTeamSectionProps;
}) => {
  const { title, cta, teamMember } = cifTeamSection;
  return (
    <div className="max-w-[1530px] mx-auto w-full mt-10 px-6 md:px-7 xl:px-16 pb-8 md:pb-12 xl:pb-20">
      <h3 className="text-2xl md:text-5xl font-bold text-white mb-5">
        {title}
      </h3>
      <div className="lg:flex">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-10">
          <CIFTeamCard teamMember={teamMember}/>
          <Link
            href={cta.url}
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[4px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8 gap-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{cta.text}</span>{" "}
            <Image
              src={cta.iconUrl}
              width={30}
              height={30}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CIFTeamSection;
