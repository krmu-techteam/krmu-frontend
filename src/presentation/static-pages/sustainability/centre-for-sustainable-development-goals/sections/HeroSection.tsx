import Image from "next/image";

const HeroSection = () => {
    return (
        <section
            id="hero-section"
            className="relative w-full font-poppins bg-black overflow-hidden"
        >
            {/* Hero Container with Top: 110px offset */}
            <div className="relative w-full pt-[110px]">
                {/* Full-width Banner Frame with Height: 506px */}
                <div className="relative w-full h-[506px] overflow-hidden flex flex-col items-center justify-center text-center px-6">
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/sustainability/leaf2.png"
                            alt="Sustainable Development Goals Background"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    {/* Hero Content Layer */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/* Emblem Container with Subtle Radial Center Glow */}
                        <div className="relative mb-5 flex items-center justify-center">
                            <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(255,255,255,0.22)_0%,_rgba(59,130,246,0.12)_40%,_transparent_70%)] rounded-full blur-2xl pointer-events-none -z-10" />

                            {/* Circular Emblem Logo */}
                            <div className="relative w-44 h-44">
                                <Image
                                    src="/images/sustainability/krmu-brand.png"
                                    alt="Centre of Excellence for Sustainable Development Goals Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Centered Heading */}
                        <h1 className="font-serif text-[32px] sm:text-4xl md:text-5xl lg:text-[55px] font-bold text-white tracking-wide leading-tight sm:leading-snug max-w-4xl">
                            Centre of Excellence for{" "}
                            <br className="hidden sm:inline" />
                            Sustainable Development Goals
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
