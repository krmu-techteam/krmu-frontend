import { StrapiMedia } from "@/lib/types/common";
import { AccreditationCarousel } from "../components";

const AccreditationSection = ({
    title,
    accrediationlogos,
}: {
    title: string;
    accrediationlogos: StrapiMedia[];
}) => {
    return (
        <section className="relative py-10 md:py-12 lg:py-20">
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-16">
                <div className="flex justify-center pb-6 md:mb-4">
                    <h2 className="heading-primary">{title}</h2>
                </div>
                <div className="w-full">
                    <AccreditationCarousel logosData={accrediationlogos} />
                </div>
            </div>
        </section>
    );
};
export default AccreditationSection;
