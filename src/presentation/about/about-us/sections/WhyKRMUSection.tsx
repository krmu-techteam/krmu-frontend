import SectionDivider from "@/components/common/SectionDivider";
import { HighlightsGrid } from "../components";

const WhyKRMUSection = () => {
    return (
        <section className="relative py-10 sm:py-10 lg:py-12 xl:py-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16">
                {/* Heading */}
                <div className="text-center text-white mb-6 md:mb-8">
                    <h2 className="heading-primary mb-4">Why KRMU</h2>

                    <p className="text-white/90 font-poppins text-[15px] md:text-md leading-[1.8] max-w-[900px] mx-auto">
                        Discover the exceptional academic environment, vibrant
                        campus life, industry collaborations, and career-focused
                        education at K.R. Mangalam University.
                    </p>
                </div>

                {/* Grid */}
                <HighlightsGrid />
            </div>
            <SectionDivider />
        </section>
    );
};

export default WhyKRMUSection;
