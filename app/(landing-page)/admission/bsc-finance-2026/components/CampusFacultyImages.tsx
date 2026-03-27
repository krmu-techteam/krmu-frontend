const CampusFacultyImages = () => {
  return (
    <div className="w-full flex flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/landingpage/bsc-finance-2026/campus.png"
        alt="KRMU Campus"
        className="w-full h-auto block"
        style={{ display: "block" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/landingpage/bsc-finance-2026/faculty.png"
        alt="BSc Finance Faculty"
        className="w-full h-auto block"
        style={{ display: "block" }}
      />
    </div>
  );
};

export default CampusFacultyImages;
