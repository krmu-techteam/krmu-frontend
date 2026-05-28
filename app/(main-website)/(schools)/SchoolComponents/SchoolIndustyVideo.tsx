import { VIDEOIFRAME } from "@/lib/types/schools";

type Props = {
  heading: string;
  videoCards: VIDEOIFRAME[];
};

const SchoolIndustyVideo = ({ heading, videoCards }: Props) => {
  return (
    <section className="py-5 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-2xl md:text-5xl text-center font-bold mb-5">
          {heading}
        </h4>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
              <div
                className="w-full sohmctvideocard"
                dangerouslySetInnerHTML={{
                  __html: videoCards[0].videoiframefield,
                }}
              />
              <div
                className="w-full sohmctvideocard"
                dangerouslySetInnerHTML={{
                  __html: videoCards[1].videoiframefield,
                }}
              />
              <div
                className="w-full sohmctvideocard"
                dangerouslySetInnerHTML={{
                  __html: videoCards[2].videoiframefield,
                }}
              />
            
          </div>
          <div className="flex flex-col lg:flex-row justify-center mt-5 gap-5">
                <div className="w-full lg:w-2/12"></div>
             <div
                className="w-full lg:w-4/12 sohmctvideocard"
                dangerouslySetInnerHTML={{
                  __html: videoCards[3].videoiframefield,
                }}
                />
              <div
                className="w-full lg:w-4/12 sohmctvideocard"
                dangerouslySetInnerHTML={{
                  __html: videoCards[4].videoiframefield,
                }}
                />
                <div className="w-full lg:w-2/12"></div>
              
          </div>
          {/* {videoCards &&
            videoCards?.map((video) => {
              return (
                <div className="max-w-[541px] w-full" key={video?.id}>
                  <div
                    className="w-full"
                    dangerouslySetInnerHTML={{
                      __html: video?.videoiframefield,
                    }}
                  />
                </div>
              );
            })} */}
        </div>
      </div>
    </section>
  );
};

export default SchoolIndustyVideo;
