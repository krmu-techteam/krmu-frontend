import Image from "next/image";

const DSWMessage = () => {
  return (
    <section className="bg-white px-8 py-8 md:px-12 md:py-12">
      <div className="mx-auto w-full max-w-[1550px] overflow-hidden rounded-md bg-[linear-gradient(165deg,#A598BF_6%,#120032_13.48%)] px-6 py-8 text-white  md:px-8 md:py-9 lg:px-9">
        <div className="grid items-start gap-7 lg:grid-cols-[190px_1fr] xl:grid-cols-[240px_1fr]">
          <div className="mx-auto h-[200px] w-[200px] rounded-full border-1 border-dashed border-[#ff9d00] p-1.5 lg:mx-0 xl:h-[220px] xl:w-[220px]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
              <Image
                src="/life-at-krmu/shweta-mam.jpg"
                alt="Prof. (Dr.) Shweta A Bansal"
                fill
                sizes="(min-width: 1280px) 190px, 168px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="pt-0 text-center lg:pt-10 lg:text-left xl:pt-12">
            <div className="mb-6 md:mb-7">
              <h2 className="text-[20px] font-bold leading-tight md:text-[24px]">
                Prof. (Dr.) Shweta A Bansal,
              </h2>
              <p className="mt-1 text-[17px] leading-tight text-white/95 md:text-[22px]">
                Dean, Department of Student Welfare
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
                Dear Students, Welcome to a vibrant community of learning,
                innovation, and endless opportunities. Your university journey
                is not just about earning a degree, but about discovering your
                potential, building resilience, and shaping values that will
                guide you throughout life. At the Department of Student Welfare,
                we are committed to fostering your holistic
                growth&mdash;academic, personal, cultural, emotional, and
                social&mdash;through a supportive and inspiring campus
                environment. We encourage you to actively participate in
                academics, leadership initiatives, co-curricular activities, and
                community engagement, as every experience will help you grow
                into confident, compassionate, and future-ready individuals.
                Dream fearlessly, learn passionately, and lead with integrity,
                because the world needs your ideas, energy, creativity, and
                positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSWMessage;
