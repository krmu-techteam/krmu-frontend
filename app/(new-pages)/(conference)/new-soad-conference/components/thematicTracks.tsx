import { thematicTracks } from "../constant";

const ThematicTracks = () => {
  return (
    <section className="w-full bg-[#f5f2eb] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-10 md:mb-12">
          <span className="mb-3 block font-serif text-[12px] font-bold uppercase tracking-[0.16em] text-[#b08233]">
            Nine Thematic Tracks
          </span>

          <h2 className="max-w-[1000px] text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] md:text-4xl lg:text-[30px]">
            Submissions are invited in, but not limited to, the following themes
          </h2>
        </div>

        {/* Tracks */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {thematicTracks.map((track) => (
            <article
              key={track.number}
              className="min-h-[175px] rounded-[12px] bg-white px-7 py-7 md:px-7 md:py-8"
            >
              {/* Number */}
              <div className="mb-3 text-[26px] font-semibold leading-none text-[#b08233]">
                {track.number}
              </div>

              {/* Title */}
              <h3 className="max-w-[650px] text-[17px] font-bold leading-[1.3] text-[#1d1d1d]">
                {track.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[680px] font-serif text-[15px] leading-[1.5] text-[#6f6a63]">
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
