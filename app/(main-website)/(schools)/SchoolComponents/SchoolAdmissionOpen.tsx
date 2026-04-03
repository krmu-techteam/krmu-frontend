import { Button } from "@/lib/types/home";
import Link from "next/link";

type Props = {
  title: string;
  admBtn: Button;
};

const SchoolAdmissionOpen = ({ title, admBtn }: Props) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto">
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Heading */}
          <h3 className="text-center md:text-left text-xl sm:text-2xl lg:text-5xl font-semibold leading-tight text-white">
            {title}
          </h3>

          {/* Button */}
          {(admBtn?.buttonlink || admBtn?.buttonclass) && (
            <Link
              href={admBtn?.buttonlink}
              className={`inline-flex items-center justify-center bg-[#cb000d] transition-all duration-300 px-8 py-3 text-base sm:text-lg font-semibold text-white rounded-lg whitespace-nowrap ${admBtn.buttonclass}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {admBtn?.buttontext}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default SchoolAdmissionOpen;
