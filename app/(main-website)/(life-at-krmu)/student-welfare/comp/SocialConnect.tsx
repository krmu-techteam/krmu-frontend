import { Playfair_Display, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const SocialConnect = () => {
  return (
    <section className="bg-[#FAF8FC] pb-16 px-4 md:px-12">
      <div className="mx-auto w-full max-w-[1550px]">
        <div
          className="relative overflow-hidden rounded-[24px] border-[5px] border-white bg-gradient-to-r from-[#A7ECEF] via-[#D7DDF0] to-[#FBBBBB] p-4 md:p-10 lg:p-12 shadow-xl flex flex-col lg:flex-row justify-between items-center gap-6"
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        >
          <div className="text-left max-w-[550px] 2xl:max-w-[610px] w-full">
            <h3
              className={`${playfair.className} text-[26px] md:text-[33px] font-bold text-[#001732] leading-tight`}
            >
              Stay Connected with DSW
            </h3>
            <p
              className={`${poppins.className} mt-2 text-[15px] md:text-[21px] font-normal text-neutral-800 leading-relaxed`}
            >
              Follow Us on Instagram and LinkedIn for Student Updates, Events,
              Opportunities, and Campus Life Highlights
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start lg:justify-end gap-4 w-full lg:w-auto">
            {/* LinkedIn Button */}
            <Link
              href="https://www.linkedin.com/company/dean-of-student-welfare-krmu/posts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_622_0b190f920d.jpg"
                alt="Follow DSW KRMU on LinkedIn"
                className="w-full md:w-[360px] h-[60px] rounded-[13px] object-fit transition-all duration-300 hover:scale-[1.02]"
                height={1024}
                width={1024}
              />
            </Link>

            {/* Instagram Button */}
            <Link
              href="https://www.instagram.com/student_council_krmu?igsh=MTFnMXJzbmxjeXdzMg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_621_ebe58007c2.jpg"
                alt="Follow KRMU Student Council on Instagram"
                className="w-full h-[60px] rounded-[13px] object-cover transition-all duration-300 hover:scale-[1.02]"
                height={1024}
                width={1024}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
