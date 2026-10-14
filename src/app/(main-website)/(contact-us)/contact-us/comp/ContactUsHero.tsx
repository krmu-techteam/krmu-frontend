import Link from "next/link";
import ContactUsForm from "./ContactUsForm";

const ContactUsHero = () => {
    return (
        <section className="pt-[140px] md:pt-[12%] pb-[5%] px-5 bg-[url(/contact-us/contact-us-bg.webp)] bg-cover bg-no-repeat bg-center">
            <div className="max-w-[1664px] mx-auto w-full">
                <div className="mb-8 md:mb-12 text-center md:text-left">
                    <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight font-poppins leading-tight">
                        Contact K.R. Mangalam University
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 md:gap-16 items-end">
                    <div className="lg:w-2/5">
                        <div>
                            <ContactUsForm />
                        </div>
                    </div>
                    <div className="lg:w-3/5">
                        <div className="text-white mb-5">
                            <h5 className="text-xl font-semibold mt-2.5 mb-4">
                                K.R. Mangalam University
                            </h5>
                            <p>Sohna Road, Gurugram, Haryana 122103</p>
                        </div>
                        <div className="text-white">
                            <h5 className="leading-[3.6] text-xl font-semibold">
                                For General/ Admission Related Enquiry:
                            </h5>
                            <div className="links">
                                Phone:{" "}
                                <Link href="tel:01148884888">01148884888</Link>,{" "}
                                <Link href="tel:8800697010">
                                    8800697010 – 15,
                                </Link>
                                <Link href="tel:8192888444">8192888444</Link>
                            </div>
                            <div className="links">
                                Email:{" "}
                                <Link href="mailto:welcome@krmangalam.edu.in">
                                    welcome@krmangalam.edu.in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsHero;
