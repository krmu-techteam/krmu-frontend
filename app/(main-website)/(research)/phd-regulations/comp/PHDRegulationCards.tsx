import Image from "next/image";
import Link from "next/link";

const PHDRegulationCards = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-16">
        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center text-white rounded-[40px]">
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <div className="hover:text-[#2d7cc1]">
                <strong>Call for Ph.D. Admission</strong>
              </div>{" "}
              <Image
                src="/research/new-icon-gif-animation-14.gif"
                width={62}
                height={44}
                alt="new gif"
                className="absolute right-0 lg:-right-[70px] -top-8 md:top-0"
              />
            </li>
            <li>
              <Link
                className="hover:text-[#2d7cc1]"
                href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/3_R_May_Ph_D_Admission_advertisement_Details_O_2025_26_0c9d6653bd.pdf"
              >
                <strong>Odd Semester 2026-27</strong>
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#2d7cc1]"
                href="https://krmangalam.edu.in/pdfs/5R-Ph-D-Admission-advertisement-Details-E-2025-26.pdf"
              >
                <strong>Even Semester 2025-26</strong>
              </Link>
            </li>
            {/* <li>
              <Link
                className="hover:text-[#2d7cc1]"
                href="https://www.krmangalam.edu.in/pdfs/6R-Ph.D-Admission-advertisement-Details-O-2025-26-1.pdf"
              >
                <strong>ODD Semester 2025-26</strong>
              </Link>
            </li> */}
            {/* <li>
              <Link
                className="hover:text-[#2d7cc1]"
                href="https://www.krmangalam.edu.in/wp-content/uploads/2024/08/Odd-Semester-2024-25-3rd-Call-1.pdf"
              >
                <strong>Call for Ph.D. Admission</strong>
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center text-white rounded-[40px]">
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <Link href="/PDF/regulations-2" className="hover:text-[#2d7cc1]">
                <strong>Ph.D. Regulations and SoPs for Ph.D. Programmes</strong>
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center text-white rounded-[40px]">
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <Link href="/PDF/syllabus" className="hover:text-[#2d7cc1]">
                <strong>Ph.D. Entrance Exam Syllabus</strong>
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center text-white rounded-[40px]">
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <Link
                href="https://www.krmangalam.edu.in/pdfs/list-of-existing-research-scholars.pdf"
                className="hover:text-[#2d7cc1]"
              >
                <strong>Presently enrolled Ph.D. Research Scholars</strong>
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center text-white rounded-[40px]">
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <Link
                // href="https://www.krmangalam.edu.in/wp-content/uploads/2024/10/Ph.D.-Programme-Course-Handbook.pdf"
                href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Revised_Ph_D_coursework_structure_w_e_f_Academic_Year_2025_26_0030f5c17e.pdf"
                className="hover:text-[#2d7cc1]"
              >
                <strong>Ph.D. Programme Course Handbook</strong>
              </Link>{" "}
            </li>
          </ul>
        </div>

        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center text-white rounded-[40px]">
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <Link
                href="/PDF/phd-submission-checklist"
                className="hover:text-[#2d7cc1]"
              >
                <strong>Ph.D. Submission Checklist</strong>
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center text-white rounded-[40px]">
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <Link
                href="https://www.krmangalam.edu.in/pdfs/list-eligible-supervisors.pdf"
                className="hover:text-[#2d7cc1]"
              >
                <strong>List of Eligible Ph.D. Supervisor</strong>
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex items-center justify-center text-white rounded-[40px]">
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <Link
                href="/PDF/list-of-ph-d-awarded"
                className="hover:text-[#2d7cc1]"
              >
                <strong>List of Ph.D. Awarded</strong>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full break-all  items-center justify-center pt-10">
        <div className="bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat bg-center p-5 flex flex-col items-center justify-center text-white rounded-[40px]">
          <div className="relative mb-2.5">
            <span className="text-2xl">
              <strong>Contact us</strong>
            </span>{" "}
          </div>
          <ul className="text-center flex flex-col gap-2.5 text-lg">
            <li className="relative">
              <Link
                href="mailto:phdadmissions@krmangalam.edu.in"
                className="hover:text-[#2d7cc1]"
              >
                <strong>phdadmissions@krmangalam.edu.in</strong>
              </Link>{" "}
            </li>
            <li className="relative">
              <Link
                href="mailto:rdc@krmangalam.edu.in"
                className="hover:text-[#2d7cc1]"
              >
                <strong>rdc@krmangalam.edu.in</strong>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PHDRegulationCards;
