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
      className="py-[50px] px-4 bg-[#051630]"
      // style={{
      //   background:
      //     "linear-gradient(95deg,#051630 2.69%,#0060aa 65.94%,#e31e24 97.54%)",
      // }}
    >
      <div className="max-w-[1664px] mx-auto w-full testing">
        <div className="text-center text-white text-3xl sm:text-5xl mb-5  lg:text-[64px]">
          <h4 className="leading-[1]">{title}</h4>
          <h5 className="leading-[1.2] font-bold">{subtitle}</h5>
        </div>
        <div
          className="rounded-4xl flex flex-col xl:flex-row gap-10 p-10"
          style={{
            background:
              "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
            backdropFilter: "blur(13.410955429077px)",
          }}
        >
          <div className="xl:w-1/3 flex justify-center xl:block">
            <Image
              src={`${STRAPI_URL}${deanImgUrl}`}
              width={358}
              height={465}
              alt="Pankaj Aggarwal"
              className="rounded-[25px]"
            />
          </div>
          <div className="xl:w-2/3  text-sm sm:text-base text-white dean_heading_h3">
            {desc && <BlocksRenderer content={desc} />}
            <br />
            <p className="text-2xl md:text-[32px] mb-2.5 sm:mb-3.5">
              <strong>{deanName}</strong>
            </p>
            <Link
              href={`mailto:${deanEmail}`}
              className="text-base flex items-center gap-1"
            >
              <Mail size={16} /> <span>{deanEmail}</span>
            </Link>

            <p className="text-sm sm:text-base mt-2.5">{desg}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolDeansVision;
