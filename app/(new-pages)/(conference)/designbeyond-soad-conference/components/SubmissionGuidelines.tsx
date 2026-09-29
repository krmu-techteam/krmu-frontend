const submissionGuidelines = [
  <>
    Abstracts invited from academics, practitioners, architects, designers,
    urbanists, and students; select one of the nine thematic tracks and follow
    APA (7th Edition) guidelines.
  </>,
  <>
    Title page with Title, Author(s), Affiliation(s), Contact Details, plus an
    abstract of no more than 250 words with 4–6 keywords.
  </>,
  <>
    Full contributions between 3,000–5,000 words (including abstract, notes,
    references); MS Word, Times New Roman 12pt, justified, 1.5 spaced.
  </>,
  <>
    Queries:{" "}
    <a
      href="mailto:design2030@krmangalam.edu.in"
      className="break-all text-[#b08233] transition-colors duration-200 hover:text-[#8f6b25]"
    >
      design2030@krmangalam.edu.in
    </a>
  </>,
];

const SubmissionGuidelines = () => {
  return (
    <section className="w-full border-b border-[#e5e1d8] bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 sm:px-8 md:gap-10 lg:grid-cols-[minmax(280px,400px)_1fr] lg:gap-12 lg:px-6">
        {/* Left */}
        <div>
          <span className="mb-3 block font-serif text-[10px] font-bold uppercase tracking-[0.15em] text-[#b08233] sm:mb-4 sm:text-[11px] md:text-[12px]">
            Call for Abstracts
          </span>

          <h2 className="max-w-[400px] text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] sm:text-4xl md:text-[32px]">
            Submission Guidelines
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-5 sm:space-y-6">
          {submissionGuidelines.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 font-serif text-[14px] leading-[1.55] text-[#5f5a53] sm:gap-4 sm:text-[15px] md:text-[16px]"
            >
              {/* Dash */}
              <span className="mt-[5px] shrink-0 text-base leading-none text-[#b08233] sm:mt-[7px]">
                —
              </span>

              {/* Content */}
              <p className="min-w-0">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;