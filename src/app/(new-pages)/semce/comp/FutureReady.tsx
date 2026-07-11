import Image from "next/image";

const FutureReady = () => {
  return (
    <section className="p-5 sm:p-10 bg-black">
      <div className="max-w-[1664px] mx-auto w-full p-2.5 sm:p-5 border border-[#3e3e40] rounded-2xl">
        <div className="bg-[url(/semce/pattern-1.svg)] bg-cover bg-no-repeat bg-center p-5 rounded-2xl border border-[#3e3e40] flex flex-col-reverse lg:flex-row items-center gap-5 sm:gap-10 2xl:gap-40">
          <div className="w-full lg:w-7/12 2xl:w-9/12 text-white">
            <h3 className="text-3xl xl:text-4xl font-normal mb-10">
              A Future-Ready Media School for Journalists,
              <br />
              Creators & Storytellers of Tomorrow
            </h3>
            <p>
              At the School of Emerging Media and Creator Economy, learning is
              built around real-world creation. Students work on live projects,
              publish real content, and learn directly from Creators, and Media
              professionals.
            </p>
            <p>
              Journalism remains a core foundation, taught alongside digital
              media, content creation,and creator-led platforms.
            </p>
            <p>
              The focus is not just on understanding media, but on practicing it
              through hands-on mentorship, creative collaboration, and industry
              exposure. This approach prepares students for modern careers
              across media, digital platforms, and the creator economy.
            </p>
          </div>
          <div className="w-full lg:w-5/12 2xl:w-3/12">
            <Image
              src="/wp-content/semce/semce-main/future.jpg"
              width={328}
              height={350}
              alt="Future Ready"
              className="w-full rounded-xl"
            />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default FutureReady;
