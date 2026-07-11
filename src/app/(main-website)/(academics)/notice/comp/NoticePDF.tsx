import { NOTICEPDFS } from "@/lib/types/notice";
import Link from "next/link";

type Props = {
  noticePDFS: NOTICEPDFS[];
};

const NoticePDF = ({ noticePDFS }: Props) => {
  return (
    <section className="py-10 lg:py-[120px] bg-[url(/academics/notice/banner-2.webp)] bg-no-repeat bg-cover bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          {noticePDFS &&
            noticePDFS.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="p-5 bg-[url(/academics/card-bg-1.webp)] bg-cover bg-no-repeat bg-center text-white rounded-[40px] flex flex-col items-center justify-center text-center"
                >
                  <p className="mb-5">{item?.content}</p>
                  <Link
                    href={item?.pdf_url || "#"}
                    target="_blank" rel="noopener noreferrer"
                    className="py-[9px] px-5 text-xs bg-[#e31e24] rounded-sm font-semibold"
                  >
                    View File
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default NoticePDF;
