import { MagazineCard } from "@/features/life-at-krmu/magzine-reflections";
import { MagazineCard as MagazineCardComponent } from "../components";

type Props = {
  magazinecards: MagazineCard[];
};

const MagazineCardsSection = ({ magazinecards }: Props) => {
  return (
    <>
      <div className="max-w-[1530px] mx-auto w-full py-5 px-6 md:px-8 xl:px-16 md:py-12 xl:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
