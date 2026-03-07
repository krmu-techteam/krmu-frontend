interface WhyKRMUProp {
  title: string;
  subtitle: string;
  description: string;
}

const WhyKRMU = ({ title, subtitle, description }: WhyKRMUProp) => {
  return (
    <>
      <section className="w-full p-5 xl:px-0 lg:py-12 bg-gray-700">
        <div className="xl:max-w-7xl 2xl:max-w-[1664px] mx-auto w-full flex gap-5 flex-row items-center text-center lg:text-left">
          <div className="md:w-1/2">
            <div className="text-white">
              <h4 className="text-2xl font-normal leading-[30px]">{title}</h4>
              <h3 className="text-3xl md:text-5xl leading-[1.13] font-semibold mb-5">
                {subtitle}
              </h3>
            </div>
          </div>
          <div className="md:w-1/2 text-white text-lg">
            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyKRMU;
