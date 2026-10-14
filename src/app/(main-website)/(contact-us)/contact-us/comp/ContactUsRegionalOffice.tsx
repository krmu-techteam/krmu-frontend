import Link from "next/link";

const ContactUsRegionalOffice = () => {
    return (
        <section className="py-[60px] px-4 md:px-8 bg-[url(/contact-us/contactus-gradient.webp)] bg-cover bg-no-repeat bg-center">
            <div className="max-w-[1664px] mx-auto w-full text-white mb-8">
                <h2 className="text-3xl md:text-5xl font-semibold">
                    KRMU Regional Office
                </h2>
            </div>

            <div className="max-w-[1664px] mx-auto w-full flex flex-col xl:flex-row items-stretch gap-6 lg:gap-8 mb-6">
                {/* 3 Regional Offices */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {/* Bihar & Jharkhand */}
                    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 lg:p-6 flex flex-col justify-between text-white backdrop-blur-sm hover:border-white/20 transition-all">
                        <div>
                            <h3 className="text-base lg:text-lg font-semibold italic text-white mb-3">
                                Bihar & Jharkhand
                            </h3>
                            <div className="flex flex-col gap-1.5 text-sm text-white/80 leading-relaxed">
                                <p className="text-white font-medium">
                                    Mr. Chandan Kumar
                                </p>
                                <p className="text-white/70">
                                    Address : 115, Verma Centre, Boring Road,
                                    Chauraha, Patna, Bihar - 800001
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1 text-sm text-white/80">
                            <p>
                                Phone No :{" "}
                                <Link
                                    href="tel:+918800697016"
                                    className="hover:text-white underline-offset-2 hover:underline"
                                >
                                    8800697016
                                </Link>
                                {" / "}
                                <Link
                                    href="tel:+918800697017"
                                    className="hover:text-white underline-offset-2 hover:underline"
                                >
                                    8800697017
                                </Link>
                            </p>
                            <p>
                                email us at :{" "}
                                <Link
                                    href="mailto:bihar@krmangalam.edu.in"
                                    className="hover:text-white underline-offset-2 hover:underline break-all"
                                >
                                    bihar@krmangalam.edu.in
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Uttar Pradesh (Lucknow) */}
                    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 lg:p-6 flex flex-col justify-between text-white backdrop-blur-sm hover:border-white/20 transition-all">
                        <div>
                            <h3 className="text-base lg:text-lg font-semibold italic text-white mb-3">
                                Uttar Pradesh (Lucknow)
                            </h3>
                            <div className="flex flex-col gap-1.5 text-sm text-white/80 leading-relaxed">
                                <p className="text-white font-medium">
                                    Mr. Himanshu Gupta
                                </p>
                                <p className="text-white/70">
                                    Address : K.R. Mangalam World School, Ratan
                                    Khand, Near Rajani Khand, Sharda Nagar,
                                    Lucknow, Uttar Pradesh - 226012
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1 text-sm text-white/80">
                            <p>
                                Phone No :{" "}
                                <Link
                                    href="tel:+918800028285"
                                    className="hover:text-white underline-offset-2 hover:underline"
                                >
                                    8800028285
                                </Link>
                            </p>
                            <p>
                                email us at :{" "}
                                <Link
                                    href="mailto:uttarpradesh@krmangalam.edu.in"
                                    className="hover:text-white underline-offset-2 hover:underline break-all"
                                >
                                    uttarpradesh@krmangalam.edu.in
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Punjab, Himachal Pradesh, J&K, Uttarakhand */}
                    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 lg:p-6 flex flex-col justify-between text-white backdrop-blur-sm hover:border-white/20 transition-all">
                        <div>
                            <h3 className="text-base lg:text-lg font-semibold italic text-white mb-3">
                                Punjab, Himachal Pradesh, J&K, Uttarakhand
                            </h3>
                            <div className="flex flex-col gap-1.5 text-sm text-white/80 leading-relaxed">
                                <p className="text-white font-medium">
                                    Mr. Kishore Joshi
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1 text-sm text-white/80">
                            <p>
                                Phone No :{" "}
                                <Link
                                    href="tel:+919311256334"
                                    className="hover:text-white underline-offset-2 hover:underline"
                                >
                                    +91-9311256334
                                </Link>
                            </p>
                            <p>
                                email us at :{" "}
                                <Link
                                    href="mailto:punjab@krmangalam.edu.in"
                                    className="hover:text-white underline-offset-2 hover:underline break-all"
                                >
                                    punjab@krmangalam.edu.in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="w-full xl:w-[320px] 2xl:w-[360px] flex-shrink-0 h-[260px] sm:h-[300px] xl:h-auto min-h-[260px] rounded-xl overflow-hidden border border-white/10 shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.8824400955473!2d77.0672720760068!3d28.271581300379378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d25a4b2bc03f9%3A0x9f642d679654b239!2sK.R.%20Mangalam%20University!5e0!3m2!1sen!2sin!4v1765689227786!5m2!1sen!2sin"
                        className="w-full h-full min-h-[260px]"
                        style={{ border: "0" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUsRegionalOffice;
