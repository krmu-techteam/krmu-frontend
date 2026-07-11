import Image from "next/image";
import { IndustryExpertLogo } from "../admission/PGType";


type Props = {
  data: IndustryExpertLogo;
};

const IndustryExpertCard = ({ data }: Props) => {
  return (
    <div className="bg-white  sm:h-[320px] md:min-h-[250px] h-full flex items-center justify-center relative rounded-[10px] group p-2.5">
      
      <Image
        src={data.src}
        width={data.width}
        height={data.height}
        alt={data.alt}
        className="object-contain transition-all duration-200"
      />

      {/* Corner decorations */}
      {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
        (pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} p-2 text-xl text-black group-hover:text-white transition-all duration-200 hidden sm:block`}
          >
            +
          </span>
        )
      )}
    </div>
  );
};

export default IndustryExpertCard;
