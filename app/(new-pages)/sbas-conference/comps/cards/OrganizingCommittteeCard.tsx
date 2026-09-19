import Image from "next/image";

type OrganizingCommitteeMember = {
  name: string;
  role: string;
  designation: string;
  university: string;
  image: string;
};

type OrganizingCommittteeCardProps = {
  member: OrganizingCommitteeMember;
};

const OrganizingCommittteeCard = ({
  member,
}: OrganizingCommittteeCardProps) => {
  return (
    <article className="bg-white overflow-hidden w-full sm:max-w-[194px] rounded-sm">
      <div>
        <Image
          src={member.image}
          width={195}
          height={195}
          alt={member.name}
          className="w-full h-auto aspect-square object-cover"
        />
      </div>

      <div className="px-4 sm:px-[18px] pt-3.5 pb-5 sm:pb-6 space-y-2">
        <h5 className="font-lora font-bold text-sm text-[#1C2822] leading-snug">
          {member.name}
        </h5>

        <h6 className="text-[9px] text-[#a9812f] font-bold tracking-[1px] leading-3">
          {member.role}
        </h6>

        <p className="text-[11px] text-[#44504a] leading-4">
          {member.designation} {member.university}
        </p>
      </div>
    </article>
  );
};

export default OrganizingCommittteeCard;