import { common_btn } from "@/lib/types/common";
import Link from "next/link";

type Props = {
  heading: string;
  subheading: string;
  btn: common_btn;
};

const FAQHero = ({ heading, subheading, btn }: Props) => {
  return (
    <section className="bg-[url(/admission/faq-bg.webp)] bg-no-repeat px-4">
      <div className="max-w-[1530px] pt-[140px] pb-20 lg:py-[10%] mx-auto w-full text-white">
        <h1 className="text-[34px] md:text-4xl lg:text-8xl font-semibold my-5">{heading}</h1>
        <h3 className="md:text-3xl lg:text-4xl font-semibold my-10">{subheading}</h3>
        {btn?.btn_link ? (
          <Link
            href={btn?.btn_link}
            className={`py-[13px] px-[29px] text-white bg-[#cb000d] rounded-full font-semibold hover:bg-[#034272] ${
              btn?.btn_class || ""
            }`}
            target="_blank" rel="noopener noreferrer"
          >
            {btn?.btn_text}
          </Link>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default FAQHero;
