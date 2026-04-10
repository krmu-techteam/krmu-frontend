const KRMUFEEStructure = () => {
  return (
    <section className="bg-[#f8fbff] py-12">
      <div className="max-w-[1296px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            KRMU’s Fee Structure for{" "}
            <span className="text-[#e31e24]">B.Tech. Programmes</span>
          </h2>

          <p className="text-gray-600 mt-4">
            Invest in your future with our transparent and competitive B.Tech.
            CSE course fee structure for B.Tech. CSE Admission 2026. We offer
            various specialisations in B.Tech. CSE courses, each designed to
            cater to different interests and career paths. Here are the details
            of our B.Tech. computer science and engineering admission fee:
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-[#eef2f6] rounded-[15px] overflow-hidden border-separate border-spacing-0 shadow-[0_10px_30px_rgba(1,49,107,0.05)] bg-white">
            <thead>
              <tr className="bg-[#0060aa] text-white uppercase tracking-wide">
                <th className="p-5 text-[15px] font-bold">Programme Name</th>
                <th className="p-5 text-[15px] font-bold">Semester 1</th>
                <th className="p-5 text-[15px] font-bold">Semester 2</th>
                <th className="p-5 text-[15px] font-bold">Annual</th>
              </tr>
            </thead>

            <tbody className="text-[#475569] text-[15px]">
              <tr className="border-b">
                <td className="p-[18px_25px]">B.Tech. CSE</td>
                <td className="p-[18px_25px]">₹1,25,000</td>
                <td className="p-[18px_25px]">₹1,25,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,50,000
                </td>
              </tr>

              <tr className="bg-[#fafbfc] hover:bg-[#f0f7ff]">
                <td className="p-[18px_25px]">B.Tech. Robotics & AI</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,70,000
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-[18px_25px]">B.Tech. AI & ML</td>
                <td className="p-[18px_25px]">₹1,45,000</td>
                <td className="p-[18px_25px]">₹1,45,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,90,000
                </td>
              </tr>

              <tr className="bg-[#fafbfc] hover:bg-[#f0f7ff]">
                <td className="p-[18px_25px]">B.Tech. Cybersecurity</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,70,000
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-[18px_25px]">B.Tech. Data Science</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,70,000
                </td>
              </tr>

              <tr className="bg-[#fafbfc] hover:bg-[#f0f7ff]">
                <td className="p-[18px_25px]">
                  B.Tech. Full Stack Development
                </td>
                <td className="p-[18px_25px]">₹1,45,000</td>
                <td className="p-[18px_25px]">₹1,45,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,90,000
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-[18px_25px]">B.Tech. UX/UI</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,70,000
                </td>
              </tr>

              <tr className="bg-[#fafbfc] hover:bg-[#f0f7ff]">
                <td className="p-[18px_25px]">B.Tech. Cloud Computing**</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,70,000
                </td>
              </tr>

              <tr>
                <td className="p-[18px_25px]">
                  B.Tech. Semiconductor Design**
                </td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px]">₹1,35,000</td>
                <td className="p-[18px_25px] font-bold text-[#01316b]">
                  ₹2,70,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Eligibility */}
        <p className="mt-3 text-[13px] text-gray-500 text-center">
          *Eligibility: 50% marks in 10+2 examination with Physics & Maths as
          mandatory courses. For the remaining single course, select any course
          from Chemistry/ Computer Science/ Electronics/ Information Technology/
          Biology/ Informatics Practices/Biotechnology/ Technical Vocational
          subject/ Agriculture/Engineering Graphics/ Business
          Studies/Entrepreneurship from any recognised Board/ University.
        </p>
      </div>
    </section>
  );
};

export default KRMUFEEStructure;
