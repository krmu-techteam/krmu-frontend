import SectionDivider from "@/components/common/SectionDivider";
import { InternalComplaints } from "@/features/about/krmu-committee";
import { FileText } from "lucide-react";
import Link from "next/link";

type Props = InternalComplaints;

const InternalComplaintsSection: React.FC<Props> = ({
  title,
  descriptions,
  committee,
  helpline,
  documents,
  complaintButton,
  importantLinks,
}) => {
  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full flex gap-5 flex-col lg:flex-row px-6 md:px-7 xl:px-16">
        <div className="w-full lg:w-1/2 p-6 md:p-10 bg-[#061623] text-white rounded-[4px] font-poppins">
          <h3 className="mb-5 text-2xl font-semibold font-serif">{title}</h3>
          {descriptions?.map((desc, idx) => (
            <p
              key={idx}
              className={
                idx > 0
                  ? "mt-4 text-[16px] leading-relaxed"
                  : "text-[16px] leading-relaxed"
              }
            >
              {desc}
            </p>
          ))}
        </div>
        <div className="w-full lg:w-1/2 bg-[#061623] text-white rounded-[4px] p-6 md:p-10 font-poppins">
          <h3 className="mb-5 text-2xl font-semibold font-serif">
            {committee?.title}
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
                {committee?.members?.map((member, idx) => (
                  <tr key={idx}>
                    <td className="!px-4">{member.name}</td>
                    <td className="!px-4">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="max-w-[1530px] mx-auto px-6 md:px-7 xl:px-16 w-full mt-10">
        <div className="bg-[#061623] rounded-[4px] p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16 font-poppins">
          <div className="lg:w-1/2 text-white">
            <h4 className="text-xl font-semibold mb-5">{helpline?.title}</h4>
            <p>
              <strong>{helpline?.contactInfo?.label}</strong>:{" "}
              <Link
                href={`mailto:${helpline?.contactInfo?.value}`}
                className="hover:text-white/80 transition-colors"
              >
                {helpline?.contactInfo?.value}
              </Link>
            </p>

            <div className="my-5 flex flex-col items-start gap-5">
              <Link
                href={documents?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0055A4] hover:bg-[#024583] transition-colors rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
                <FileText color="#fff" />
                {documents?.title}
              </Link>
              {complaintButton && (
                <Link
                  href={complaintButton.url}
                  className="py-[13px] px-[29px] text-base text-white bg-[#0055A4] hover:bg-[#024583] transition-colors rounded-[4px] block w-fit leading-[1] font-medium"
                >
                  {complaintButton.title}
                </Link>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 text-white">
            <h4 className="text-xl font-semibold mb-5">Important Links:</h4>
            <div className="my-5 flex flex-col items-start gap-5">
              {importantLinks?.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-[13px] px-[29px] text-base text-white bg-[#0055A4] hover:bg-[#024583] transition-colors rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
                >
                  <FileText color="#fff" />
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default InternalComplaintsSection;
