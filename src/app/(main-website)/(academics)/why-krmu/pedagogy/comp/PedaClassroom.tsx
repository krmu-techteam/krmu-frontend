type Props = {
    heading: string;
    desc: string;
};

const PedaClassroom = ({ heading, desc }: Props) => {
    return (
        <section className="py-12 bg-[#edf6f9]">
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-12">
                <h2 className="mt-2.5 mb-[15px] text-2xl md:text-4xl !capitalize font-fraunces text-center sm:text-left font-medium text-black">
                    {heading}
                </h2>
                <p className="text-black/85 font-medium text-lg">{desc}</p>
            </div>
        </section>
    );
};

export default PedaClassroom;
