import { ImportantDownloadCard } from "@/lib/types/examination";
import { ExaminationDownloadCard } from "./ExaminationDownloadCard";

type Props = {
  heading: string;
  downloadCards: ImportantDownloadCard[];
};

const ExaminationDownload = ({ heading, downloadCards }: Props) => {
  return (
    <section className="py-[30px] px-4">
      <div className="max-w-[1600px] mx-auto w-full">
        <h2 className="sm:leading-[2] text-2xl md:text-4xl font-bold mt-2.5 mb-5 md:mb-[35px] text-center md:text-left">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">
          {downloadCards &&
            downloadCards?.map((card) => {
              return <ExaminationDownloadCard key={card?.id} title={card?.title} btn={card?.download_btn} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ExaminationDownload;
