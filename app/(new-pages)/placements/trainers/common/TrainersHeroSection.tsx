import Image from "next/image";
import Link from "next/link";

const TrainersHeroSection = () => {
  return (
    <section>
      <section
        className="
          relative overflow-hidden
          bg-[url('/placements/trainers/trainers-hero-bg.jpg')]
          bg-cover bg-left-top
          pt-28 sm:pt-32 lg:pt-40
        "
      >
        <div
          className="
            relative z-10 mx-auto flex w-full max-w-7xl
            flex-col items-center
            gap-8
            px-5
            sm:gap-10
            md:flex-row md:items-end md:gap-6
            lg:gap-10
            xl:px-0
          "
        >
          {/* Content */}
          <div
            className="
              w-full
              text-center font-poppins text-white
              md:w-1/2 md:text-left
              lg:pb-16
          "
          >
            <h3
              className="
                mb-3
                text-xs font-medium uppercase tracking-[0.3em]
                text-[#E7C268]
                sm:text-sm
                md:mb-5
                md:text-base
                md:tracking-[0.4em]
              "
            >
              Placement Training
            </h3>

            <h1
              className="
                mb-4
                font-newsreader font-semibold
                text-3xl leading-tight
                sm:text-4xl
                md:mb-5 md:text-5xl
                lg:text-6xl
              "
            >
              Your Career Starts Here. 92% placed.
            </h1>

            <p
              className="
                mx-auto mb-6 max-w-xl
                text-sm leading-6
                sm:text-base sm:leading-7
                lg:text-lg
                md:mx-0
              "
            >
              Industry-aligned training in communication, professional
              presence and workplace readiness — mapped across every school,
              program and semester.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="#"
                className="
                  inline-flex w-full max-w-[224px]
                  items-center justify-center
                  bg-white px-5 py-3.5
                  text-sm font-medium text-black
                  transition-opacity hover:opacity-90
                  sm:py-4
                "
              >
                Book your slot
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="
              relative flex w-full
              items-end justify-center
              md:w-1/2
            "
          >
            {/* Ellipse */}
            <Image
              src="/placements/trainers/ellipse.svg"
              width={520}
              height={250}
              alt=""
              aria-hidden="true"
              className="
                absolute bottom-0 left-1/2
                z-0
                w-[110%] max-w-[520px]
                -translate-x-1/2
                sm:w-[100%]
              "
            />

            {/* Girl */}
            <Image
              src="/placements/trainers/trainers-hero-girl.webp"
              alt="Placement training student"
              width={522}
              height={625}
              priority
              className="
                relative z-10
                h-auto
                w-[250px]
                sm:w-[300px]
                md:w-[320px]
                lg:w-[400px]
                xl:w-[450px]
              "
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default TrainersHeroSection;