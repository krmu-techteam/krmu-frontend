import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";

const KEICWelcomeMessage = () => {
    return (
        <section className="relative py-12 md:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 font-poppins text-white">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                {/* Left Content Column */}
                <div className="lg:w-2/3 w-full">
                    <h2 className="heading-primary mb-6 lg:mb-8">
                        Welcome Message from the Director
                    </h2>

                    <div className="space-y-3 text-white/90 leading-relaxed text-[15px] sm:text-[16px]">
                        <p className="text-lg font-semibold text-white">
                            Dear Student Founders and the K.R. Mangalam
                            University Community,
                        </p>

                        <p>
                            Welcome to the K.R. Mangalam Entrepreneurship &
                            Incubation Centre (KEIC).
                        </p>

                        <p>
                            KEIC exists for one simple reason: to help you
                            build. Whether your idea lives in a notebook, keeps
                            you awake at night, or is already taking shape as a
                            startup, this is where it belongs.
                        </p>

                        <p>
                            Startups are not built by waiting for perfect ideas;
                            they are built by starting, learning fast, and
                            staying resilient.
                        </p>

                        <p>
                            At KEIC, we don’t expect clarity on Day One. What we
                            do expect is curiosity, ownership, and the courage
                            to try. Our role is to create a safe yet ambitious
                            environment where you can:
                        </p>

                        {/* Structured Step List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
                            <div className="flex items-start gap-3.5 bg-[#061623] p-3 rounded-[4px] border border-white/10 hover:border-[#00A0E3]/50 transition-colors">
                                <span className="flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#00A0E3] text-white font-bold text-sm shrink-0 mt-0.5 shadow-md">
                                    1
                                </span>
                                <span className="text-white/90 font-medium text-[15px]">
                                    Build early, even if it’s messy
                                </span>
                            </div>

                            <div className="flex items-start gap-3.5 bg-[#061623] p-3 rounded-[4px] border border-white/10 hover:border-[#00A0E3]/50 transition-colors">
                                <span className="flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#00A0E3] text-white font-bold text-sm shrink-0 mt-0.5 shadow-md">
                                    2
                                </span>
                                <span className="text-white/90 font-medium text-[15px]">
                                    Step outside campus and talk to real users
                                </span>
                            </div>

                            <div className="flex items-start gap-3.5 bg-[#061623] p-4 rounded-[4px] border border-white/10 hover:border-[#00A0E3]/50 transition-colors">
                                <span className="flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#00A0E3] text-white font-bold text-sm shrink-0 mt-0.5 shadow-md">
                                    3
                                </span>
                                <span className="text-white/90 font-medium text-[15px]">
                                    Launch, learn, iterate, and repeat
                                </span>
                            </div>

                            <div className="flex items-start gap-3.5 bg-[#061623] p-4 rounded-[4px] border border-white/10 hover:border-[#00A0E3]/50 transition-colors">
                                <span className="flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#00A0E3] text-white font-bold text-sm shrink-0 mt-0.5 shadow-md">
                                    4
                                </span>
                                <span className="text-white/90 font-medium text-[15px]">
                                    Convert ideas into products, products into
                                    revenue, and revenue into scalable
                                    businesses
                                </span>
                            </div>
                        </div>

                        <p>
                            KEIC is not about buzzwords or endless
                            presentations. It is about real startups, real
                            learning, and real outcomes while you are still a
                            student.
                        </p>

                        <p>
                            Through KEIC, you will gain access to experienced
                            mentors, founders, investors, seed support, tools,
                            and networks that accelerate your journey.
                        </p>

                        <div className="p-3 bg-[#061623] rounded-[4px] border border-white/10 my-4">
                            <p className="text-white/95 font-normal italic">
                                You will be encouraged to experiment, allowed to
                                fail safely, and supported to bounce back
                                stronger. Think of KEIC as your startup
                                playground and support system that values
                                effort, respects ownership, and rewards action.
                            </p>
                        </div>

                        <p>
                            If you are ready to build, break, learn, and build
                            again, KEIC is here for you.
                        </p>

                        <p className="text-lg sm:text-[16px] font-normal text-[#00A0E3] pt-2">
                            Let’s build something meaningful together.
                        </p>
                    </div>
                </div>

                {/* Right Director Card */}
                <div className="lg:w-1/3 w-full lg:mt-[68px]">
                    <div className="bg-[#061623] rounded-[4px] border border-white/10 p-3 text-center max-w-[340px] mx-auto lg:mx-0 hover:border-[#00A0E3]/60 transition-colors duration-300">
                        <div className="relative w-full rounded-[4px] overflow-hidden mb-4 border border-white/10">
                            <Image
                                src="/keic/dir.jpg"
                                alt="Rahul Bachhuwan - Dy. Director, KEIC"
                                width={313}
                                height={357}
                                className="w-full h-auto object-cover rounded-[4px]"
                            />
                        </div>
                        <h3 className="text-xl font-serif  font-bold text-white tracking-wide mb-1">
                            Rahul Bachhuwan
                        </h3>
                        <p className="text-[#00A0E3] text-sm font-semibold uppercase tracking-wider">
                            Dy. Director, KEIC
                        </p>
                    </div>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default KEICWelcomeMessage;
