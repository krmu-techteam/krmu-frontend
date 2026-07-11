import { MoveUpRight, Check } from "lucide-react";
import Link from "next/link";

const ApplySection = () => {
  const highlights = [
    {
      id: 1,
      text: "UGC Approved University",
    },
    {
      id: 2,
      text: "NAAC A+ Accredited",
    },
    {
      id: 3,
      text: "175+ PhDs Awarded",
    },
    {
      id: 4,
      text: "₹60,000 Annual Fellowship",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto w-full text-center">
        {/* Header */}
        <h2 className="text-[#003d7a] text-5xl font-bold mb-4">
          Begin Your Journey at K.R. Mangalam<br /> University Now
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Join 643+ scholars already transforming their research ideas into global impact
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Link
            href="#"
            className="inline-flex items-center gap-3 bg-[#0060aa] text-white px-2 py-2 rounded-full hover:bg-[#004d8a] transition-colors group"
          >
            <span className="text-lg font-medium">Apply for B.Tech 2026</span>
            <span className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
              <MoveUpRight className="text-[#0060aa]" size={20} />
            </span>
          </Link>
        </div>

        {/* Highlights */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="flex items-center gap-2">
              <Check size={20} className="text-green-600" />
              <span className="text-gray-800 font-medium">{highlight.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplySection;