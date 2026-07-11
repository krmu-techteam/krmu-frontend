import Image from "next/image";
import Link from "next/link";

const SEMCEHeader = () => {
  return (
    <header className="bg-black p-2.5">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col md:flex-row items-center gap-5 md:gap-0">
        <div className="w-full flex justify-center md:block md:w-1/2">
          <Image src="/semce/krmu-logo.svg" width={274} height={55} alt="KRMU Logo" />
        </div>
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-center items-center sm:items-end sm:justify-end gap-5">
          <Link
            href="#"
            className="bg-white font-semibold py-2.5 px-5 text-base text-center rounded-full cursor-pointer max-w-48 w-full"
          >
            Explore Programme
          </Link>
          <Link
            href="#"
            className="redGradient text-white font-semibold py-2.5 px-5 text-center text-base rounded-full cursor-pointer max-w-48 w-full"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SEMCEHeader;
