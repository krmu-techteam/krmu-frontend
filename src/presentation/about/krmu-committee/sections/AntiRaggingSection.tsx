import { AntiRagging } from "@/features/about/krmu-committee/committee.types";
import { FileText } from "lucide-react";
import Link from "next/link";
import SectionDivider from "@/components/common/SectionDivider";

type Props = AntiRagging;

const AntiRaggingSection: React.FC<Props> = ({
  title,
  descriptions,
  documents,
  complaintButton,
  committee,
  helpline,
}) => {
  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full flex gap-5 flex-col lg:flex-row px-6 md:px-8 xl:px-16">
        <div className="w-full lg:w-1/2 p-6 md:p-10 bg-[#061623] text-white rounded-[4px] font-poppins">
          <h3 className="mb-5 text-2xl font-semibold font-serif">{title}</h3>
          {descriptions?.map((item: string, idx: number) => (
            <p key={idx} className="text-[16px] leading-relaxed mt-2.5">
              {item}
            </p>
          ))}

          <div className="flex flex-col gap-4 mt-6">
            {documents?.map(
              (item: { title: string; url: string }, idx: number) => (
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
              ),
            )}

            {complaintButton && (
              <Link
                href={complaintButton?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0055A4] hover:bg-[#024583] transition-colors rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
                {complaintButton?.title}
              </Link>
            )}
          </div>
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
                {committee?.members?.map((member, idx: number) => (
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
      <div className="max-w-[1530px] mx-auto px-6 md:px-8 xl:px-16 w-full mt-10">
        <div className="bg-[#061623] rounded-[4px] p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 font-poppins text-white">
          <div className="w-full lg:w-1/3">
            <h4 className="text-xl font-semibold mb-5 font-serif">
              {helpline?.memberSecretary?.heading}
            </h4>
            <p>
              <strong>{helpline?.memberSecretary?.contact?.label}</strong>:{" "}
              <span className="text-white/90">
                {helpline?.memberSecretary?.contact?.value}
              </span>
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className="text-xl font-semibold mb-5 font-serif">
              University Helpline
            </h4>
            <p>
              <strong>{helpline?.university?.contact.emailLabel}</strong>:{" "}
              <Link
                href={`mailto:${helpline?.university?.contact.emailValue}`}
                className="hover:text-white/80 transition-colors"
              >
                {helpline?.university?.contact.emailValue}
              </Link>
            </p>
            <p className="mt-2.5">
              <strong>{helpline?.university?.contact.phoneLabel}</strong>:{" "}
              <span className="text-white/90">
                {helpline?.university?.contact.phoneValue}
              </span>
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className="text-xl font-semibold mb-5 font-serif">
              UGC Helpline Support
            </h4>
            <p>
              <strong>{helpline?.ugc?.contact.label}</strong>:{" "}
              <Link
                href={`mailto:${helpline?.ugc?.contact.value}`}
                className="hover:text-white/80 transition-colors"
              >
                {helpline?.ugc?.contact.value}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default AntiRaggingSection;
