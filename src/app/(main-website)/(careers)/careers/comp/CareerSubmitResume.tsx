import { Openings } from "@/lib/api/careers/career";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  openings: Openings;
};

const CareerSubmitResume = ({ openings }: Props) => {
  return (
    <section className="py-10 md:py-[60px] px-4 md:px-0">
      <div className="max-w-[1600px] mx-auto w-full bg-[url(/careers/submitresumebg.webp)] bg-no-repeat bg-center md:bg-auto bg-cover flex flex-col md:flex-row items-center gap-4 md:gap-16 md:h-[410px]">
        <div className="md:w-1/2 p-5 sm:p-10 md:p-20 text-white h-full">
          <h3 className="text-3xl md:text-5xl font-semibold mt-2.5 mb-[15px]">
            Didn’t see any <br />
            openings?
          </h3>
          <p>No problem, if you think you would be a great fit for KRMU,</p>
          <p>we would still like your resume.</p>
          {openings?.opening_btn?.btn_link && (
            <Link
              href={openings?.opening_btn?.btn_link || "#"}
              className="flex items-center bg-white text-black py-[13px] px-[29px] w-fit gap-2.5 text-sm rounded-sm mt-5 font-medium"
              target="_blank" rel="noopener noreferrer"
            >
              <span>Submit your Resume</span> <MoveRight />
            </Link>
          )}
        </div>
        <div className="md:w-1/2 h-full relative">
          <div className="md:absolute bottom-2.5 right-0">
            <Image src="/careers/career.webp" width={488} height={562} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSubmitResume;
