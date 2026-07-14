import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import { PlacementImageProps } from "@/features/placement/placement-highlights";

const PlacementHighlightCard = ({ img }: { img: PlacementImageProps }) => {
  return (
    <div>
      <Image
        src={`${STRAPI_URL}${img?.url}`}
        width={400}
        height={400}
        alt={img?.alternativeText || ""}
      />
    </div>
  );
};
export default PlacementHighlightCard;
