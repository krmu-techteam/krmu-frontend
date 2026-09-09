const policyItems = [
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
    <section className="bg-[#fdfaf5] px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Top Border */}
        <div className="mb-10 border-t border-[#d8d5d0] sm:mb-12 md:mb-16 lg:mb-20" />

        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span
            className="
              font-poppins
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#7A1F2B]
              sm:text-xs
              sm:tracking-[0.3em]
              md:text-sm
              md:tracking-[0.35em]
            "
          >
            The Selection Process
          </span>

          <h2
            className="
              mt-3
              font-newsreader
              text-[32px]
              font-medium
              leading-[1.1]
              text-[#001836]
              sm:text-4xl
              md:text-5xl
              lg:text-[52px]
              xl:text-[55px]
            "
          >
            Policy &amp; conduct
          </h2>
        </div>

        {/* Policy Items */}
        <div
          className="
            grid
            grid-cols-1
            gap-y-8
            sm:grid-cols-2
            sm:gap-x-6
            sm:gap-y-10
            md:gap-x-8
            lg:grid-cols-3
            lg:gap-x-10
            lg:gap-y-0
          "
        >
          {policyItems.map((item) => (
            <article
              key={item.title}
              className="
                border-t
                border-[#222]
                pt-4
                sm:pt-5
              "
            >
              {/* Title */}
              <h3
                className="
                  max-w-[340px]
                  font-newsreader
                  text-[22px]
                  font-medium
                  leading-[1.15]
                  text-[#0d2948]
                  sm:text-2xl
                  md:text-[26px]
                  lg:text-[27px]
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  max-w-[380px]
                  font-poppins
                  text-xs
                  leading-[1.6]
                  text-[#222]
                  sm:text-[13px]
                  md:text-sm
                "
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom Border */}
        <div
          className="
            mt-10
            border-b
            border-[#d8d5d0]
            sm:mt-12
            md:mt-16
            lg:mt-20
          "
        />
      </div>
    </section>
  );
};

export default PolicyConduct;