import { PhDOutcome as PhDOutcomeType } from "@/lib/types/phd-programmes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  phdoutcomecontent: PhDOutcomeType;
};

const PHDOutcome = ({ phdoutcomecontent }: Props) => {
  if (!phdoutcomecontent) return null;

  return (
    <section
      style={{
        background:
          "linear-gradient(98.91deg, #0000b2 -76.74%, #061731 36.74%, #ab192d 154.6%)",
      }}
      className="py-16"
    >
      <div className="max-w-[1664px] mx-auto w-full px-5">
        <h3 className="text-[40px] md:text-[64px] text-white font-semibold text-center mb-12">
          {phdoutcomecontent.title}
        </h3>

        <div className="flex flex-wrap justify-center gap-10">
          {phdoutcomecontent.phdoutcome?.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[48%] lg:w-[30%] text-white px-5 py-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
            >
              <BlocksRenderer content={item.outcomedesc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PHDOutcome;
