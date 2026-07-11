import Image from "next/image";

const InterRelationWorkshop = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1600px] mx-auto w-full">
        <h4 className="text-[28px] text-center mb-5 font-semibold">
          Workshop & Meet
        </h4>
        <p className="text-center my-5">
          <strong>
            K.R. Mangalam University aids students to attend and participate in
            various workshops and meets.
          </strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16">
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/workshops/image-1.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              KRMU Students attended a workshop with University of
              Nebraska-Lincoln faculty at American Center, Delhi
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/workshops/image2.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              Students of Summer School programmes, received certificates on
              final day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterRelationWorkshop;
