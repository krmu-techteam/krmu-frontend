type Props = {
    heading: string;
};

const KRMUTimesHeroSection = ({ heading }: Props) => {
    return (
        <section className="pt-40 pb-20  md:pt-[12%] bg-[url(/life-at-krmu/bg-banner-1.webp)]">
            <div className="max-w-[1440px] mx-auto w-full  px-6">
                <h1 className="text-3xl font-serif lg:text-6xl xl:text-[108px] text-white font-extrabold">
                    {heading}
                </h1>
            </div>
        </section>
    );
};

export default KRMUTimesHeroSection;
