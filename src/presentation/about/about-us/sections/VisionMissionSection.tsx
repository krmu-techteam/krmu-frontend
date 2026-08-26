"use client";

import SectionDivider from "@/components/common/SectionDivider";
import { MissionGrid } from "../components";

const VisionMissionSection = () => {
    return (
        <section className="relative overflow-hidden max-w-[1440px] mx-auto py-10 md:py-12 xl:py-20 px-4 md:px-8 xl:px-16">
            <div className="relative z-10 border-2 border-[#315F84] rounded-[8px] p-2 text-center md:text-left sm:p-10 lg:p-14">
                <h2 className="heading-primary mb-6 mt-3 md:mt-0 2xl:mb-8">
                    Our Vision & Mission
                </h2>
                <p className="text-white/90 font-poppins font-light text-justify lg:text-left text-[15px] sm:text-[16px]  leading-[1.6] mb-6 2xl:mb-8">
                    K.R. Mangalam University aspires to become an
                    internationally recognized institution of higher learning
                    through excellence in inter-disciplinary education,
                    research, and innovation, preparing socially responsible
                    life-long learners contributing to nation building.
                </p>
                <MissionGrid />
            </div>
            <SectionDivider />
        </section>
    );
};

export default VisionMissionSection;
