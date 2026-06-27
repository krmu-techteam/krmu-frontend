import Image from "next/image";
import { getLogoContent } from "../lib/getContent";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const LogoSection = () => {
  const data = getLogoContent();
  const logo = data.logo;

  return (
    <section className="w-full py-6 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FDF7EB]">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row  items-center justify-between gap-6 sm:gap-4">
        {/* Label */}
        <h2
          className={`${inter.className} text-center sm:text-left text-[12px] sm:text-[13px] uppercase tracking-wider leading-snug`}
        >
          Specialisations and Curriculum <br />
          Delivered with
        </h2>

        {/* Analytics Track */}
        <Link href="/programs/mba" target="_blank">
          <div className="flex flex-col items-center">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/e53feb04a9480da92d845dc256dbde8f108df463_c41f459cd1.png"
              alt="Analytics track"
              width={87}
              height={33}
              className="mb-2 grayscale"
            />
            <h2
              className={`${inter.className} text-center text-[11px] sm:text-[12px] font-medium`}
            >
              Analytics track
            </h2>
          </div>
        </Link>

        {/* Fintech Track */}
        <div className="flex flex-col items-center">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/cf4669f3a50b9b289d3f5edcd5e3aa0b79d7fecd_22e0e5810c.png"
            alt="Fintech track"
            width={40}
            height={40}
            className="mb-2 grayscale"
          />
          <h2
            className={`${inter.className} text-center font-medium text-[11px] sm:text-[12px]`}
          >
            Fintech track
          </h2>
        </div>

        {/* Digital Marketing Track */}
        <Link href="/programs/mba-digital-marketing" target="_blank">
          <div className="flex flex-col items-center">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/d7eb5760000e873ce5437f8d3690ccf3bc429826_ce226df9f6.png"
              alt="Digital Marketing track"
              width={68}
              height={42}
              className="mb-2 grayscale"
            />
            <h2
              className={`${inter.className} text-center font-medium text-[11px] sm:text-[12px]`}
            >
              Digital Marketing track
            </h2>
          </div>
        </Link>

        {/* Harvard Business Impact */}
        <h2
          className={`${fraunces.className} text-center text-[18px] sm:text-[21px] font-bold`}
        >
          Harvard Business Impact
        </h2>
      </div>
    </section>
  );
};

export default LogoSection;
