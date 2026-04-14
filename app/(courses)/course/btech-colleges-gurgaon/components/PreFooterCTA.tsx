import CourseScrollButton from "../../common/CourseScrollButton";

export default function PreFooterCTA() {
  return (
    <section className="bg-white py-[80px] border-t border-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a202c] leading-[1.2]">
          <span className="block text-xl italic font-medium text-[#4a5568] mb-2.5">
            Apply Today to Ascertain Your Tomorrow!
          </span>
          With a 92% Placement Record, KRMU is a Name to Rely Upon!
        </h2>

        {/* Subtitle */}
        <p className="text-[17px] text-[#4a5568] mt-[15px] font-medium">
          Industry-Aligned Courses | Top Recruiters | Global Exposure
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-10 flex-wrap md:flex-row flex-col">
          {/* Enroll Button */}
          <CourseScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="bg-[#d8232a] text-white px-[35px] py-[16px] rounded-[12px] font-bold text-[18px] inline-flex items-center justify-center gap-[12px] shadow-[0_10px_20px_rgba(216,35,42,0.15)] hover:bg-[#bd1e24] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_rgba(216,35,42,0.25)] transition w-full md:w-auto"
          >
            Enrol Now. Limited Seats Available!
            <svg
              width="18"
              height="18"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </CourseScrollButton>

          {/* Phone Button */}
          <a
            href="tel:+919311411717"
            className="bg-[#0060aa] text-white px-[35px] py-[16px] rounded-[12px] font-bold text-[18px] inline-flex items-center justify-center gap-[12px] shadow-[0_10px_20px_rgba(0,96,170,0.15)] hover:bg-[#004d88] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_rgba(0,96,170,0.25)] transition w-full md:w-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.67 9.969-27.2 24.22-30.45l100.8-23.25c15-3.469 30.28 5.391 35.74 19.83l46.29 122.1c4.469 11.75 1.281 25.12-7.906 33.31l-56.25 50.19c35.48 74 95.83 134.4 169.8 169.8l50.19-56.25c8.188-9.188 21.56-12.38 33.31-7.906l122.1 46.28C505.8 356.7 514.7 372 511.2 387z" />
            </svg>
            +91 9311411717
          </a>
        </div>

        {/* Accreditations */}
        <div className="mt-10 text-[16px] font-semibold text-[#4a5568] flex justify-center flex-wrap gap-6">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 512 512" fill="#ff7f27">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
            </svg>
            UGC Recognised
          </span>

          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 576 512" fill="#ffd700">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 47.7 171.5c-12.1 1.8-22.4 10.3-26.2 21.8s-.5 24.2 8.2 32.7l106.1 103.4L110.1 477.1c-2.4 11.9 2.6 23.9 12.4 30.7s22.8 6.8 32.6 1.8l132.9-69.7 132.9 69.7c9.8 5 22.7 4.9 32.6-1.8s14.8-18.8 12.4-30.7l-25.1-147.7L546.6 226c8.7-8.5 12-21.2 8.2-32.7s-14.1-20-26.2-21.8L380.9 150.3 316.9 18z"></path>
            </svg>
            NAAC A Accredited
          </span>
        </div>
      </div>
    </section>
  );
}
