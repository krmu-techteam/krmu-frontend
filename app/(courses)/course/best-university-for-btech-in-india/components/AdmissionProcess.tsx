export default function AdmissionProcess() {
  return (
    <section id="admission-process" className="bg-[#f8fbff] pb-[80px] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="mt-3 text-3xl font-bold">
            Admission <span className="text-[#e31e24]">Process</span>
          </h2>

          <p className="text-gray-600">
            Commence your journey at the best private university for B.Tech. in
            India in just 6 simple steps
          </p>
        </div>

        {/* Image */}
        <div className="max-w-[1200px] mx-auto mb-4 hidden lg:block">
          <img
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/admission_process_1_fa594ef42d.webp"
            alt="Admission Process steps 01 to 06"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>

        {/* Steps */}
        <div className="flex justify-between max-w-[1050px] mx-[75px] lg:flex hidden">
          {/* Step 1 */}
          <div className="flex-1 w-[50px] text-center flex flex-col items-center">
            <div className="bg-[#e31e24] text-white px-3 py-2 rounded-full text-[11px] font-semibold mb-3 max-w-[150px] w-full shadow-[0_4px_10px_rgba(227,30,36,0.2)] whitespace-nowrap">
              Start your application
            </div>
            <p className="text-[11px] text-[#666] max-w-[160px] leading-[1.4]">
              admissions.krmangalam.edu.in
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 w-[50px] text-center flex flex-col items-center">
            <div className="bg-[#e31e24] text-white px-3 py-2 rounded-full text-[11px] font-semibold mb-3 max-w-[150px] w-full shadow-[0_4px_10px_rgba(227,30,36,0.2)] whitespace-nowrap">
              Payment
            </div>
            <p className="text-[11px] text-[#666] max-w-[160px] leading-[1.4]">
              Pay the required application fee of ₹1,000
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 w-[50px] text-center flex flex-col items-center">
            <div className="bg-[#e31e24] text-white px-3 py-2 rounded-full text-[11px] font-semibold mb-3 max-w-[150px] w-full shadow-[0_4px_10px_rgba(227,30,36,0.2)] whitespace-nowrap">
              Entrance Test
            </div>
            <p className="text-[11px] text-[#666] max-w-[160px] leading-[1.4]">
              Appear for the K.R. Mangalam University Entrance Exam
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex-1 w-[50px] text-center flex flex-col items-center">
            <div className="bg-[#e31e24] text-white px-3 py-2 rounded-full text-[11px] font-semibold mb-3 max-w-[150px] w-full shadow-[0_4px_10px_rgba(227,30,36,0.2)] whitespace-nowrap">
              Personal Interview
            </div>
            <p className="text-[11px] text-[#666] max-w-[160px] leading-[1.4]">
              Attend our Faculty-Led Interview
            </p>
          </div>

          {/* Step 5 */}
          <div className="flex-1 w-[50px] text-center flex flex-col items-center">
            <div className="bg-[#e31e24] text-white px-3 py-2 rounded-full text-[11px] font-semibold mb-3 max-w-[150px] w-full shadow-[0_4px_10px_rgba(227,30,36,0.2)] whitespace-nowrap">
              Admission Offer
            </div>
            <p className="text-[11px] text-[#666] max-w-[160px] leading-[1.4]">
              Receive the offer letter after a successful personal interview
            </p>
          </div>

          {/* Step 6 */}
          <div className="flex-1 w-[50px] text-center flex flex-col items-center">
            <div className="bg-[#e31e24] text-white px-3 py-2 rounded-full text-[11px] font-semibold mb-3 max-w-[150px] w-full shadow-[0_4px_10px_rgba(227,30,36,0.2)] whitespace-nowrap">
              Get Enrolled
            </div>
            <p className="text-[11px] text-[#666] max-w-[160px] leading-[1.4]">
              Embark on your journey with K.R. Mangalam University
            </p>
          </div>
        </div>

        {/* Mobile Grid (same as your CSS behavior) */}
        <div className="grid grid-cols-2 gap-[5px] m-[10px] lg:hidden">
          {[
            ["Start your application", "admissions.krmangalam.edu.in"],
            ["Payment", "Pay the required application fee of ₹1,000"],
            [
              "Entrance Test",
              "Appear for the K.R. Mangalam University Entrance Exam",
            ],
            ["Personal Interview", "Attend our Faculty-Led Interview"],
            [
              "Admission Offer",
              "Receive the offer letter after a successful personal interview",
            ],
            [
              "Get Enrolled",
              "Embark on your journey with K.R. Mangalam University",
            ],
          ].map((step, i) => (
            <div
              key={i}
              className="text-center flex flex-col items-center mb-3"
            >
              <div className="bg-[#e31e24] text-white px-3 py-2 rounded-full text-[11px] font-semibold mb-3 max-w-[150px] w-full shadow-[0_4px_10px_rgba(227,30,36,0.2)] whitespace-nowrap">
                {step[0]}
              </div>
              <p className="text-[11px] text-[#666] max-w-[160px]">{step[1]}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-2">
          <button className="bg-[#e31e24] text-white px-[35px] py-[12px] text-[18px] font-bold rounded-[8px] inline-flex items-center gap-[15px] shadow-[0_8px_25px_rgba(227,30,36,0.3)] hover:scale-105 hover:shadow-[0_10px_30px_rgba(227,30,36,0.4)] transition">
            Enroll Now
            <svg
              width="18"
              height="18"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
