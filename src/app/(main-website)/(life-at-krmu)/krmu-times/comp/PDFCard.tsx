import { STRAPI_URL } from "@/app/constant";
import { KRMUTimesCard } from "@/lib/api/krmu-times";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    pdfData: KRMUTimesCard;
};

const PDFCard = ({ pdfData }: Props) => {
    return (
        <div className="p-[2px] rounded-[1px] border border-gray-500">
            <Image
                src={`${STRAPI_URL}${pdfData?.img?.url}`}
                width={392}
                height={450}
                alt=""
                className="w-full h-[400px] object-cover"
            />
            <div className="flex justify-center mt-[2px]">
                <Link
                    href={pdfData?.pdf_url || "#"}
                    className="flex items-center font-poppins justify-center gap-3 py-2  bg-[#034272]   w-full font-medium hover:bg-[#034272]/80  text-white
         duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Download PDF</span>
                    <span>Download PDF</span>
                </Link>
            </div>
        </div>
    );
};

export default PDFCard;
