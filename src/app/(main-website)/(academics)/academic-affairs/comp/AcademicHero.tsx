import Image from "next/image";

const AcademicHero = () => {
  return (
    <section className="bg-[url(/academics/bg-gradient-1.webp)] bg-no-repeat bg-cover pt-[140px]">
      <div className="max-w-[1664px] mx-auto w-full flex justify-center items-center flex-col">
        <Image
          src="/academics/academic-affair-title.webp"
          width={1069}
          height={173}
          alt=""
          className="text-center"
        />
        <Image
          src="/academics/goscroll.webp"
          width={95}
          height={95}
          alt=""
          className="text-center"
        />
      </div>
    </section>
  );
};

export default AcademicHero;
