import Image from "next/image";

type Props = {
  title: string;
  imgURL: string;
};

const POSTGraduationSlide = ({ title, imgURL }: Props) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="h-[317px] rounded-2xl">
        <Image
          src={imgURL}
          width={300}
          height={300}
          className="object-cover h-full w-full rounded-2xl"
          alt=""
        />
      </div>

      <p className="font-medium text-black text-2xl">{title}</p>
    </div>
  );
};

export default POSTGraduationSlide;
