type Props = {
  heading: string;
  subheading: string;
  content: string;
};

const FinanceAssistanceHero = ({ heading, subheading, content }: Props) => {
  return (
    <>
      <section className="pt-[140px] md:pt-[10%] pb-[5%] bg-[#051630] px-4">
        <div className="max-w-[1664px] mx-auto w-full text-center text-white">
          <h1 className="text-3xl md:text-[64px] font-semibold leading-[1.2]">{heading}</h1>
          <h3 className="text-xl md:text-2xl font-bold mb-3.5">{subheading}</h3>
          <p>{content}</p>
        </div>
      </section>
    </>
  );
};

export default FinanceAssistanceHero;
