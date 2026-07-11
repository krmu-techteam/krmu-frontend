import Image from "next/image";
import Link from "next/link";

const InterRelaionForAdmission = () => {
  return (
    <section className="break-all sm:break-normal pt-10 px-4 bg-[url(/inter-relation/bg-2.png)] bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <h4 className="text-[28px] font-semibold text-white mb-5">
            FOR ADMISSIONS – INTERNATIONAL STUDENTS
          </h4>
          <ul className="flex flex-wrap md:grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-10 text-white mb-10">
            <li>Visit Campus</li>
            <li>Talk to Counsellors</li>
            <li>Apply now</li>
            <li>Admission Open</li>
            <li>Fees Structure</li>
          </ul>
          <p className="text-white mb-5">
            For further details, please contact us at
            internationalrelations@krmangalam.edu.in
          </p>
          <Link href="tel:+91-9311227480" className="flex gap-5 text-white">
            <Image
              src="/inter-relation/phone-white.svg"
              width={16}
              height={16}
              alt="Call"
            />{" "}
            +91-9311227480
          </Link>
        </div>
        <div className="w-full lg:w-1/3">
          <Image
            src="/adm.webp"
            width={490}
            height={426}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default InterRelaionForAdmission;
