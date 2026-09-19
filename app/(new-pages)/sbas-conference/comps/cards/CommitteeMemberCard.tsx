import Image from "next/image";

type CommitteeMemberCardProps = {
  name: string;
  designation: string;
  role: string;
  image: string;
};

const CommitteeMemberCard = ({
  name,
  designation,
  role,
  image,
}: CommitteeMemberCardProps) => {
  return (
    <article className="bg-white p-3 sm:p-4 rounded-[10px] border border-[#D1C9B8] overflow-hidden">
      <div className="mb-2">
        <Image
          src={image}
          width={140}
          height={140}
          alt={name}
          className="w-full h-auto aspect-square object-cover rounded-sm"
        />
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <h4 className="font-lora text-sm font-bold text-[#1C2822] leading-snug">
          {name}
        </h4>

        <p className="text-xs text-[#44504A] leading-4">
          {designation}
        </p>

        <p className="text-[9px] font-bold text-[#a9812f] tracking-[1px] leading-3">
          {role}
        </p>
      </div>
    </article>
  );
};

export default CommitteeMemberCard;