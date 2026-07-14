import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TeamRDCMembers } from "@/features/research/research-and-innovation/types";

const ReamRDCCard = ({
  name,
  designation,
  facultyUrl,
  facultyImageUrl,
}: TeamRDCMembers) => {
  return (
    <Link
      href={facultyUrl || "#"}
      className="border border-[#938C8B] text-white flex flex-col sm:flex-row items-center justify-center rounded-[4px] mt-5 hover:border-[#A89F73] transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="md:w-1/4 bg-[#061623]">
        <Image
          src={facultyImageUrl}
          width={137}
          height={147}
          alt="Prabhakar"
          className="ml-5 mt-4 object-cover h-[130px] w-[137px]"
        />
      </div>
      <div className="flex flex-col md:w-2/4 text-center">
        <p className="font-medium font-poppins">
          {name}
        </p>
        <p className="font-poppins">{designation}</p>
      </div>
      <div className="md:w-1/4 flex justify-end">
        {facultyUrl && (
          <ChevronRight size={60} color="#ffffff" strokeWidth={2} />
        )}
      </div>
    </Link>
  );
};

export default ReamRDCCard;
