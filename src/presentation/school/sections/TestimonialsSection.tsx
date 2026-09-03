import { TestimonialCard } from "@/presentation/school/components";
import { Carousel } from "@/components/common/Carousel";
import SectionDivider from "@/components/common/SectionDivider";
import { TestimonialSectionProps } from "@/features/school";

const TestimonialsSection = ({
    title,
    desc,
    testis,
}: TestimonialSectionProps) => {
    return (
        <section
            id="testimonials"
            className="py-12 xl:py-20 font-poppins relative overflow-hidden bg-transparent scroll-mt-28"
        >
            <div className="max-w-[1440px] mx-auto w-full relative z-10 px-4 md:px-8 lg:px-12">
                <div className="mb-10 max-w-5xl">
                    <h2 className="heading-primary mb-4">{title}</h2>
                    <p className="text-white/90 text-justify text-[15px] lg:text-[16px]">
                        {desc}
                    </p>
                </div>

                <div className="relative">
                    <Carousel
                        options={{ align: "start", loop: true }}
                        showArrows={true}
                        showDots={true}
                        autoplayDelay={3000}
                        prevArrowClassName="!bg-[#e32831] !border-none !text-white !rounded-[3px] hover:!bg-red-700 !w-10 !h-10 !-left-2 md:!-left-13 opacity-100"
                        nextArrowClassName="!bg-[#e32831] !border-none !text-white !rounded-[3px] hover:!bg-red-700 !w-10 !h-10 !-right-2 md:!-right-13 opacity-100"
                        activeDotClassName="bg-[#e32831] w-2 h-2"
                        dotClassName="bg-white/40 w-2 h-2"
                        containerClassName="-ml-6"
                        slideClassName="pl-6 basis-full md:basis-1/2"
                    >
                        {testis &&
                            testis.map((testimonial) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    name={testimonial?.name}
                                    edu={testimonial?.education}
                                    desc={testimonial?.info}
                                    img={testimonial?.userimg}
                                />
                            ))}
                    </Carousel>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default TestimonialsSection;
