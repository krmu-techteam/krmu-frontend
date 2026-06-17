type Props = {
  heading: string;
  subheading: string;
  content: string;
};

const HeroSection = ({ heading, subheading, content }: Props) => {
  return (
    <>
      <section className="pt-[140px] md:pt-[10%] pb-[5%] bg-[#0E395E] px-4">
        <div className="max-w-[1530px] mx-auto w-full text-center text-white px-6 md:px-7 xl:px-16">
          <h1 className="text-3xl md:text-[64px] font-semibold leading-[1.2] mb-2">{heading}</h1>
          <h3 className="text-xl md:text-2xl font-semibold mb-3.5 font-poppins">{subheading}</h3>
          <p className="max-w-5xl mx-auto font-poppins leading-[1.6]">{content}</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
