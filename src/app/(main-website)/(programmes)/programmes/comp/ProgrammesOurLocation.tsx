import Image from "next/image";

const ProgrammesOurLocation = () => {
    return (
        <section className="py-8 md:py-12 xl:py-20">
            <div className="max-w-[1440px] rounded-[4px] mx-auto px-6">
                <Image
                    src={"/images/dlf.jpg"}
                    alt="dlf"
                    width={1440}
                    height={400}
                    className="w-full h-auto rounded-[4px]"
                />
            </div>
        </section>
    );
};

export default ProgrammesOurLocation;
