export default function FeesWorthSection() {
  return (
    <section className="bg-white text-center py-16 px-4 md:px-10">
      <span className="compare-badge">Fee VS ROI</span>
      <div className="max-w-6xl mx-auto my-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Is the B.Tech. CSE Fees Worth It?
        </h2>

        {/* Description */}
        <p className="text-gray-600 w-[100%] text-lg mb-10 leading-relaxed ">
          When evaluating the B.Tech. Computer Science fees per year, it’s
          important to consider the return on investment. At K.R. Mangalam
          University, students benefit from:
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {[
            "Industry-aligned Curriculum",
            "Strong Placement Support",
            "Top Recruiter Partnerships",
            "Competitive Salary Packages",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition"
            >
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* Salary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Average Package */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-blue-600">
            <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-2">
              Average Package
            </h3>
            <p className="text-4xl font-bold text-gray-900">~7.5 LPA</p>
          </div>

          {/* Highest Package */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-600">
            <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-2">
              Highest Package
            </h3>
            <p className="text-4xl font-bold text-gray-900">56.6 LPA</p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-lg mt-10 max-w-3xl leading-relaxed text-center mx-auto italic">
          The B.Tech. CSE course fees translate into long-term career growth,
          making it a valuable investment for aspiring engineers.
        </p>
      </div>
    </section>
  );
}
