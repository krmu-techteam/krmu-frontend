import Image from "next/image";
import { getLogoContent } from "../lib/getContent";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});

const LogoSection = () => {
  const data = getLogoContent();
  const logo = data.logo;

  return (
    <section className="w-full p-8 bg-[#FDF7EB]">
      <div className="flex flex-row gap-8 items-center justify-center ">
        {logo.map((item) => (
          <div key={item.heading} className="">
            <Image
              src={item.image}
              alt={item.heading}
              width={100}
              height={100}
              className="mb-2"
            />
            <h2 className={`${inter.className} text-center text-[12px]`}>
              {item.heading}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};
export default LogoSection;
