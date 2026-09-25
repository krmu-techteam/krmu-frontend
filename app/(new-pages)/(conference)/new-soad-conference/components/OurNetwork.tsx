import Image from "next/image";

const OurNetwork = () => {
  return (
    <section className="py-10 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-[840px] space-y-1 mb-8">
          <h4 className="text-[#b08233] text-sm font-semibold uppercase">
            Our Network
          </h4>
          <h3 className="text-4xl font-bold">Collaborations from the Past</h3>
          <p className="text-[#59544d] font-medium">
            Institutions and organizations that partnered with DESIGN 2030 and
            earlier editions of the conference series.
          </p>
        </div>
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-white border border-[#d0c9b8] rounded-[10px] overflow-hidden flex items-center justify-center px-2 py-1 w-full">
            <Image
              src="/images/conferences/soad-conference/logos/coa.jpg"
              width={150}
              height={100}
              alt="Council of Architecture"
              className="w-full"
            />
          </div>
          <div className="bg-white border border-[#d0c9b8] rounded-[10px] overflow-hidden flex items-center justify-center px-2 py-1 w-full">
            <Image
              src="/images/conferences/soad-conference/logos/iia-haryana-chapter.png"
              width={150}
              height={100}
              alt="Council of Architecture"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;
