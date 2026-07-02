import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});

const WelfareHero = () => {
  return (
    <section className="bg-[#051630] ">
      <div
        className="h-[300px] sm:h-[340px] md:h-[510px] lg:h-[450px] xl:h-[600px] 2xl:h-[700px] bg-[url(https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1407_6a699f3b68.jpg)] bg-cover bg-no-repeat"
        style={{ backgroundPosition: "center 5%" }}
      />

      <div className="max-w-[1650px] mx-auto  bg-[#051630] px-4 pb-[60px]">
        <div className="flex justify-center items-center text-center flex-col max-w-[1550px] mx-auto w-full text-white welfare_desg_int">
          <h1
            className={`${playfair.className}   font-semibold leading-[1.25] text-[34px] sm:text-5xl md:text-6xl lg:text-[104px] bg-clip-text text-transparent -mt-[36px] sm:-mt-[52px] md:-mt-[64px] lg:-mt-[90px] mb-6 `}
            style={{
              backgroundImage:
                "linear-gradient(90deg,#FF9D00 0%,#68BCFF 50%,#FF1D21 100%)",
            }}
          >
            Empowering Students Beyond Classrooms.
          </h1>

          <h3 className="flex flex-wrap items-center gap-y-2 text-[10px]  md:text-base lg:text-[22px] font-semibold tracking-[0.18em] uppercase mb-6">
            <span className="mr-2">Student Welfare at</span>
            <span className="bg-[#0063B0] ">K.R. Mangalam </span>
            <span className="bg-[#F7000E] pl-1 "> University</span>
          </h3>

          <div className="space-y-4 text-sm md:text-[15px] leading-[1.8] max-w-[760px] text-white/85">
            <p>
              The Department of Student Welfare (DSW) is committed to creating a
              supportive, inclusive, and student-friendly campus environment. It
              focuses on students&rsquo; academic, social, and personal
              well-being through cultural activities, workshops, awareness
              programs, and student engagement initiatives.
            </p>
            <p>
              The department also works closely with the Student Council and
              student bodies to encourage participation, leadership, and
              effective communication between students and the institution. DSW
              continues to support and guide students throughout their academic
              journey while promoting a vibrant and empowering campus culture.
            </p>
          </div>

          <div className="mt-10 border-t border-dashed border-white/25"></div>
        </div>
      </div>
    </section>
  );
};

export default WelfareHero;
