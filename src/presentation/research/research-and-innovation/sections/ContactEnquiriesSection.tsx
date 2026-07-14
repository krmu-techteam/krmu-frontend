import Image from "next/image";
import Link from "next/link";
import { ContactEnquiriesSectionProps } from "@/features/research/research-and-innovation/types";

const ContactEnquiriesSection = ({ contactEnquiriesSection }: { contactEnquiriesSection: ContactEnquiriesSectionProps }) => {
  const { title, description, companyRegistrationForm, phoneNumbers, email, quickLinks } = contactEnquiriesSection;
  return (
    <section className="bg-[url(/placements/contact-bg.webp)] bg-no-repeat bg-cover bg-center py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto lg:flex">
        <div className="lg:w-1/2 text-[#3d5fa5]">
          <h4 className="leading-[1.2] text-[45px] font-semibold mb-5">
            {title}
          </h4>
          <p className="mb-5 font-poppins">
           {description}
          </p>
          <p className="mb-10 font-poppins">
            {companyRegistrationForm.label}{" "}
            <Link
              href={companyRegistrationForm.url}
              className="text-blue-700"
            >
             {companyRegistrationForm.linkText}
            </Link>
          </p>
          
          <ul>
            <li className="flex gap-3 mb-5">
              <Image
                src="/placements/phone-solid-full.svg"
                width={22}
                height={22}
                alt="phone"
              />{" "}
             {phoneNumbers.numbers.map((number) => (
              <span key={number.number} className="flex flex-col font-poppins">
                <Link href={`tel:${number.number}`}>{number.formatted}</Link>
                {/* <Link href="tel:+91-8800697009">(+91)-8800-6970-09</Link>{" "} */}
              </span>
            ))}
            </li>
            <li className="flex items-center gap-3">
              <Image
                src="/placements/envelope-solid-full.svg"
                width={22}
                height={22}
                alt="phone"
              />{" "}
              <Link href={`mailto:${email.email}`} className="font-poppins">
                {email.email}
              </Link>{" "}
            </li>
          </ul>
          
          <h4 className="leading-[1.2] text-[45px] font-semibold my-5">
            Quick Links
          </h4>

          <div className="flex gap-10 font-poppins flex-wrap">
            {quickLinks.links.map((link) => (
              <Link key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </Link>
            ))} 
          </div>
        </div>
        <div className="lg:w-1/2"></div>
      </div>
    </section>
    
  );
};

export default ContactEnquiriesSection;
