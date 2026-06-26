"use client";

export default function CTASection() {
  return (
    <section className="bg-[#071C38] py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Begin Your Global
          <br />
          Academic Journey in India
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
          Study at a university that combines academic excellence, innovation,
          industry exposure, and global opportunities.
        </p>

        <p className="mx-auto mt-8 max-w-xl text-lg font-semibold leading-8 text-white">
          Apply for International Admission at
          <br className="hidden sm:block" />
          K.R. Mangalam University Today
        </p>

        <button className="mt-8 rounded-lg bg-white px-8 py-3 text-base font-semibold text-[#071C38] transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-lg">
          Apply Now
        </button>
      </div>
    </section>
  );
}
