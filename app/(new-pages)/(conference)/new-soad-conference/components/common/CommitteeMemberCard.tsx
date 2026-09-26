import Image from "next/image";

interface CommitteeMemberCardProps {
  image: string;
  role: string;
  name: string;
  designation: string;
  compact?: boolean;
}

const CommitteeMemberCard = ({
  image,
  role,
  name,
  designation,
  compact = false,
}: CommitteeMemberCardProps) => {
  return (
    <div className="group overflow-hidden rounded-[10px] bg-[#ebe8e0] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div
        className={`relative w-full overflow-hidden bg-white ${
          compact
            ? "h-[120px] sm:h-[130px]"
            : "h-[230px] sm:h-[240px] md:h-[220px] lg:h-[210px] xl:h-[220px]"
        }`}
      >
        <Image
          src={image}
          alt={name || role}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 33vw,
            20vw
          "
          className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div
        className={
          compact
            ? "px-3 py-2.5 sm:px-3 sm:py-3"
            : "px-4 py-3 sm:px-4 sm:py-4"
        }
      >
        {/* Role */}
        <p
          className={`font-serif leading-[1.3] text-[#5f5a53] ${
            compact
              ? "text-[8px] sm:text-[9px]"
              : "text-[11px] sm:text-[12px]"
          }`}
        >
          {role}
        </p>

        {/* Name */}
        <h3
          className={`mt-1 font-bold leading-[1.25] text-[#1d1d1d] ${
            compact
              ? "text-[10px] sm:text-[11px]"
              : "text-[13px] sm:text-[14px]"
          }`}
        >
          {name}
        </h3>

        {/* Designation */}
        {designation && (
          <p
            className={`mt-1 font-serif leading-[1.4] text-[#5f5a53] ${
              compact
                ? "text-[8px] sm:text-[9px]"
                : "text-[10px] sm:text-[11px]"
            }`}
          >
            {designation}
          </p>
        )}
      </div>
    </div>
  );
};

export default CommitteeMemberCard;