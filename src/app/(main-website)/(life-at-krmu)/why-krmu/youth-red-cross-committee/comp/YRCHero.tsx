import Image from "next/image";

const YRCHero = () => {
  return (
    <section className="bg-[url(/bg-gradient.webp)] bg-no-repeat bg-cover pt-[140px] px-4 lg:pt-[12%] pb-[10%]">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center text-white gap-10">
        <div className="lg:w-2/3">
          <h1 className="text-3xl md:text-[40px] font-bold mb-5 leading-[1.2]">
            Youth Red Cross Committee- YRC (KRMU) <br />
            <em>“Promoting Health, Serving Humanity.”</em>
          </h1>
          <p>
            The <strong>Red Cross Society</strong>, founded on the principles of
            humanity, impartiality, neutrality, independence, voluntary service,
            unity, and universality, shares a mission in fostering selfless
            service and community welfare. The{" "}
            <strong>Red Cross Society</strong> encourages the spirit of empathy
            and service among volunteers, particularly students and young
            individuals, by engaging them in activities that promote the welfare
            of the entire community.
          </p>
          <br />
          <p>
            The{" "}
            <strong>
              Red Cross Society’s motto, “Promoting Health, Serving Humanity ,”
              emphasizes humanitarian values, encouraging individuals to
              prioritize the well-being of others above personal interests. The
              society
            </strong>{" "}
            provides students with opportunities to enhance their personalities
            and develop leadership and organizational skills while serving
            society. The Red Cross Society aims to nurture compassion and social
            responsibility through initiatives such as healthcare camps, blood
            donation drives, and awareness campaigns.
          </p>
          <br />
          <p>
            The{" "}
            <strong>
              Red Cross Society’s symbol, the Red Cross, on a white background,
              is a globally recognized emblem of protection and aid. It
              represents hope, care, and support in times of crisis, much like
              the Roth
            </strong>{" "}
            wheel of the Konark Sun Temple, which symbolizes the continuous
            cycle of life and the unending spirit of service.
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image src="/life-at-krmu/yrc.webp" width={352} height={352} alt="" />
        </div>
      </div>
    </section>
  );
};

export default YRCHero;
