import Image from "next/image";
import { Mail, FileText, ExternalLink } from "lucide-react";

const ProfileSection = () => {
    return (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            {/* ================= ONE UNIFIED BOX ================= */}
            <div className="border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* LEFT SIDE (PHOTO, CONTACT, PDF NOTIFICATION) */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center lg:border-r border-white/10 lg:pr-8 pb-8 lg:pb-0 border-b lg:border-b-0">
                        {/* Profile Photo */}
                        <div className="relative w-full max-w-[260px] aspect-[4/5] mx-auto rounded-xl overflow-hidden shadow-lg border border-white/15 mb-5 bg-[#07141E]">
                            <Image
                                src="https://krmangalam.edu.in/images/talwant-singh.jpeg"
                                alt="Hon'ble Justice Talwant Singh"
                                fill
                                priority
                                sizes="(max-width: 768px) 260px, 300px"
                                className="object-cover object-top"
                            />
                        </div>

                        {/* Profile Summary */}
                        <h3 className="text-xl font-bold font-serif text-white">
                            Hon’ble Justice Talwant Singh
                        </h3>
                        <p className="text-sm font-medium text-white/90 mt-1 tracking-wide uppercase">
                            Ombudsperson
                        </p>

                        <div className="w-full border-t border-white/10 my-4" />

                        {/* Email Contact */}
                        <div className="w-full group text-left bg-black/30 rounded-[4px] p-3 mb-4">
                            <span className="text-xs uppercase tracking-wider text-white font-medium block mb-1">
                                Contact Email
                            </span>
                            <a
                                href="mailto:ombudsman@krmangalam.edu.in"
                                className="flex items-center gap-2 text-sm text-white/90 group-hover:text-white transition-colors break-all"
                            >
                                <Mail className="w-4 h-4 shrink-0 text-white/90 group-hover:text-white" />
                                <span className="group-hover:text-white">
                                    ombudsman@krmangalam.edu.in
                                </span>
                            </a>
                        </div>

                        {/* PDF Notification Button */}
                        <a
                            href="https://www.krmangalam.edu.in/pdfs/appointment-of-ombudsperson-k-r-mangalam-university.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0060aa] hover:bg-[#0074ce] text-white py-3 px-4 rounded-[4px] text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg group text-center"
                        >
                            <FileText className="w-4 h-4 shrink-0" />
                            <span>
                                Notification of Appointment of Ombudsperson
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>

                    {/* RIGHT SIDE (HEADER & BIO CONTENT) */}
                    <div className="lg:col-span-8">
                        <div className="mb-6">
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20 px-3 py-1 rounded-full mb-3">
                                Ombudsperson
                            </span>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 leading-tight">
                                Hon’ble Justice Talwant Singh
                            </h2>

                            <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                                Former Judge, High Court of Delhi
                                <br />
                                Senior Advocate, Supreme Court of India
                            </p>

                            <div className="w-full border-t border-white/10 mt-6" />
                        </div>

                        {/* Bio Paragraphs */}
                        <div className="space-y-5 text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-poppins text-justify sm:text-left">
                            <p>
                                K.R. Mangalam University is pleased to announce
                                the appointment of Hon’ble Justice Talwant
                                Singh, Former Judge of the High Court of Delhi,
                                as the Ombudsperson for redressal of grievances
                                of students in accordance with the University
                                Grants Commission (Redressal of Grievances of
                                Students) Regulations, 2023.
                            </p>

                            <p>
                                Justice Talwant Singh is a distinguished legal
                                professional with over four decades of judicial
                                and legal experience. His judicial career
                                commenced as an Additional District &amp;
                                Sessions Judge, Delhi, in May 2000. He
                                subsequently served as District &amp; Sessions
                                Judge and was elevated as a permanent Judge of
                                the High Court of Delhi on 26 May 2019, serving
                                until his retirement on 3 June 2023.
                            </p>

                            <p>
                                He also served as the founding Chairman of the
                                Independent Delhi School Tribunal and as a
                                Member (Judicial) of the E-Committee of the
                                Hon’ble Supreme Court of India, contributing to
                                the computerisation of approximately 14,000
                                courts across India.
                            </p>

                            <p>
                                Presently, Justice Talwant Singh practises
                                before the Hon’ble Supreme Court of India as a
                                designated Senior Advocate and also serves as
                                Chairperson of the Appellate Authority under
                                C.A., C.S. &amp; C.W.A. Laws. He has extensive
                                experience in arbitration, constitutional,
                                civil, corporate, family, cyber and other areas
                                of law.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
