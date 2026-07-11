import Image from "next/image";

type Props = {
  image: string;
  title: string;
  desc: string;
};

const SEMCESlide = ({ image, title, desc }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#051730]/90 via-[#051730]/40 to-transparent" /> */}
      <Image
        src={image}
        width={1140}
        height={600}
        alt={title}
        className="w-full h-[300px] sm:h-[420px] md:h-[612px] object-cover"
        priority
      />
      <div className="absolute text-center bottom-20 left-0 w-full text-white">
        <h4 className="text-4xl md:text-7xl instrument-serif font-light">
          Journalism & Storytelling
        </h4>
        <p className="text-xl md:text-3xl font-light">
          Write stories, report news, anchor broadcasts, build narrative skills
        </p>
      </div>
    </div>
  );
};

export default SEMCESlide;
