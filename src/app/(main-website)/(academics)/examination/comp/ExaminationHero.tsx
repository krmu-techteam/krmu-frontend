type Props = {
    title: string;
    bgImgUrl: string;
};

const ExaminationHero = ({ title }: Props) => {
    return (
        <section
            className="pt-[160px] px-4   rounded-b-[50px] overflow-hidden
    relative"
        >
            <div className="max-w-[1600px] mx-auto w-full">
                <h1 className="text-2xl md:text-5xl lg:text-[80px] font-semibold text-white z-10 relative">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default ExaminationHero;
