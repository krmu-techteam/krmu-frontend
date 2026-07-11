import { instrumentSerif } from "../lib/font";

export default function EligibilityAdmissionFees() {
  return (
    <section className="bg-[#f3f3f3] py-12 md:py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* TITLE */}
        <h2
          className={`text-3xl md:text-4xl lg:text-6xl ${instrumentSerif.className} text-center mb-10`}
        >
          Eligibility, admissions and fees
        </h2>

        {/* ELIGIBILITY */}
        <div className="mb-10 max-w-3xl">
          <h3 className="text-red-600 font-semibold mb-3 text-xl md:text-2xl">
            Eligibility
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm md:text-base">
            <li>
              Bachelor’s degree in any discipline from a UGC recognised
              university or equivalent institution
            </li>
            <li>Minimum 50 percent aggregate marks</li>
            <li>
              Strong interest in journalism, storytelling, media, digital
              content or related fields
            </li>
          </ul>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ADMISSION PROCESS */}
          <div className="bg-[#e31e24] text-white rounded-2xl p-6 sm:p-8 md:p-12 lg:pt-16 lg:pb-32 lg:px-16 border-2 border-[#2b7fbe]">
            <h3
              className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl italic text-center font-light mb-6 md:mb-10 ${instrumentSerif.className}`}
            >
              Admission process
            </h3>

            <ul className="space-y-3 list-disc text-sm md:text-base font-semibold">
              <li>Step 1 – Submit the online application form</li>
              <li>
                Step 2 – Appear for the university level selection process
                (test, portfolio review or interview)
              </li>
              <li>
                Step 3 – Receive admission offer, complete fee payment and
                document verification
              </li>
              <li>Step 4 – Attend orientation and begin classes</li>
            </ul>
          </div>

          {/* FEES */}
          <div className="bg-[#e31e24] text-white rounded-2xl p-6 sm:p-8 md:p-12 lg:pt-16 lg:pb-32 lg:px-16 border-2 border-[#2b7fbe]">
            <h3
              className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl italic text-center font-light mb-6 md:mb-10 ${instrumentSerif.className}`}
            >
              Fees and scholarships
            </h3>

            <p className="text-sm md:text-base mb-4">
              The MA programme runs for two years across four semesters. Fees
              are charged annually and paid semester wise.
            </p>

            <p className="font-semibold mb-4 text-sm md:text-base">
              Annual Academic Fee: ₹X,XX,XX per year
            </p>

            <p className="text-xs md:text-sm opacity-90">
              Hostel, transport and other facilities are charged separately.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-10">
          <button className="bg-[#1f679f] text-white p-5 md:p-8 text-lg md:text-2xl lg:text-3xl rounded-xl font-semibold w-full md:w-4/12">
            Apply Now
          </button>

          <button className="border-2 border-[#1f679f] text-[#1f679f] p-5 md:p-8 text-lg md:text-2xl lg:text-3xl rounded-xl font-semibold w-full md:w-8/12">
            Talk to an Academic Counsellor
          </button>
        </div>
      </div>
    </section>
  );
}