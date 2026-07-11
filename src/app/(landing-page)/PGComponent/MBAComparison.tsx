import { MbaComparisonContent } from "../admission/PGType";

type Props = {
  data: MbaComparisonContent;
};

export default function MbaComparison({ data }: Props) {
  return (
    <section className="bg-gradient-to-b from-[#04162E] to-[#020B18] py-12 md:py-16 lg:py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
            <span className="text-pink-300">{data?.highlight}</span>{" "}
            {data?.title}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">{data?.description}</p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] rounded-2xl overflow-hidden border border-white/10">
          {/* Header Row */}
          <div className="hidden lg:block" />
          <div className="bg-[#1E2C44] p-6 text-center font-semibold">
            {data?.traditionalHeader}
          </div>
          <div className="bg-white text-black p-6 text-center font-semibold">
            {data?.krmuHeader}
          </div>

          {/* Rows */}
          {data?.rows.map((row, i) => (
            <div key={i} className="contents">
              {/* Label */}
              <div className="bg-[#071A33] p-6 flex items-center gap-3 border-t border-white/10">
                <row.icon size={20} className="text-blue-300" />
                <span className="font-medium">{row.label}</span>
              </div>

              {/* Traditional */}
              <div className="bg-[#1E2C44] p-6 flex items-center justify-center border-t border-white/10 text-center">
                {row.traditional}
              </div>

              {/* KRMU */}
              <div className="bg-white text-black p-6 border-t border-gray-200 text-center">
                <h4 className="font-semibold mb-1">{row.krmu.title}</h4>
                <p className="text-sm text-gray-600">{row.krmu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
