import { registrationFees } from "../constant";

const notes = [
  "Students submit a bonafide certificate signed by the department head during online registration.",
  "Registered authors receive a Certificate of Presentation; co-authors receive an e-Certificate of Co-authorship.",
];

const publicationOpportunities = [
  "The overall similarity index must not exceed 10%, excluding references, quotations and commonly used technical terms.",
  "Submissions will be screened, and content that breaches ethical standards may be rejected.",
  "Paper Processing charges are additional and shall be borne separately by the participants.",
];

const FeeTable = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; price: string }[];
}) => {
  return (
    <div className="rounded-[10px] bg-white px-5 py-6 sm:rounded-[12px] sm:px-7 sm:py-7 md:py-8">
      <h3 className="mb-4 text-[17px] font-bold text-[#1d1d1d] sm:mb-5 sm:text-[18px]">
        {title}
      </h3>

      <div>
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-start justify-between gap-4 py-4 font-serif text-[14px] leading-[1.45] text-[#4f4b45] sm:gap-6 sm:text-[15px] ${
              index !== items.length - 1
                ? "border-b border-[#d5cec0]"
                : "border-b border-[#d5cec0]"
            }`}
          >
            <span className="min-w-0">{item.label}</span>

            <span className="shrink-0 whitespace-nowrap font-sans text-[16px] font-bold text-[#b08233] sm:text-[17px]">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Registration = () => {
  return (
    <section className="w-full bg-[#ebe8e0] py-10 sm:py-12 md:py-16 lg:py-[88px]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <span className="mb-3 block font-serif text-[10px] font-bold uppercase tracking-[0.16em] text-[#b08233] sm:mb-4 sm:text-[11px] md:text-[12px]">
            Fees
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#1d1d1d] sm:text-4xl md:text-[32px]">
            Registration
          </h2>
        </div>

        {/* Fee Cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          <FeeTable
            title="Indian Delegate"
            items={registrationFees.indian}
          />

          <FeeTable
            title="Foreign Delegate"
            items={registrationFees.foreign}
          />
        </div>

        {/* Bottom Information */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:gap-10 lg:mt-11 lg:grid-cols-2 lg:gap-16">
          {/* Notes */}
          <div>
            <h3 className="mb-3 text-[15px] font-bold text-[#1d1d1d] sm:mb-4 sm:text-[16px]">
              Notes
            </h3>

            <div className="space-y-3">
              {notes.map((note) => (
                <div
                  key={note}
                  className="flex items-start gap-3 font-serif text-[14px] leading-[1.55] text-[#625d55] sm:text-[15px]"
                >
                  <span className="mt-[3px] shrink-0 text-[#b08233]">
                    —
                  </span>

                  <p className="min-w-0">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publication Opportunity */}
          <div>
            <h3 className="mb-3 text-[15px] font-bold text-[#1d1d1d] sm:mb-4 sm:text-[16px]">
              Publication Opportunity
            </h3>

            <div className="space-y-3">
              {publicationOpportunities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 font-serif text-[14px] leading-[1.55] text-[#625d55] sm:text-[15px]"
                >
                  <span className="mt-[3px] shrink-0 text-[#b08233]">
                    —
                  </span>

                  <p className="min-w-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;