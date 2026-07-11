import { DownloadButton } from "@/lib/types/examination";
import Link from "next/link";

type Props = {
  title: string;
  btn: DownloadButton;
};

export const ExaminationDownloadCard = ({ title, btn }: Props) => {
  return (
    <div>
      <div
        className=" p-5 md:py-[30px]"
        style={{
          background: `linear-gradient(#051630,#014d8b)`,
        }}
      >
        <div
          className="text-xs sm:text-[22px] text-center font-semibold leading-[1.2] text-white"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </div>
      {btn?.btn_link && (
        <Link
          href={btn?.btn_link}
          className={`inline-block w-full text-center p-[5px] md:py-[13px] md:px-[29px] bg-[#e31e24] rounded-b-[22px] text-base md:text-2xl text-white font-semibold ${
            btn?.btn_class || ""
          }`}
          target="_blank" rel="noopener noreferrer"
        >
          {btn?.btn_text}
        </Link>
      )}
    </div>
  );
};
