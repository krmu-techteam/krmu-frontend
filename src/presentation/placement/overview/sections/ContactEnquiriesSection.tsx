import Image from "next/image";
import Link from "next/link";

const ContactEnquiriesSection = () => {
  return (
    <section className="bg-[url(/placements/contact-bg.webp)] bg-no-repeat bg-cover bg-center py-[30px] px-6 md:px-8 xl:px-16">
      <div className="max-w-[1530px] mx-auto lg:flex">
        <div className="lg:w-1/2">
          <h4 className="text-[#3d5fa5] leading-[1.2] text-[45px] font-bold mb-5">
            Contact and Inquiries
          </h4>
          <p className="mb-5 font-poppins">
            For any queries related to placements, internship opportunities, or
            industry collaborations, please reach out to our dedicated Career
            Development Centre. We are here to assist students, recruiters, and
            industry partners in building successful career pathways and
            fostering meaningful connections.
          </p>
          <p className="mb-10 font-poppins">
            Company Registration Form{" "}
            <Link
              href="https://tinyurl.com/krmu-2025"
              className="text-blue-700 hover:underline hover:text-blue-500"
            >
              Link
            </Link>
          </p>
          <ul>
            <li className="flex font-poppins items-center gap-3 mb-2.5">
              <Image
                src="/placements/phone-solid-full.svg"
                width={22}
                height={22}
                alt="phone"
              />{" "}
              <Link href="tel:+91-9827085056">+91-9827085056</Link>{" "}
            </li>
            <li className="flex items-center gap-3 font-poppins">
              <Image
                src="/placements/envelope-solid-full.svg"
                width={22}
                height={22}
                alt="phone"
              />{" "}
              <Link href="mailto:director.cdc@krmangalam.edu.in">
                director.cdc@krmangalam.edu.in
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2"></div>
      </div>
    </section>
  );
};

export default ContactEnquiriesSection;
