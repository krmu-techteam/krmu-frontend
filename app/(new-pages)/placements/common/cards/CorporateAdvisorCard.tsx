import Image from "next/image";

export interface CorporateAdvisor {
  id: number;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface CorporateAdvisorCardProps {
  advisor: CorporateAdvisor;
}

const CorporateAdvisorCard = ({ advisor }: CorporateAdvisorCardProps) => {
  return (
    <article className="min-w-0">
      {/* Image */}
      <div className="relative aspect-[1.02] w-full overflow-hidden bg-[#eee]">
        <Image
          src={advisor.image}
          alt={advisor.name}
          fill
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1023px) 50vw,
            20vw
          "
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="pt-3">
        <h3 className="font-poppins text-sm font-bold uppercase leading-tight text-[#111]">
          {advisor.name}
        </h3>

        <p className="mt-0.5 font-poppins text-sm leading-[1.3] text-[#111]">
          Designation- {advisor.designation}
        </p>

        <p className="font-poppins text-sm leading-[1.3] text-[#111]">
          {advisor.company}
        </p>
      </div>
    </article>
  );
};

export default CorporateAdvisorCard;
