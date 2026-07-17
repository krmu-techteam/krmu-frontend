import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const WelfareHero = () => {
  return (
    <section className="bg-[#051630] pt-[108px] sm:pt-[85px] xl:pt-[115px] overflow-hidden ">
      <div
        className=" [@media(max-width:420px)]:h-[190px] h-[225px] sm:h-[340px] md:h-[400px] lg:h-[450px] xl:h-[600px] [@media(min-width:1700px)]:h-[700px] bg-[url(https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1407_6a699f3b68.jpg)] bg-contain scale-[140%] sm:scale-none sm:bg-cover bg-no-repeat"
        style={{ backgroundPosition: "46% 10%" }}
      />

      <div className=" mx-auto  bg-[linear-gradient(97.3deg,#001732_70.09%,#004698_100%)] px-4 sm:px-10 pb-8 sm:pb-12">
        <div className="flex justify-center items-center text-center flex-col max-w-[1550px] mx-auto w-full text-white welfare_desg_int">
          <h1
            className={`${playfair.className} font-semibold leading-[1.25]  [@media(max-width:380px)]:text-[32px] text-[36px]  md:text-[54px] lg:text-[75px] xl:text-[104px] bg-clip-text text-transparent [@media(max-width:380px)]:-mt-[15px] -mt-[25px] sm:-mt-[52px] md:-mt-[64px] lg:-mt-[90px] xl:-mt-[105px] mb-6 sm:mb-10`}
            style={{
              backgroundImage:
                "linear-gradient(90deg,#FF9D00 0%,#68BCFF 50%,#FF1D21 100%)",
              filter: "drop-shadow(0px 20px 2px  rgba(0,0,0,0.60))",
            }}
          >
            Empowering Students Beyond Classrooms
          </h1>

          <p
            className={`${poppins.className} flex flex-wrap items-center justify-center gap-y-2 text-[11px]  md:text-base lg:text-[22px] xl:text-[31px] font-semibold tracking-[21%] uppercase mb-6 sm:mb-10 text-white`}
          >
            <span className="mr-2">Student Welfare at</span>
            <span className="bg-[#0063B0]  tracking-normal px-1">
              K.R. Mangalam{" "}
            </span>
            <span className="bg-[#F7000E] px-1  tracking-normal">
              {" "}
              University
            </span>
          </p>

          <div
            className={`${poppins.className} space-y-6 text-sm md:text-[23px] text-justify sm:text-center font-normal max-w-[1058px] leading-[160%]  text-[#CDE9FF] px-4 sm:px-0`}
          >
            <p>
              The Department of Student Welfare (DSW) is committed to creating a
              supportive, inclusive, and student-friendly campus environment. It
              focuses on students&rsquo; academic, social, and personal
              well-being through cultural activities, workshops, awareness
              programmes, and student engagement initiatives.
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
