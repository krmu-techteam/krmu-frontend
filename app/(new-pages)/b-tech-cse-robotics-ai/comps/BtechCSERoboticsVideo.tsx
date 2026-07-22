import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const BtechCSERoboticsVideo = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1126px] mx-auto w-full relative">
        <Image
          src="/demo/video-thumbnail.jpg"
          width={1126}
          height={605}
          alt="Video Thumbnail"
          className="w-full h-auto rounded-lg"
        />
        <Image src="/demo/play-icon.svg" width={68} height={68} alt="" className="absolute top-1/2 left-1/2 -translate-1/2" />

        <p
          className={`${robotoCondensed.className} text-xl font-semibold max-w-[620px] text-white absolute bottom-0 left-1/2 -translate-1/2 bg-[rgba(9,51,105,0.4)] rounded-[4px] px-2.5 py-1 text-center leading-tight w-full`}
        >
          Inside KRMU's Robotics Lab | Student Innovations, Projects & Future
          Tech
        </p>
      </div>
    </section>
  );
};

export default BtechCSERoboticsVideo;
