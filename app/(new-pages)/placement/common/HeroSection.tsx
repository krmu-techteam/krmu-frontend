import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={`bg-[#fbf8f3] py-10`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div>
          <h1 className="text-6xl font-semibold font-newsreader">
            Comprehensive placement guidelines, schedules and policies.
          </h1>
        </div>
        <div>
          <Image
            src="/test/img-1.jpg"
            alt="Hero Image"
            width={606}
            height={387}
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
