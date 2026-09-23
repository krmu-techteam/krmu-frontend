import { PedagogySection } from "@/lib/types/pedagogy";
import { PedaCard } from "../components";

type Props = {
    lectureData?: PedagogySection | null;
    practicalsData?: PedagogySection | null;
    innovativeData?: PedagogySection | null;
};

const PedaCardsSection = ({
    lectureData,
    practicalsData,
    innovativeData,
}: Props) => {
    return (
        <section className="px-8">
            <div className="max-w-[1440px] mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {lectureData && (
                        <PedaCard
                            title={lectureData.title}
                            content={lectureData.content}
                            imgUrl={lectureData.peda_img?.url}
                        />
                    )}
                    {practicalsData && (
                        <PedaCard
                            title={practicalsData.title}
                            content={practicalsData.content}
                            imgUrl={practicalsData.peda_img?.url}
                        />
                    )}
                    {innovativeData && (
                        <PedaCard
                            title={innovativeData.title}
                            content={innovativeData.content}
                            imgUrl={innovativeData.peda_img?.url}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default PedaCardsSection;
