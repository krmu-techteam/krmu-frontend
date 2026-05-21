interface WhyKRMUProp {
  title: string;
  subtitle: string;
  description: string;
}

const WhyKRMU = ({ title, subtitle, description }: WhyKRMUProp) => {
  return (
    <>
      <section className="w-full px-5 py-10 xl:px-0 lg:py-12 bg-gray-700">
        <div className="xl:max-w-7xl 2xl:max-w-[1664px] mx-auto w-full flex gap-5 flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="w-full lg:w-1/2">
            <div className="text-white">
              <h4 className="mb-4 text-2xl md:text-4xl font-light ">{title}</h4>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold ">
                {subtitle}
              </h3>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-white text-lg ">
            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyKRMU;
