import Image from "next/image";
import { instructorsData } from "./instructorsData";

export default function InstructorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-red-600 font-semibold tracking-wide mb-3">
              WHO’LL TEACH YOU?
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Each course is taught by <br />
              <span className="font-bold">
                Experienced Instructors <br /> & Industry Experts
              </span>
            </h2>
          </div>

          {/* RIGHT SLIDER */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8">
              {instructorsData.map((item) => (
                <div key={item.id} className="min-w-[260px] text-center">
                  {/* IMAGE */}
                  <div className="relative w-full h-[320px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="mt-4">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.designation}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
