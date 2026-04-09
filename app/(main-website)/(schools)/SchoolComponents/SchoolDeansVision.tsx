import { STRAPI_URL } from "@/app/constant";
import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  deanName: string;
  deanEmail: string;
  desg: string;
  desc: ParagraphBlock[];
  deanImgUrl: string;
};

const SchoolDeansVision = ({
  title,
  subtitle,
  deanName,
  deanEmail,
  desg,
  desc,
  deanImgUrl,
}: Props) => {
  return (
    <section
      className="py-[50px] px-4"
      style={{
        background:
          "linear-gradient(95deg,#051630 2.69%,#0060aa 65.94%,#e31e24 97.54%)",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center text-white text-3xl sm:text-5xl mb-5  lg:text-[64px]">
          <h4 className="leading-[1]">{title}</h4>
          <h5 className="leading-[1.2] font-bold">{subtitle}</h5>
        </div>
        <div
          className="rounded-4xl flex flex-col xl:flex-row"
          style={{
            background:
              "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
            backdropFilter: "blur(13.410955429077px)",
          }}
        >
          <div className="xl:w-2/6 p-5 sm:p-10 xl:p-[50px] flex justify-center xl:block">
            <Image
              src={`${STRAPI_URL}${deanImgUrl}`}
              width={358}
              height={465}
              alt={deanName}
              className="rounded-[25px] object-cover shadow-xl"
            />
          </div>
          <div className="xl:w-4/6 p-5 sm:px-10 sm:pb-10 xl:p-[50px] text-white dean_heading_h3 flex flex-col items-center xl:items-start text-center xl:text-left">
            {/* Mobile View: Name and Designation directly below image */}
            <div className="xl:hidden mb-6">
              <p className="text-2xl md:text-[32px] font-bold mb-1">
                {deanName}
              </p>
              <p className="text-sm sm:text-base mb-3 opacity-90 font-medium">
                {desg}
              </p>
              <Link
                href={`mailto:${deanEmail}`}
                className="text-base flex items-center justify-center gap-2 hover:underline opacity-80"
              >
                <Mail size={16} /> <span>{deanEmail}</span>
              </Link>
            </div>

            <div className="text-sm sm:text-base leading-relaxed mb-6 xl:mb-0">
              {desc && <BlocksRenderer content={desc} />}
            </div>

            {/* Desktop View: Name and Designation at the bottom */}
            <div className="hidden xl:block mt-6">
              <p className="text-2xl md:text-[32px] mb-2 font-bold">
                {deanName}
              </p>
              <Link
                href={`mailto:${deanEmail}`}
                className="text-base flex items-center gap-2 hover:underline opacity-80 mb-3"
              >
                <Mail size={16} /> <span>{deanEmail}</span>
              </Link>
              <p className="text-sm sm:text-base opacity-90">{desg}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolDeansVision;
