import SectionDivider from "@/components/common/SectionDivider";

const KEICVisionMission = () => {
    return (
        <section className="relative py-12 md:py-16 xl:py-20 px-4">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row lg:gap-10">
                <div className="lg:w-1/2 bg-[#061623] p-5 text-white mb-2.5">
                    <h3 className="heading-primary mb-3">Vision</h3>
                    <p className="mb-5 leading-[1.5]">
                        To be a catalyst for entrepreneurial excellence by
                        empowering students to create innovative solutions that
                        address societal, IT challenges and sustainability.
                    </p>
                </div>
                <div className="lg:w-1/2 bg-[#061623] p-5 text-white mb-2.5">
                    <h3 className="heading-primary mb-3">Mission</h3>
                    <p className="mb-5 leading-[1.5]">
                        Foster a thriving entrepreneurial ecosystem that
                        inspires creativity, provides resources and mentorship,
                        and supports students in launching successful businesses
                        and social enterprises.
                    </p>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default KEICVisionMission;
