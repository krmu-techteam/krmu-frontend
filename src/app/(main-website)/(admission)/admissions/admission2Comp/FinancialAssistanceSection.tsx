import Link from "next/link";

const FinancialAssistanceSection = () => {
  return (
    <section className="w-full bg-[#0f172a] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-20 items-center">
        {/* RIGHT CONTENT */}
        <div>
        

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Financial Assistance
          </h2>

          <p className="text-white/80 mb-4 leading-relaxed">
            At K.R. Mangalam University, we are committed to making quality
            education accessible to all deserving students. Our financial
            assistance programmes are designed to support learners with
            scholarships, fee waivers, and funding opportunities based on merit,
            talent, and need. By easing financial constraints, we help students
            focus on academic excellence, personal growth, and future success.
          </p>

         

          <Link
            href="https://www.krmangalam.edu.in/financial-assistance"
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-[#0f172a] font-bold px-7 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Know More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinancialAssistanceSection;
