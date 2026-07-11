import Link from "next/link";
import IPRSlide from "./IPRSlide";

const IPRContent = () => {
  return (
    <section className="py-[50px] bg-[url(/ipr/bg-2.png)] bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row gap-10 md:gap-20">
        <div className="w-full lg:w-3/5 text-white">
          <p className="mb-5 leading-[1.5] text-justify">
            IPR, Legal & Ethical Matters Cell established to provide guidance to
            academic and non-academic staff, students, scholars, and outside
            agencies alike on the practices and rules of the University
            regarding IPR and related obligations (which include the nature of
            IP, its ownership, exploitation, technology-transfer, and
            confidentiality requirements). With the initiative to fulfil the
            commitment of the University towards promoting academic freedom and
            providing a conducive environment for research and development.
          </p>
          <Link
            href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Revised_IPR_Policy_1_1_1d15d14fef.pdf"
            target="_blank" rel="noopener noreferrer"
            className="bg-[#e31e24] text-white py-[11px] px-[23px] text-sm leading-4  rounded-[4px] font-medium"
          >
            IPR Policy
          </Link>
        </div>
        <div className="w-full lg:w-2/5">
          <IPRSlide />
        </div>
      </div>
    </section>
  );
};

export default IPRContent;
