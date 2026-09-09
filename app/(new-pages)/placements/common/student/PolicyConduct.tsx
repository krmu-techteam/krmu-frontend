const policies = [
  {
    title: "Two-offer restriction",
    description:
      "A student may hold a maximum of two offers. Once a 'Dream Status' offer is accepted, the student is deregistered from all subsequent drives.",
  },
  {
    title: "Withdrawal consequence",
    description:
      "Withdrawing after accepting an offer, or failing to attend a scheduled interview without 24hr medical notice, results in permanent portal ban.",
  },
  {
    title: "Attendance requirements",
    description:
      "Withdrawing after accepting an offer, or failing to attend a scheduled interview without 24hr medical notice, results in permanent portal ban.",
  },
];

const PolicyConduct = () => {
  return (
    <section className="bg-[#f8f5f0] px-5 py-10 md:px-12 lg:px-[65px] lg:py-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Top Border */}
        <div className="border-t border-[#cfcfcf]" />

        {/* Section Heading */}
        <div className="mt-16">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-[#8c514b]">
            The Selection Process
          </p>

          <h2 className="font-newsreader text-[42px] leading-none text-[#142942] md:text-[48px]">
            Policy &amp; conduct
          </h2>
        </div>

        {/* Policy Cards */}
        <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="border-t border-[#7d7d7d] pt-4"
            >
              <h3 className="font-newsreader text-[24px] leading-tight text-[#334861]">
                {policy.title}
              </h3>

              <p className="mt-2 max-w-[330px] text-[15px] leading-[1.35] text-[#35495f]">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyConduct;