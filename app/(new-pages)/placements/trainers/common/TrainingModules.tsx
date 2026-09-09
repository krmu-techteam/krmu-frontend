import { trainingModules } from "../constant";

const TrainingModules = () => {
  return (
    <section className="bg-[#fdfaf5] px-5 xl:px-0 pb-10 xl:pb-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span
            className="
              font-poppins
              text-xs font-medium uppercase
              tracking-[0.25em]
              text-[#8d5552]
              sm:text-sm
              md:text-base md:tracking-[0.35em]
            "
          >
            What We Offer
          </span>

          <h2
            className="
              mt-2
              max-w-[900px]
              font-newsreader
              text-3xl font-medium
              leading-[1.15]
              text-[#001836]
              sm:text-4xl
              md:text-5xl
              lg:text-[55px]
            "
          >
            Training and placement assistance through six core modules.
          </h2>

          <p
            className="
              mt-3
              font-poppins
              text-sm leading-6
              text-[#3d3d3d]
              sm:mt-4
              sm:text-base
              md:text-lg
              md:leading-7
            "
          >
            Delivered in Year 1, credit-bearing, audit or voluntary.
          </p>
        </div>

        {/* Modules */}
        <div
          className="
            grid grid-cols-1 gap-4
            sm:gap-5
            md:grid-cols-2
            lg:grid-cols-3 lg:gap-6
          "
        >
          {trainingModules.map((module) => (
            <article
              key={module.id}
              className="
                flex min-h-[230px]
                flex-col
                border border-[#d8d5d0]
                bg-[#fdfbf8]
                p-5
                sm:min-h-[245px] sm:p-6
                md:min-h-[260px]
                lg:min-h-[265px] lg:p-7
              "
            >
              {/* Number */}
              <span
                className="
                  font-poppins
                  text-xs font-medium
                  tracking-[0.18em]
                  text-[#7A1F2B]
                  sm:text-sm
                  md:text-base
                "
              >
                {module.number}
              </span>

              {/* Title */}
              <h3
                className="
                  mt-2
                  font-newsreader
                  text-2xl font-medium
                  leading-tight
                  text-[#111]
                  sm:mt-3
                  sm:text-[28px]
                  md:text-[30px]
                  lg:text-[32px]
                "
              >
                {module.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  max-w-[320px]
                  font-poppins
                  text-xs leading-[1.5]
                  text-[#444]
                  sm:text-[13px]
                  sm:leading-[1.45]
                "
              >
                {module.description}
              </p>

              {/* Tags */}
              <div
                className="
                  mt-auto
                  flex flex-wrap
                  gap-1.5
                  pt-6
                  sm:pt-7
                  lg:pt-8
                "
              >
                {module.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      border border-[#d5d2cd]
                      px-2.5 py-1.5
                      font-poppins
                      text-[10px]
                      leading-none
                      text-[#333]
                      sm:px-3
                      sm:text-xs
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingModules;
