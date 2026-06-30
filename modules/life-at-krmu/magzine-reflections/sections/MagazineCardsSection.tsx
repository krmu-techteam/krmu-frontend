import { MagazineCard } from "@/lib/types/magazine-reflection";
import { MagazineCard as MagazineCardComponent } from "../components";

type Props = {
  magazinecards: MagazineCard[];
};

const MagazineCardsSection = ({ magazinecards }: Props) => {
  return (
    <>
      <div className="max-w-[1910px] mx-auto w-full py-5 px-4 md:py-[60px] md:px-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {magazinecards &&
          magazinecards.map((card) => {
            return (
              <MagazineCardComponent
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

export default MagazineCardsSection;
