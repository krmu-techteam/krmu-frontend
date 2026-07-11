import { ParagraphBlock } from "@/lib/types/about";
import { Button } from "@/lib/types/home";
import { INTCOLLABHEROGRID } from "@/lib/types/international-collab";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

type Props = {
  title: ParagraphBlock[];
  desc: string;
  heroBtn: Button;
  heroGrid: INTCOLLABHEROGRID[];
};

const InternationalCollabHero = ({ title, desc, heroBtn, heroGrid }: Props) => {
  return (
    <section className="pt-36 md:pt-[9%] pb-[5%] bg-[url(/intcollab/mobilebanner.webp)] md:bg-[url(/intcollab/rankbg.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <div className="lg:mx-[1.92%]">
          <div className="text-4xl md:text-6xl lg:text-[80px] font-semibold leading-[1] mb-5">
            <BlocksRenderer content={title} />
          </div>
          <p className="mb-5">{desc}</p>
          {heroBtn?.buttonlink || heroBtn?.buttonclass ? (
            <Link
              href={heroBtn?.buttonlink || "#"}
              className={`py-[11px] px-[23px] bg-white text-[#e31e24] text-[13px] font-semibold rounded-[5px] inline-block leading-[1] hover:bg-[#034272] hover:text-white
          mb-[60px] ${heroBtn?.buttonclass || ""}`}
            >
              {heroBtn?.buttontext}
            </Link>
          ) : (
            ""
          )}

          <div className="grid gap-5 md:gap-10 grid-cols-1 lg:gap-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="p-[30px] text-white md:min-h-[380px] rounded-[30px] h-full bg-[#051630] lg:mr-[7.68%]">
              <p className="leading-[2]">{heroGrid[0]?.content}</p>
            </div>
            <div className="p-[30px] text-white md:min-h-[380px] rounded-[30px] h-full bg-[#051630] lg:mx-[7.68%]">
              <p className="leading-[2]">{heroGrid[1]?.content}</p>
            </div>
            <div className="p-[30px] text-white md:min-h-[380px] rounded-[30px] h-full bg-[#051630] lg:ml-[7.68%]">
              <p className="leading-[2]">{heroGrid[2]?.content}</p>
            </div>
            <div className="w-1/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalCollabHero;
