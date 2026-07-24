const AdmissionProcess = () => {
  return (
    <section className="bg-[url(/demo/admission-process.jpg)] bg-cover bg-no-repeat bg-center py-20">
      <div className="max-w-7xl mx-auto text-white">
        <h3 className="text-[46px] leading-tight font-bold">
          Admission Process
        </h3>
        <p className="text-xl">Commence your Journey in just 6 simple steps</p>
        <div className="grid grid-cols-6 my-10 gap-4">
          <div className="w-full min-h-[240px] h-full bg-[linear-gradient(106.65deg,#23789F_6.4%,#3F95BD_101.33%)] py-5 pl-5 pr-12 rounded-[5px]">
            <div className="h-[84px] flex flex-col gap-5 mb-6">
              <h5>Step 1</h5>
              <h4 className="text-xl leading-tight font-semibold">
                Start your application
              </h4>
            </div>
            <p className="text-sm break-words">admissions.krmangalam.edu.in</p>
          </div>
          <div className="w-full min-h-[240px] h-full bg-[linear-gradient(105.87deg,#23789F_17.79%,#3F95BD_100%)] py-5 pl-5 pr-8 rounded-[5px]">
            <div className="h-[84px] flex flex-col gap-5 mb-6">
              <h5>Step 2</h5>
              <h4 className="text-xl leading-tight font-semibold">Payment</h4>
            </div>
            <p className="text-sm break-words">
              Pay the required application fee of ₹1,000
            </p>
          </div>
          <div className="w-full min-h-[240px] h-full bg-[linear-gradient(105.82deg,#23789F_1.54%,#3F95BD_100%)] py-5 pl-5 pr-8 rounded-[5px]">
            <div className="h-[84px] flex flex-col gap-5 mb-6">
              <h5>Step 3</h5>
              <h4 className="text-xl leading-tight font-semibold">
                Entrance Test
              </h4>
            </div>
            <p className="text-sm break-words">
              Appear for the K.R. Mangalam University Entrance Exam
            </p>
          </div>
          <div className="w-full min-h-[240px] h-full bg-[linear-gradient(105.82deg,#23789F_1.54%,#3F95BD_100%)] py-5 pl-5 pr-8 rounded-[5px]">
            <div className="h-[84px] flex flex-col gap-5 mb-6">
              <h5>Step 4</h5>
              <h4 className="text-xl leading-tight font-semibold">
                Personal Interview
              </h4>
            </div>
            <p className="text-sm break-words">
              Attend our Faculty-Led Interview
            </p>
          </div>
          <div className="w-full min-h-[240px] h-full bg-[linear-gradient(107.49deg,#23789F_2.54%,#3F95BD_100%)] py-5 pl-5 pr-8 rounded-[5px]">
            <div className="h-[84px] flex flex-col gap-5 mb-6">
              <h5>Step 5</h5>
              <h4 className="text-xl leading-tight font-semibold">
                Admission Offer
              </h4>
            </div>
            <p className="text-sm break-words">
              Receive the offer letter after a successful personal Interview.
            </p>
          </div>
          <div className="w-full min-h-[240px] h-full bg-[linear-gradient(107.49deg,#23949F_2.54%,#3E95BB_100%)] py-5 pl-5 pr-8 rounded-[5px]">
            <div className="h-[84px] flex flex-col gap-5 mb-6">
              <h5>Step 6</h5>
              <h4 className="text-xl leading-tight font-semibold">
                Get Enrolled
              </h4>
            </div>
            <p className="text-sm break-words">
              Embark on your journey with K.R. Mangalam University
            </p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-[#DE0000] text-white rounded-[5px] px-5 py-2 uppercase">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
