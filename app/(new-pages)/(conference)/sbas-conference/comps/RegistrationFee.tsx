const RegistrationFee = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 xl:py-24 px-5 sm:px-6 md:px-10 xl:px-0" id="reg-fees">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-3 mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs font-bold text-[#A9812F]">
            REGISTRATION
          </p>

          <h4 className="text-2xl sm:text-3xl text-[#1c2822] font-bold font-lora leading-tight">
            Registration Fees
          </h4>

          <p className="text-sm text-[#44504A] leading-5 max-w-2xl mx-auto">
            Pay in INR (Indian nationals) or USD (non-Indian nationals & NRIs)
            only.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border-2 border-[#d1c9b8]">
          <table className="w-full min-w-[650px] border-collapse">
            <thead>
              <tr className="bg-[#19241F] text-white">
                <th className="px-4 sm:px-6 py-3.5 sm:py-4 text-left text-xs sm:text-sm font-semibold whitespace-nowrap">
                  CATEGORY
                </th>

                <th className="px-4 sm:px-6 py-3.5 sm:py-4 text-left text-xs sm:text-sm font-semibold whitespace-nowrap">
                  NATIONAL
                </th>

                <th className="px-4 sm:px-6 py-3.5 sm:py-4 text-left text-xs sm:text-sm font-semibold whitespace-nowrap">
                  INTERNATIONAL
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white">
                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  Students (UG/PG)
                </td>

                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  ₹700
                </td>

                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  $30
                </td>
              </tr>

              <tr className="bg-[#ede9dd]">
                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  Research Scholar (PhD)
                </td>

                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  ₹1,500
                </td>

                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  $50
                </td>
              </tr>

              <tr className="bg-white">
                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  Faculty / Postdoc / Scientist
                </td>

                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  ₹3,500
                </td>

                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  $100
                </td>
              </tr>

              <tr className="bg-[#ede9dd]">
                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  Industry Person
                </td>

                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  ₹4,000
                </td>

                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#37413D]">
                  $150
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile hint */}
        <p className="mt-2 text-[11px] text-[#6B746F] text-right sm:hidden">
          Swipe horizontally to view the full table →
        </p>
      </div>
    </section>
  );
};

export default RegistrationFee;