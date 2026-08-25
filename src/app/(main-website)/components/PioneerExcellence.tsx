import TimelineCarousel from "./Carousels/TimelineCarousel";

const PioneerExcellence = () => {
    return (
        <>
            <section className="pt-8 sm:pt-10 lg:pt-12 xl:pt-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto w-full lg:mb-16 mb-8 px-6 md:px-8 xl:px-16">
                    <h3 className="heading-primary mb-6">
                        K.R. Mangalam Group: Pioneering Excellence in Education
                    </h3>
                    <p className="text-[14px] sm:text-[16px] leading-relaxed text-white/80 mb-6 font-poppins">
                        The K.R. Mangalam legacy, encompassing a distinguished
                        group of educational institutions including schools and
                        the university is a testament to our enduring commitment
                        to academic excellence and innovation. Our journey began
                        with the establishment of our first school, marking the
                        genesis of a vision to redefine educational standards.
                        Since then, each institution under the K.R. Mangalam
                        umbrella has been a milestone in our quest for
                        educational excellence.
                    </p>
                    <p className="text-[14px] sm:text-[16px] leading-relaxed text-white/80 font-poppins">
                        Throughout our history, the K.R. Mangalam Group has been
                        at the forefront of educational innovation, constantly
                        evolving to meet the needs of a changing world. Our
                        institutions are more than just places of learning; they
                        are cradles of intellectual and personal growth, where
                        students are encouraged to explore, innovate, and excel.
                    </p>
                </div>
                <div className="max-w-[1440px] mx-auto w-full px-6 md:px-8 xl:px-16 overflow-hidden">
                    <TimelineCarousel />
                </div>
            </section>
        </>
    );
};

export default PioneerExcellence;
