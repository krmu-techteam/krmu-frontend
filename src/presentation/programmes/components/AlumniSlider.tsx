"use client";

import { Carousel } from "@/components/common/Carousel";
import { ProgrammeAlumniData } from "@/lib/types/programme";
import { AlumniSliderCard } from "./AlumniSliderCard";

const SOET_ALUMNI_TESTIMONIALS: ProgrammeAlumniData[] = [
    {
        id: 101,
        name: "Somya Sharma",
        qualification: "B.Tech CSE AIML 2023-27 batch",
        content:
            "My journey at KRMU has been truly transformative, providing me with a strong foundation in Artificial Intelligence, Machine Learning and Computer Science. Through hands-on projects, internships, hackathons and constant guidance from experienced faculty, I gained practical exposure that strengthened my technical and problem-solving skills.",
        alumni_img: {
            url: "/images/school/testimonials/soet/somya-sharma.jpg",
        } as unknown as ProgrammeAlumniData["alumni_img"],
        review_img: null,
    },
    {
        id: 102,
        name: "Yashika Goyal",
        qualification: "MCA (CORE)",
        content:
            "I sincerely thank K.R. Mangalam University for shaping my academic and professional journey through quality education, practical learning and constant guidance. Pursuing my MCA has strengthened my technical and problem-solving skills, while the industry-focused curriculum and project-based approach have prepared me for real-world challenges.",
        alumni_img: {
            url: "/images/school/testimonials/soet/yashika-goyal.png",
        } as unknown as ProgrammeAlumniData["alumni_img"],
        review_img: null,
    },
    {
        id: 103,
        name: "Namrata Muralidharan",
        qualification: "BCA (AI & DS) 2024-26 batch",
        content:
            "My journey at K.R. Mangalam University, pursuing a BCA in Artificial Intelligence and Data Science, has been a transformative blend of knowledge, innovation and hands-on learning. The programme has helped me turn curiosity into technical expertise through real-world projects and emerging technologies.",
        alumni_img: {
            url: "/images/school/testimonials/soet/namrata-muralidharan.png",
        } as unknown as ProgrammeAlumniData["alumni_img"],
        review_img: null,
    },
];

type Props = {
    alumniData?: ProgrammeAlumniData[];
};

export const AlumniSlider = ({ alumniData = [] }: Props) => {
    const combinedData = [
        ...alumniData,
        ...SOET_ALUMNI_TESTIMONIALS.filter(
            (soetItem) => !alumniData.some((a) => a.name === soetItem.name)
        ),
    ];

    return (
        <div className="w-full relative">
            <Carousel
                options={{ align: "start", loop: true }}
                autoplay={true}
                autoplayDelay={4000}
                showDots={false}
                showArrows={true}
                containerClassName="-ml-4 md:-ml-6 items-stretch"
                slideClassName="pl-4 md:pl-6 basis-full lg:basis-1/2 flex"
                dotClassName="bg-white/20 w-2 hover:bg-white/40"
                prevArrowClassName="!absolute !top-1/2 !-left-3 md:!-left-4 !border-none !-translate-y-1/2 !w-9 !h-9 !rounded-[3px] !bg-[#CB000D] hover:!bg-[#CB000D]/80 hover:!text-white !text-white !transition-colors cursor-pointer"
                nextArrowClassName="!absolute !top-1/2 !-right-3 md:!-right-4 !border-none !-translate-y-1/2 !w-9 !h-9 !rounded-[3px] !bg-[#CB000D] hover:!bg-[#CB000D]/80 hover:!text-white !text-white !transition-colors cursor-pointer"
            >
                {combinedData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full bg-transparent rounded-[16px] border border-white/20 p-6 md:p-7 xl:p-8 transition-colors duration-300 group relative overflow-hidden h-full flex flex-col"
                    >
                        <AlumniSliderCard item={item} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
