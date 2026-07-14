import Image from "next/image";
import Link from "next/link";
import { AwardsSectionProps } from "@/features/life-at-krmu/community-connect/types";

const AwardsSection = ({
  awardsSection,
}: {
  awardsSection: AwardsSectionProps;
}) => {
  const { heading, imageUrl, awards } = awardsSection;

  return (
    <section className="py-[60px] bg-[url(/gradient-4.webp)] font-poppins bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
        <div>
          <h4 className="text-2xl mb-10 text-white font-semibold text-center">
            {heading}
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className=" w-full lg:w-1/2">
            <Image src={imageUrl} width={768} height={360} alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="overflow-x-auto">
              <table className="  border border-black border-collapse bg-[#e7eaed] text-black">
                <thead>
                  <tr>
                    {awards?.headers?.map((header, idx) => {
                      return (
                        <th
                          key={idx}
                          className="border border-black p-2 font-bold bg-[#e7eaed]"
                        >
                          {header}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody>
                  {awards.records.map((record, idx) => (
                    <tr key={idx}>
                      <td className="border p-2">{record.awardTitle}</td>

                      {record.awardingOrganization && (
                        <td
                          className="border p-2"
                          rowSpan={record.rowSpan ?? 1}
                        >
                          {record.awardingOrganization}
                        </td>
                      )}

                      <td className="border p-2">{record.yearOfAward}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-10">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeC0NIGoHcymc2_V1TsHViBi2SMsITtGPwtbp1-rr6HXCLejg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="py-[13px] px-[29px] bg-[#cb000d] text-white rounded-[4px] font-semibold"
          >
            NSS Registration Form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
