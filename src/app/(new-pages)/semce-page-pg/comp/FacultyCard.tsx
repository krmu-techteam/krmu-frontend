import Image from "next/image";

type Props = {
  url: string;
  name: string;
  desg: string;
};

const FacultyCard = ({ url, name, desg }: Props) => {
  return (
    <div className="instrument-serif">
      <div className="h-[395px] relative">
        <Image
          src={url}
          fill
          alt={name || ""}
          className="w-full z-10  object-contain"
        />
      </div>
      <div className="mt-2.5 text-center md:text-left">
        <h4 className="md:text-2xl">{name}</h4>
        <h5 className="text-base">{desg}</h5>
      </div>
    </div>
  );
};

export default FacultyCard;
