import Image from "next/image";

type Props = {
  url: string;
  name: string;
  desg: string;
};

const FacultyCard = ({ url, name, desg }: Props) => {
  return (
    <div className="instrument-serif">
      <Image
        src={url}
        width={237}
        height={296}
        alt=""
        className="w-full h-[395px] object-contain"
      />
      <div className="mt-2.5">
        <h4 className="text-2xl">{name}</h4>
        <h5 className="text-base">{desg}</h5>
      </div>
    </div>
  );
};

export default FacultyCard;
