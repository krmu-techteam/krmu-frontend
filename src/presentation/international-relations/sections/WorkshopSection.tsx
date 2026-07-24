import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";

const WorkshopSection = () => {
  const workshops = [
    {
      image: "/inter-relation/workshops/image-1.png",
      desc: "KRMU Students attended a workshop with University of Nebraska-Lincoln faculty at American Center, Delhi",
    },
    {
      image: "/inter-relation/workshops/image2.png",
      desc: "Students of Summer School programmes, received certificates on final day",
    },
  ];

  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <h2 className="text-4xl md:text-5xl lg:text-[44px] text-center text-white font-serif font-bold mb-6">
          Workshop & Meet
        </h2>
        <p className="text-center mb-6 md:mb-12 xl:mb-16 font-poppins text-white/90 max-w-4xl mx-auto  md:text-[16px] font-light">
          K.R. Mangalam University aids students to attend and participate in
          various workshops and meets.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-11">
          {workshops.map((item, index) => (
            <div key={index} className="flex flex-col h-full bg-[#061623]">
              <div className="w-full relative h-[250px] md:h-[350px] xl:h-[400px]">
                <Image src={item.image} fill alt="" className="object-cover" />
              </div>
              <div className="p-6 flex-grow">
                <p className="text-[16px] text-gray-200 leading-relaxed font-poppins">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default WorkshopSection;
