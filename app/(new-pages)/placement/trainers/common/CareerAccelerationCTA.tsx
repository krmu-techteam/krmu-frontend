import Link from "next/link";

const CareerAccelerationCTA = () => {
  return (
    <section className="bg-[#0d2948] px-5 py-10 sm:py-12 md:py-14 lg:py-16 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="
            flex flex-col
            items-start
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
            md:gap-10
          "
        >
          {/* Content */}
          <div className="w-full md:max-w-[700px] md:flex-1">
            <h2
              className="
                font-newsreader
                text-3xl font-semibold
                leading-[1.15]
                text-white
                sm:text-4xl
                md:text-[42px]
                lg:text-[46px]
              "
            >
              Ready to accelerate your career trajectory?
            </h2>

            <p
              className="
                mt-2
                max-w-2xl
                font-poppins
                text-xs
                leading-5
                text-white/90
                sm:mt-3
                sm:text-sm
                sm:leading-6
                md:text-base
                lg:text-lg
                lg:leading-7
              "
            >
              Schedule a personalized one-to-one strategy session with our
              expert trainers to map out your customized preparation plan.
            </p>
          </div>

          {/* CTA */}
          <div
            className="
              flex w-full
              items-center
              justify-start
              md:w-auto
              md:shrink-0
              md:justify-end
            "
          >
            <Link
              href="#"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                bg-[#f00000]
                px-5 py-3.5
                text-center
                font-poppins
                text-sm font-medium
                leading-5
                text-white
                transition-colors
                hover:bg-[#d90000]
                sm:w-auto
                sm:px-6
                sm:text-base
                md:px-7
                md:py-4
                md:text-lg
                lg:text-xl
              "
            >
              Book your Individual Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAccelerationCTA;
