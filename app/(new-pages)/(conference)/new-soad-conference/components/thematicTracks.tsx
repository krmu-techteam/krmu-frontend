import { thematicTracks } from "../constant";

const ThematicTracks = () => {
  return (
    <section className="w-full bg-[#f5f2eb] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span className="mb-2 block font-serif text-[10px] font-bold uppercase tracking-[0.16em] text-[#b08233] sm:mb-3 sm:text-[11px] md:text-[12px]">
            Nine Thematic Tracks
          </span>

          <h2 className="max-w-[1000px] text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[#1d1d1d] sm:text-3xl md:text-4xl lg:text-[30px]">
            Submissions are invited in, but not limited to, the following
            themes
          </h2>
        </div>

        {/* Tracks */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
          {thematicTracks.map((track) => (
            <article
              key={track.number}
              className="
                min-h-0
                rounded-[10px]
                bg-white
                px-5
                py-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                sm:min-h-[175px]
                sm:px-6
                sm:py-7
                md:min-h-[175px]
                md:px-7
                md:py-8
              "
            >
              {/* Number */}
              <div className="mb-3 text-[23px] font-semibold leading-none text-[#b08233] sm:text-[25px] md:text-[26px]">
                {track.number}
              </div>

              {/* Title */}
              <h3 className="max-w-[650px] text-[16px] font-bold leading-[1.35] text-[#1d1d1d] sm:text-[17px]">
                {track.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[680px] font-serif text-[14px] leading-[1.6] text-[#6f6a63] sm:text-[15px] sm:leading-[1.5]">
                {track.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThematicTracks;