const FeeStructureTable = () => {
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-[1400px] mx-auto w-full">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Fee Structure
        </h2>

        <div className="overflow-x-auto rounded-xl border border-gray-200 feeStructTableContainer">
          <table className="w-full">
            <thead>
              <tr className="bg-[#005da9] text-white text-left">
                <th className="px-4 py-4 font-medium w-[40%]">Programmes</th>
                <th className="px-4 py-4 font-medium w-[20%]">
                  Semester-1 (In INR)
                </th>
                <th className="px-4 py-4 font-medium w-[20%]">
                  Semester-2 (In INR)
                </th>
                <th className="px-4 py-4 font-medium w-[20%]">
                  Annual Fees (In INR)
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr className="text-sm border-b">
                <td className="px-4 py-4">
                  Bachelor of Design (B.Des.) (Hons./Hons. with Research)
                  Fashion Design
                </td>
                <td className="px-4 py-4">1,05,000</td>
                <td className="px-4 py-4">1,05,000</td>
                <td className="px-4 py-4">2,10,000</td>
              </tr>

              <tr className="text-sm border-b">
                <td className="px-4 py-4">
                  Bachelor of Design (B.Des.) (Hons./Hons. with Research)
                  Interior Design
                </td>
                <td className="px-4 py-4">1,05,000</td>
                <td className="px-4 py-4">1,05,000</td>
                <td className="px-4 py-4">2,10,000</td>
              </tr>

              <tr className="text-sm border-b">
                <td className="px-4 py-4">
                  Bachelor of Design (B.Des.) (Hons./Hons. with Research) UX/UI
                  & Interaction Design with academic support of ImaginXP
                </td>
                <td className="px-4 py-4">1,20,000</td>
                <td className="px-4 py-4">1,20,000</td>
                <td className="px-4 py-4">2,40,000</td>
              </tr>

              <tr className="text-sm">
                <td className="px-4 py-4">
                  Bachelor of Design (B.Des.) (Hons./Hons. with Research) Game
                  Design & Animation with academic support of ImaginXP
                </td>
                <td className="px-4 py-4">1,20,000</td>
                <td className="px-4 py-4">1,20,000</td>
                <td className="px-4 py-4">2,40,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeeStructureTable;
