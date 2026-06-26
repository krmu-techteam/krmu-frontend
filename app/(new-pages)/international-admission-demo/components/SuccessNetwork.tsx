import Image from "next/image";
import { Companies, NetworkContent } from "../constant";

const SuccessNetwork = () => {
  return (
    <section className="">
      <div className="max-w-[1664px] mx-auto h-[850px] relative flex items-end justify-center">
        <div className="relative h-[700px] w-[1200px] rounded-t-full bg-[#efeee7]">
          {Companies.map((company) => (
            <div
              key={company.name}
              className="absolute z-20 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D8D8D8] bg-white shadow-lg transition-transform duration-300 hover:scale-105 lg:h-[135px] lg:w-[135px]"
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
                <h2 className="font-fraunces text-[58px] font-bold leading-none text-[#CB000D]">
                  {item.number}
                </h2>

                <h3 className="mt-2 font-fraunces text-[34px] font-bold leading-tight text-[#CB000D]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[320px] font-host text-[18px] leading-7 text-[#001732]">
                  {item.desc}
                </p>

                {index !== NetworkContent.length - 1 && (
                  <div className="mx-auto my-10 h-px w-[260px] bg-[#D9D9D9]" />
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
