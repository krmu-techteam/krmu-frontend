import Image from "next/image";
import Link from "next/link";

const ExploreCampus = () => {
  return (
    <section className="pt-[60px] px-4 pb-[374px] bg-[url(/campus/explorecampusbg.webp)] bg-cover bg-no-repeat bg-center">
      <div
        className="max-w-[1600px] mx-auto w-full px-5"
        style={{
          background: `linear-gradient(180deg,rgba(255,255,255,.5) 10%,rgba(0,0,0,0) 100%)`,
        }}
      >
        <h2 className="mt-2.5 mb-[15px] text-[26px] md:text-[64px] font-semibold leading-[1.5]">
          Explore Our Campus in Immersive 360° Virtual Tour
        </h2>
        <p className="mb-5">
          K.R. Mangalam University is the fastest-growing higher education
          institute in Gurugram, India. Since its inception in 2013, the
          University has been striving to fulfil its prime objective of
          transforming young lives through ground-breaking pedagogy, global
          collaborations, and world-class infrastructure.
        </p>
        <div className="pt-[100px] pb-10 flex items-center justify-center">
          <Link href="https://tourmkr.com/F1Zr0N570h" target="_blank" rel="noopener noreferrer">
            <Image
              src="/campus/clicktovirtualtour.webp"
              width={200}
              height={200}
              alt="Click to Virtual Tour"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreCampus;
