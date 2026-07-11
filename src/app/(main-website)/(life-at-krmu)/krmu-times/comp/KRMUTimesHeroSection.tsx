type Props = {
  heading: string;
};

const KRMUTimesHeroSection = ({ heading }: Props) => {
  return (
    <section className="pt-40 pb-20 px-4 md:py-[20%] bg-[url(/life-at-krmu/bg-banner-1.webp)]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h1 className="text-3xl lg:text-6xl xl:text-[108px] text-white font-extrabold">
          {heading}
        </h1>
      </div>
    </section>
  );
};

export default KRMUTimesHeroSection;
