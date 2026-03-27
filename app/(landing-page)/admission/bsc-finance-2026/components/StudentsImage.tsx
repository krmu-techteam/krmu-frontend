import Image from "next/image";

const StudentsImage = () => {
  return (
    <div className="w-full">
      <Image
        src="/landingpage/bsc-finance-2026/students.png"
        alt="BSc Finance students"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto block"
        priority
      />
    </div>
  );
};

export default StudentsImage;
