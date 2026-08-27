import Link from "next/link";
import { ArrowRight, Compass, Users, Building2 } from "lucide-react";

const features = [
    {
        icon: Compass,
        iconBox:
            "text-blue-400 bg-gradient-to-br from-blue-500/25 via-blue-500/10 to-transparent ",
        cardBg: "bg-gradient-to-br from-blue-950/40 via-[#091413]/40 to-[#091413]/30  hover:shadow-blue-900/20",
        title: "Personalized Exploration",
        description:
            "Our campus tours go beyond standard visits; they’re tailored journeys that resonate with your interests and aspirations",
    },
    {
        icon: Users,
        iconBox:
            "text-indigo-400 bg-gradient-to-br from-indigo-500/25 via-indigo-500/10 to-transparent ",
        cardBg: "bg-gradient-to-br from-indigo-950/40 via-[#091413]/40 to-[#091413]/30  hover:shadow-indigo-900/20",
        title: "Connect with Your Future",
        description:
            "This isn’t just a tour; it’s the beginning of your future, where you’ll envision walking these paths, attending classes, and forging lifelong friendships.",
    },
    {
        icon: Building2,
        iconBox:
            "text-cyan-400 bg-gradient-to-br from-cyan-500/25 via-cyan-500/10 to-transparent",
        cardBg: "bg-gradient-to-br from-cyan-950/40 via-[#091413]/40 to-[#091413]/30 hover:shadow-cyan-900/20",
        title: "Feel the Campus Vibrancy",
        description:
            "Immerse yourself in the dynamic campus ambiance, providing a genuine taste of campus life.",
    },
];

const VirtualSchedule = () => {
    return (
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            {/* Centered Heading, Paragraph & CTA */}
            <div className="text-center max-w-4xl mx-auto space-y-5">
                <h4 className="heading-primary">
                    Schedule Your Exclusive Campus Tour Today!
                </h4>

                <p className="text-white/90 font-poppins leading-relaxed text-base sm:text-lg max-w-4xl mx-auto">
                    At K.R Mangalam University, we believe that the first step
                    towards an exceptional educational journey begins with
                    exploration. That’s why we invite you to schedule an
                    exclusive campus tour and discover the extraordinary
                    environment we’ve crafted for you.
                </p>

                <div className="pt-2 flex justify-center">
                    <Link
                        href="/campus-tour"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-3 bg-[#0060A9] hover:bg-[#0060A9]/90 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                    >
                        <span>Schedule Your Tour</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>

            {/* 3 Feature Cards in One Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
                {features.map((feature, idx) => {
                    const IconComponent = feature.icon;
                    return (
                        <div
                            key={idx}
                            className={`group relative p-6 rounded-[4px]  transition-all duration-300 flex flex-col items-start gap-4 hover:-translate-y-0.5 ${feature.cardBg}`}
                        >
                            <div
                                className={`shrink-0 w-12 h-12 rounded-[4px]   flex items-center justify-center p-3 group-hover:scale-105 transition-all duration-300 ${feature.iconBox}`}
                            >
                                <IconComponent className="w-6 h-6 stroke-[1.75]" />
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-[22px] font-bold font-serif text-white transition-colors duration-200">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-white/80 leading-relaxed font-poppins">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VirtualSchedule;
