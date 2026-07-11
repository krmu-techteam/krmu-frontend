import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  desg: string;
  facUrl: string;
  facImgUrl: string;
};

const RDCCard = ({ name, desg, facUrl, facImgUrl }: Props) => {
  return (
    <Link
      href={facUrl || "#"}
      className="bg-[url(/research/card-bg.webp)] bg-no-repeat text-white bg-cover flex flex-col sm:flex-row items-center justify-center rounded-[20px] mt-5"
      target="_blank" rel="noopener noreferrer"
    >
      <div className="md:w-1/4">
        <Image
          src={facImgUrl}
          width={137}
          height={147}
          alt="Prabhakar"
          className="m-5 w-[137px] h-[147px] "
        />
      </div>
      <div className="flex flex-col md:w-2/4 text-center">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{desg}</p>
      </div>
      <div className="md:w-1/4 flex justify-end">
        {facUrl && <ChevronRight size={60} color="#ffffff" strokeWidth={4} />}
      </div>
    </Link>
  );
};

export default RDCCard;
