import Image from "next/image";

const InterRelationCertified = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1600px] mx-auto w-full">
        <h4 className="text-[28px] text-center mb-5 font-semibold">
          Certified Master Classes – Australian Universities
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16 mt-5">
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/master-class/image-1.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              KRMU Students participating in Master Class by faculty from
              University of New South Wales, Sydney
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterRelationCertified;
