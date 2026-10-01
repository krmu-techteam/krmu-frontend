import { ImportantDownloadCard } from "@/lib/types/examination";
import { ExaminationDownloadCard } from "./ExaminationDownloadCard";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
    heading: string;
    downloadCards: ImportantDownloadCard[];
};

const ExaminationDownload = ({ heading, downloadCards }: Props) => {
    return (
        <section className="relative py-10 xl:py-20 md:py-16 px-4 bg-transparent">
            <div className="max-w-[1440px] mx-auto w-full">
                <h2 className="text-2xl font-serif md:text-[38px] font-bold text-white tracking-tight mb-8">
                    {heading}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {downloadCards &&
                        downloadCards.map((card, index) => (
                            <ExaminationDownloadCard
                                key={card?.id || index}
                                title={card?.title}
                                btn={card?.download_btn}
                                index={index}
                            />
                        ))}
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default ExaminationDownload;
