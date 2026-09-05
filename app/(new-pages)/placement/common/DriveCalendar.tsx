"use client";

const drives = [
  {
    company: "Cloud Certitude Pvt Ltd",
    eligible: "SOET",
    mode: "VIRTUAL",
    role: "Salesforce Trainee",
    package: "4 LPA CTC",
    floatDate: "6/12/2025",
    driveDate: "6/17/2025",
  },
  {
    company: "Sonalika tractors",
    eligible: "SOMC",
    mode: "ON CAMPUS",
    role: "MT- Digital marketer",
    package: "4 LPA CTC",
    floatDate: "5/1/2025",
    driveDate: "5/8/2025",
  },
  {
    company: "Investors Clinic",
    eligible: "SOHS/ SOMC",
    mode: "VIRTUAL",
    role: "Sales and Marketing Executive",
    package: "4.2 LPA",
    floatDate: "6/23/2025",
    driveDate: "7/3/2025",
  },
  {
    company: "Cvent 1",
    eligible: "SOMC/ SOET/SBAS/SOHS",
    mode: "VIRTUAL",
    role: "Associate Product Consultant - Event Phones",
    package: "6 LPA",
    floatDate: "6/23/2025",
    driveDate: "6/30/2025",
  },
  {
    company: "Shriram Group",
    eligible: "SOET/SOMC",
    mode: "VIRTUAL",
    role: "Engineering/ Management Trainees",
    package: "3.18 LPA",
    floatDate: "6/28/2025",
    driveDate: "7/2/2025",
  },
];

const DriveCalendar = () => {
  return (
    <section className="bg-[#f7f4ef] px-4 py-8 md:px-8 lg:px-[60px] lg:py-6">
      <div className="mx-auto max-w-[1287px]">
        {/* Heading */}
        <div className="mb-7 flex items-center justify-between gap-4">
          <h2 className="font-serif text-4xl text-[#10233b] md:text-5xl">
            Drive calendar
          </h2>

          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-[#4f5965] sm:block">
            Filter · Search Company...
          </span>
        </div>

        {/* Search */}
        <div className="border border-[#cfcfcf] bg-white/20 px-5 py-4">
          <input
            type="text"
            placeholder="Search Company"
            className="w-full bg-transparent text-sm text-[#26384b] outline-none placeholder:text-[#26384b]"
          />
        </div>

        {/* Top line */}
        <div className="mt-3 border-t border-[#26384b]" />

        {/* Drives */}
        <div>
          {drives.map((drive, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 border-b border-[#d4d4d4] py-5 md:grid-cols-[2fr_0.9fr_1.3fr_0.9fr_1.3fr_0.7fr] md:items-start md:gap-6"
            >
              {/* Company */}
              <div>
                <h3 className="font-serif text-xl leading-tight text-[#242a32]">
                  {drive.company}
                </h3>

                <p className="mt-1 text-[11px] text-[#52606d]">
                  {drive.eligible}
                </p>
              </div>

              {/* Mode */}
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#87504a]">
                {drive.mode}
              </div>

              {/* Role */}
              <div className="text-[12px] leading-[1.45] text-[#3d444c]">
                {drive.role}
              </div>

              {/* Package */}
              <div className="text-[12px] text-[#2d343b]">
                {drive.package}
              </div>

              {/* Dates */}
              <div className="text-[12px] leading-[1.6] text-[#4a5158]">
                <p>Float Date: {drive.floatDate}</p>
                <p>Drive Date: {drive.driveDate}</p>
              </div>

              {/* Placement */}
              <div className="text-sm font-medium text-[#252b32]">
                Placement
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="min-w-[180px] bg-[#102640] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#1a3655]">
            Book your slot
          </button>
        </div>
      </div>
    </section>
  );
};

export default DriveCalendar;