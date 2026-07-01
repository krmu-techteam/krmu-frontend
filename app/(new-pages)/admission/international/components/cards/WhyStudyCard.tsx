import Image from "next/image";

interface WhyStudyCardProps {
  title: string;
  description: string;
  image: string;
}

const WhyStudyCard = ({
  title,
  description,
  image,
}: WhyStudyCardProps) => {
  return (
    <div>
      <div className="relative h-[180px] overflow-hidden rounded-2xl sm:h-[200px]">
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover"
        />
      </div>

      <div className="bg-[#edece4] pt-10 pb-5 px-5 font-poppins -mt-5 h-auto lg:h-[200px] rounded-b-xl">
        <h5 className="font-bold leading-tight mb-2 text-sm">{title}</h5>
        <p className="leading-tight text-justify text-base">{description}</p>
      </div>
    </div>
  );
};

export default WhyStudyCard;