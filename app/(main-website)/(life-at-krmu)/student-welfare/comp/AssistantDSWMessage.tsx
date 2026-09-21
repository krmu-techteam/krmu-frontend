import Image from "next/image";

const AssistantDSWMessage = () => {
  return (
    <section className="bg-white px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto w-full max-w-[1500px] overflow-hidden rounded-md bg-[url(/gradient-2.webp)] px-6 py-8 text-white shadow-[0_18px_45px_rgba(11,0,40,0.18)] md:px-8 md:py-9 lg:px-9">
        <div className="grid items-start gap-7 lg:grid-cols-[190px_1fr] xl:grid-cols-[240px_1fr]">
          <div className="mx-auto h-[200px] w-[200px] rounded-full border-1 border-dashed border-[#ff9d00] p-1.5 lg:mx-0 xl:h-[220px] xl:w-[220px]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
              <Image
                src="/life-at-krmu/shivani-seh.jpg"
                alt="Assistant DSW"
                fill
                sizes="(min-width: 1280px) 190px, 168px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="pt-0 text-center lg:pt-10 lg:text-left xl:pt-12">
            <div className="mb-6 md:mb-7">
              <h2 className="text-[20px] font-bold leading-tight md:text-[24px]">
                Dr. Shivani Sehga,
              </h2>
              <p className="mt-1 text-[17px] leading-tight text-white/95 md:text-[22px]">
                Assistant Dean DSW
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[70px_1fr] md:gap-5 xl:grid-cols-[86px_1fr]">
              <div aria-hidden="true" className=" gap-2">
                {/* <span className="block h-[46px] w-[18px] rotate-[16deg] rounded-full bg-[#2f8cff] md:h-[60px] md:w-[20px]" />
                <span className="block h-[46px] w-[18px] rotate-[16deg] rounded-full bg-[#2f8cff] md:h-[60px] md:w-[20px]" /> */}
                <Image
                  src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/02c7933d58ae4e40c1797d068b25250429608af5_130e06f47b.png"
                  alt="decorator"
                  width={100}
                  height={100}
                />
              </div>

              <p className="max-w-[1030px] text-justify text-[14px] pt-10  font-medium leading-[1.65] tracking-[0.01em] text-white/95 md:text-[15px] ">
                The Department of Student Welfare is dedicated to the holistic
                development of students—academically, personally, and socially.
                Guided by our vision of integrated growth, we strive to equip
                students with essential life skills, emotional resilience, and
                ethical grounding to thrive in a diverse and global society.
                Through structured initiatives, counseling support, and
                experiential learning, we nurture confident individuals with
                strong moral values and a sense of purpose. Our focus is on
                developing leadership, adaptability, and well-being beyond
                classroom learning. We believe in transforming students into
                capable, compassionate, and future-ready global
                citizens—prepared not only to succeed, but to lead with
                integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="py-[50px] bg-[url(/gradient-2.webp)] bg-no-repeat bg-cover bg-center px-4">
    //   <div
    //     className="p-[30px] max-w-[1600px] mx-auto w-full text-white"
    //     style={{
    //       background: `rgba(255,255,255,.13)`,
    //     }}
    //   >
    //     <h2 className="text-3xl md:text-5xl font-semibold leading-[1.5] mb-5">
    //       Assistant Dean Message
    //     </h2>
    //     <div className="flex flex-col lg:flex-row gap-5">
    //       <div className="lg:w-1/5">
    //         <Image
    //           src="/life-at-krmu/shivani-seh.jpg"
    //           width={304}
    //           height={234}
    //           alt="Assistant DSW"
    //           className="h-[330px] object-contain"
    //         />
    //         <h4 className="text-white text-[15px] mt-2.5">
    //           Dr. Shivani Sehgal, Assistant Dean DSW
    //         </h4>
    //       </div>
    //       <div className="lg:w-4/5">
    //         <p>
    //           The Department of Student Welfare is dedicated to the holistic
    //           development of students—academically, personally, and socially.
    //           Guided by our vision of integrated growth, we strive to equip
    //           students with essential life skills, emotional resilience, and
    //           ethical grounding to thrive in a diverse and global society.
    //           Through structured initiatives, counseling support, and
    //           experiential learning, we nurture confident individuals with
    //           strong moral values and a sense of purpose. Our focus is on
    //           developing leadership, adaptability, and well-being beyond
    //           classroom learning. We believe in transforming students into
    //           capable, compassionate, and future-ready global citizens—prepared
    //           not only to succeed, but to lead with integrity.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default AssistantDSWMessage;
