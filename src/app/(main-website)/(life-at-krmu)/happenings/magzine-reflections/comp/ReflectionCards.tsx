import { MagazineCard } from "@/lib/types/magazine-reflection";
import PDFCard from "./PDFCard";

type Props = {
  magazinecards: MagazineCard[];
};

const ReflectionCards = ({ magazinecards }: Props) => {
  return (
    <>
      <div className="max-w-[1910px] mx-auto w-full py-5 px-4 md:py-[60px] md:px-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {magazinecards &&
          magazinecards.map((card) => {
            return (
              <PDFCard
                key={card?.id}
                magazineimg={card?.magazineimg}
                magazinePDF={card?.magazinepdf}
              />
            );
          })}
      </div>
    </>
  );
};

export default ReflectionCards;
