import { CounterItem, StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import { STRAPI_URL } from "../../constant";
import Link from "next/link";

interface OurTopRecruitProps {
  title: string;
  counters: CounterItem[];
  logos: StrapiMedia[];
  title1: string;
  title2: string;
  link1: string;
  link2: string;
}

const OurTopRecruiters: React.FC<OurTopRecruitProps> = ({
  title,
  counters,
  logos,
  title1,
  title2,
  link1,
  link2,
}) => {
  return (
    <section className="bg-[#051630] overflow-hidden">
      <div className="flex lg:gap-5 flex-col lg:flex-row w-full px-5 mt-10 sm:mt-20 mb-10 sm:mb-20 xl:px-0 xl:max-w-7xl 2xl:max-w-[1664px] m-auto items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/3  text-center md:text-left pb-10 2xl:py-10">
          <h4 className="lg:max-w-2xl w-full text-2xl sm:text-4xl lg:text-5xl font-semibold text-white text-center lg:text-left">
            {title}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 text-white mt-10">
            {counters.map((counter) => (
              <div
                key={counter.id}
                className="flex flex-col mr-3 ourtop-rec text-center lg:text-left"
              >
                <span className="text-white text-2xl sm:text-4xl md:text-4xl font-medium  ">
                  {counter.countertext}
                </span>
                <span className="text-lg mb-5 font-light ">
                  {counter.countercontent}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:justify-center lg:justify-start xl:items-center gap-2.5 sm:gap-5 mt-5">
            {link1 || title1 ? (
              <Link
                href={link1}
                className="flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-white text-black border-1 border-transparent hover:bg-white shadow-lg px-6 hover:bg-white "
                target="_blank"
              >
                {title1}
              </Link>
            ) : (
              ""
            )}
            {link2 || title2 ? (
              <Link
                href={link2}
                className="flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6  text-white border border-white  shadow-lg px-6  "
                target="_blank"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                {title2}
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6  lg:grid-cols-3 xl:grid-cols-6 py-10 px-5 w-full  lg:w-2/3 lg:px-5 lg:pt-8 lg:pb-2.5 rounded-3xl bg-[#0060aa]">
          {logos.map((logo, index) => (
            <div
              key={logo.id || index}
              className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center"
            >
              {logo.url && (
                <Image
                  src={`${STRAPI_URL}${logo.url}`}
                  width={100} // Fallback width
                  height={50} // Fallback height
                  alt={logo.alternativeText || "Company Logo"}
                />
              )}
            </div>
          ))}

          {/* <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/apple.webp"
                width={154}
                height={67}
                alt="Apple Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/amazon.webp"
                width={130}
                height={39}
                alt="Amazon Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image src="/ibm.webp" width={142} height={47} alt="IBM Logo" />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/cisco.webp"
                width={124}
                height={66}
                alt="Cisco Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image src="/meta.webp" width={147} height={83} alt="Meta Logo" />
            </div>

            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/microsoft.webp"
                width={171}
                height={36}
                alt="Microsoft Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/linked.webp"
                width={124}
                height={33}
                alt="Apple Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image src="/ey.webp" width={68} height={78} alt="EY Logo" />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/jp-morgan.webp"
                width={140}
                height={30}
                alt="JP Morgan Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/media.webp"
                width={87}
                height={74}
                alt="Media Logo"
              />
            </div>

            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image src="/tata.webp" width={166} height={20} alt="Tata Logo" />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/accenture.webp"
                width={158}
                height={41}
                alt="Accenture Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/flipkart.webp"
                width={142}
                height={38}
                alt="Flipkart Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image src="/itc.webp" width={71} height={73} alt="ITC Logo" />
            </div>

            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image src="/axis.webp" width={177} height={46} alt="Axis Logo" />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center">
              <Image
                src="/infosys.webp"
                width={142}
                height={52}
                alt="Infosys Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl sm:mb-5 flex items-center justify-center">
              <Image
                src="/public-issapient.webp"
                width={114}
                height={62}
                alt="Publicis sapient Logo"
              />
            </div>
            <div className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl  sm:mb-5 flex items-center justify-center">
              <Image
                src="/google.webp"
                width={134}
                height={44}
                alt="Google Logo"
              />
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurTopRecruiters;
