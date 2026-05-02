import { FeeStructHero } from "@/lib/types/feestructure";
import Link from "next/link";

type Props = {
  feeStructHero: FeeStructHero;
};

const FeeStructureHero = ({ feeStructHero }: Props) => {
  return (
    <section className="pt-[140px] px-4 md:pt-[10%] pb-[10%] bg-[url(/85.webp)] bg-cover bg-no-repeat">
      <div className="text-center max-w-[1600px] mx-auto w-full">
        <h1
          className="text-2xl text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-white md:text-[64px] font-semibold leading-[1] mb-10"
          dangerouslySetInnerHTML={{
            __html: feeStructHero?.heading,
          }}
        />

        {feeStructHero?.fee_structure_url && (
          <Link
            href={feeStructHero?.fee_structure_url || "#"}
            className="inline-flex items-center justify-center bg-[#0062aa] text-white text-sm md:text-[15px] font-medium tracking-wide px-8 py-3 rounded-[2px] hover:bg-[#02345a] transition-all duration-300 whitespace-nowrap"
          >
            Explore Programmes
          </Link>
        )}
      </div>
    </section>
  );
};

export default FeeStructureHero;
