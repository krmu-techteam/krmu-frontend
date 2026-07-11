import { ArrowBigDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PhdSuperComputer = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col xl:flex-row gap-10">
        <div className="w-full text-center md:text-left xl:w-1/3">
          <div className="">
            <h3 className="text-4xl md:text-5xl font-bold mb-5">
              Admission Process
            </h3>
            <div className="custom-border"></div>
          </div>
          <div className="mt-5">

            <Image
            src="/wp-content/landingpage/phd-2026/steps.svg"
            width={400}
            height={580}
            alt=""
            />
            </div>
          {/* <ol className="my-5 pl-5 list-decimal text-[17px] flex flex-col gap-2.5">
            <li>Register Online Through the KRMU Portal</li>

            <li>Submit Academic Documents & Application Fee</li>

            <li>Take the Ph.D. Entrance Examination</li>

            <li>Attend the Faculty Led Interview</li>

            <li>Receive Admission Confirmation</li>
          </ol> */}
          {/* <p className="mt-10 mb-5">
            K.R. Mangalam University Proudly Owns Super Computer for Research in
            A.I. & Emerging Technologies
          </p>
          <p className="mb-5">
            K.R. Mangalam University has established K.R. Mangalam NextGen Cyber
            & Quantum Systems Facility with an nVIDIA DGX H100 system, fourth
            generation of the most powerful supercomputer for machine learning
            and artificial intelligence.
          </p> */}
          {/* <Link
            href="#"
            className="py-3 px-6 bg-[#E30016] text-white rounded-[5px] inline-block mt-5"
          >
            View More
          </Link> */}
        </div>
        <div className="w-full xl:w-1/3">
          <Image
            src="/landingpage/phd/merit.webp"
            width={400}
            height={580}
            alt=""
          />
          {/* <div className="bg-[#FBBF24] py-10 px-2.5 rounded-[5px] break-all sm:break-normal">
            <h3 className="font-semibold mb-5 text-2xl">University Research Fellowship (URF) for Meritorious Candidates for 3 Years</h3>
            
            <div className="border-b border-white flex gap-2.5 items-start pb-2.5 ">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-lg inline-block">
                <strong>NET-JRF</strong> Qualified: Rs. 35,000 Per month
              </span>
            </div>
            <div className="border-b border-white flex gap-2.5 items-start pt-5 pb-2.5 ">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-lg inline-block">
               <strong>NET</strong> Qualified: Rs. 30,000 Per month
              </span>
            </div>
            <div className="border-b border-white flex gap-2.5 items-start pt-5 pb-2.5 ">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-lg inline-block">
               <strong>NON-NET:</strong> Rs. 25,000 Per month
              </span>
            </div>
            
          </div> */}
        </div>
        <div className="w-full xl:w-1/3">
          <Image
            src="/landingpage/phd/phd-book.webp"
            width={400}
            height={580}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default PhdSuperComputer;
