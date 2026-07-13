import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const SocialConnect = () => {
  return (
    <section className="bg-[#FAF8FC] pb-16 px-6 md:px-12">
      <div className="mx-auto w-full max-w-[1550px]">
        <div className="relative overflow-hidden rounded-[24px] border-[5px] border-white bg-gradient-to-r from-[#A7ECEF] via-[#D7DDF0] to-[#FBBBBB] p-8 md:p-10 lg:p-12 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-left max-w-[550px] 2xl:max-w-[610px] w-full">
            <h3
              className={`${playfair.className} text-[26px] md:text-[34px] font-bold text-[#001732] leading-tight`}
            >
              Stay Connected with DSW
            </h3>
            <p className="mt-2 text-[15px] md:text-[17px] font-medium text-neutral-800 leading-relaxed">
              Follow us on Instagram and LinkedIn for student updates, events,
              opportunities, and campus life highlights
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start lg:justify-end gap-4 w-full lg:w-auto">
            {/* LinkedIn Button */}
            <Link
              href="https://www.linkedin.com/school/k.r.-mangalam-university/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_622_0b190f920d.jpg"
                alt="Linkedin"
                className="w-[310px] md:w-[360px] h-[63px] rounded-[13px] object-fit transition-all duration-300 hover:scale-[1.02]"
                height={1024}
                width={1024}
              />
            </Link>

            {/* Instagram Button */}
            <Link
              href="https://www.instagram.com/krmangalamuniv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_621_ebe58007c2.jpg"
                alt="Linkedin"
                className="w-[252px] h-[62px] rounded-[13px] object-cover transition-all duration-300 hover:scale-[1.02]"
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
