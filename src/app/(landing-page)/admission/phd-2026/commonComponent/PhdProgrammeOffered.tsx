import Image from "next/image";
import PhdProgrammeOfferedAccordionTab from "./PhdProgrammeOfferedAccordionTab";

const PhdProgrammeOffered = () => {
  return (
    <>
      <section className="py-10 bg-[#005DA9] h-[200px] relative text-center mt-32">
        <div className="lg:absolute bottom-0 hidden lg:block">
          <Image
            src="/landingpage/phd/phdoff.webp"
            width={496}
            height={421}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center w-full h-full">


        <h4 className="text-white font-semibold text-4xl">Ph.D. PROGRAMMES OFFERED</h4>
        </div>
      </section>
      <PhdProgrammeOfferedAccordionTab />
      <Image
        src="/landingpage/phd/progbg.webp"
        width={1920}
        height={320}
        alt=""
        className="w-full"
      />
    </>
  );
};

export default PhdProgrammeOffered;
