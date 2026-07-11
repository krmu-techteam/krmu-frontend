import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { OpportunitySection } from "../law-2026/contentype";
import ScrollButton from "./ScrollButton";

type Props = {
  data: OpportunitySection;
};

const Opportunity = ({ data }: Props) => {
  return (
    // <section className="pt-10 md:pt-28 pb-20 px-4">
    //   <div className="max-w-[1400px] mx-auto w-full bg-[url(/landingpage/common/blue-box.webp)] bg-cover bg-no-repeat flex flex-col-reverse sm:flex-row items-center justify-between pt-10 px-10 rounded-4xl lg:h-[350px]">
    //     {/* Image */}
    //     <div className="sm:w-1/2 h-full relative">
    //       <div className="lg:absolute bottom-0 mt-5 md:mt-0">
    //         <Image
    //           src={data.image.src}
    //           width={data.image.width}
    //           height={data.image.height}
    //           alt={data.image.alt}
    //         />
    //       </div>
    //     </div>

    //     {/* Content */}
    //     <div className="text-center sm:text-right sm:w-1/2">
    //       <h4 className="text-xl sm:text-3xl text-white font-semibold mb-2.5">
    //         {data.heading}
    //       </h4>
    //       <div
    //         className="text-white font-semibold italic"
    //         dangerouslySetInnerHTML={{
    //           __html: data.highlight,
    //         }}
    //       />

    //       <div className="flex justify-center sm:justify-end">
    //         {/* <Link
    //           href={data.cta.href}
    //           className="bg-white rounded-full pl-5 pr-2.5 py-2.5 flex w-fit items-center gap-2.5 mt-5"
    //         >
    //           {data.cta.label}
    //           <span className="bg-black p-2.5 flex items-center justify-center rounded-full">
    //             <MoveUpRight color="#fff" size={20} />
    //           </span>
    //         </Link> */}

    //         <ScrollButton
    //           targetId="apply-section"
    //           highlightClass="flash-border"
    //           btnClass="bg-white rounded-full pl-5 pr-2.5 py-2.5 flex w-fit items-center gap-2.5 mt-5"
    //         >
    //           {data.cta.label}
    //           <span className="bg-black p-2.5 flex items-center justify-center rounded-full">
    //             <MoveUpRight color="#fff" size={20} />
    //           </span>
    //         </ScrollButton>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      <Image
        src="/landingpage/phd/progbg.webp"
        width={1920}
        height={320}
        alt=""
        className="w-full"
      />
    </section>
  );
};

export default Opportunity;
