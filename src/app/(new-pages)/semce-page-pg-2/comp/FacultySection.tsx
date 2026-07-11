import FacultySlide from "./FacultySlide";

export default function FacultySection() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-bold">
            Learn from editors, creators and researchers
          </h2>

          <p className="text-gray-600 mt-3 text-2xl italic">
            A faculty mix that brings together newsroom experience, creator
            economy work and academic research.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 xl:ml-20 xl:pl-10">
          <div className="text-xl">
            <p className="mb-2.5">
              At <strong>SEMCE</strong>, MA students learn from:
            </p>
            <ul className="mb-2.5 pl-5 list-disc my-5 ">
              <li>
                Faculty who have worked with organisations like BBC, All India
                Radio, Hindustan Times, Zee Media, Aaj Tak and leading digital
                media houses
              </li>
              <li>
                Academics with PhDs and published research in areas such as
                digital media, fake news, data journalism, visual communication,
                communication research, development communication and HCI
              </li>
              <li>
                Practitioners who have produced films, shows, campaigns and
                digital content for brands, production houses and channels
              </li>
            </ul>
            <p className="mb-2.5">
              <strong>
                The same core faculty that drives the SEMCE undergraduate
                programmes teaches at the MA level, with additional research
                focus, advanced project guidance and dissertation supervision.
              </strong>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <FacultySlide />
        </div>
      </div>
    </section>
  );
}
