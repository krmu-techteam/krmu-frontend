interface SkilledPartner {
  id: number;
  logo: string;
  companyType: string;
  hiring: string;
  job: string;
  duration: string;
}

interface SkilledPartnerCardProps {
  partner: SkilledPartner;
}

const SkilledPartnerCard = ({ partner }: SkilledPartnerCardProps) => {
  return (
    <article
      className="
        flex h-full min-h-[220px]
        min-w-0 flex-col
        px-4 py-5
        sm:min-h-[235px]
        sm:px-5 sm:py-6
        md:min-h-[245px]
        lg:min-h-[260px]
        lg:px-6 lg:py-6
      "
    >
      {/* Logo */}
      <div className="flex h-9 items-center sm:h-10">
        <img
          src={partner.logo}
          alt={`${partner.companyType} logo`}
          className="
            max-h-8
            max-w-[85px]
            object-contain
            sm:max-h-9
            sm:max-w-[95px]
          "
        />
      </div>

      {/* Company Type */}
      <h3
        className="
          mt-2
          font-newsreader
          text-2xl font-semibold
          leading-tight
          text-[#111]
          sm:text-[26px]
        "
      >
        {partner.companyType}
      </h3>

      {/* Hiring */}
      <p
        className="
          mt-1
          font-poppins
          text-sm font-medium
          leading-5
          text-[#8d5552]
          sm:text-base
          md:text-lg
        "
      >
        {partner.hiring}
      </p>

      {/* Job */}
      <p
        className="
          mt-1.5
          max-w-[260px]
          font-poppins
          text-sm
          leading-5
          text-[#222]
          sm:text-base
          md:text-lg
        "
      >
        {partner.job}
      </p>

      {/* Duration */}
      <p
        className="
          mt-1
          font-poppins
          text-xs
          text-[#777]
          sm:text-sm
          md:text-base
        "
      >
        {partner.duration}
      </p>
    </article>
  );
};

export default SkilledPartnerCard;
