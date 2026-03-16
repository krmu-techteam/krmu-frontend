import Link from "next/link";

const WardenHostel = () => {
  return (
    <section className="w-full py-10 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-3xl md:text-[40px] leading-tight font-semibold text-[#0b2b6a] mb-6">
            Connect with the Warden
          </h2>

          <p className="text-[#4b5563] text-[16px] leading-7 max-w-[620px] mb-10">
            The super friendly and responsible wardens at our hostels ensure
            that decorum is maintained inside the hostel premises. Moreover, the
            wardens also plan and host recreational activities and events to
            keep the entertainment going and help your child make the most out
            of their hostel life.
          </p>

          {/* Combined Pill Button */}
          <div className="flex flex-col md:flex-row gap-5 overflow-hidden text-white w-full">
            <Link
              href="tel:8800697005"
              className="w-full block sm:w-fit px-8 py-3 font-medium border-r text-center border-white/30  bg-[#071d3c] rounded-full"
            >
              Boys: 8800697005
            </Link>
            <Link href="tel:8800697006" className="w-full block sm:w-fit px-8 py-3 font-medium border-r text-center bg-[#071d3c] rounded-full">
              Girls: 8800697006
            </Link>
          </div>
        </div>

        {/* RIGHT HOSTEL FEES */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-[22px] font-semibold mb-6 px-4 sm:px-0">Hostel Fees</h3>

          <div className="border border-black max-w-[600px] overflow-x-auto">
            <table className="w-full border-collapse campus_fac_table">
              <tbody>
                <tr className="border-b border-black">
                  <td className="p-2.5 sm:px-6 sm:py-4 font-medium text-sm">
                    Hostel Fee (to be collected upfront)
                  </td>
                  <td className="p-2.5 sm:px-6 sm:py-4 font-semibold text-right  text-sm">
                    Rs. 172000/-
                  </td>
                </tr>

                <tr>
                  <td className="p-2.5 sm:px-6 sm:py-4 font-medium  text-sm">
                    Hostel Security Deposit (Refundable)
                  </td>
                  <td className="p-2.5 sm:px-6 sm:py-4 font-semibold text-right  text-sm">
                    Rs. 20000/-
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WardenHostel;
