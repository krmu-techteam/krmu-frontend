import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUsRegionalOffice = () => {
    return (
        <section className="py-[60px] px-4 bg-[url(/contact-us/contactus-gradient.webp)] bg-cover bg-no-repeat bg-center">
            <div className="max-w-[1664px] mx-auto w-full text-white">
                <h3 className="text-3xl md:text-5xl font-semibold mb-5">
                    KRMU Regional Office
                </h3>
            </div>
            <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row mb-10">
                <div className="lg:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="text-white">
                            <h6 className="leading-[4] text-lg font-semibold">
                                <em>Bihar & Jharkhand</em>
                            </h6>
                            <ul className="flex flex-col gap-1.5">
                                <li>
                                    Mr. Chandan Kumar <br />
                                    Address : 115, Verma Centre, Boring Road,
                                    Chwraha, Patna Bihar - 800001 <br />
                                    Phone No :{" "}
                                    <Link href="tel:+91-8800697016">
                                        8800697016
                                    </Link>
                                    /{" "}
                                    <Link href="tel:+91-8800697017">
                                        8800697017
                                    </Link>{" "}
                                    <br />
                                    email us at :{" "}
                                    <Link href="mailto:bihar@krmangalam.edu.in">
                                        bihar@krmangalam.edu.in
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-white">
                            <h6 className="leading-[4] text-lg font-semibold">
                                <em>Uttar Pradesh (Lucknow)</em>
                            </h6>

                            <ul>
                                <li>
                                    <li>
                                        Mr. Himanshu Gupta Address : K.R.
                                        Mangalam World School, Ratan Khand, Near
                                        Rajani Khand, Sharda Nagar, Lucknow,
                                        Uttar Pradesh - 226012 <br /> Phone No :{" "}
                                        <Link href="tel:+91-8800028285">
                                            8800028285
                                        </Link>{" "}
                                        <br /> email us at :{" "}
                                        <Link href="mailto:uttarpradesh@krmangalam.edu.in">
                                            uttarpradesh@krmangalam.edu.in
                                        </Link>
                                    </li>
                                </li>
                            </ul>
                        </div>

                        <div className="text-white">
                            <h6 className="leading-[4] text-lg font-semibold">
                                <em>
                                    Punjab, Himachal Pradesh, J&K,
                                    Uttarkhand{" "}
                                </em>
                            </h6>
                            <ul className="flex flex-col gap-1.5">
                                <li>
                                    Mr. Kishore Joshi <br /> Phone No:
                                    <Link href="tel:+91-9311256334">
                                        +91-9311256334
                                    </Link>{" "}
                                    <br /> email us at :
                                    <Link href="mailto:punjab@krmangalam.edu.in">
                                        punjab@krmangalam.edu.in
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4 mt-10 md:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.8824400955473!2d77.0672720760068!3d28.271581300379378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d25a4b2bc03f9%3A0x9f642d679654b239!2sK.R.%20Mangalam%20University!5e0!3m2!1sen!2sin!4v1765689227786!5m2!1sen!2sin"
                        height="400"
                        style={{ border: "0" }}
                        loading="lazy"
                        className="w-full md:w-[352px]"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUsRegionalOffice;
