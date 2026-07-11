import Video from "@/app/(main-website)/components/Videos/Video";

import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";

type Props = {
  overviewVideo: StrapiMedia;
};

const OverviewHero = ({ overviewVideo }: Props) => {
  return (
    <section
      id="_overview_hero"
      className="relative h-screen h-[100dvh] min-h-[600px] overflow-hidden bg-black after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60"
    >
      <Video video={overviewVideo} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center text-white px-6 md:px-12">
        <p className="text-lg md:text-xl lg:text-2xl font-light z-10 max-w-4xl mx-auto">
          Discover the world of possibilities with K.R. Mangalam University
          where
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-4 z-10 leading-tight max-w-5xl mx-auto">
          We Shape Futures
        </h1>
      </div>
      <Link href="#lifeBeyond" className="z-10 absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2">
        <div className="relative">
          <Image src="/rotate-360.svg" width={100} height={100} alt="Scroll" />
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <Image src="/arrow.svg" width={180} height={180} alt="Scroll" className="h-[100px] w-[100px] z-10 relative object-cover" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default OverviewHero;
