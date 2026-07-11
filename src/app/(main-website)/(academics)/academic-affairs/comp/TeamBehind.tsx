import { Check } from "lucide-react";
import Image from "next/image";

const TeamBehind = () => {
  return (
    <section className="py-10 bg-[url(/academics/bg-gradient-2.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1664px] mx-auto w-full text-white mb-5">
        <h3 className="text-center text-2xl md:text-[40px] font-bold mb-5 leading-[1.2]">
          Team Behind Academic Affairs
        </h3>
        <p className="text-center text-xl mb-5">
          Meet the Pillars of Our Educational Endeavours
        </p>
      </div>
      <div className="max-w-[1664px] mx-auto w-full xl:flex gap-[64px]">
        <div className="w-full xl:w-1/2">
          <div className="py-[30px] px-[30px] lg:flex gap-5 bg-[url(/academics/bg-gradient-3.webp)] bg-cover bg-no-repeat rounded-[20px]">
            <div className="w-full lg:w-2/5 flex flex-col items-center">
              <Image
                src="/academics/tania-2.webp"
                width={266}
                height={346}
                alt=""
              />
              <div className="text-white mb-5 text-center">
                <p className="font-semibold">Prof. Varuna Tyagi</p>
                <p>MBA and PhD in Psychology</p>
              </div>
            </div>
            <div className="w-full lg:w-3/5 text-white text-justify md:text-left">
              <p>
                Dean of Academics: Prof. Varuna Tyagi, MBA and PhD in Psychology
                with more than 22 years of teaching, academic administration,
                and training experience. A visionary in Organisation Behaviour,
                spearheads University academic strategies with a focus on
                inclusivity and global relevance. She is highly skilled and
                accomplished training professional with extensive knowledge of
                design, development, delivery, and evaluation of wide range of
                training activities. She plays a multifaceted role that requires
                a combination of leadership, vision, and a deep commitment to
                academic excellence. By overseeing curriculum development,
                managing faculty, and engaging with the broader community.
              </p>
            </div>
          </div>
          <div className="my-5 p-5 bg-[url(/academics/bg-gradient-5.webp)] bg-center bg-no-repeat bg-cover rounded-[20px] gap-3 text-white flex items-start md:items-center  md:h-28">
            <div>
              <span className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
                <Check strokeWidth={3} className="w-3.5 h-3.5 text-black" />
              </span>
            </div>
            <p>
              <strong>Faculty Coordinators:</strong> Our dedicated coordinators,
              experts in their respective fields, ensure the effective delivery
              of our diverse academic programs.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="py-[30px] px-[30px] lg:flex gap-5 bg-[url(/academics/bg-gradient-4.webp)] bg-cover bg-no-repeat rounded-[20px]">
            <div className="w-full lg:w-2/5 flex flex-col items-center">
              <Image
                src="/academics/dilraj.webp"
                width={266}
                height={346}
                alt=""
              />
              <div className="text-white mb-5 text-center">
                <p className="font-semibold">Prof. Dilraj Preet Kaur</p>
                <p>Ph.D. in Physics</p>
              </div>
            </div>
            <div className="w-full lg:w-3/5 text-white text-justify md:text-left">
              <p>
                Associate Dean of Academics: Prof. Dilraj Preet Kaur is a
                dynamic and visionary leader committed to fostering academic
                excellence, innovation, and student success. She holds a Ph.D.
                in Physics from Guru Nanak Dev University, Amritsar. With a
                distinguished career in academia, she brings expertise in
                Materials Science, steering curriculum advancements and NEP
                implementation. As Associate Dean, Academics and NEP
                coordinator, she brings a wealth of experience to the role,
                driving strategic initiatives that elevate the academic
                experience for students and faculty alike.
              </p>
            </div>
          </div>
          <div className="my-5 p-5 bg-[url(/academics/bg-gradient-6.webp)] bg-no-repeat bg-cover bg-center rounded-[20px] gap-3 text-white flex items-start md:items-center md:h-28">
            <div>
              <span className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
                <Check strokeWidth={3} className="w-3.5 h-3.5 text-black" />
              </span>
            </div>
            <p>
              <strong>Administrative Staff:</strong> The backbone of our office,
              providing indispensable support in the implementation of academic
              policies and student services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBehind;
