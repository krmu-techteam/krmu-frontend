import Image from "next/image";

export interface CDCTeamMember {
  id: number;
  name: string;
  designation: string;
  email: string;
  image: string;
}

interface CDCTeamCardProps {
  member: CDCTeamMember;
}

const CDCTeamCard = ({ member }: CDCTeamCardProps) => {
  return (
    <article className="min-w-0">
      {/* Image */}
      <div className="relative aspect-[1.08] w-full overflow-hidden bg-[#eee]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="pt-3">
        <h3 className="font-newsreader text-xl font-semibold leading-tight text-[#111] sm:text-[22px]">
          {member.name}
        </h3>

        <p className="mt-0.5 font-poppins text-[11px] leading-[1.45] text-[#222] sm:text-xs">
          {member.designation}
        </p>

        <a
          href={`mailto:${member.email}`}
          className="mt-1 block break-all font-poppins text-[10px] leading-[1.5] text-[#222] transition-colors hover:text-[#7A1F2B] sm:text-[11px]"
        >
          {member.email}
        </a>
      </div>
    </article>
  );
};

export default CDCTeamCard;
