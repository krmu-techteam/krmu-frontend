import Image from "next/image";
import Link from "next/link";
import { RDCSectionProps } from "@/features/research/research-and-innovation/types";

const RDCSection = ({ rdcSection }: { rdcSection: RDCSectionProps }) => {
  const {
    title,
    description_one,
    description_two,
    imageUrl,
    deanInfo: { name, designation },
  } = rdcSection;
  return (
    <>
      <section className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row items-center px-6 md:px-7 xl:px-16 pt-8 md:pt-12 xl:pt-20">
        <div className="lg:w-[65%] text-white">
          <h2 className="text-3xl md:text-[42px] font-semibold mb-5">
            {title} 
          </h2>
          <p className="font-poppins">{description_one}</p>
          <br />
          <p className="font-poppins">{description_two}</p>
        </div>
        <div className="lg:w-[35%] flex justify-end">
          <div className="text-center bg-[#061623]">
            <Image src={imageUrl}  width={431} height={500} alt="Seema" />
            <Link
              href="/dr-seema-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#0b263b] py-2 w-full block"
            >
              <span className="font-poppins font-semibold">{name}</span> |
              <span className="font-poppins"> {designation}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RDCSection;
