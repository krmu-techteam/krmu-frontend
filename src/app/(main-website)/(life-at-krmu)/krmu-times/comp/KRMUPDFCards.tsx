import { KRMUTimesCard } from "@/lib/api/krmu-times";
import PDFCard from "./PDFCard";

type Props = {
  data: KRMUTimesCard[];
};

const KRMUPDFCards = ({ data }: Props) => {
  return (
    <div className="max-w-[1910px] mx-auto w-full py-[60px] px-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {data &&
        data?.map((item, i) => {
          return <PDFCard key={i} pdfData={item} />;
        })}
    </div>
  );
};

export default KRMUPDFCards;
