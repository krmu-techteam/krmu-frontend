import Image from "next/image";
import Link from "next/link";

const ContactEnquiries = () => {
  return (
    <section className="bg-[url(/placements/contact-bg.webp)] bg-no-repeat bg-cover bg-center py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto lg:flex">
        <div className="lg:w-1/2 text-[#3d5fa5]">
          <h4 className="leading-[1.2] text-[45px] font-semibold mb-5">
            Contact and Inquiries
          </h4>
          <p className="mb-5">
            For further information or to get involved with our research
            endeavours, please contact our research department:
          </p>
          <p className="mb-10">
            Company Registration Form{" "}
            <Link
              href="https://tinyurl.com/krmu-2025"
              className="text-blue-700"
            >
              Link
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
              <span className="flex flex-col">
                <Link href="tel:+91-9289143055">(+91)-9289-1430-55</Link>
                <Link href="tel:+91-8800697009">(+91)-8800-6970-09</Link>{" "}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Image
                src="/placements/envelope-solid-full.svg"
                width={22}
                height={22}
                alt="phone"
              />{" "}
              <Link href="mailto:rdc@krmangalam.edu.in">
                rdc@krmangalam.edu.in
              </Link>{" "}
            </li>
          </ul>
          <h4 className="leading-[1.2] text-[45px] font-semibold my-5">
            Quick Links
          </h4>

          <div className="flex gap-10 flex-wrap">
            <Link href="https://dst.gov.in/call-for-proposals" target="_blank" rel="noopener noreferrer">
              DST
            </Link>
            <Link
              href="https://dbtindia.gov.in/whats-new/call-for-proposals"
              target="_blank" rel="noopener noreferrer"
            >
              DBT
            </Link>
            <Link
              href="https://main.icmr.nic.in/call%20for%20proposals"
              target="_blank" rel="noopener noreferrer"
            >
              ICMR
            </Link>
            <Link href="https://www.birac.nic.in/" target="_blank" rel="noopener noreferrer">
              BIRAC
            </Link>
            <Link href="https://icssr.org/" target="_blank" rel="noopener noreferrer">
              ICSSR
            </Link>
            <Link href="https://www.who.int/" target="_blank" rel="noopener noreferrer">
              WHO
            </Link>
            <Link href="https://www.csir.res.in/" target="_blank" rel="noopener noreferrer">
              CSIR
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2"></div>
      </div>
    </section>
    // <section className="bg-[url(/placements/contact-bg.webp)] bg-no-repeat bg-cover bg-center py-[30px] px-4">
    //   <div className="max-w-[1664px] mx-auto lg:flex">
    //     <div className="lg:w-1/2 text-[#3d5fa5]">
    //       <h4 className="leading-[1.2] text-3xl sm:text-[45px] font-semibold mb-5">
    //         Contact and Inquiries
    //       </h4>
    //       <p className="mb-5">
    //         For any queries related to placements, internship opportunities, or
    //         industry collaborations, please reach out to our dedicated Career
    //         Development Centre. We are here to assist students, recruiters, and
    //         industry partners in building successful career pathways and
    //         fostering meaningful connections.
    //       </p>
    //       <p className="mb-10">
    //         Company Registration Form{" "}
    //         <Link
    //           href="https://tinyurl.com/krmu-2025"
    //           className="text-blue-700"
    //         >
    //           Link
    //         </Link>
    //       </p>
    //       <ul className="break-all">
    //         <li className="flex items-center gap-3 mb-2.5">
    //           <Image
    //             src="/placements/phone-solid-full.svg"
    //             width={22}
    //             height={22}
    //             alt="phone"
    //           />{" "}
    //           <Link href="tel:+91-9827085056">+91-9827085056</Link>{" "}
    //         </li>
    //         <li className="flex items-center gap-3">
    //           <Image
    //             src="/placements/envelope-solid-full.svg"
    //             width={22}
    //             height={22}
    //             alt="phone"
    //           />{" "}
    //           <Link href="mailto:director.cdc@krmangalam.edu.in">
    //             director.cdc@krmangalam.edu.in
    //           </Link>{" "}
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="lg:w-1/2"></div>
    //   </div>
    // </section>
  );
};

export default ContactEnquiries;
