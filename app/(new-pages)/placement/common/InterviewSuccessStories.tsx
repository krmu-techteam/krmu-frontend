import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { interviewSuccessStories } from "../main/constant";
import InterviewSuccessStoryCard from "./InterviewSuccessStoryCard";

const InterviewSuccessStories = () => {
  return (
    <section className="pb-10 md:pb-20 px-5 xl:px-0">
      <div className="max-w-6xl mx-auto w-full font-poppins">
        <div className="">
          <h5 className="text-[#7A1F2B] text-xs tracking-[0.2em] mb-2.5 uppercase">
            Interview
          </h5>

          <h3 className="text-4xl md:text-5xl font-semibold text-[#001836] mb-5 font-newsreader">
            Student Success Stories
          </h3>
        </div>
        <div className="relative mt-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {interviewSuccessStories.map((story, i) => (
                <CarouselItem
                  key={i}
                  className="pl-5 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <InterviewSuccessStoryCard key={story.id} story={story} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black text-white w-10 h-10 left-0 xl:-left-14" />
            <CarouselNext className="bg-black text-white w-10 h-10 right-0 xl:-right-14" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InterviewSuccessStories;
