import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="w-full">
        <Image
          src="/dsw/dsw-hero.jpg"
          width={1920}
          height={1920}
          className="w-full h-full"
          alt="Hero Image"
          priority
        />
      </div>
      <div className="bg-[linear-gradient(97.3deg,#001732_70.09%,#004698_94.32%)] text-white text-center -mt-15">
        <div className="max-w-[1350px] mx-auto w-full relative pb-5">
          <h1 className="2xl:text-[104px] font-bold leading-none">
            Empowering Students Beyond Classrooms
          </h1>
          <h3 className="text-3xl font-semibold my-10">
            Student Welfare at{" "}
            <span>
              <span className="bg-[#0063b0] py-0.5 px-2.5">K.R. Mangalam</span>
              <span className="bg-[#f7000e] py-0.5 px-2.5">University</span>
            </span>
          </h3>
          <div className="max-w-[1058px] mx-auto space-y-5 text-[#CDE9FF]">
            <p className="text-2xl">
              The Department of Student Welfare (DSW) is committed to creating a
              supportive, inclusive, and student-friendly campus environment. It
              focuses on students’ academic, social, and personal well-being
              through cultural activities, workshops, awareness programs, and
              student engagement initiatives.
            </p>
            <p className="text-2xl">
              The department also works closely with the Student Council and
              student bodies to encourage participation, leadership, and
              effective communication between students and the institution. DSW
              continues to support and guide students throughout their academic
              journey while promoting a vibrant and empowering campus culture. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
