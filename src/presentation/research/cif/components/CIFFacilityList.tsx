import Link from "next/link";
import { CIFFacility } from "@/features/research/cif/types";

const CIFFacilityList = ({
  facilities,
  idx,
}: {
  facilities: CIFFacility;
  idx: number;
}) => {
  const { label, url } = facilities;
  return (
    <div
      key={idx}
      className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[15px] flex items-center font-poppins justify-center text-center p-5 min-h-[121px]"
    >
      <Link
        href={url}
        className="text-white text-base font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    </div>
  );
};
export default CIFFacilityList;
