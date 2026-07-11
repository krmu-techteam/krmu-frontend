import Image from "next/image";

const WelfareImage = () => {
  return (
    <section className="py-[50px]">
      <div className="flex justify-center">
        <Image
          src="/student-welfare/welfare.webp"
          width={768}
          height={544}
          alt="Student Welfare"
        />
      </div>
    </section>
  );
};

export default WelfareImage;
