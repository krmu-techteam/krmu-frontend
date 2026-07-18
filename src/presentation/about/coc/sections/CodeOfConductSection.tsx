import { CocItem } from "@/features/about/coc";
import { CocCard } from "../components";

interface Props {
  cocitems: CocItem[];
}

const CodeOfConductSection = ({ cocitems }: Props) => {
  return (
    <section className="py-16 md:py-20 min-h-[50vh]">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16 flex justify-center">
        {cocitems && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {cocitems.map((item) => (
              <CocCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CodeOfConductSection;
