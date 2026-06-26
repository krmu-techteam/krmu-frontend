import Image from "next/image";
import { getLogoContent } from "../lib/getContent";
import { Fraunces, Inter, Playfair_Display } from "next/font/google";

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
    <section className="w-full p-8 px-20 bg-[#FDF7EB]">
      <div className="flex flex-row  items-center justify-between ">
        <h2
          className={`${inter.className} text-left text-[13px] uppercase tracking-wider`}
        >
          SpecialiSations and Curriculum <br />
          Delivered with
        </h2>
        <div>
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/e53feb04a9480da92d845dc256dbde8f108df463_c41f459cd1.png"
            alt="Analytics track"
            width={87}
            height={33}
            className="mb-2 grayscale"
          />
          <h2
            className={`relative ${inter.className} text-center text-[12px] font-medium top-[3px]`}
          >
            Analytics track
          </h2>
        </div>

        <div className="">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/cf4669f3a50b9b289d3f5edcd5e3aa0b79d7fecd_22e0e5810c.png"
            alt="Fintech track"
            width={40}
            height={40}
            className="mb-2 grayscale"
          />
          <h2
            className={`${inter.className} text-center font-medium text-[12px]`}
          >
            Fintech track
          </h2>
        </div>

        <div className="">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/d7eb5760000e873ce5437f8d3690ccf3bc429826_ce226df9f6.png"
            alt="Digital Marketing track"
            width={68}
            height={42}
            className="mb-2 grayscale"
          />
          <h2
            className={`${inter.className} text-center font-medium text-[12px]`}
          >
            Digital Marketing track
          </h2>
        </div>
        <h2
          className={`${fraunces.className} text-center text-[21px] font-bold`}
        >
          Harvard Business Impact
        </h2>
      </div>
    </section>
  );
};
export default LogoSection;
