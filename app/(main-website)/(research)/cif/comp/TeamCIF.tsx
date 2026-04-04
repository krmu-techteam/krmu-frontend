import Link from "next/link";
import TeamCIFCard from "../global-comp/TeamCIFCard";
import Image from "next/image";

const TeamCIF = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full mt-10">
      <h3 className="text-2xl md:text-5xl font-bold text-white mb-10">
        Team CIF
      </h3>
      <div className="lg:flex">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-10">
          <TeamCIFCard />
          <Link
            href="/research-centre"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8 gap-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Interdisciplinary Research Centers and Laboratories</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
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

export default TeamCIF;
