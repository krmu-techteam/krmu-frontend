import Image from "next/image";
import { DirectorMessageSectionProps } from "@/features/research/cif";

const DirectorMessageSection = ({
  directorMessageSection,
}: {
  directorMessageSection: DirectorMessageSectionProps;
}) => {
  const { title, message, imageUrl, name, role } = directorMessageSection;
  return (
    <div className="max-w-[1530px] mx-auto w-full lg:flex items-center gap-10 px-6 md:px-8 xl:px-16 pt-8 md:pt-12 xl:pt-20">
      <div className="lg:w-[70%] text-white">
        <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-10">
          {title}
        </h2>
        <p className="text-justify font-poppins">{message}</p>
      </div>
      <div className="lg:w-[30%] flex justify-end mt-5 sm:mt-0">
        <div>
          <Image
            src={imageUrl}
            width={431}
            height={537}
            alt="Diwakar"
            className="bg-[#061623] rounded-xs"
          />
          <div className="text-center font-poppins bg-[#0e324e] text-white p-2">
            <span className="font-semibold">{name}</span> | <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessageSection;
