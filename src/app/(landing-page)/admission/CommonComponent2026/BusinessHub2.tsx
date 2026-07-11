import Image from "next/image";
import { BusinessHubSection } from "../law-2026/contentype";
import NoPaperFormsWidget from "./NoPaperFormsWidget";

type Props = {
  data: BusinessHubSection;
  formId: string;
};

const BusinessHub2 = ({ data, formId }: Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b63a5] via-[#083d6b] to-[#041b2e]">
      <div className="max-w-[1400px] mx-auto w-full px-6 py-10 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* LEFT CONTENT */}
          <div className="text-white w-full lg:w-2/3">
            <h1
              className="text-2xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

            <p className="text-white/80 max-w-xl mb-8">{data.description}</p>

            {/* <ul className="space-y-3 text-sm">
              {data.highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-green-400">✔</span>
                  {item.text}
                </li>
              ))}
            </ul> */}

            {/* MAP IMAGE */}
            <div className="mt-12 bg-white rounded-xl p-3 shadow-xl max-w-[648px]">
              <Image
                src={data.mapImage.src}
                width={data.mapImage.width}
                height={data.mapImage.height}
                alt={data.mapImage.alt}
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* RIGHT FORM IMAGE */}
          <div className="relative w-full lg:w-1/3">
            <p
              className="text-white text-sm text-right mb-3 italic"
              dangerouslySetInnerHTML={{ __html: data.formNote }}
            />

            {/* <div className="bg-white rounded-2xl shadow-2xl p-4"> */}
            <div>
              {/* <Image
                src={data.formImage.src}
                width={data.formImage.width}
                height={data.formImage.height}
                alt={data.formImage.alt}
                className="rounded-xl"
                priority
              /> */}
              {/* {formId && (
                <NoPaperFormsWidget widgetId={formId} height="600px" />
              )} */}
              {formId && (
                <div className="heroBannerForm__form">
                  <div className="heroBannerForm-header">
                    <h3 className="mb-0">
                      <strong>
                        Apply Today for <span className="uppercase">K.R. Mangalam University</span>
                      </strong>
                    </h3>
                  </div>

                  <NoPaperFormsWidget widgetId={formId} height="480px" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHub2;
