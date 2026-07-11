import Image from "next/image";

const PlacementRate = () => {
  return (
    <section className="py-10 px-0 bg-white" id="programs">
      <div className="max-w-[1200px] px-4 sm:px-6 mx-auto w-full">
        <div className="max-w-[700px] mx-auto mb-12 text-center">
          <span className="inline-block py-1 px-3 bg-[#2c7da01a] text-[#2c7da0] text-sm font-bold uppercase rounded-full mb-7">
            Why KRMU?
          </span>
          <h2 className="text-2xl md:text-[33px] mb-4 font-bold">
           92% Placement Rate @ KRMU: Possible? <br />
           Here’s How We Do It!
          </h2>
          <p className="text-[#4b5563] text-lg">
At KRMU, we don’t just focus on conceptual clarity but career-readiness as well. Our multifaceted approach ensures you are well-prepared for the professional world. Here's how we make it happen!

          </p>
        </div>
        <div className="grid gap-6">
          <div
            className="flex flex-col lg:flex-row overflow-hidden bg-white shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/_0.1)] rounded-2xl transition-all 
            duration-[250ms] ease-out sm:col-span-2 md:col-span-3"
          >
            <div className="flex-[1] lg:flex-[0_0_45%] aspect-auto">
              <Image
                src="/wp-content/images/placement-route.webp"
                alt="KRMU moot court in session"
                width="600"
                height="400"
                className="w-full h-full aspect-video overflow-hidden flex-[0_0_45%] object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center">
              <div
                className="w-14 h-14 inline-flex items-center justify-center text-white rounded-xl mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #002d73 0%, #0052cc 100%)",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">
                Conceptual Clarity Meets Practical Precision
              </h3>
              <p className="text-[#4b5563] leading-[1.7]">
We are the proponents of the ‘practice leads to perfection’ philosophy. Our programmes are meticulously designed to provide you with hands-on experience from day one.

              </p>
              <ul className="flex flex-col gap-2 mt-4 text-base">
                <li className="relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#002d73] before:rounded-full pl-5 text-[#374151]">
                  Consistently updated & industry-relevant curriculum
                </li>
                <li className="relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#002d73] before:rounded-full pl-5 text-[#374151]">
                  Real-world exposure via industry partnerships and internships
                </li>
                {/* <li className="relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#002d73] before:rounded-full pl-5 text-[#374151]">
                  Mock trial competitions with practicing judges
                </li> */}
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-[#f9fafb] transition-all duration-[250ms] ease-out hover:bg-white hover:shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/0.1)]">
            <div
              className="w-14 h-14 inline-flex items-center justify-center text-white rounded-xl mb-4"
              style={{
                background: "linear-gradient(135deg, #002d73 0%, #0052cc 100%)",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
            </div>
            <h3 className="mb-3 font-bold text-2xl text-gray-900">
             Located in Gurugram: India’s Corporate Hub
            </h3>
            <p className="text-gray-600">
Situated at the centre of India’s corporate landscape, where leading industry figures are located, KRMU provides an unparalleled network of experts and recruiters.

            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#f9fafb] transition-all duration-[250ms] ease-out hover:bg-white hover:shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/0.1)]">
            <div
              className="w-14 h-14 inline-flex items-center justify-center text-white rounded-xl mb-4"
              style={{
                background: "linear-gradient(135deg, #002d73 0%, #0052cc 100%)",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
              </svg>
            </div>
            <h3 className="mb-3 font-bold text-2xl text-gray-900">
             Expert Faculty Brings Expertise to the Class
            </h3>
            <p className="text-gray-600">
             From industry veterans to renowned scholars, our distinguished & dedicated faculty members bring invaluable real-world insights and experience to every class.

            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#f9fafb] transition-all duration-[250ms] ease-out hover:bg-white hover:shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/0.1)]">
            <div
              className="w-14 h-14 inline-flex items-center justify-center text-white rounded-xl mb-4"
              style={{
                background: "linear-gradient(135deg, #002d73 0%, #0052cc 100%)",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
              </svg>
            </div>
            <h3 className="mb-3 font-bold text-2xl text-gray-900">
              Updated Curriculum Made by Top Leaders
            </h3>
            <p className="text-gray-600">
KRMU collaborates with the top industry leaders to ensure the course curriculum is aligned with the evolving market demands and employer expectations.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementRate;
