import SectionDivider from "@/components/common/SectionDivider";

type Props = {
    title: string;
    content: string;
};

const PedaWorkshopSeminar = ({ title, content }: Props) => {
    return (
        <section className="relative px-8 pt-12 pb-16">
            <div className="max-w-[1440px] mx-auto w-full">
                <div className="bg-[#061623] rounded-[4px] p-[30px]">
                    <div className="w-fit mx-auto lg:mx-0 mb-4">
                        <h3 className="text-2xl text-center font-serif lg:text-left font-bold text-white mt-2.5 mb-2.5">
                            {title}
                        </h3>
                        <div className="h-[2px] w-full bg-gradient-to-r from-[#17433F] via-[#236860] to-transparent" />
                    </div>
                    <p className="text-white mb-5">{content}</p>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default PedaWorkshopSeminar;
