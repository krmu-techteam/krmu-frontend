import Image from "next/image";
import Link from "next/link";
import { CDCTeamMemberData } from "../constant";


interface CDCTeamMemberProps {
  member: CDCTeamMemberData;
}

const CDCTeamMember = ({ member }: CDCTeamMemberProps) => {
  return (
    <div className="font-poppins">
      <Image
        src={member.image}
        alt={member.imageAlt}
        width={264}
        height={264}
        className="h-auto w-full max-w-[264px] object-cover"
      />

      <div className="mt-5 text-sm">
        <h5 className="font-newsreader text-[22px] font-semibold leading-tight">
          {member.name}
        </h5>

        <h6 className="mt-1">{member.designation}</h6>

        <Link
          href={`mailto:${member.email}`}
          className="break-all hover:underline"
        >
          {member.email}
        </Link>
      </div>
    </div>
  );
};

export default CDCTeamMember;
