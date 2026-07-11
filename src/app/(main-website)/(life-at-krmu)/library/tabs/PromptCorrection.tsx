import Image from "next/image";
import Link from "next/link";

const PromptCorrection = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <p>Ensuring Accuracy</p>
        <h2>Prompt Correction Services</h2>
        <p>
          The library provides an online platform for users to submit
          corrections or changes in their details, ensuring that communication
          and services remain efficient and personalized.
        </p>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="p-5 bg-[#051630] text-white rounded-[10px] w-2/3">
            <p className="mb-5">
              Any correction or change of address, e-mail, mobile number, etc.
              may be submitted through online.
            </p>
          </div>
          <div className="w-1/3"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mt-5">
          <div className="p-5 bg-[#051630] text-white rounded-[10px] w-2/3">
            <p className="mb-5">
              SMS alert will be given for any action taken.
            </p>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src="/library/liabrary.webp"
          width={540}
          height={768}
          alt="Overview"
        />
      </div>
    </div>
  );
};

export default PromptCorrection;
