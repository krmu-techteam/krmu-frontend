import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

interface OfficialReport {
  year: string | number;
  title: string;
  pdfUrl: string;
}

interface OfficialReportsProps {
  reports: OfficialReport[];
}

const OfficialReports = ({ reports }: OfficialReportsProps) => {
  return (
    <div className="w-full">
      <h2 className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#7A1F2B] mb-6 sm:mb-8 md:mb-10">
        Official Reports
      </h2>

      <div>
        {reports.map((report) => (
          <div
            key={report.year}
            className="
              flex flex-col sm:flex-row
              sm:items-center
              justify-between
              gap-4
              border-b border-[#d8d8d8]
              py-6 sm:py-8 md:py-10
              first:pt-0
            "
          >
            <h3 className="font-newsreader text-2xl sm:text-3xl text-[#12233F] font-normal">
              {report.title}
            </h3>

            <Link
              href={report.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5
                text-sm sm:text-base
                tracking-[0.1em] sm:tracking-[0.15em]
                text-black
                whitespace-nowrap
                hover:opacity-70
                transition-opacity
              "
            >
              Download PDF
              <ArrowDownToLine size={15} strokeWidth={2} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialReports;