import Image from "next/image";

type Props = {
  heading: string;
  content: string;
  url: string;
};

const LearnByCreatingCard = ({ heading, content, url }: Props) => {
  return (
    <div className="bg-[#00579B] h-full md:min-h-[600px] learnbyCreatingCard">
      <h4 className="text-3xl sm:text-4xl">{heading}</h4>
      <p className="text-2xl font-light">{content}</p>
      <div className="mt-10">
        <Image
          src={url}
          width={265}
          height={192}
          alt=""
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default LearnByCreatingCard;
