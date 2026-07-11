import { LibraryContentProps } from "../../types";

const MembershipHeader = ({
  tagLine,
  heading,
  description,
}: Pick<
  LibraryContentProps["membership"],
  "tagLine" | "heading" | "description"
>) => {
  return (
    <div className="">
      <p>{tagLine}</p>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
};
export default MembershipHeader;
