import { STRAPI_URL } from "@/app/constant";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DeanSectionProps } from "@/modules/school";

const DeanSection = ({
  title,
  subtitle,
  deanName,
  deanEmail,
  desg,
  desc,
  deanImgUrl,
}: DeanSectionProps) => {
  return (
    <section className="pt-12 xl:pt-20 px-6 md:px-8 lg:px-11 2xl:px-16 bg-transparent font-poppins relative overflow-hidden">
      <div className="max-w-[1530px] mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-10 2xl:gap-12">
          
          {/* Left Column: Image and Details */}
          <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
            <div className="bg-white w-full rounded-sm overflow-hidden mb-6 flex justify-center items-center shadow-xl">
              <Image
                src={`${STRAPI_URL}${deanImgUrl}`}
                width={358}
                height={465}
                alt={deanName}
                className="w-full h-auto object-contain -scale-x-100"
              />
            </div>
            <div className="text-white w-full">
              <h4 className="text-2xl font-bold mb-1 font-serif">
                {deanName}
              </h4>
              <p className="text-sm text-gray-300 mb-1 hover:text-white transition-colors">
                <Link href={`mailto:${deanEmail}`}>{deanEmail}</Link>
              </p>
              <p className="text-sm text-gray-400 font-medium">
                {desg}
              </p>
            </div>
          </div>

          {/* Right Column: Title and Content */}
          <div className="w-full lg:w-[70%] text-white flex flex-col">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-8 text-center lg:text-left">
              <span className="font-normal">{title}</span> {subtitle}
            </h3>
            
            <div className="text-md  text-gray-300 text-justify md:text-left leading-relaxed space-y-2">
              {desc && <BlocksRenderer content={desc} />}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeanSection;
