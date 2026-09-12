import StudentSuccessStoryCard, {
  StudentSuccessStory,
} from "./StudentSuccessStoryCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const studentStories: StudentSuccessStory[] = [
  {
    id: 1,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Krish Agarwal",
    category: "Student Success Story",
    quote:
      "Success is never built alone, and my journey at K.R. Mangalam University is a testament to that. The university empowered me to push my limits, transforming curiosity into innovation and ambition into achievements. From winning 7+ hackathons and participating in a total of 10+ tech events to gaining valuable industry exposure through internships, every milestone reflects the strong foundation, guidance, and opportunities KRMU provided me. I will always be grateful to K.R. Mangalam University for inspiring me to dream bigger, achieve more, and become the professional I aspire to be.",
    name: "Krish Agarwal",
    batch: "B.Tech. CSE (AI & ML), Batch 2023–27",
    placementLink: "#",
  },
  {
    id: 2,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Naman Punn",
    category: "Student Success Story",
    quote:
      "The B.Tech. CSE programme at K.R. Mangalam University goes beyond academics by encouraging innovation, collaboration, and practical learning. From coding challenges and technical events to industry exposure and real-world projects, students gain the confidence and skills required to succeed in today's competitive technology landscape. The overall learning environment inspires continuous growth and excellence.",
    name: "Naman Punn",
    batch: "B.Tech. CSE, Batch 2022–26",
    placementLink: "#",
  },
  {
    id: 3,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Anu Sharma",
    category: "Student Success Story",
    quote:
      "My experience at K.R. Mangalam University has been a memorable learning journey. The BCA programme gave me a strong foundation in programming and problem-solving, while the supportive faculty and practical learning opportunities helped me grow both technically and personally. I'm thankful for the skills and experiences I gained during my time here.",
    name: "Anu Sharma",
    batch: "BCA (AI & DS)",
    placementLink: "#",
  },
  {
    id: 4,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Somya Sharma",
    category: "Student Success Story",
    quote:
      "My journey at K.R. Mangalam University has been truly transformative, providing me with a strong foundation in Artificial Intelligence, Machine Learning, and Computer Science. Through hands-on projects, internships, hackathons, and continuous guidance from experienced faculty, I gained practical exposure that strengthened my technical and problem-solving skills. The University’s industry-oriented curriculum and supportive learning environment have prepared me to confidently pursue a career in AI-driven technologies while inspiring me to innovate and contribute meaningfully to the tech industry.",
    name: "Somya Sharma",
    batch: "B.Tech. CSE (AI & ML), Batch 2023–27",
    placementLink: "#",
  },

  {
    id: 5,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Upadhyayula Nijaagna",
    category: "Student Success Story",
    quote:
      "K.R. Mangalam University has provided me with an environment where learning goes beyond the classroom. Through the B.Tech CSE (AI & ML) programme, I gained technical knowledge, practical experience, and the confidence to keep learning and adapting in the fast changing world of technology. The curriculum also offered exposure to diverse domains, helping me develop a broader perspective. I am grateful for this enriching journey.",
    name: "Upadhyayula Nijaagna",
    batch: "B.Tech. CSE (AI & ML), Batch 2023–27",
    placementLink: "#",
  }, 

  {
    id: 6,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Namrata Muralidharan",
    category: "Student Success Story",
    quote:
      "My journey at K.R. Mangalam University, pursuing BCA in Artificial Intelligence & Data Science, has been a transformative blend of knowledge, innovation, and hands-on learning. The program has helped me turn curiosity into technical expertise through real-world projects and emerging technologies. With supportive faculty and an industry-focused environment, KRMU has empowered me to think beyond conventional boundaries and confidently shape my future in the world of technology.",
    name: "Namrata Muralidharan",
    batch: "BCA (AI & DS), Batch 2024–26",
    placementLink: "#",
  },

  {
    id: 7,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Dhruv Gupta",
    category: "Student Success Story",
    quote:
      "I came into K.R. Mangalam University unsure of my direction — I'm leaving with a track record I'm proud of. The BCA AI & Data Science curriculum, backed by faculty mentors who genuinely invested in my growth, gave me both a strong technical foundation and the confidence to pursue AI seriously. I maintained a spot on the Dean's List across every semester, represented KRMU in international opportunities, and consistently showcased my work across classrooms and industry events. Every milestone along the way is proof that the effort paid off.",
    name: "Dhruv Gupta",
    batch: "BCA (AI & DS), Batch 2024–26",
    placementLink: "#",
  },

  {
    id: 8,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Rakesh G",
    category: "Student Success Story",
    quote:
      "My journey at K.R. Mangalam University has been an enriching experience that has strengthened both my technical knowledge and professional confidence. The BCA (AI & Data Science) programme provided me with practical exposure through projects, internships, and industry-oriented learning. The continuous guidance from faculty members has helped me develop problem-solving skills and prepared me for a successful career in technology.",
    name: "Rakesh G",
    batch: "BCA (AI & DS), Batch 2024–26",
    placementLink: "#",
  },
    {
    id: 9,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Khushi",
    category: "Student Success Story",
    quote:
      "portant role in shaping my learning journey. The B.Tech CSE (AI & ML) programme offered the right balance of academic rigour and practical exposure, enabling me to build a solid technical foundation and an industry-oriented mindset. The diverse learning opportunities and encouraging environment have prepared me to embrace new challenges with confidence. I sincerely appreciate the support and experiences that made this journey memorable.",
    name: "Khushi",
    batch: "B.Tech. CSE (AI & ML), Batch 2023–27",
    placementLink: "#",
  },
      {
    id: 10,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Utsav Ratan",
    category: "Student Success Story",
    quote:
      "I’m Utsav Ratan, and choosing B.Tech at K.R. Mangalam University has been one of the best decisions for my academic and personal growth. The university provides excellent faculty, practical learning opportunities, modern infrastructure, and a supportive environment that encourages innovation and skill development. Every experience here has strengthened my confidence and prepared me for future challenges. I’m proud to be a part of the K.R. Mangalam University family.",
    name: "Utsav Ratan", 
    batch: "B.Tech. CSE, Batch 2024–28",
    placementLink: "#",
  },    {
    id: 11,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Mrinal Prakash",
    category: "Student Success Story",
    quote:
      "I’m Mrinal Prakash, and choosing B.Tech at K.R. Mangalam University has been one of the best decisions for my academic and personal growth. The university provides excellent faculty, practical learning opportunities, modern infrastructure, and a supportive environment that encourages innovation and skill development. Every experience here has strengthened my confidence and prepared me for future challenges. I’m proud to be a part of the K.R. Mangalam University family.",
    name: "Utsav Ratan",
    batch: "B.Tech. CSE, Batch 2024–28",
    placementLink: "#",
  },
];

export const StudentSuccessStories = () => {
  return (
    <section className="px-5 xl:px-0 pb-10 md:pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full" 
        > 
          <CarouselContent>
            {studentStories.map((story) => (
              <CarouselItem key={story.id} className="basis-full pl-5">
                <StudentSuccessStoryCard {...story} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="mt-5 flex w-full">
            {/* Left navigation area */}
            <div className="flex w-full justify-center md:w-[45%] sm:justify-center">
              <div className="relative flex h-10 w-20 items-center justify-between">
                <CarouselPrevious
                  className="
                    relative left-0 top-0
                    h-9 w-9
                    translate-y-0
                    border-0
                    bg-black
                    text-white
                    hover:bg-black/80
                  "
                />

                <CarouselNext
                  className="
                    relative right-0 top-0
                    h-9 w-9
                    translate-y-0
                    border-0
                    bg-black
                    text-white
                    hover:bg-black/80
                  "
                />
              </div>
            </div>

            {/* Empty right area */}
            <div className="hidden md:w-[55%] sm:block" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default StudentSuccessStories;
