"use client";

import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="bg-[#07141E] w-full pt-[170px] pb-12 text-white">
            <div className="max-w-[1530px] mx-auto px-4 md:px-8 xl:px-16 w-full flex gap-10 flex-col lg:flex-row items-center lg:items-start justify-between">
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[calc(100%-400px)] flex flex-col">
                    <div className="mb-8">
                        <h1 className="text-[64px] font-serif font-semibold leading-none mb-6">
                            Academic Affairs
                        </h1>
                        <div
                            className="h-[4px] w-full max-w-[694px] rounded-[5px]"
                            style={{
                                background:
                                    "linear-gradient(270deg, rgba(217, 217, 217, 0) 0%, #0161B0 100%)",
                            }}
                        ></div>
                    </div>

                    <h2 className="text-3xl md:text-[40px] font-serif font-semibold mb-6">
                        Welcome from the Dean of Academics
                    </h2>

                    <div className="flex flex-col gap-2 text-[16px] text-gray-300 font-poppins">
                        <p>
                            As the Dean of Academics, I am honoured to spearhead
                            a community that thrives on intellectual curiosity,
                            collaborative learning, and a commitment to academic
                            excellence.
                        </p>

                        <p>
                            Our academic programs are designed to cultivate
                            critical thinking, creativity, and a passion for
                            lifelong learning. Here at K.R. Mangalam University
                            we take pride in offering a diverse range of
                            disciplines that empower students to explore their
                            interests and pursue their academic and professional
                            aspirations.
                        </p>

                        <p>
                            I encourage everyone to actively engage in the
                            vibrant academic community that surrounds us. Our
                            faculty members are dedicated to fostering an
                            environment that encourages dialogue, collaboration,
                            and innovative thinking. I request you all to make
                            the most of your academic journey by seeking out
                            opportunities for research, internships, and
                            participation in extracurricular activities.
                        </p>

                        {/* EXPANDABLE CONTENT */}
                        <div
                            className={`grid transition-all duration-500 ease-in-out ${
                                expanded
                                    ? "grid-rows-[1fr] opacity-100 mt-2"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden flex flex-col gap-2">
                                <p>
                                    This website serves as a valuable resource
                                    for accessing information about our academic
                                    programs, faculty profiles, research
                                    initiatives, and upcoming events. I invite
                                    you to explore the various sections and
                                    discover the wealth of opportunities that
                                    await you.
                                </p>

                                <p>
                                    The Dean of Academics’ office is here to
                                    support you in your academic endeavours. If
                                    you have any questions, concerns, or if
                                    there’s anything we can assist you with,
                                    please feel free to reach out. We are
                                    committed to providing a nurturing academic
                                    environment that fosters growth, learning,
                                    and success.
                                </p>
                            </div>
                        </div>

                        {/* READ MORE BUTTON */}
                        <div>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="font-normal cursor-pointer text-white hover:text-blue-400 transition-colors hover:underline inline-flex"
                            >
                                {expanded ? "Read Less..." : "Read More..."}
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="w-[319px] min-w-[319px] h-[440px] rounded-[8px] bg-[#031829] flex flex-col items-center justify-center p-6 shrink-0 mt-8 lg:mt-0">
                    <div className="w-[240px] h-[240px] rounded-full overflow-hidden mb-6">
                        <Image
                            src="/academics/tania.webp"
                            width={240}
                            height={240}
                            alt="Prof. Varuna Tyagi"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center font-poppins">
                        <h3 className="text-[16px]  font-semibold text-white mb-1">
                            Prof. Varuna Tyagi
                        </h3>
                        <p className="text-[15px] font-light text-white/80">
                            Dean Academic Affairs
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
