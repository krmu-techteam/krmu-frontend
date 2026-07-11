const ApplicationProcess = () => {
  return (
    <section className="w-full bg-[#0E5A97] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto space-y-6 sm:space-y-8">

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-6">
          
          {/* Big Red Pill */}
          <div className="
            flex-1 
            bg-[#D71920] 
            text-white 
            
            rounded-3xl sm:rounded-full
            px-6 sm:px-10 
            py-6
            
            flex flex-col lg:flex-row 
            lg:items-center 
            lg:justify-between 
            gap-3
          ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Start Your Application
            </h2>

            <span className="text-base sm:text-lg opacity-90 max-w-xl">
              Apply online at admissions.krmangalam.edu.in
            </span>
          </div>

          {/* Circle */}
          <div className="hidden lg:block w-20 h-20 xl:w-24 xl:h-24 rounded-full border-4 border-white shrink-0"></div>
        </div>

        {/* Row 2 */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">

          {[
            {
              title: "Complete Application & Fee Payment",
              desc: "Fill in your details and submit the application fee.",
            },
            {
              title: "Entrance Test",
              desc: "Appear for K.R. Mangalam University Entrance Examination (KREE) (For UG / PG as applicable)",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                border-2 border-white 
                text-white 
                
                rounded-3xl sm:rounded-full
                px-6 sm:px-8 
                py-6
                
                text-center
              "
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
                {item.title}
              </h3>

              <p className="opacity-80 mt-2 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-6">

          {/* Red Circle */}
          <div className="hidden lg:block w-20 h-20 xl:w-24 xl:h-24 bg-[#D71920] rounded-full shrink-0"></div>

          {/* Personal Interaction */}
          <div className="
            flex-1 
            bg-[#D71920] 
            text-white 
            
            rounded-3xl sm:rounded-full
            px-6 sm:px-10 
            py-6
            
            flex flex-col lg:flex-row 
            lg:items-center 
            lg:justify-between 
            gap-3
          ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Personal Interaction
            </h2>

            <span className="text-base sm:text-lg opacity-90 max-w-xl">
              Attend a faculty-led interaction to understand your interests and goals.
            </span>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">

          {[
            {
              title: "Admission Offer",
              desc: "Receive your official offer letter after successful evaluation.",
            },
            {
              title: "Get Enrolled",
              desc: "Confirm your seat and begin your journey at SEMCE.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                border-2 border-white 
                text-white 
                
                rounded-3xl sm:rounded-full
                px-6 sm:px-8 
                py-6
                
                text-center
              "
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
                {item.title}
              </h3>

              <p className="opacity-80 mt-2 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApplicationProcess;
