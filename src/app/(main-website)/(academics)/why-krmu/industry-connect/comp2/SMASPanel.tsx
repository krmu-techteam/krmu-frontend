import Image from "next/image";

const SMASPanel = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Session on Emerging Trends and Innovation
          </h3>
          <p className="mb-5 text-lg">
            “Emerging Trends and Innovation in the Pharmaceutical Industry” by
            Dr. Parijat Pandey, from Gurugram University, who shared his
            expertise on the latest advancements shaping the future of the
            pharma sector.
          </p>
          <p className="mb-5 text-lg">
            The talk witnessed enthusiastic participation from B. Pharm and M.
            Pharm students, who gained valuable insights into pharmaceutical
            innovations, research frontiers, and the evolving role of technology
            in drug development.
          </p>
          <p className="mb-5 text-lg">
            SMAS continues to foster academic excellence by connecting students
            with experts and promoting knowledge exchange.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2025/05/smas-800x600.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SMASPanel;
