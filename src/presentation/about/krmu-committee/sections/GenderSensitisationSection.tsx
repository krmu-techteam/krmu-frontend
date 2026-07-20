import SectionDivider from "@/components/common/SectionDivider";
import { GenderSensitisation } from "@/features/about/krmu-committee";
import { FileText } from "lucide-react";
import Link from "next/link";

type Props = GenderSensitisation;

const GenderSensitisationSection: React.FC<Props> = ({
  title,
  description,
  helpline,
  documents,
  committee,
}) => {
  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full flex gap-5 flex-col lg:flex-row px-6 md:px-8 xl:px-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <div className="bg-[#061623] text-white rounded-[4px] p-6 md:p-10 font-poppins">
            <h5 className="text-2xl font-semibold font-serif mb-5">{title}</h5>
            <p className="text-[16px] leading-relaxed">{description}</p>
          </div>
          <div className="bg-[#061623] text-white rounded-[4px] p-6 md:p-10 font-poppins">
            <h5 className="text-2xl font-semibold font-serif mb-5">
              {helpline?.title}
            </h5>
            <p>
              <strong>{helpline?.contactInfo?.label}</strong>:{" "}
              <Link
                href={`mailto:${helpline?.contactInfo?.value}`}
                className="hover:text-white/80 transition-colors"
              >
                {helpline?.contactInfo?.value}
              </Link>
            </p>

            <div className="mt-5 flex flex-col items-start gap-5">
              <Link
                href={documents?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0055A4] hover:bg-[#024583] transition-colors rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
                <FileText color="#fff" />
                {documents?.title}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#061623] text-white rounded-[4px] p-6 md:p-10 font-poppins">
          <h3 className="mb-5 text-2xl font-semibold font-serif">
            {committee?.title}
          </h3>
          <div className="table-1 transparent-table committee-table">
            <table>
              <thead>
                <tr>
                  <th className="text-left !px-4 !font-medium">Name</th>
                  <th className="text-left !px-4 !font-medium">Position</th>
                </tr>
              </thead>
              <tbody>
                {committee?.members?.map((member, idx) => (
                  <tr key={idx}>
                    <td className="!px-4">{member?.name}</td>
                    <td className="!px-4">{member?.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};
export default GenderSensitisationSection;
