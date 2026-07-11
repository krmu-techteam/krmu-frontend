import Image from "next/image";
import { WhyKRMCard } from "../law-2026/contentype";

type Props = {
  heading: string;
  subheading: string;
  desc: string;
  imgUrl: string;
  whykrmCards: WhyKRMCard[];
};

const WhyKRMangalam = ({
  heading,
  subheading,
  desc,
  imgUrl,
  whykrmCards,
}: Props) => {
  return (
    <>
      <section className="h-full sm:h-[800px] pt-10 sm:py-10 bg-cover bg-no-repeat bg-center px-4 sm:bg-[url(/test-2.png)] whyBgStyle">
        <div className="max-w-[1400px] mx-auto w-full flex justify-center flex-col">
          <h4
            className="text-center text-2xl sm:text-3xl md:text-4xl text-white leading-[1.4] mb-2.5 font-semibold"
            dangerouslySetInnerHTML={{
              __html: heading,
            }}
          />
          <Image
            src="/bg-line.png"
            width={300}
            height={300}
            alt=""
            className="md:hidden w-full whyBgStyleImage"
          />
          {/* <p className="text-[#c3c3ca] text-center text-3xl">{subheading}</p> */}
          <p
            className="text-white md:text-[#c3c3ca] text-center my-5"
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default WhyKRMangalam;
