import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const ClubsSocieties = () => {
  return (
    <section className=" flex justify-center h-[1200px] md:h-[1000px] lg:h-[1070px] xl:h-[900px] 2xl:h-[1000px]  py-10 sm:py-12 px-4 sm:px-12 bg-cover bg-[55%] sm:bg-[45%] lg:bg-[25%] xl:bg-center bg-no-repeat bg-[url(https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1403_e55adcc5a7.jpg)]">
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
          className={`${playfair.className} text-[30px] font-bold leading-tight md:text-[35px] lg:text-[41px]`}
        >
          Clubs and Societies
        </h2>

        <p
          className={`${poppins.className} mt-3 text-[14px] font-normal leading-[1.45] md:text-[16px] lg:text-[20px]`}
        >
          KRMU offers a vibrant campus life to the students and the faculty.
          From cultural events to scientific experiments, from robotic
          developments to artistic strokes, apprentices at KRMU keep their
          enthusiasm high and deliver impeccable participation in all
          activities. The University supports more than thirteen clubs/societies
          which are primarily run by the students. These clubs/societies offer
          students a platform to showcase their talents and acquire new traits
          that can be learned while thinking out of the box. A wide range of
          activities are organised to help students develop new skills, nurture
          their talents, and pursue their interests beyond the classroom.
        </p>

        <Link
          href="https://www.krmangalam.edu.in/clubs-and-societies/"
          className="mt-5 inline-flex h-[56px] items-center justify-center rounded-full bg-[#001732] px-8 text-[18px] font-normal text-white transition hover:bg-[#003463]"
          target="_blank"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default ClubsSocieties;
