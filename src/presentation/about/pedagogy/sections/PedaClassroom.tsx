type Props = {
    heading: string;
    desc: string;
};

const PedaClassroom = ({ heading, desc }: Props) => {
    // bg-[#edf6f9]
    return (
        <section className="py-12">
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-12">
                <h2 className="mb-6 heading-primary text-center">{heading}</h2>
                <p className="text-white/85 max-w-4xl mx-auto text-center leading-relaxed font-normal text-[16px]">
                    {desc}
                </p>
            </div>
        </section>
    );
};

export default PedaClassroom;
