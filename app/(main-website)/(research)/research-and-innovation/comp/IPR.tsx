import Link from "next/link";
import IPRSlide from "./IPRSlide";

const IPR = () => {
  return (
    <section className="py-10 px-4 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-5xl font-semibold">
            IPR, Legal & Ethical Matters Cell
          </h2>
          <br />
          <p>
            Intellectual property rights are crucial in fostering innovation,
            creativity, and economic growth. They provide creators and
            innovators with the assurance that their efforts will be protected,
            encouraging them to invest in research and development and bring
            their ideas to the market.
          </p>
          <br />
          <p>
            Intellectual Property (IP) plays a significant role in providing a
            competitive edge to an organisation. The intangible assets of an
            organisation – such as know-how, inventions, brands, designs, and
            other creative and innovative products – are, in present times, more
            valuable than its physical assets.
          </p>
          <br />
          <p>
            With this backdrop, the Intellectual Property Rights (IPR) Cell
            seeks to provide guidance to academic and non-academic staff,
            students, scholars, and external agencies alike on the practices and
            rules of the University regarding IPR and related obligations, which
            include the nature of IP, its ownership, exploitation, technology
            transfer, and confidentiality requirements. This initiative fulfils
            the university's commitment to promoting academic freedom and
            providing a conducive environment for research and development.
          </p>
          <Link
            href="/ipr-legal-ethical-matters-cell"
            className="blink-effect common-btn-3 mt-5"
          >
            Know More
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          {/* <Image src="/research/ipr.webp" width={600} height={438} alt="" /> */}
          <IPRSlide />
        </div>
      </div>
    </section>
  );
};

export default IPR;
