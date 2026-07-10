import Image from "next/image";

const WordClassFacility = () => {
  return (
    <section id="facilities">
      <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold xl:leading-20 font-poppins mb-5 text-center text-[#001732] ">
        Life @ KRMU
      </h3>
      <div className="w-full sm:mt-10 h-full xl:h-[592px] 2xl:h-full">
        <Image
          src="/international-admission/life-at.webp"
          width={1920}
          height={1920}
          alt="Student life at K.R. Mangalam University campus"
          className="w-full h-full object-contain xl:object-cover"
        />
      </div>
    </section>
  );
};

export default WordClassFacility;
