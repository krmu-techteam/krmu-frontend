import NpfPopup from "@/app/(main-website)/components/NpfPopup";

const steps = [
  {
    step: "Step 1",
    title: "Start your application",
    description: "admissions.krmangalam.edu.in",
    gradient:
      "bg-[linear-gradient(106.65deg,#23789F_6.4%,#3F95BD_101.33%)]",
  },
  {
    step: "Step 2",
    title: "Payment",
    description: "Pay the required application fee of ₹1,000",
    gradient:
      "bg-[linear-gradient(105.87deg,#23789F_17.79%,#3F95BD_100%)]",
  },
  {
    step: "Step 3",
    title: "Entrance Test",
    description:
      "Appear for the K.R. Mangalam University Entrance Exam",
    gradient:
      "bg-[linear-gradient(105.82deg,#23789F_1.54%,#3F95BD_100%)]",
  },
  {
    step: "Step 4",
    title: "Personal Interview",
    description: "Attend our Faculty-Led Interview",
    gradient:
      "bg-[linear-gradient(105.82deg,#23789F_1.54%,#3F95BD_100%)]",
  },
  {
    step: "Step 5",
    title: "Admission Offer",
    description:
      "Receive the offer letter after a successful personal interview.",
    gradient:
      "bg-[linear-gradient(107.49deg,#23789F_2.54%,#3F95BD_100%)]",
  },
  {
    step: "Step 6",
    title: "Get Enrolled",
    description:
      "Embark on your journey with K.R. Mangalam University.",
    gradient:
      "bg-[linear-gradient(107.49deg,#23949F_2.54%,#3E95BB_100%)]",
  },
];

const AdmissionProcess = () => {
  return (
    <section className="bg-[url('/demo/admission-process.jpg')] bg-cover bg-center bg-no-repeat py-8 sm:py-12 md:py-16 lg:py-20 px-5">
      <div className="max-w-7xl mx-auto text-white">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold leading-none">
          Admission Process
        </h3>

        <p className="text-base md:text-lg lg:text-xl">
          Commence your Journey in just 6 simple steps
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 my-8 lg:my-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className={`${item.gradient} rounded-[5px] p-5 sm:min-h-[220px] flex flex-col`}
            >
              <div className="sm:mb-3 md:mb-5 sm:h-20">
                <h5 className="text-sm uppercase tracking-wide">
                  {item.step}
                </h5>

                <h4 className="mt-4 text-lg lg:text-xl font-semibold leading-tight">
                  {item.title}
                </h4>
              </div>

              <p className="text-sm leading-6 break-words">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          {/* <button className="">
            Enroll Now
          </button> */}
          <NpfPopup
                formId={`31c1452015d32698095f833b3e7eb9c5`}
                btnClass={`bg-[#DE0000] hover:bg-[#c70000] transition-colors rounded-[5px] px-6 py-3 text-sm md:text-base uppercase font-semibold inline-block npfWidget-31c1452015d32698095f833b3e7eb9c5`}
                btnText="Enroll Now"
                showIcon={false}
              />
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;