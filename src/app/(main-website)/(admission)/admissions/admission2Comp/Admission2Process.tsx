import Image from "next/image";
import Link from "next/link";

const admissionCards = [
  {
    id: 15292,
    title: "Start your application",
    description: "admissions.krmangalam.edu.in",
    mobcounting: "01",
    link: "admissions.krmangalam.edu.in",
  },
  {
    id: 15293,
    title: "Payment",
    description: "Pay the required application fee of ₹1,000 ",
    mobcounting: "02",
    link: null,
  },
  {
    id: 15294,
    title: "Entrance Test",
    description: " Appear for the K.R. Mangalam University Entrance Exam ",
    mobcounting: "03",
    link: null,
  },
  {
    id: 15295,
    title: "Personal Interview",
    description: " Attend our Faculty-Led Interview ",
    mobcounting: "04",
    link: null,
  },
  {
    id: 15296,
    title: "Admission Offer",
    description:
      "Receive the offer letter after a successful personal interview ",
    mobcounting: "05",
    link: null,
  },
  {
    id: 15297,
    title: "Get Enrolled",
    description: "Embark on your journey with K.R. Mangalam University ",
    mobcounting: "06",
    link: null,
  },
];

const Admission2Process = () => {
  return (
    // <section className="pb-[200px] lg:py-[50px] bg-[#f9f9f9] px-4">
    //   <div className="max-w-[1320px] mx-auto w-full hidden lg:block">
    //     <h3 className="text-[40px] text-[#0a41a1] font-semibold text-center mb-5">
    //       Admission{" "}
    //       <span className="text-[#e61f21] font-semibold">Process</span>
    //     </h3>
    //     <p className="text-center text-[#544d5d] font-semibold">
    //       Step by step Guide
    //     </p>
    //     <div>
    //       <Image
    //         src="/admission2/ap.png"
    //         width={1296}
    //         height={310}
    //         alt="Admission Process"
    //       />
    //       <div className="admission-process flex gap-6 text-center">
    //         <div className="w-1/4">
    //           <p className="ap_badge">Registration</p>
    //           <span className="badge-content">
    //             Register Online Through Our Portal
    //           </span>
    //         </div>
    //         <div className="w-1/4">
    //           <p className="ap_badge">Application Form</p>
    //           <span className="badge-content">
    //             Submit Your Academic Credentials & Application Fee
    //           </span>
    //         </div>
    //         <div className="w-1/4">
    //           <p className="ap_badge">Entrance Exam</p>
    //           <span className="badge-content">
    //             Appear for the University Entrance Exam (If Applicable)
    //           </span>
    //         </div>
    //         <div className="w-1/4">
    //           <p className="ap_badge">Admission Offer</p>
    //           <span className="badge-content">
    //             Receive Your Admission Offer
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center md:px-4">
    //     <div className="grid grid-cols-2 gap-2.5 md:gap-6">
    //       <div
    //         className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]`}
    //       >
    //         <h4 className="text-lg text-[#e61f21] z-10 break-all font-semibold">
    //           Registration
    //         </h4>
    //         <p className="z-10 leading-[1] text-sm">
    //           <span>Register Online Through Our Portal</span>
    //         </p>
    //       </div>
    //       <div
    //         className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px]`}
    //       >
    //         <div className="z-10 relative -mt-[50px]">
    //           <h4 className="text-lg text-[#e61f21] z-10 font-semibold">
    //             Application Form
    //           </h4>
    //           <p className="z-10 leading-[1] text-sm">
    //             <span>Submit Your Academic Credentials & Application Fee</span>
    //           </p>
    //         </div>
    //       </div>
    //       <div
    //         className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px] mt-10`}
    //       >
    //         <div className="z-10 relative -mb-[50px]">
    //           <h4 className="text-lg text-[#e61f21] z-10 font-semibold">
    //             Admission Offer
    //           </h4>
    //           <p className="z-10 leading-[1] text-sm">
    //             <span>Receive Your Admission Offer</span>
    //           </p>
    //         </div>
    //       </div>
    //       <div
    //         className={`w-full text-center relative  mob_admis_proc_col flex flex-col justify-end h-[150px] md:h-[180px] mt-10`}
    //       >
    //         <div className="z-10 relative -mb-[50px]">
    //           <h4 className="text-lg text-[#e61f21] z-10 font-semibold">
    //             Entrance Exam
    //           </h4>
    //           <p className="z-10 leading-[1] text-sm">
    //             <span>
    //               Appear for the University Entrance Exam (If Applicable)
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="py-8 md:py-16 px-4 md:px-0 bg-[#f9f9f9]">
      <div className="common-prog-container pb-4">
        <h2 className="heading">
          Admission Process
        </h2>
        <p className="sub-heading">
          Commence your Journey in just 6 simple steps
        </p>
      </div>
      <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block px-4">
        <Image
          src={`/admission-process.webp`}
          width={1296}
          height={170}
          alt="Admission Process"
        />
        <div className="admis_proc_btn_grid_items">
          {admissionCards &&
            admissionCards.map((card) => {
              if (
                card?.link === "admissions.krmangalam.edu.in" ||
                card?.description === "admissions.krmangalam.edu.in "
              ) {
                return (
                  <Link
                    href={`https://${card?.description}`}
                    key={card?.id}
                    className="admis_proc_btn_grid_item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="admis_proc_btn_content">
                      <button className="btn_text">{card?.title}</button>
                      <p className="admis_btn_below_text">
                        {card?.description}
                      </p>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <div key={card?.id} className="admis_proc_btn_grid_item">
                    <div className="admis_proc_btn_content">
                      <button className="btn_text">{card?.title}</button>
                      <p className="admis_btn_below_text">
                        {card?.description}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center">
        <div className="grid grid-cols-1 gap-4 w-full">
          {admissionCards &&
            admissionCards.map((card) => {
              const isLink = card?.link === "admissions.krmangalam.edu.in" || card?.description === "admissions.krmangalam.edu.in ";
              return (
                <div
                  key={card?.id}
                  className="w-full text-center px-4 py-4 rounded-[4px] bg-gradient-to-b from-white/[0.14] via-black/15 to-black/25 flex flex-col items-center justify-center min-h-[100px] transition-all antialiased [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]"
                >
                  {card?.mobcounting && (
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#f5a623] bg-[#f5a623]/15 border border-[#f5a623]/25 px-3 py-0.5 rounded-full mb-2 font-poppins">
                      STEP {card.mobcounting}
                    </span>
                  )}
                  <h4 className="text-[17px] md:text-lg font-serif font-semibold text-white mb-1.5 antialiased">
                    {card?.title}
                  </h4>
                  {isLink ? (
                    <p className="leading-tight text-sm text-[#38bdf8] break-all font-medium font-poppins antialiased">
                      <Link
                        href={`https://${card?.description?.trim()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-all"
                      >
                        {card?.description}
                      </Link>
                    </p>
                  ) : (
                    <p className="leading-relaxed text-sm text-white/80 break-words font-medium font-poppins antialiased">
                      {card?.description}
                    </p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* <button
          className={`${
            admisbtn.buttonclass || ""
          } text-white bg-[#cb000d] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10 cursor-pointer`}
        >
          <span>{admisbtn.buttontext}</span> <ArrowRight />
        </button> */}
      </div>
    </section>
  );
};

export default Admission2Process;
