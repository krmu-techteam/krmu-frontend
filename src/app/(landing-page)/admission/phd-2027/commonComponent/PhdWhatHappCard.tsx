import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhdWhatHappCard = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col">
            <div className="mb-5">
              {/* <Image
                src="/landingpage/phd/card.jpg"
                width={415}
                height={268}
                alt=""
                className="w-full"
              /> */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eiHfb9HVJws?si=hwLmbOJ8N7CIfxMY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h4 className="text-2xl">EDM Fiesta 2025 </h4>
              <div className="text-sm text-[#7F7F7F]">
                {/* <p>
                  <i>K.R. Mangalam University</i>
                </p> */}
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col">
            <div className="mb-5">
              {/* <Image
                src="/landingpage/phd/card.jpg"
                width={415}
                height={268}
                alt=""
                className="w-full"
              /> */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/f3hA3WhmYN8?si=sz-jg_SUbnUl6RmJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h4 className="text-2xl">Aarambh 2025</h4>
              <div className="text-sm text-[#7F7F7F]">
                {/* <p>
                  <i>Our campus was delighted with the presence of Mr. Aman Gupta</i>
                </p> */}
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col">
            <div className="mb-5">
              {/* <Image
                src="/landingpage/phd/card.jpg"
                width={415}
                height={268}
                alt=""
                className="w-full"
              /> */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eweiWf69naI?si=IhAoZXTrzqZfxzDd"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h4 className="text-2xl">IDEAS 3.0</h4>
              <div className="text-sm text-[#7F7F7F]">
                {/* <p>
                  <i>Our campus was delighted with the presence of Mr. Aman Gupta</i>
                </p> */}
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col">
            <div className="mb-5">
              {/* <Image
                src="/landingpage/phd/card.jpg"
                width={415}
                height={268}
                alt=""
                className="w-full"
              /> */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eTmBcjmdSuk?si=PuGh-PS-_9DXkiMg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h4 className="text-2xl">Student Life</h4>
              <div className="text-sm text-[#7F7F7F]">
                {/* <p>
                  <i>Our campus was delighted with the presence of Mr. Aman Gupta</i>
                </p> */}
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bottom-0 top-[111%] left-[40%]  rounded-full bg-[#D9D9D9] hover:bg-[#FF5757] text-white phdwhatbtn" />
      <CarouselNext className="bottom-0 top-[111%] right-[40%] rounded-full bg-[#D9D9D9] hover:bg-[#FF5757] text-white phdwhatbtn" />
    </Carousel>
  );
};

export default PhdWhatHappCard;
