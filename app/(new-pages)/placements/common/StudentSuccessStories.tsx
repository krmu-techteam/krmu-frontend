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
    imageAlt: "Namrata Muralidharan",
    category: "Student Success Story",
    quote:
      "My journey at K.R. Mangalam University, pursuing BCA in Artificial Intelligence & Data Science, has been a transformative blend of knowledge, innovation, and hands-on learning. The program has helped me turn curiosity into technical expertise through real-world projects and emerging technologies. With supportive faculty and an industry-focused environment, KRMU has empowered me to think beyond conventional boundaries and confidently shape my future in the world of technology.",
    name: "Namrata Muralidharan",
    batch: "BCA (AI & DS) 2024–26 batch",
    placementLink: "#",
  },
  {
    id: 2,
    image: "/placements/main/success-girl.jpg",
    imageAlt: "Namrata Muralidharan",
    category: "Student Success Story",
    quote:
      "My journey at K.R. Mangalam University, pursuing BCA in Artificial Intelligence & Data Science, has been a transformative blend of knowledge, innovation, and hands-on learning. The program has helped me turn curiosity into technical expertise through real-world projects and emerging technologies. With supportive faculty and an industry-focused environment, KRMU has empowered me to think beyond conventional boundaries and confidently shape my future in the world of technology.",
    name: "Namrata Muralidharan",
    batch: "BCA (AI & DS) 2024–26 batch",
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
