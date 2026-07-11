import Image from "next/image";
import { ProspectusDownloadContent } from "../admission/PGType";
import ScrollButton from "../admission/CommonComponent2026/ScrollButton";

type Props = {
  data: ProspectusDownloadContent;
};

export default function ProspectusDownload({ data }: Props) {
  return (
    <section className="w-full bg-gradient-to-r from-[#071A33] via-[#06172C] to-[#071A33]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-white text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
            {data?.title.split(" ").slice(0, 3).join(" ")} <br />
            {data?.title.split(" ").slice(3).join(" ")}
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            {data?.description}
          </p>

          {/* <button className="mx-auto lg:mx-0 flex items-center gap-4 border-2 border-blue-500 rounded-full px-6 sm:px-7 py-3 text-white font-medium hover:bg-blue-600 transition">
            {data?.button.label}
            <span className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-blue-600 text-white">
              ↗
            </span>
          </button> */}
          <ScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="mx-auto lg:mx-0 flex items-center gap-4 border-2 border-blue-500 rounded-full px-6 sm:px-7 py-3 text-white font-medium hover:bg-blue-600 transition"
          >
            {data?.button.label}
            <span className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-blue-600 text-white">
              ↗
            </span>
          </ScrollButton>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full lg:w-[45%] flex justify-center">
          <Image
            src={data?.image.src}
            alt={data?.image.alt || ""}
            width={500}
            height={500}
            className="max-w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
