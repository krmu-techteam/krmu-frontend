import Image from "next/image";
import ScholarShipsSlide from "./ScholarShipsSlide";
import { ScholarResearchImpactSection } from "../law-2026/contentype";


type Props = {
  data: ScholarResearchImpactSection;
};

const ScholarResearchImpact = ({ data }: Props) => {
  return (
    <section className="py-20 px-4 bg-[#0060aa]">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-5xl font-bold mb-4">{data.heading}</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Carousel */}
        <ScholarShipsSlide slides={data.slides} />

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {data.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1a3a52] rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-600">
                  <Image
                    src={testimonial.image}
                    fill
                    alt={testimonial.name}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-white/90 text-sm leading-relaxed">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarResearchImpact;
