import Image from "next/image";

interface HighlightCardProps {
  image: string;
  title: string;
  subtitle?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[3px] min-h-[320px] sm:min-h-[360px] lg:min-h-[420px] bg-[#041524]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
     <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,22,35,0)_40%,rgba(6,22,35,0.2)_58%,rgba(6,22,35,0.78)_72%,#061623_90%)] pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 text-white">
    
        {subtitle && (
          <h4 className="text-[16px] sm:text-lg font-medium text-white/90 mb-1.5">
            {subtitle}
          </h4>
        )}
        <h3 className="text-[24px] font-serif font-medium leading-[1.3] max-w-[280px]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default HighlightCard;