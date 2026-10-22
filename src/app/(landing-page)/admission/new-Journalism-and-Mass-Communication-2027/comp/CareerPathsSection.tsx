const careers = [
  "News Editor or Digital Editor",
  "Content Strategist for agencies and media brands",
  "Film, OTT and Video Production Professional",
  "Data Journalist or Visual Storyteller",
  "Digital Media Entrepreneur or Creator Founder",
  "Researcher or Academic in Media and Communication",
];

export default function CareerPathsSection() {
  return (
    <section className="w-full bg-[#00020A] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 sm:gap-12 lg:gap-16">
          <div>
            <h2 className="text-[#FFFFFF] font-normal font-serif text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-[56px]">
              Where this MA can take you
            </h2>
            <p className="mt-5 sm:mt-8 text-[#94A3B8] text-sm sm:text-base leading-7 max-w-md">
              Move from being a content executor to a media professional who can
              research, design and lead.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 border-t sm:border-t-0 border-white/10">
            {careers.map((career, index) => (
              <div
                key={index}
                className="
                  border-b sm:border-b-0
                  border-white/10
                  sm:border-l
                  py-3 sm:p-6 md:p-7
                  flex items-start
                  sm:min-h-[120px]
                "
              >
                <p className="text-[#E8DDFF] text-sm sm:text-base leading-7">
                  {career}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
