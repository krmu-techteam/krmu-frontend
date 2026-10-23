import Image from "next/image";

const LocationSection = () => {
    return (
        <section className="relative z-10 py-8 md:py-10 lg:py-16 xl:py-20 px-6 md:px-8 lg:px-11 xl:px-16">
            <div className="max-w-[1440px] rounded-[4px] mx-auto">
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

export default LocationSection;
