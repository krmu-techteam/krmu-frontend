import Image from "next/image";
import { instrumentSerif, inter } from "../lib/font";

export default function ProgrammeSection() {
  return (
    <section className="w-full bg-[#0f5f99] py-10 md:py-16 px-4">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-6">
        {/* LEFT IMAGE CARD */}
        <div className="overflow-hidden rounded-2xl flex items-center justify-center relative">
          <Image
            src="/wp-content/semce/ma.webp"
            alt="MA in Journalism"
            fill
            className="object-cover object-top z-10"
          />
        </div>

        {/* RIGHT CONTENT CARD */}
        <div className="bg-[#f3f3f3] rounded-2xl p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h2
              className={`text-2xl md:text-[40px] font-medium leading-snug mb-6 text-center md:text-left ${instrumentSerif.className}`}
            >
              Programme: MA in Journalism, <br className="hidden sm:block" /> Digital Media and the Creator
              Economy
            </h2>

            <div
              className={`space-y-2 text-gray-700 text-sm md:text-xl ${inter.className}`}
            >
              <p>
                <span className="font-semibold text-black">
                  Degree awarded:
                </span>{" "}
                MA (Journalism & Mass Communication)
              </p>

              <p>
                <span className="font-semibold text-black">Duration:</span> 2
                years (4 semesters)
              </p>

              <p>
                <span className="font-semibold text-black">Format:</span> Full
                time • On campus
              </p>

              <p>
                <span className="font-semibold text-black">School:</span> School
                of Emerging Media & Creator Economy (SEMCE)
              </p>

              <p>
                <span className="font-semibold text-black">Location:</span> K.R.
                Mangalam University, Gurugram, Delhi NCR
              </p>

              <p>
                <span className="font-semibold text-black">Eligibility:</span>{" "}
                Bachelor’s degree in any discipline from a UGC recognised
                university with minimum 50% aggregate
              </p>

              <p>
                <span className="font-semibold text-black">
                  Annual Academic Fee (BA JMC core programme):
                </span>{" "}
                ₹X,XX,XX per year*
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <button className="border-2 border-red-500 text-red-500 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition text-xl">
              Apply Now
            </button>

            <button className="#cb000d text-white font-semibold px-6 py-3 rounded-lg hover:#cb000d transition text-xl">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
