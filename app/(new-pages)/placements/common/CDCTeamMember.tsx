import { CDCTeamMember as CDCMember } from "@/app/(krmu-backend)/lib/api/cdc-team/cdc-team.types";
import Image from "next/image";
import Link from "next/link";

interface CDCTeamMemberProps {
  member: CDCMember;
}

const FALLBACK_IMAGE = "/images/placeholder-person.jpg";

const CDCTeamMember = ({ member }: CDCTeamMemberProps) => {
  const imageSrc = member.image?.trim() || FALLBACK_IMAGE;
  const name = member.name?.trim() || "CDC Team Member";
  const designation = member.designation?.trim();
  const email = member.email?.trim();

  return (
    <article className="font-poppins">
      <div className="relative aspect-square w-full max-w-[264px] overflow-hidden rounded-md bg-gray-100">
        <Image
          src={imageSrc}
          alt={`${name}${designation ? ` - ${designation}` : ""}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 264px"
          className="object-cover"
        />
      </div>

      <div className="mt-5 text-sm">
        <h5 className="font-newsreader text-[22px] font-semibold leading-tight">
          {name}
        </h5>

        {designation && <h6 className="mt-1">{designation}</h6>}

        {email && (
          <Link
            href={`mailto:${email}`}
            className="block break-all hover:underline"
          >
            {email}
          </Link>
        )}
      </div>
    </article>
  );
};

export default CDCTeamMember;
