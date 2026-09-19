import Image from "next/image";

type ConferenceSteeringCommitteeMember = {
  name: string;
  role: string;
  designation: string;
  university: string;
  image: string;
};

type ConferenceSteeringCommitteeCard2Props = {
  member: ConferenceSteeringCommitteeMember;
};

const ConferenceSteeringCommitteeCard2 = ({
  member,
}: ConferenceSteeringCommitteeCard2Props) => {
  return (
    <article className="rounded-[10px] bg-white border border-[#D1C9B8] overflow-hidden p-3 sm:p-4">
      <div className="mb-2">
        <Image
          src={member.image}
          width={151}
          height={119}
          alt={member.name}
          className="w-full h-auto aspect-[151/119] object-cover rounded-sm"
        />
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <h4 className="text-sm font-bold font-lora text-[#1c2822] leading-snug">
          {member.name}
        </h4>

        <p className="text-[9px] text-[#a9812f] font-bold tracking-[1px] leading-3">
          {member.role}
        </p>

        <p className="text-xs text-[#44504a] leading-4">
          {member.designation} {member.university}
        </p>
      </div>
    </article>
  );
};

export default ConferenceSteeringCommitteeCard2;