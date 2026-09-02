import Image from "next/image";

const POLICIES = [
    {
        title: "Code of Academic Integrity",
        description:
            "Our commitment to integrity is paramount. We have clear guidelines and consequences for academic misconduct.",
        icon: "/images/academic-affairs/academic-policies/image-1.png",
    },
    {
        title: "Grading System",
        description:
            "Our transparent grading system is detailed in our grading policy, outlining the criteria for assessments and exams.",
        icon: "/images/academic-affairs/academic-policies/image-2.png",
    },
    {
        title: "Attendance and Participation",
        description:
            "Attendance and active participation are key. Our policy outlines the requirements and their impact on grades.",
        icon: "/images/academic-affairs/academic-policies/image-3.png",
    },
    {
        title: "Course Enrolment and Withdrawal",
        description:
            "For information on enrolling in or withdrawing from courses, including deadlines and procedures, refer to our enrolment policy.",
        icon: "/images/academic-affairs/academic-policies/image-4.png",
    },
    {
        title: "Grievance Redressal",
        description:
            "We offer a fair mechanism for academic grievances. Students can find the process and contact information here.",
        icon: "/images/academic-affairs/academic-policies/image-5.png",
    },
    {
        title: "Academic Advising",
        description:
            "Advisors are available to guide students in academic and career planning.",
        icon: "/images/academic-affairs/academic-policies/image-6.png",
    },
];

const AcademicPoliciesSection = () => {
    return (
        <section className="relative pt-8 md:pt-12 xl:pt-20 bg-transparent">
            <div className="max-w-[1530px] mx-auto w-full px-0 md:px-8 xl:px-16 flex flex-col items-center">
                <h2 className="heading-primary text-center mb-4">
                    Academic Policies and Procedures
                </h2>
                <p className="text-center text-[16px] text-gray-300 font-poppins max-w-3xl mb-8 lg:mb-16">
                    Our academic policies and procedures are crafted to uphold
                    academic integrity and excellence, ensuring a fair and
                    supportive environment.
                </p>

                {/* Grid Wrapper with fading borders */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Fading Border Lines (Desktop) */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 hidden lg:block" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-[#999999] to-transparent opacity-20 hidden lg:block" />
                    <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-gradient-to-b from-transparent via-[#999999] to-transparent opacity-20 hidden lg:block" />

                    {/* Fading Border Lines (Tablet) */}
                    <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 hidden md:block lg:hidden" />
                    <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 hidden md:block lg:hidden" />
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#999999] to-transparent opacity-20 hidden md:block lg:hidden" />

                    {POLICIES.map((policy, index) => (
                        <div key={index} className="flex flex-col p-6 md:p-10">
                            <div className="mb-6 w-[56px] h-[56px] relative">
                                <Image
                                    src={policy.icon}
                                    fill
                                    alt={policy.title}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[18px] lg:text-[24px] font-poppins font-medium text-white mb-1 lg:mb-4 leading-snug">
                                {policy.title}
                            </h3>
                            <p className="text-[14px] text-white/90 leading-[1.7] font-poppins">
                                {policy.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicPoliciesSection;
