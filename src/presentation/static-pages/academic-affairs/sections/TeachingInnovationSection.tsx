import { CircleCheck } from "lucide-react";
import SectionDivider from "@/components/common/SectionDivider";

const INNOVATIONS = [
    {
        title: "Embracing Innovation:",
        description:
            "Our academic approach is centred around pioneering teaching methods and a dynamic curriculum. We regularly update our programs to include the latest academic research and industry insights.",
    },
    {
        title: "Interdisciplinary Learning:",
        description:
            "We encourage an interdisciplinary approach in our curriculum,preparing students for the complexities of the modern world by integrating knowledge across different disciplines.",
    },
    {
        title: "Responsive Curriculum:",
        description:
            "We ensure that our curriculum remains relevant and by regularly incorporating feedback from students and stakeholders and adapting to emerging industry trends",
    },
    {
        title: "Technology Integration:",
        description:
            "Advanced technology is a key component in our teaching,enhancing the learning experience with digital tools and virtual labs.",
    },
    {
        title: "Experiential Learning:",
        description:
            "Hands-on experience is vital in our courses, with practical projects, internships, and fieldwork linking academic theories to real-world applications",
    },
];

const TeachingInnovationSection = () => {
    return (
        <section className="relative py-8 md:py-12 xl:py-20">
            <div className="max-w-[1530px] mx-auto w-full px-4 md:px-8 xl:px-16 flex flex-col items-center">
                <h2 className="heading-primary text-center mb-4">
                    Innovative Teaching and Curriculum Design
                </h2>
                <p className="text-center text-[15px] md:text-[16px] text-white/90 font-poppins max-w-5xl mb-12">
                    At KRMU, we are dedicated to continuously innovating our
                    teaching approaches and curriculum design to provide an
                    education that not only informs but transforms.
                </p>

                <div className="w-full flex justify-center">
                    <ul className="flex flex-col gap-4 font-poppins w-fit max-w-4xl">
                        {INNOVATIONS.map((item, index) => (
                            <li
                                key={index}
                                className="flex gap-2 md:gap-4 items-start"
                            >
                                <div className="shrink-0 mt-0.5">
                                    <CircleCheck
                                        strokeWidth={1.5}
                                        className="text-white size-[18px] md:size-[22px]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <strong className="text-[15px] text-white md:text-[16px] font-semibold">
                                        {item.title}
                                    </strong>
                                    <span className="text-[15px] md:text-[16px] text-white/90">
                                        {item.description}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default TeachingInnovationSection;
