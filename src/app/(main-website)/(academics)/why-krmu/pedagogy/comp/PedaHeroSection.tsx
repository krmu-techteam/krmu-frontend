import { STRAPI_URL } from "@/app/constant";

type Props = {
    title: string;
    title2: string;
    desc: string;
    bgImg: string;
    content: string;
};

const PedaHeroSection = ({ title, title2, desc, content, bgImg }: Props) => {
    return (
        <section className="pt-32 bg-linear-to-br  from-[#17433F] via-[#17433F]/60 via-50% to-[#061623]/60 md:pt-[9%] pb-8">
            <div className="max-w-[1440px] mx-auto w-full lg:flex items-center  gap-[3.84%] px-4 md:px-8 xl:px-12">
                <div className="w-full  text-white">
                    <h1 className="text-4xl  font-fraunces mb-5 sm:text-[64px] font-semibold">
                        {title}
                    </h1>
                    <p className="text-white font-poppins text-lg leading-[1.7] mb-5 ">
                        {desc}
                    </p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                        className="font-poppins text-lg leading-[1.7] mb-5 "
                    />
                    <h3 className="text-[28px] font-fraunces text-white my-5 leading-[1.2] sm:leading-[1.7] font-medium">
                        {title2}
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default PedaHeroSection;
