import { STRAPI_URL } from "@/app/constant";
import { NSSGridItem } from "@/lib/api/community-connect";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  data: NSSGridItem[];
};

const CommunityConnectImgGrid = ({ data }: Props) => {
  return (
    <section className="py-5 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        {data &&
          data?.map((item, i) => {
            return (
              <div key={i}>
                <h4 className="text-3xl md:text-4xl font-semibold text-center mb-5">
                  {item?.heading}
                </h4>
                <div className="">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {item?.nssimgs &&
                        item?.nssimgs?.map((item, i) => {
                          return (
                            <CarouselItem
                              key={i}
                              className="md:basis-1/2 lg:basis-1/3"
                            >
                              <Image
                                key={i}
                                src={`${STRAPI_URL}${item?.url}`}
                                width={490}
                                height={340}
                                alt={item?.alternativeText || ""}
                                className="w-full"
                              />
                            </CarouselItem>
                          );
                        })}
                    </CarouselContent>
                    {item?.nssimgs && item.nssimgs.length > 3 && (
                      <>
                        <CarouselPrevious className="bg-black rounded-none text-white left-0 hover:bg-black hover:text-white" />
                        <CarouselNext className="bg-black rounded-none text-white right-0 hover:bg-black hover:text-white" />
                      </>
                    )}
                  </Carousel>
                  {/* {item?.nssimgs &&
                    item?.nssimgs?.map((item, i) => {
                      return (
                        <Image
                          key={i}
                          src={`${STRAPI_URL}${item?.url}`}
                          width={490}
                          height={340}
                          alt={item?.alternativeText || ""}
                          className="w-full"
                        />
                      );
                    })} */}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default CommunityConnectImgGrid;
