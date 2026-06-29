import Image from "next/image";
import { CommitteeSectionProps } from "../types";

const CommitteeSection = ({
  committeeSection,
}: {
  committeeSection: CommitteeSectionProps;
}) => {
  const { heading, subHeading, imageUrl, members } = committeeSection;
  return (
    <section className="pt-[6%] pb-[9%] bg-[url(/bg-gradient.webp)]">
      <div className="max-w-[1530px] px-6 md:px-7 xl:px-16 mx-auto w-full text-white font-poppins ">
        <h2 className="text-3xl md:text-5xl mb-5 font-bold">{heading}</h2>
        <div className="flex pt-10">
          <div className="w-1/2">
            <h4 className="text-2xl">
              <strong>{subHeading}</strong>
            </h4>
            <br />
            <h5 className="mb-2.5">{members?.name}</h5>
            <h6>{members?.designation}</h6>
            <h4 className="my-2.5">Mob: {members?.mobile}</h4>
            <h4>Email: {members?.email}</h4>
          </div>
          <div className="w-1/2">
            <Image
              src={imageUrl}
              width={768}
              height={391}
              alt="NSS Committee"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
