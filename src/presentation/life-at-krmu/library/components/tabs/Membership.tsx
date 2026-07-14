import { LibraryContentProps } from "@/features/life-at-krmu/library";
import { MembershipGuidelines, MembershipHeader } from "../membership";

const Membership = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.membership) return null;
  const { tagLine, heading, description, membershipGuidelines } =
    libraryContent.membership;
  return (
    <div className="max-w-[1664px] font-poppins text-white mx-auto w-full libtabcontent ">
      <MembershipHeader
        tagLine={tagLine}
        heading={heading}
        description={description}
      />
      <MembershipGuidelines membershipGuidelines={membershipGuidelines} />
    </div>
  );
};

export default Membership;
