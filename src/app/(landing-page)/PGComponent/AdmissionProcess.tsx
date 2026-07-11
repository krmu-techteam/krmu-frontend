import { ArrowUpRight } from "lucide-react";
import { admisCTA, AdmissionStep } from "../admission/PGType";
import ScrollButton from "../admission/CommonComponent2026/ScrollButton";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  cta: admisCTA;
  steps: AdmissionStep[];
};

export default function AdmissionProcess({
  eyebrow,
  title,
  description,
  cta,
  steps,
}: Props) {
  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">{eyebrow}</p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#003DA5] leading-tight">
              {title.split(" ").slice(0, 4).join(" ")} <br />
              {title.split(" ").slice(4).join(" ")}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-gray-500 max-w-xs hidden lg:block">
              {description}
            </p>

            {/* <button className="group flex items-center gap-3 border border-[#003DA5] rounded-full px-6 py-2 text-sm font-medium text-black hover:bg-[#003DA5] hover:text-white transition">
              {cta.label}
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-red-500 text-white group-hover:rotate-45 transition">
                <ArrowUpRight size={16} />
              </span>
            </button> */}
            <ScrollButton
              targetId="apply-section"
              highlightClass="flash-border"
              btnClass="group flex items-center gap-3 border border-[#003DA5] rounded-full px-6 py-2 text-sm font-medium text-black hover:bg-[#003DA5] hover:text-white transition"
            >
              {cta.label}
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-red-500 text-white group-hover:rotate-45 transition">
                <ArrowUpRight size={16} />
              </span>
            </ScrollButton>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-10">
          {steps.map((item) => (
            <div key={item.step}>
              <span className="text-6xl sm:text-7xl font-bold text-[#7AA7D6] block mb-4">
                {item.step}
              </span>

              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Step
              </p>

              <h4 className="font-semibold text-gray-900 mb-4">{item.title}</h4>

              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1 text-blue-600">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
