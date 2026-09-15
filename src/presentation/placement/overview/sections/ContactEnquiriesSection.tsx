import Image from "next/image";
import Link from "next/link";

const ContactEnquiriesSection = () => {
    return (
        <section className="relative z-5 pt-2 md:pt-8">
            <div className="relative w-full">
                {/* Main Card Container using contact-bg-placement.png (bg-contain bg-left bg-no-repeat) */}
                {/* Main Card Container using contact-bg-placement.png */}
                <div
                    className="relative w-full min-h-[420px] md:min-h-[480px] rounded-[10px] overflow-hidden flex flex-col md:flex-row items-center bg-cover md:bg-contain bg-no-repeat bg-center md:bg-left bg-[#05172a]"
                    style={{
                        backgroundImage:
                            "url('/images/placement/contact-bg-placement.png')",
                    }}
                >
                    {/* Subtle mobile overlay for maximum legibility */}
                    <div className="absolute inset-0 bg-[#001732]/70 md:bg-transparent z-0 pointer-events-none" />

                    {/* Girl Cutout Image: visible on desktop/tablet to avoid overlapping text on mobile */}
                    <div className="hidden md:block absolute md:left-2 lg:left-8 xl:left-12 bottom-0 w-[340px] lg:w-[400px] xl:w-[440px] h-[380px] lg:h-[440px] xl:h-[480px] z-10 pointer-events-none">
                        <Image
                            src="/images/placement/girl -contact.png"
                            alt="K.R. Mangalam University Career Development Centre - Contact and Placement Enquiries"
                            fill
                            className="object-contain object-left-bottom"
                            priority
                        />
                    </div>

                    {/* Text Content Column */}
                    <div className="w-full md:w-9/12 md:ml-[28%] lg:ml-[36%] xl:ml-[32%] 2xl:ml-[24%] p-6 sm:p-8 md:p-12 text-white z-20 flex flex-col justify-center">
                        <h2 className="font-poppins font-bold text-2xl sm:text-3xl xl:text-[36px] text-white mb-4">
                            Contact & Inquiries
                        </h2>

                        <p className="font-poppins text-white/90 text-xs sm:text-[13px] xl:text-[14px] leading-relaxed font-light mb-6 max-w-md xl:max-w-lg">
                            For any queries related to placements, internship
                            opportunities, or Industry collaborations, please
                            reach out to our dedicated Career Development
                            Centre. We are here to assist students, recruiters,
                            and industry partners in building successful career
                            pathways and fostering meaningful connections.
                        </p>

                        {/* Bullet List for Contact Details */}
                        <ul className="space-y-2 text-white font-poppins text-xs sm:text-sm md:text-[16px] font-light mb-6">
                            <li className="flex items-center gap-2">
                                <span className="text-white">•</span>
                                <a
                                    href="tel:+91-9827085056"
                                    className="hover:text-white transition-colors"
                                >
                                    +91-9827085056
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-white">•</span>
                                <a
                                    href="mailto:director.cdc@krmangalam.edu.in"
                                    className="hover:text-white transition-colors"
                                >
                                    director.cdc@krmangalam.edu.in
                                </a>
                            </li>
                        </ul>

                        {/* Registration Link */}
                        <div>
                            <Link
                                href="https://tinyurl.com/krmu-2025"
                                target="_blank"
                                className="text-[#008CFF] hover:underline font-poppins text-sm md:text-[16px] font-medium inline-block transition-colors"
                            >
                                Company Registration
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactEnquiriesSection;
