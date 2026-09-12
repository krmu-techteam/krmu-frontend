import Image from "next/image";
import { InterviewSuccessStory } from "../constant";

interface InterviewSuccessStoryCardProps {
  story: InterviewSuccessStory;
}

const InterviewSuccessStoryCard = ({
  story,
}: InterviewSuccessStoryCardProps) => {
  const {
    image,
    imageAlt = "",
    course,
    name,
    school,
    package: packageValue,
    companyLogo,
    companyName = "",
  } = story;

  return (
    <div className="border border-[#ccc] bg-white p-5 h-full">
      <div>
        <Image
          src={image}
          alt={imageAlt || name}
          width={290}
          height={290}
          className="w-full aspect-square object-cover"
        />

        <div className="py-5 border-b border-[#ccc]">
          <h5 className="text-sm text-[#7A1F2B] uppercase tracking-[0.4em]">
            {course}
          </h5>

          <h4 className="text-[26px] font-semibold font-newsreader">{name}</h4>

          <h6 className="text-xs">{school}</h6>
        </div>

        <div className="flex justify-between gap-5 mt-5">
          <div className="flex flex-col">
            <span className="text-[#7A1F2B] tracking-[0.2em] text-xs uppercase">
              Package
            </span>

            <span className="text-xl text-[#001732] font-semibold">
              {packageValue}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[#7A1F2B] tracking-[0.2em] text-xs uppercase">
              Selected By
            </span>

            <Image
              src={companyLogo}
              alt={companyName || "Company"}
              width={150}
              height={44}
              className="h-11 w-auto object-contain object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSuccessStoryCard;
