const MentorshipProgrammeInfo = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="heading-primary mb-4">
        Open Source{" "}
        <span className="text-[#4da6ff] font-semibold xl:font-bold">
          Mentorship Programme
        </span>
      </h2>
      <p className="text-white/90 text-justify sm:text-left font-poppins text-[15px] sm:text-[17px] xl:text-[18px] leading-relaxed">
        The School of Engineering and Technology (SOET) runs a focused Open
        Source Mentorship Programme, driven by our faculties, to prepare
        students for global, stipend-based opportunities like{" "}
        <span className="text-[#00c3ff] font-semibold">
          Google Summer of Code
        </span>
        , <span className="text-[#00c3ff] font-semibold">LFX Mentorship</span>,{" "}
        <span className="text-[#00c3ff] font-semibold">Summer of Bitcoin</span>,{" "}
        <span className="text-[#00c3ff] font-semibold">Hacktoberfest</span>,{" "}
        <span className="text-[#00c3ff] font-semibold">MLH Fellowship</span>,
        and <span className="text-[#00c3ff] font-semibold">Outreachy</span>.
      </p>
    </div>
  );
};

export default MentorshipProgrammeInfo;
