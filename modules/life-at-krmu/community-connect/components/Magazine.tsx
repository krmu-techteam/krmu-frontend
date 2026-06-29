import Image from "next/image";
import { Magazine as MagazineProps } from "../types";
import Link from "next/link";

const Magazine = ({ magazine }: { magazine: MagazineProps }) => {
  return (
    <div className="lg:w-1/2 text-white">
      <div className="text-center flex justify-center flex-col items-center">
        <h3 className="text-4xl font-semibold mt-2.5 mb-3.5">
          {magazine?.heading}
        </h3>
        <div className="flex flex-col sm:flex-row gap-5  mb-[30px]">
          {magazine?.documents?.map((doc, idx) => {
            return (
              <Link
                key={idx}
                href={doc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="common-btn-4"
              >
                {doc.year}
              </Link>
            );
          })}
        </div>
        <Image
          src={magazine?.imageUrl}
          width={851}
          height={567}
          alt=""
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
export default Magazine;
