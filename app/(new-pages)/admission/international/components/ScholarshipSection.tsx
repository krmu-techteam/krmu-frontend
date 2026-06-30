"use client";

import Image from "next/image";

export default function ScholarshipSection() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      {/* Background */}

      <Image
        src="/international-admission/stone-hand.jpg"
        alt="Scholarship Background"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-[1664px] w-full px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}

          <div className="max-w-xl text-white">
            <h2 className="text-4xl font-extrabold leading-tight lg:text-[56px]">
              Scholarships
            </h2>

            <h3 className="mt-4 font-fraunces italic text-3xl leading-tight lg:text-[42px]">
              Make Your Study in India
              <br />
              Dream Affordable
            </h3>

            <p className="mt-6 text-base leading-8 text-white/90">
              Merit-based scholarships and transparent fee structures ensure
              that world-class Indian education remains accessible to every
              international student.
            </p>
          </div>

          {/* RIGHT */}

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/international-admission/scholarship-img.webp"
                alt="Student"
                width={470}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-20 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-[#051C3A] p-6 shadow-2xl">
              <h3 className="font-fraunces text-3xl font-bold text-white">
                Up to 60% Scholarship
              </h3>

              <p className="mt-3 text-sm text-white/90 leading-tight">
                Available for meritorious international students based on
                academic excellence and qualifying criteria.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Space for floating card */}

      <div className="h-16 lg:h-20" />
    </section>
  );
}