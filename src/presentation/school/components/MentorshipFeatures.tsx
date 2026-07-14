import { WHATYOU_GET_OPEN_SOURCE_MENTORSHIP } from "@/features/school";

const MentorshipFeatures = () => {
  return (
    <div>
      <h3 className="text-center text-white font-poppins text-2xl sm:text-2xl font-semibold m-6">
        What You Get:
      </h3>

      {/* Row 1 — 1 col mobile / 3 cols sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        {WHATYOU_GET_OPEN_SOURCE_MENTORSHIP.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col font-poppins items-center justify-center rounded-sm px-3 py-3 text-center text-white/85 text-base sm:text-[17px] leading-relaxed"
            style={{ border: "2px solid #4da6ff" }}
          >
            {item.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < item.split("\n").length - 1 && <br />}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Row 2 — 1 col mobile / 2 cols sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {WHATYOU_GET_OPEN_SOURCE_MENTORSHIP.slice(3).map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col font-poppins items-center justify-center rounded-sm px-3 py-3 text-center text-white/85 text-base sm:text-lg leading-relaxed"
            style={{ border: "2px solid #4da6ff" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorshipFeatures;
