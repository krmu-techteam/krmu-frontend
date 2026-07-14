import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const ClubsSocieties = () => {
  return (
    <section className=" flex justify-center h-[1200px] md:h-[1000px] lg:h-[900px] xl:h-[850px] 2xl:h-[1070px]  py-12 px-12 bg-cover bg-center bg-no-repeat bg-[url(https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1403_e55adcc5a7.jpg)]">
      {/* <Image
        src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1403_e55adcc5a7.jpg"
        alt="Students sitting together on campus lawn"
        fill
        // sizes="(min-width: 1536px) 1500px, 100vw"
        className="object-contain object-center "
      /> */}

      <div
        className={`max-w-[1550px] h-fit top-8 rounded-md bg-[linear-gradient(180deg,#E7C268_0%,#FFF3D7_100%)] px-6 py-6 text-[#001732] shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-[1px] md:top-10 md:px-8 md:py-7`}
      >
        <h2
          className={`${playfair.className} text-[30px] font-bold leading-tight md:text-[36px]`}
        >
          Clubs and Societies
        </h2>

        <p className="mt-3  text-[14px] font-medium leading-[1.45] md:text-[17px] text-justify">
          KRMU offers a vibrant campus life to the students and the faculty.
          From cultural events to scientific experiments, from robotic
          developments to artistic strokes, apprentices at KRMU keep their
          enthusiasm high and deliver impeccable participation in all
          activities. The University supports more than thirteen clubs/societies
          which are primarily run by the students. These clubs/societies offer
          students a platform to showcase their talents and acquire new traits
          that can be learned while thinking out of the box. Various activities
          are organized so that students can learn new skills and hone their
          skills and hobbies.
        </p>

        <Link
          href="#tab1"
          className="mt-5 inline-flex h-[44px] items-center justify-center rounded-full bg-[#001732] px-7 text-[14px] font-medium text-white transition hover:bg-[#003463]"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default ClubsSocieties;
