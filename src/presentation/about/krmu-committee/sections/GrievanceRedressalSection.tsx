import { FileText } from "lucide-react";
import Link from "next/link";
import { GrievanceRedressal } from "@/features/about/krmu-committee";
import SectionDivider from "@/components/common/SectionDivider";

type Props = GrievanceRedressal;

const GrievanceRedressalSection: React.FC<Props> = ({
  title,
  descriptions,
  documents,
  committee,
  helpline,
}) => {
  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full flex gap-5 flex-col lg:flex-row px-6 md:px-8 xl:px-16">
        <div className="w-full lg:w-1/2 p-6 md:p-10 bg-[#061623] text-white rounded-[4px] font-poppins">
          <h3 className="mb-5 text-2xl font-semibold font-serif text-white">
            {title}
          </h3>
          {descriptions?.map((item, idx) => (
            <p key={idx} className="mb-3 text-[16px] leading-relaxed">
              {item}
            </p>
          ))}

          <div className="mt-6 flex flex-col gap-4">
            {documents?.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0055A4] hover:bg-[#024583] transition-colors rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
                <FileText color="#fff" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#061623] text-white rounded-[4px] p-6 md:p-10 font-poppins">
          <h3 className="mb-5 text-2xl font-semibold font-serif">
            {committee.title}
          </h3>
          <div className="table-1 transparent-table committee-table">
            <table width="100%">
              <thead>
                <tr>
                  <th className="text-left !px-4 !font-medium">Name</th>
                  <th className="text-left !px-4 !font-medium">Position</th>
                </tr>
              </thead>
              <tbody>
                {committee?.members?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="!px-4">{item.name}</td>
                    <td className="!px-4">{item.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="max-w-[1530px] mx-auto px-6 md:px-8 xl:px-16 w-full mt-10">
        <div className="bg-[#061623] rounded-[4px] p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16 font-poppins text-white">
          <div>
            <h4 className="text-xl font-semibold font-serif mb-5">
              {helpline.title}
            </h4>
            <p>
              <strong>{helpline.contactInfo.label}</strong>:{" "}
              <Link
                href={`mailto:${helpline.contactInfo.value}`}
                className="hover:text-white/80 transition-colors"
              >
                {helpline.contactInfo.value}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default GrievanceRedressalSection;
