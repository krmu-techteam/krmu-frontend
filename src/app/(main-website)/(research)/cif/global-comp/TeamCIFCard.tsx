import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCIFCard = () => {
  return (
    <Link
      href="/faculty/dr-prabhakar-bhandari"
      target="_blank" rel="noopener noreferrer"
      className="bg-[url(/research/card-bg.webp)] bg-no-repeat text-white bg-cover flex flex-col sm:flex-row items-center justify-center rounded-[20px] mt-5"
    >
      <div className="md:w-1/4">
        <Image
          src="/research/prabhakar.webp"
          width={137}
          height={147}
          alt="Prabhakar"
          className="m-5 w-[137px] h-[147px] "
        />
      </div>
      <div className="flex flex-col md:w-2/4 text-center">
        <p>
          <strong>Dr. Prabhakar Bhandari (PhD)</strong>
        </p>
        <p>Director – Operations & Maintenance</p>
      </div>
      <div className="md:w-1/4 flex justify-end">
        <ChevronRight size={60} color="#ffffff" strokeWidth={4} />
      </div>
    </Link>
  );
};

export default TeamCIFCard;
