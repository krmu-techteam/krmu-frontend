import Link from "next/link";

const ScholarshipSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#e31e24] to-[#8b0000] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-20  items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase tracking-widest text-white/80 mb-3">
            Scholarship
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Your achievements deserve recognition at K.R. Mangalam University
          </h2>

          <p className="text-white/90 mb-4 leading-relaxed">
            Whether in academics, sports, cultural excellence, or other
            distinguished accomplishments, KRMU values your hard work and
            rewards merit across diverse fields. We are committed to supporting
            talented students through scholarships that empower them to pursue
            their ambitions without barriers.
          </p>

          <p className="text-white/90 mb-8 leading-relaxed">
            Our scholarship programmes are designed to encourage meritorious
            students and support deserving candidates in pursuing quality higher
            education. By offering financial assistance across various
            categories, KRMU ensures that bright minds can focus on learning,
            innovation, and growth without financial constraints.
          </p>

          <Link
            href="https://www.krmangalam.edu.in/admission/scholarship"
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-[#e31e24] font-bold px-7 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Know More →
          </Link>
        </div>

        {/* RIGHT VISUAL */}
      </div>
    </section>
  );
};

export default ScholarshipSection;
