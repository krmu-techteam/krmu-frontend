import Image from "next/image";

const StudentsImage = () => {
  return (
    <div className="w-full">
      <Image
        src="/landingpage/bsc-finance-2026/student-group.png"
        alt="BSc Finance students"
        width={0}
        height={0}
        sizes="100vw"
        className="block"
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </div>
  );
};

export default StudentsImage;
