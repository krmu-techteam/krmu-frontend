interface WhyKRMUProp {
  title: string;
  subtitle: string;
  description: string;
}

const WhyKRMU = ({ title, subtitle, description }: WhyKRMUProp) => {
  return (
    <>
      <section className="w-full px-4 lg:py-12 bg-[#051630]">
        <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="w-full lg:w-1/2">
            <div className="text-white">
              <h4 className="text-2xl font-normal leading-[30px]">{title}</h4>
              <h3 className="text-3xl md:text-5xl xl:text-[64px] leading-[1.13] font-semibold mb-5">
                {subtitle}
              </h3>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-white">
            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyKRMU;
