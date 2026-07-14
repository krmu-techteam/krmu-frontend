import Link from "next/link";
import { BookRenewalProps } from "@/features/life-at-krmu/library";

export const BookRenewalCard = ({
  title,
  description,
  linkInfo,
  idx,
}: BookRenewalProps & { idx: number }) => {
  return (
    <div
      key={idx}
      className="p-5 bg-[#051630] text-white w-full lg:w-1/2 rounded-[10px]"
    >
      <h4 className="my-2.5">{title}</h4>
      <p className="mb-5">{description}</p>
      {linkInfo?.url && (
        <Link
          href={linkInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="py-[11px] px-[23px] text-sm rounded-[4px] text-white bg-[#cb000d] hover:text-[#051630] hover:cursor-pointer"
        >
          {linkInfo.text || "Click Here"}
        </Link>
      )}
    </div>
  );
};
