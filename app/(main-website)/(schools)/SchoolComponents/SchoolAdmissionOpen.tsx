import { Button } from "@/lib/types/home";
import Link from "next/link";

type Props = {
  title: string;
  admBtn: Button;
};

const SchoolAdmissionOpen = ({ title, admBtn }: Props) => {
  return (
    // <section className="px-4 sm:px-6 lg:px-8 opacity-90 bg-[linear-gradient(90deg,rgba(0,23,50,1)_0%,rgba(0,70,152,0)_51%,rgba(0,23,50,1)_97%)]">
    <section className="opacity-90 bg-[linear-gradient(90deg,rgba(0,70,152,0)_0%,#00173250.96%,#00173296.63%)]">
      <div className="max-w-[1664px] mx-auto">
        <div className="py-5 flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Heading */}
          <h3 className="text-center md:text-left text-lg sm:text-2xl lg:text-4xl font-medium leading-tight text-white">
            {title}
          </h3>

          {/* Button */}
          {(admBtn?.buttonlink || admBtn?.buttonclass) && (
            <Link
              href={admBtn?.buttonlink}
              className={`inline-flex items-center justify-center bg-[#cb000d] transition-all duration-300 px-8 py-2.5  text-base sm:text-md font-semibold text-white rounded-sm whitespace-nowrap ${admBtn.buttonclass}`}
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
