import Image from "next/image";

const OurTopPriority = () => {
  return (
    <section className="bg-[#252525]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-[60px]">
        <div className="lg:w-1/2 text-white lg:pl-[100px] p-4 lg:py-0 lg:pr-0">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] mb-5">
            Safety and Well-being: Our Top Priority
          </h3>
          <p>
            Don’t worry about your child’s safety because our hostels are
            equipped with 24/7 security and surveillance gear, ensuring a
            perfectly secure perimeter for your child. The wardens and guards
            are serious about your child’s safety and have a responsive and
            supportive nature towards the students.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/campus-life/safety.png"
            width={860}
            height={308}
            alt=""
            className="h-full sm:h-[308px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTopPriority;
