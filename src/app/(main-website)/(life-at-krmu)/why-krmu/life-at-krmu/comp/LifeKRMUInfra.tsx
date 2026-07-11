import Image from "next/image";

const LifeKRMUInfra = () => {
  return (
    <section className="bg-[#051630]">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-white  p-5 sm:p-10 lg:pt-[60px] lg:pb-[50px] lg:pr-[60px] lg:pl-[100px]">
          <p> Innovative Spaces for Inspired Learning</p>
          <h3 className="text-3xl lg:text-5xl font-semibold my-5">
            The Infrastructure Edge
          </h3>
          <p className="mb-5">
            Our campus is a testament to our dedication to holistic learning,
            boasting state-of-the-art infrastructure. Equipped with modern
            classrooms, advanced laboratories, comprehensive libraries, and a
            plethora of recreational facilities, we ensure that our students
            have access to everything they need for a rich, immersive
            educational experience. The infrastructure at K.R. Mangalam
            University is designed to inspire and facilitate the highest levels
            of academic and extracurricular achievement.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/life-at-krmu/infra.webp"
            width={1050}
            height={430}
            className="w-full h-full"
            alt="Infra"
          />
        </div>
      </div>
    </section>
  );
};

export default LifeKRMUInfra;
