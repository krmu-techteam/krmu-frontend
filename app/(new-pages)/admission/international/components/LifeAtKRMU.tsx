import Image from "next/image";

const LifeAtKRMU = () => {
  return (
    <section className="pt-[50px]">
      <div className="max-w-[1664px] mx-auto text-center">
        <h3 className="text-6xl font-extrabold leading-20 font-poppins mb-5">
          World-Class Facilities & Infrastructure
        </h3>
        <p className="max-w-[1200px] mx-auto text-lg">
          K.R. Mangalam University offers a modern and student-centric campus
          designed to support effective learning and holistic development for
          its students. The university provides smart classrooms, a
          well-equipped central library with digital resources, computer and
          analytics labs, and seminar halls to enhance academic engagement.
          Additionally, the availability of dedicated spaces for innovation,
          entrepreneurship, and skill development creates an environment that
          encourages practical learning, collaboration, and professional growth.
        </p>
      </div>

      <div className="w-full mt-10">
        <Image
          src="/international-admission/world.webp"
          width={1920}
          height={400}
          alt=""
        />
      </div>
    </section>
  );
};

export default LifeAtKRMU;
