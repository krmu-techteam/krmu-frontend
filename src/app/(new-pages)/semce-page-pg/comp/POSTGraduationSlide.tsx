import Image from "next/image";

type Props = {
  title: string;
  imgURL: string;
};

const POSTGraduationSlide = ({ title, imgURL }: Props) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="h-[317px] rounded-2xl relative">
        <Image
          src={imgURL}
          fill
          className="object-cover h-full w-full rounded-2xl"
          alt={title || ""}
        />
      </div>

      <p className="font-medium text-black text-center md:text-left tex-lg md:text-xl">
        {title}
      </p>
    </div>
  );
};

export default POSTGraduationSlide;
