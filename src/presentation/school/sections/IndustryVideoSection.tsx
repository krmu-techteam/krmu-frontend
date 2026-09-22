import SectionDivider from "@/components/common/SectionDivider";
import { VIDEOIFRAME } from "@/lib/types/schools";

type Props = {
    heading: string;
    videoCards: VIDEOIFRAME[];
};

const VideoCardItem = ({ iframe }: { iframe: string }) => {
    if (!iframe) return null;

    return (
        <div className="relative w-full aspect-video rounded-[4px] overflow-hidden bg-black/40 border border-white/10 transition-colors duration-300 hover:border-white/25">
            <div
                className="w-full h-full [&_iframe]:w-full [&_iframe]:!h-full [&_iframe]:aspect-video [&_iframe]:border-0 [&_iframe]:block"
                dangerouslySetInnerHTML={{
                    __html: iframe,
                }}
            />
        </div>
    );
};

const IndustryVideoSection = ({ heading, videoCards }: Props) => {
    if (!heading && (!videoCards || videoCards.length === 0)) return null;

    const cleanHeading = heading?.trim() || "";
    const validCards = (videoCards || []).filter((card) =>
        Boolean(card?.videoiframefield)
    );

    if (validCards.length === 0) return null;

    return (
        <section
            id="industry-videos"
            className="relative w-full py-10 md:py-14 xl:py-20 font-poppins overflow-hidden scroll-mt-28"
        >
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                {cleanHeading && (
                    <h2 className="heading-primary text-center mb-6 md:mb-10">
                        {cleanHeading}
                    </h2>
                )}

                {validCards.length === 5 ? (
                    <div className="space-y-5 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                            {validCards.slice(0, 3).map((item) => (
                                <VideoCardItem
                                    key={item.id}
                                    iframe={item.videoiframefield}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-6">
                            {validCards.slice(3, 5).map((item) => (
                                <div
                                    key={item.id}
                                    className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
                                >
                                    <VideoCardItem
                                        iframe={item.videoiframefield}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {validCards.map((item) => (
                            <VideoCardItem
                                key={item.id}
                                iframe={item.videoiframefield}
                            />
                        ))}
                    </div>
                )}
            </div>
            <SectionDivider />
        </section>
    );
};

export default IndustryVideoSection;
