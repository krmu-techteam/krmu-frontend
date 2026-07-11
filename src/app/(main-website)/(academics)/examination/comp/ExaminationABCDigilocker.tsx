import { AbcNadButton } from "@/lib/types/examination";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  url: string;
  btns: AbcNadButton[];
};

const ExaminationABCDigilocker = ({ heading, url, btns }: Props) => {
  return (
    <section className="bg-[#051630] py-5 lg:py-0 px-4 lg:pr-0 lg:pl-5">
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-16">
        <div className="lg:w-2/3 break-all">
          <h3 className="text-[26px] md:text-[64px] font-medium leading-[1.7] text-white mt-2.5 mb-[15px]">
            {heading}
          </h3>
          <p className="mb-5 font-normal text-white text-sm lg:text-2xl leading-[1.5]">
            The National Academic Depository (NAD) is an online repository
            available around the clock, storing academic credentials such as
            awards, diplomas, degrees, and transcripts.
          </p>
          <Link
            href={`${url || "#"}`}
            target="_blank" rel="noopener noreferrer"
            className="text-2xl text-[#0000ff] mb-5 inline-block"
          >
            {url}
          </Link>
          <div className="flex flex-col gap-5">
            {btns?.map((btn) => {
              return (
                <Link
                  key={btn?.id}
                  href={btn?.btn_link || "#"}
                  className={`bg-[#cb000d] py-[5px] px-5 md:py-[13px] md:px-[29px] text-white text-xs lg:text-base font-semibold hover:bg-[#034272] inline-block w-fit rounded-sm`}
                  target="_blank" rel="noopener noreferrer"
                >
                  {btn?.btn_text}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <Image
            src="/examination/Digilocker-Benefits.webp"
            width={490}
            height={463}
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ExaminationABCDigilocker;
