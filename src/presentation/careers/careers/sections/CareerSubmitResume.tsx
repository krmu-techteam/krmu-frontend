import { Openings } from "@/lib/api/careers/career";
import Image from "next/image";

type Props = {
    openings: Openings;
};

const CareerSubmitResume = ({ openings }: Props) => {
    return (
        <section className="bg-[#eeeeee] pt-12">
            <div className="max-w-[1440px] px-4 md:px-8 xl:px-12 mx-auto w-full md:bg-auto bg-cover flex flex-col md:flex-row items-center gap-4 md:gap-16 md:h-[410px]">
                <div className="md:w-1/2 text-white h-full">
                    <h3 className="text-3xl md:text-5xl font-fraunces text-[#17433F] font-semibold mt-2.5 mb-[15px]">
                        Didn’t see any <br />
                        openings?
                    </h3>
                    <p className="text-black">
                        No problem, if you think you would be a great fit for
                        KRMU,
                    </p>
                    <p className="text-black">
                        we would still like your resume.
                    </p>
                </div>
                <div className="md:w-1/2 h-full relative">
                    <div className="md:absolute bottom-0 right-0">
                        <Image
                            src="/careers/career.webp"
                            width={488}
                            height={562}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerSubmitResume;
