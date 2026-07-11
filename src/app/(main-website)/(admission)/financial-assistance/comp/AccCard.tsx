import { STRAPI_URL } from "@/app/constant";
import { FinancialImg } from "@/lib/types/financialAssistance";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  content: string;
  downloadUrl: string;
  quickApplyUrl: string;
  bankImgs: FinancialImg[];
};

const AccCard = ({
  name,
  content,
  downloadUrl,
  quickApplyUrl,
  bankImgs,
}: Props) => {
  return (
    <>
      <div className="p-5 border border-[#e2e2e2] rounded-[10px] text-base min-h-72 h-full">
        {bankImgs &&
          bankImgs?.map((img, i) => {
            return (
              <Image
                key={i}
                src={`${STRAPI_URL}${img?.url}`}
                width={150}
                height={50}
                alt="Bank Img"
              />
            );
          })}

        <div className="flex flex-wrap gap-2.5 my-2.5">
          <div className="underline font-bold">
            <span>{name}</span>
          </div>
          <div className="">
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
              className="bankinfocontent"
            />
            {/* <Link href="mailto:Yogesh.yadav1@icicibank.com">
              Yogesh.yadav1@icicibank.com
            </Link> */}
          </div>
          {/* <div className="text-blue-700 w-full">
            <Link href="tel:+919694136484">+91-9694136484</Link>
          </div> */}
          <div className="flex gap-2.5 flex-wrap">
            {downloadUrl && (
              <Link
                href={downloadUrl || "#"}
                className="bg-[#288feb] py-1.5 px-2.5 flex text-white items-center gap-1 text-base"
                target="_blank" rel="noopener noreferrer"
              >
                <Image
                  src="/white-pdf.png"
                  width={20}
                  height={16}
                  alt="PDF Icon"
                />{" "}
                <span> Download</span>
              </Link>
            )}
            {quickApplyUrl && (
              <Link
                href={quickApplyUrl || "#"}
                className="bg-[#288feb] py-1.5 px-2.5 flex text-white items-center gap-1 text-base"
                target="_blank" rel="noopener noreferrer"
              >
                Quick Apply
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccCard;
