import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden pt-28 sm:pt-[120px] lg:pt-38   lg:pb-8 font-poppins">
            <div className="mx-auto max-w-[1440px] w-full px-4 md:px-6">
                <div className="w-full rounded-[0px] lg:rounded-[6px] relative z-10 overflow-hidden bg-[#07141E]">
                    {/* Background Image Container */}
                    <div className="relative w-full">
                        <Image
                            src="/images/programme/hero/program-hero.jpg"
                            alt="Programs Hero Background"
                            width={1536}
                            height={500}
                            priority
                            className="w-full h-auto object-cover rounded-t-[6px] lg:rounded-[6px] block"
                        />
                        {/* Desktop Gradient Overlay (visible on lg screens and above) */}
                        <div
                            className="hidden lg:block absolute inset-0 pointer-events-none z-5"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 25%, rgba(0, 0, 0, 0) 50%)",
                            }}
                        />
                    </div>

                    {/* Hero Content */}
                    {/* Mobile & Tablet (< lg): Stacked below image with dark background */}
                    {/* Desktop (lg:): Overlay over left side of hero image */}
                    <div className="lg:absolute lg:inset-0 z-10 w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center text-left bg-[#061623] lg:bg-transparent rounded-b-[0px] lg:rounded-none">
                        <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] font-light font-poppins block mb-1">
                            Academics
                        </span>
                        <div className="space-y-1 md:space-y-2 mb-2">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-serif leading-tight">
                                Programs
                            </h1>
                            <div
                                className="w-full max-w-[511px] h-[1px] my-2 sm:my-3"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #1A1A1A 0%, #FFFFFF 0.01%, #1A1A1A 100%)",
                                }}
                            />
                        </div>
                        <p className="text-white/80 text-sm sm:text-base font-light font-poppins max-w-lg leading-relaxed mb-4 lg:mb-5">
                            Transform your Life with the Right Programme
                        </p>
                        <Link href="/contact" className="w-fit block">
                            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#0161B0] text-white rounded-[4px] capitalize font-medium text-[14px] md:text-[15px] tracking-wide hover:bg-[#0161B0]/90 transition-all duration-300 shadow-lg shadow-[#0161B0]/20 cursor-pointer">
                                Book a Guidance Call
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
