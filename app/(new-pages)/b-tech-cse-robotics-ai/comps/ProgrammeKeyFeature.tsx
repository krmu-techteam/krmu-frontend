import Image from "next/image";

const ProgrammeKeyFeature = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1280px] mx-auto">
        <h3 className="text-5xl font-bold mb-10">Programme Key Features</h3>

        <div className="grid grid-cols-2">
          <div className="flex items-start gap-6">
            <div className="w-2/12">
              <Image
                src="/demo/handson.svg"
                width={84}
                height={84}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="text-[#001732] w-10/12">
              <h4 className="font-bold mb-1.5">
                Hands-On Learning with Real-World Exposure
              </h4>
              <p className="text-base font-normal">
                15% of the total credits are earned through internships and
                hands-on projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeKeyFeature;
