import { bootcampStats } from "../constant";

const BootcampStats = () => {
  return (
    <section className="bg-[#fdfaf5] px-5 pb-10 xl:pb-20 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <span
            className="
              font-poppins
              text-xs font-medium
              uppercase
              tracking-[0.18em]
              text-[#8d5552]
              sm:text-sm
              md:text-base
              md:tracking-[0.2em]
            "
          >
            Per Year Records
          </span>

          <h2
            className="
              mt-2
              font-newsreader
              text-3xl font-medium
              leading-tight
              text-[#001836]
              sm:text-4xl
              md:text-[44px]
            "
          >
            Bootcamps Preparation
          </h2>
        </div>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {bootcampStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                flex
                min-h-[110px]
                flex-col
                justify-center
                px-2
                py-5
                sm:min-h-[125px]
                sm:px-5
                md:px-6
                lg:px-6

                border-[#d8d5d0]

                /* Mobile */
                ${index !== bootcampStats.length - 1 ? "border-b" : ""}

                /* Tablet */
                sm:border-b-0
                ${index < 2 ? "sm:border-b" : ""}
                ${index % 2 === 0 ? "sm:border-r" : ""}

                /* Desktop */
                lg:border-b-0
                lg:border-r
                lg:last:border-r-0
              `}
            >
              <div
                className="
                  font-newsreader
                  text-3xl font-semibold
                  leading-none
                  text-[#001836]
                  sm:text-4xl
                  md:text-[42px]
                "
              >
                {stat.value}
              </div>

              <p
                className="
                  mt-2
                  max-w-[220px]
                  font-poppins
                  text-[10px]
                  font-medium
                  uppercase
                  leading-[1.45]
                  tracking-[0.1em]
                  text-[#333]
                  sm:text-xs
                  md:text-sm
                  md:tracking-[0.12em]
                  lg:text-base
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BootcampStats;
