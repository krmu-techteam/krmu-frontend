const Scholarship = () => {
  return (
    <section className="bg-white py-12 scroll-mt-24" id="scholarship">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            Scholarships That{" "}
            <span className="text-[#e31e24]">Empower Your Dreams</span>
          </h2>

          <p className="mx-auto max-w-[900px] text-gray-600 mt-4">
            K.R. Mangalam University is deeply committed towards the motto of
            making quality education accessible to all. Apart from affordable
            B.Tech. CSE course fees, our robust scholarship programmes are
            designed to reward academic excellence, promote talent, and provide
            monetary assistance to deserving students.
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fff5f5] text-[#d8232a] px-6 py-3 rounded-full font-bold border border-dashed border-[#d8232a] text-[16px] mt-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="#ffd700"
              className="svg-m-end-8"
            >
              <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 35.8 31 34.3 54.8c-2.3 35.2-9.9 90.2-22.6 142.1c-13.3 54.5-31.5 106.6-54.8 147.2c-23.7 41.3-51 70.3-80.4 82.3c-12.7 5.2-26.6 2.9-37.1-5.9l-1.3-1.1c-14.1-11.7-25-27-31.7-44.2c-15.6-39.6-14.8-86.7-1.1-131.7c13.7-45 35.5-88.7 55.4-125.1c11.5-19.9 21.4-37.4 28.5-51.5l1.6-3.2c5.6-11.2 4.1-24.8-3.9-34.5s-20.9-14.1-32.9-11.1L256 80V0zm0 128l33.8-8.5c4-.1 8.1 1.1 10.8 4.3s3.3 8.1 1.4 11.9l-1.6 3.2c-7.1 14.1-17 31.6-28.5 51.5c-19.9 36.4-41.7 80.1-55.4 125.1c-13.7 45-14.5 92.1 1.1 131.7c6.7 17.2 17.6 32.5 31.7 44.2l1.3 1.1c10.5 8.8 24.4 11.1 37.1 5.9c29.4-12 56.7-41 80.4-82.3c23.3-40.6 41.5-92.7 54.8-147.2c12.7-51.9 20.3-106.9 22.6-142.1c1.5-23.8-12.3-45.5-34.3-54.8L256 42.7V128z"></path>
            </svg>
            <span>
              Secure your future with Scholarships worth up to ₹27 Crores!
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-4 text-center">
          <h4 className="text-2xl font-medium">
            KRMU offers scholarships for:
          </h4>
        </div>

        {/* Grid */}
        <div className="grid gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          <div className="bg-white p-5 rounded-[15px] flex items-center gap-4 border border-[#f1f5f9] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(1,49,107,0.08)] hover:border-[#01316b] transition-all">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#e6f0ff] text-[#01316b]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 400c-17.7 0-32-14.3-32-32s14.3-32 32-32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H64zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32H448c17.7 0 32 14.3 32 32s-14.3 32-32 32H256zm0-256c0-17.7 14.3-32 32-32s32 14.3 32 32V256c0 17.7-14.3 32-32 32s-32-14.3-32-32V144z"></path>
              </svg>
            </div>
            <div>
              <h6 className="text-[16px] font-bold text-[#1e293b]">
                Super Achievers
              </h6>
              <p className="text-[12px] text-[#64748b]">
                Based on Class 12 & UG Scoress
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[15px] flex items-center gap-4 border border-[#f1f5f9] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(1,49,107,0.08)] hover:border-[#01316b] transition-all">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#fff0f6] text-[#01316b]">
              <svg width="24" height="24" viewBox="0 0 512 512" fill="#d63384">
                <path d="M256 0c88.4 0 160 71.6 160 160c0 61.6-34.8 115.1-86.2 141.9l-2.1 27.1H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H331.4l-3 38.3c-1.4 17.6-16.7 30.5-34.3 29.1s-30.5-16.7-29.1-34.3l3.3-41.2l-24.4 0 3.3 41.2c1.4 17.6-11.5 32.9-29.1 34.3s-32.9-11.5-34.3-29.1l-3-38.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h56.4l-2.1-27.1C98.8 275.1 64 221.6 64 160C64 71.6 135.6 0 256 0zM200 160c0 30.9 25.1 56 56 56s56-25.1 56-56s-25.1-56-56-56s-56 25.1-56 56z"></path>
              </svg>
            </div>
            <div>
              <h6 className="text-[16px] font-bold text-[#1e293b]">
                Women Candidates
              </h6>
              <p className="text-[12px] text-[#64748b]">
                (Shero) Scholarship Program
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[15px] flex items-center gap-4 border border-[#f1f5f9] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(1,49,107,0.08)] hover:border-[#01316b] transition-all">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#fff7ed] text-[#ea580c]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M623.1 136.9l-282.7-101.2c-13.7-4.9-28.8-4.9-42.5 0L16.9 136.9C6.8 140.5 0 150.1 0 160.8V352c0 10.6 6.8 20.2 16.9 23.8l282.7 101.2c13.7 4.9 28.8 4.9 42.5 0l282.7-101.2c10.1-3.6 16.9-13.2 16.9-23.8V160.8c0-10.6-6.8-20.2-16.9-23.8zM320 448L48 352V160.8l272-97.1 272 97.1V352L320 448zM128 200c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24z"></path>
              </svg>
            </div>
            <div>
              <h6 className="text-[16px] font-bold text-[#1e293b]">
                Top Scorers
              </h6>
              <p className="text-[12px] text-[#64748b]">
                CUET/JEE/CLAT/CAT/Competitive Exams
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[15px] flex items-center gap-4 border border-[#f1f5f9] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(1,49,107,0.08)] hover:border-[#01316b] transition-all">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#f0fdf4] text-[#16a34a]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 35.8 31 34.3 54.8c-2.3 35.2-9.9 90.2-22.6 142.1c-13.3 54.5-31.5 106.6-54.8 147.2c-23.7 41.3-51 70.3-80.4 82.3c-12.7 5.2-26.6 2.9-37.1-5.9l-1.3-1.1c-14.1-11.7-25-27-31.7-44.2c-15.6-39.6-14.8-86.7-1.1-131.7c13.7-45 35.5-88.7 55.4-125.1c11.5-19.9 21.4-37.4 28.5-51.5l1.6-3.2c5.6-11.2 4.1-24.8-3.9-34.5s-20.9-14.1-32.9-11.1L256 80V0zm0 128l33.8-8.5c4-.1 8.1 1.1 10.8 4.3s3.3 8.1 1.4 11.9l-1.6 3.2c-7.1 14.1-17 31.6-28.5 51.5c-19.9 36.4-41.7 80.1-55.4 125.1c-13.7 45-14.5 92.1 1.1 131.7c6.7 17.2 17.6 32.5 31.7 44.2l1.3 1.1c10.5 8.8 24.4 11.1 37.1 5.9c29.4-12 56.7-41 80.4-82.3c23.3-40.6 41.5-92.7 54.8-147.2c12.7-51.9 20.3-106.9 22.6-142.1c1.5-23.8-12.3-45.5-34.3-54.8L256 42.7V128z"></path>
              </svg>
            </div>
            <div>
              <h6 className="text-[16px] font-bold text-[#1e293b]">
                Defence Personnel
              </h6>
              <p className="text-[12px] text-[#64748b]">
                For Wards of Defence Personnel
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[15px] flex items-center gap-4 border border-[#f1f5f9] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(1,49,107,0.08)] hover:border-[#01316b] transition-all">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#fefce8] text-[#ca8a04]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M400 0H176c-26.5 0-48 21.5-48 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM176 464V48h224v416H176zm192-32H208v-32h160v32zm0-64H208v-32h160v32zm0-64H208v-32h160v32zm0-64H208v-32h160v32zm0-64H208v-32h160v32z"></path>
              </svg>
            </div>
            <div>
              <h6 className="text-[16px] font-bold text-[#1e293b]">
                Sports Achievers
              </h6>
              <p className="text-[12px] text-[#64748b]">
                Excellence in National/State Sports
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[15px] flex items-center gap-4 border border-[#f1f5f9] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(1,49,107,0.08)] hover:border-[#01316b] transition-all">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#faf5ff] text-[#9333ea]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M144 160c-44.2 0-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80s-35.8-80-80-80zm352 0c-44.2 0-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80s-35.8-80-80-80zM272 240c0-44.2 35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80zm37.1-135.5c-4.2-2.3-9-3.5-13.9-3.5h-30.4c-4.9 0-9.7 1.2-13.9 3.5L144.4 160c-25.7 14-41.9 40.7-41.9 70v14c0 44.2 35.8 80 80 80h16c11.3 0 21.6-4.7 29.1-12.3c14.2 19 36.8 31.3 62.4 31.3h48c25.6 0 48.2-12.3 62.4-31.3c7.5 7.6 17.8 12.3 29.1 12.3h16c44.2 0 80-35.8 80-80v-14c0-29.3-16.2-56-41.9-70l-106.5-55.5z"></path>
              </svg>
            </div>
            <div>
              <h6 className="text-[16px] font-bold text-[#1e293b]">
                Family & Alumni
              </h6>
              <p className="text-[12px] text-[#64748b]">
                Siblings & Alumni of K.R. Mangalam Group
              </p>
            </div>
          </div>{" "}
          <div className="hidden lg:block"></div>
          <div className="bg-white p-5 rounded-[15px] flex items-center gap-4 border border-[#f1f5f9] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(1,49,107,0.08)] hover:border-[#01316b] transition-all">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#fef2f2] text-[#dc2626]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 400c-17.7 0-32-14.3-32-32s14.3-32 32-32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H64zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32H448c17.7 0 32 14.3 32 32s-14.3 32-32 32H256zm0-256c0-17.7 14.3-32 32-32s32 14.3 32 32V256c0 17.7-14.3 32-32 32s-32-14.3-32-32V144z"></path>
              </svg>
            </div>
            <div>
              <h6 className="text-[16px] font-bold text-[#1e293b]">
                Faculty/Staff Wards
              </h6>
              <p className="text-[12px] text-[#64748b]">
                Special Concession for Staff Wards
              </p>
            </div>
          </div>
          <div></div>
          {/* Repeat same pattern manually (no change in structure) */}
        </div>

        {/* Table */}
        <div className="mb-10 overflow-x-auto">
          <table className="w-full border border-[#eef2f6] rounded-[12px] overflow-hidden border-separate border-spacing-0">
            <thead>
              <tr className="bg-[#0060aa] text-white">
                <th className="p-4 text-[16px] font-semibold">Parameter</th>
                <th className="p-4 text-[16px] font-semibold">Detail</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4 text-[#475569]">
                  <strong>Intake</strong>
                </td>
                <td className="p-4 text-[#475569]">2026-27</td>
              </tr>

              <tr className="bg-[#f8fafc]">
                <td className="p-4 text-[#475569]">
                  <strong>Availability</strong>
                </td>
                <td className="p-4 text-[#475569]">
                  First-come, First-served (Limited Seats)
                </td>
              </tr>

              {/* continue same rows */}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="bg-[#0060aa] rounded-[30px] p-[50px_30px] text-center shadow-[0_20px_40px_rgba(1,49,107,0.2)] relative overflow-hidden">
          <h3 className="text-[32px] font-extrabold text-white mb-4">
            Scholarship To Drive Your Dreams
          </h3>

          <p className="text-white/90 text-[18px] max-w-[800px] mx-auto mb-6">
            KRMU, one of the best colleges for B.Tech. CSE, rewards talent with
            up to 100% scholarships across merit, entrance scores, sports, and
            diverse achievements!
          </p>

          <button className="enroll-now-btn">Apply Now →</button>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
