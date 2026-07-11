import Image from "next/image";
import Link from "next/link";

const KrmuCampusHero = () => {
  return (
    <section className="bg-[url(/bg-gradient.webp)] bg-no-repeat bg-cover pt-[140px] px-4 lg:pt-[12%] pb-[10%]">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center text-white gap-10">
        <div className="lg:w-2/3">
          <h1 className="text-3xl md:text-[64px] font-semibold mb-5">
            A Campus Designed for <br /> Learning, Living, and Leading
          </h1>
          <p>
            {`
        At K.R. Mangalam University, our 35-acre state-of-the-art Gurugram campus is more than just a physical space, it’s a vibrant hub of learning, innovation, and community. Nestled in the lap of the scenic Aravalli Hills, the campus offers a serene yet stimulating environment that inspires creativity and fuels ambition.`}
          </p>
          <br />
          <p>
            {`From world-class academic blocks and advanced laboratories to collaborative learning spaces and modern libraries, every corner of the campus is thoughtfully designed to encourage exploration, research, and innovation. Beyond academics, KRMU provides exceptional recreational and sports facilities, enabling students to maintain a healthy balance of mind and body.
`}
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <Link href="#prime-goals">
            {" "}
            <Image src="/scroll-down.webp" width={211} height={211} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KrmuCampusHero;
