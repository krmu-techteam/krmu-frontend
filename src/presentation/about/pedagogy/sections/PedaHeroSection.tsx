type Props = {
    title: string;
    title2: string;
    desc: string;
    bgImg?: string;
    content: string;
};

const PedaHeroSection = ({ title, title2, desc, content }: Props) => {
    return (
        <section className="pt-32 xl:pt-[156px] px-8">
            <div className="max-w-[1440px] bg-linear-to-br from-[#17433F] via-[#17433F]/60 via-50% to-[#061623]/60 mx-auto w-full rounded-[4px] py-10 md:py-12 px-6 md:px-10 xl:px-12 flex flex-col items-center justify-center text-center">
                <div className="w-full  text-white flex flex-col items-center text-center">
                    <h1 className="text-4xl font-serif mb-6 sm:text-[64px] font-bold text-center">
                        {title}
                    </h1>
                    <p className="text-white font-poppins text-[18px] leading-[1.7] mb-5 text-center">
                        {desc}
                    </p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                        className="font-poppins text-lg leading-[1.7]  text-center"
                    />
                    <h3 className="text-[28px] font-fraunces text-white mt-5 leading-[1.2] sm:leading-[1.7] font-medium text-center">
                        {title2}
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default PedaHeroSection;
