import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const ResearchAndInnovationSection = () => {
    return (
        <section
            id="Research-and-Innovation"
            className="relative h-full lg:h-[800px]  py-16 md:py-20 lg:py-12 px-4 lg:px-10 xl:px-16 2xl:px-0 z-10 overflow-hidden scroll-mt-28"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
                    style={{
                        backgroundImage: `url('https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_634_93830de676.jpg')`,
                    }}
                />
                {/* Dark Blue-Black Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(169.86deg,#001732_18.16%,#00469800_68.05%,#FFFFFF_100%)] opacity-[0.9]" />
            </div>

            <div className="relative z-10 max-w-[1319px] h-full mx-auto flex flex-col justify-between items-center">
                <div>
                    {/* Title */}
                    <h2
                        className={`${poppins.className} font-heading text-center text-3xl md:text-[40px] lg:text-[35px] font-bold leading-tight text-white mb-4`}
                    >
                        Research and Innovation Ecosystem
                    </h2>

                    {/* Subtitle / Description */}
                    <p
                        className={`${poppins.className} text-center text-sm md:text-base lg:text-[16px] text-white max-w-[792px] mx-auto mb-25 lg:mb-16`}
                    >
                        Students interested in research, innovation, and higher
                        studies benefit from K.R. Mangalam University's active
                        research ecosystem. Through specialised laboratories,
                        faculty-led projects, and innovation initiatives,
                        students gain opportunities to participate in advanced
                        technology research and interdisciplinary
                        problem-solving.
                    </p>
                </div>

                {/* Stats Container */}
                <div className=" relative  flex flex-col lg:flex-row  justify-center items-center w-full rounded-[10px] bg-[linear-gradient(55deg,#DE0000_-1.50%,#001732_4.57%)]  p-6 md:p-8 lg:py-4 lg:px-4 gap-6 lg:gap-0 overflow-hidden shadow-2xl">
                    {/* Subtle Red/Coral Glow in bottom left corner */}
                    {/* <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#b81d24] rounded-full blur-[80px] opacity-70 pointer-events-none" /> */}

                    {/* Col 1 */}
                    <div className="relative font-poppins  flex flex-col items-center justify-center text-center px-4 lg:px-6 xl:px-12 2xl:px-12  py-4 w-full lg:w-auto ">
                        <div className="absolute right-0 top-[10%] h-[80%] vertical-line lg:block" />

                        <span className="block  font-semibold text-[18px]  text-white">
                            4,000+
                        </span>
                        <span className="block  text-[18px] text-white font-normal leading-relaxed">
                            research
                            <br />
                            publications.
                        </span>
                    </div>

                    {/* Col 2 */}
                    <div className="relative font-poppins  flex flex-col items-center justify-center text-center px-4 lg:px-6 xl:px-14  py-4 w-full lg:w-auto ">
                        <div className="absolute right-0 top-[10%] h-[80%] vertical-line lg:block" />
                        <span className="block font-heading font-semibold text-[18px] text-white">
                            250+{" "}
                            <span className="font-normal text-[18px]">
                                patents
                            </span>
                        </span>
                        <span className="block  text-[18px] text-white font-normal leading-relaxed">
                            granted and
                            <br />
                            published.
                        </span>
                    </div>

                    {/* Col 3 */}
                    <div className="relative font-poppins  flex flex-col items-center justify-center text-center px-4 lg:px-6 xl:px-12 2xl:px-16 py-4 w-full lg:w-auto ">
                        <div className="absolute right-0 top-[10%] h-[80%] vertical-line lg:block" />
                        <span className="block font-heading font-semibold text-[18px] text-white">
                            Dedicated Centre
                        </span>
                        <span className="block text-[18px] text-white font-normal leading-relaxed">
                            of Excellence in AI & ML with
                            <br />
                            specialised labs.
                        </span>
                    </div>

                    {/* Col 4 */}
                    <div className="relative font-poppins  flex flex-col items-center justify-center text-center px-4 lg:px-6 xl:px-10 2xl:px-16 py-4 w-full lg:w-auto ">
                        <div className="absolute  vertical-line block" />
                        <span className="font-heading font-semibold text-[18px] text-white">
                            600+ journal articles
                        </span>
                        <span className="block text-[18px] text-white font-normal leading-relaxed">
                            indexed in Scopus and
                            <br />
                            Web of Science
                        </span>
                    </div>

                    {/* Col 5 */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-6 lg:pt-0 pb-0 w-full lg:w-auto">
                        <span className="font-poppins block font-heading font-semibold text-[18px] text-white">
                            ₹16 Cr+ in research
                        </span>
                        <span className="block text-[18px] text-white font-normal ">
                            and consultancy
                            <br />
                            grants
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchAndInnovationSection;
