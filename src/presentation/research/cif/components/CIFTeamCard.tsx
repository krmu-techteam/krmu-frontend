import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CIFTeamMember } from "@/features/research/cif";

const CIFTeamCard = ({ teamMember }: { teamMember: CIFTeamMember }) => {
  const { name, link, image, designation } = teamMember;
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[url(/research/card-bg.webp)] bg-no-repeat text-white bg-cover flex flex-col sm:flex-row items-center justify-center rounded-[20px] mt-5"
    >
      <div className="md:w-1/4">
        <Image
          src={image}
          width={137}
          height={147}
          alt={name}
          className="m-5 w-[137px] h-[147px] "
        />
      </div>
      <div className="flex flex-col md:w-2/4 text-center">
        <p className="font-semibold font-poppins">{name}</p>
        <p className="font-poppins font-light">{designation}</p>
      </div>
      <div className="md:w-1/4 flex justify-end">
        <ChevronRight size={60} color="#ffffff" strokeWidth={2} />
      </div>
    </Link>
  );
};

export default CIFTeamCard;
