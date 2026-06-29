import Image from "next/image";
import { Companies, NetworkContent } from "../constant";

const SuccessNetwork = () => {
  return (
    <section className="">
      <div className="max-w-[1664px] mx-auto h-[750px] relative flex items-end justify-center">
        <div className="relative h-[400px] w-[700px] lg:h-[577px] lg:w-[800px] xl:w-[1200px] rounded-t-full bg-[#efeee7]">
          {Companies.map((company) => (
            <div
              key={company.name}
              className="absolute z-20 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D8D8D8] bg-white shadow-lg transition-transform duration-300 hover:scale-105 lg:h-[144px] lg:w-[144px]"
              style={{
                left: company.left,
                top: company.top,
              }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={85}
                height={45}
                className="h-auto w-[65%] object-contain"
              />
            </div>
          ))}

          <div className="absolute left-1/2 top-[54%] z-10 w-full max-w-[430px] -translate-x-1/2 -translate-y-1/2 text-center">
            {NetworkContent.map((item, index) => (
              <div key={item.title}>
                <h2 className="font-fraunces text-3xl font-bold leading-none text-[#CB000D]">
                  {item.number}
                </h2>

                <h3 className="mt-2 font-fraunces text-3xl font-bold leading-tight text-[#CB000D]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[366px] font-host text-sm leading-tight text-[#001732] font-poppins font-semibold">
                  {item.desc}
                </p>

                {index !== NetworkContent.length - 1 && (
                  <div className="mx-auto my-8 h-px w-full sm:w-[343px] bg-[#D5D5D5]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessNetwork;
