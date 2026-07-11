import { CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LifeAtSEMCE = () => {
  return (
    <section className="bg-black bg-[url(/semce/grid.svg)] py-10 md:py-40 px-4"> 
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-1/2">
          <h3 className="text-4xl md:text-5xl lg:text-9xl text-white font-semibold instrument-serif">Life at SEMCE</h3>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link href="#" className="w-full relative inline-block">
            <Image src="/wp-content/semce/semce-1.jpg" width={214} height={280} alt="" className="w-full" />
            <CirclePlay className="absolute bottom-2.5 left-2.5" color="#fff" size={40} strokeWidth={1.5} />
          </Link>
          <Link href="#" className="w-full relative inline-block">
            <Image src="/wp-content/semce/semce-main/reel-2.jpg" width={214} height={280} alt="" className="w-full" />
            <CirclePlay className="absolute bottom-2.5 left-2.5" color="#fff" size={40} strokeWidth={1.5} />
          </Link>
          <Link href="#" className="w-full relative inline-block">
            <Image src="/wp-content/semce/semce-main/reel-3.jpg" width={214} height={280} alt="" className="w-full" />
            <CirclePlay className="absolute bottom-2.5 left-2.5" color="#fff" size={40} strokeWidth={1.5} />
          </Link>
         
        </div>
      </div>
    </section>
  );
};

export default LifeAtSEMCE;
