import Link from "next/link";
import { ContactSectionProps } from "../types";

const ContactSection = ({
  contactSection,
}: {
  contactSection: ContactSectionProps;
}) => {
  const { heading, description, contacts, callToAction } = contactSection;
  return (
    <section className="py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto font-poppins text-white w-full px-6 md:px-7 xl:px-16">
        <h4 className="text-4xl font-semibold mb-5">{heading}</h4>
        <p>{description}</p>
        <br />
        <p>
          Email:{" "}
          {contacts?.map((contact, idx) => {
            return (
              <Link
                key={idx}
                href={contact?.href || ""}
                className="hover:text-blue-600"
              >
                {contact?.value}
                {idx !== contacts.length - 1 && <br />}
              </Link>
            );
          })}
        </p>
        <br />
        <p>
          <strong>{callToAction.text}</strong>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
