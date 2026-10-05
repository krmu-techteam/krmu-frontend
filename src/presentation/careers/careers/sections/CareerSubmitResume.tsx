import { Openings } from "@/lib/api/careers/career";
import Image from "next/image";

type Props = {
    openings: Openings;
};

const CareerSubmitResume = ({ openings }: Props) => {
    return (
        <section className="bg-[#061623] pt-12">
            <div className="max-w-[1440px] px-4 md:px-8 xl:px-12 mx-auto w-full md:bg-auto bg-cover flex flex-col md:flex-row items-center gap-4 md:gap-16 md:h-[410px]">
                <div className="md:w-1/2 text-white h-full">
                    <h3 className="text-3xl md:text-5xl font-serif text-white font-bold mt-2.5 mb-[15px]">
                        Didn’t see any <br />
                        openings?
                    </h3>
                    <p className="text-white/90">
                        No problem, if you think you would be a great fit for
                        KRMU,
                    </p>
                    <p className="text-white/90">
                        we would still like your resume.
                    </p>
                    <div className="mt-6">
                        <a
                            href="mailto:careers@krmangalam.edu.in?subject=Proactive Resume Submission - KRMU Careers"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E31B23] hover:bg-[#c6151d] text-white font-medium text-sm transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                        >
                            Email CV to careers@krmangalam.edu.in
                        </a>
                    </div>
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
