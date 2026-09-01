import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";

const AcademicLeadershipSection = () => {
    return (
        <section className="relative py-8 md:py-12 xl:py-20">
            <div className="max-w-[1530px] mx-auto w-full text-white px-4 md:px-8 xl:px-16">
                <h3 className="heading-primary mb-4 text-center">
                    Team Behind Academic Affairs
                </h3>
                <p className="text-center text-base md:text-lg text-white/90 font-poppins mb-6 md:mb-12">
                    Meet the Pillars of Our Educational Endeavours
                </p>

                <div className="w-full flex flex-col xl:flex-row gap-6">
                    {/* COLUMN 1 */}
                    <div className="w-full xl:w-1/2 flex flex-col gap-6">
                        {/* Main Card */}
                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 bg-[#030303]/30 rounded-[4px] md:rounded-[10px] h-full">
                            {/* Image & Name */}
                            <div className="w-full md:w-[220px] flex flex-col items-center shrink-0">
                                <Image
                                    src="/academics/tania-2.webp"
                                    width={220}
                                    height={280}
                                    alt="Prof. Varuna Tyagi"
                                    className="rounded-[4px] md:rounded-[8px] object-cover w-full max-w-[220px]"
                                />
                                <div className="text-white mt-4 text-center font-poppins">
                                    <p className="text-[17px] font-semibold">
                                        Prof. Varuna Tyagi
                                    </p>
                                    <p className="text-[13px] text-white/90 mt-1">
                                        MBA and PhD in Psychology
                                    </p>
                                </div>
                            </div>
                            {/* Description */}
                            <div className="text-[14px] text-white/90 text-justify md:text-left leading-[1.7] font-poppins">
                                <p>
                                    Dean of Academics: Prof. Varuna Tyagi, MBA
                                    and PhD in Psychology with more than 22
                                    years of teaching, academic administration,
                                    and training experience. A visionary in
                                    Organisation Behaviour, spearheads
                                    University academic strategies with a focus
                                    on inclusivity and global relevance. She is
                                    highly skilled and accomplished training
                                    professional with extensive knowledge of
                                    design, development, delivery, and
                                    evaluation of wide range of training
                                    activities. She plays a multifaceted role
                                    that requires a combination of leadership,
                                    vision, and a deep commitment to academic
                                    excellence. By overseeing curriculum
                                    development, managing faculty, and engaging
                                    with the broader community.
                                </p>
                            </div>
                        </div>

                        {/* Small Card */}
                        <div className="p-6 md:p-8 bg-[#030303]/30 rounded-[4px] md:rounded-[8px] text-[14px] text-white/90 font-poppins">
                            <p>
                                <strong className="text-white">
                                    Faculty Coordinators:
                                </strong>{" "}
                                Our dedicated coordinators, experts in their
                                respective fields, ensure the effective delivery
                                of our diverse academic programs.
                            </p>
                        </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="w-full xl:w-1/2 flex flex-col gap-6">
                        {/* Main Card */}
                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 bg-[#030303]/30 rounded-[4px] md:rounded-[8px] h-full">
                            {/* Image & Name */}
                            <div className="w-full md:w-[220px] flex flex-col items-center shrink-0">
                                <Image
                                    src="/academics/dilraj.webp"
                                    width={220}
                                    height={280}
                                    alt="Prof. Dilraj Preet Kaur"
                                    className="rounded-[4px] md:rounded-[10px] object-cover w-full max-w-[220px]"
                                />
                                <div className="text-white mt-4 text-center font-poppins">
                                    <p className="text-[17px] font-semibold">
                                        Prof. Dilraj Preet Kaur
                                    </p>
                                    <p className="text-[13px] text-white/90 mt-1">
                                        Ph.D. in Physics
                                    </p>
                                </div>
                            </div>
                            {/* Description */}
                            <div className="text-[14px] text-white/90 text-justify md:text-left leading-[1.7] font-poppins">
                                <p>
                                    Associate Dean of Academics: Prof. Dilraj
                                    Preet Kaur is a dynamic and visionary leader
                                    committed to fostering academic excellence,
                                    innovation, and student success. She holds a
                                    Ph.D. in Physics from Guru Nanak Dev
                                    University, Amritsar. With a distinguished
                                    career in academia, she brings expertise in
                                    Materials Science, steering curriculum
                                    advancements and NEP implementation. As
                                    Associate Dean, Academics and NEP
                                    coordinator, she brings a wealth of
                                    experience to the role, driving strategic
                                    initiatives that elevate the academic
                                    experience for students and faculty alike.
                                </p>
                            </div>
                        </div>

                        {/* Small Card */}
                        <div className="p-6 md:p-8 bg-[#030303]/30 rounded-[4px] md:rounded-[8px] text-[14px] text-white/90 font-poppins">
                            <p>
                                <strong className="text-white">
                                    Administrative Staff:
                                </strong>{" "}
                                The backbone of our office, providing
                                indispensable support in the implementation of
                                academic policies and student services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default AcademicLeadershipSection;
