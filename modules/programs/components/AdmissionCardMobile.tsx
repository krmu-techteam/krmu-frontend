import Link from "next/link";
import { AdmisionProcessCard } from "../types";

interface Props {
  card: AdmisionProcessCard;
}

const AdmissionCardMobile = ({ card }: Props) => {
  const isLink =
    card?.link === "admissions.krmangalam.edu.in" ||
    card?.description === "admissions.krmangalam.edu.in ";

  if (isLink) {
    return (
      <div
        className="w-full text-center px-2 py-3 md:px-4 md:py-6 rounded-md border border-gray-200 bg-white flex flex-col items-center justify-center min-h-[100px]"
      >
        <h4 className="text-lg lg:text-xl font-semibold text-[#0a41a1] mb-2">
          {card?.title}
        </h4>
        <p className="leading-tight text-base text-gray-700 break-all font-medium">
          <Link
            href={`https://${card?.description?.trim()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline transition-all"
          >
            {card?.description}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div
      className="w-full text-center px-2 py-3 md:px-4 md:py-6 rounded-md border border-gray-200 bg-white flex flex-col items-center justify-center min-h-[100px]"
    >
      <h4 className="text-lg lg:text-xl font-semibold text-[#0a41a1] mb-2">
        {card?.title}
      </h4>
      <p className="leading-relaxed text-sm lg:text-md text-gray-700 break-words font-medium">
        <span>{card?.description}</span>
      </p>
    </div>
  );
};

export default AdmissionCardMobile;
