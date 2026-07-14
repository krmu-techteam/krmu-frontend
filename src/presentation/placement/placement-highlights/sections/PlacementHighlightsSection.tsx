import { PlacementHighlightCard } from "../components";
import { PlacementImageProps } from "@/features/placement/placement-highlights";

const PlacementHighlightSection = ({
  placementImgs,
}: {
  placementImgs: PlacementImageProps[];
}) => {
  return (
    <section className="py-8 md:py-12 xl:py-20 px-4">
      <div className="max-w-[1530px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-8">
          {placementImgs?.map((img: PlacementImageProps, i: number) => {
            return <PlacementHighlightCard key={i} img={img} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default PlacementHighlightSection;
