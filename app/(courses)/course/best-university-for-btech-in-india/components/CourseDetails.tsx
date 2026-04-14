export default function CourseDetails() {
  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            B.Tech. CSE Course Details
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
            The four-year B.Tech. CSE course structure at K.R. Mangalam University is designed to build strong technical foundations and prepare students for careers in software and technology. With a blend of core concepts, advanced specialisations, and hands-on projects, students become industry-ready from day one.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { value: "4 Years", label: "Duration" },
            { value: "8", label: "Semesters" },
            { value: "2.5 LPA", label: "Annual Fee" },
            { value: "12th with 50% Marks*", label: "Eligibility" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-indigo-50"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full">

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug break-words">
                  {item.value}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {item.label}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}