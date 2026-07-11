import { inter } from "../lib/font";

export default function LearnByDoingSection() {
  return (
    <section className={`bg-[#e31e24] py-10 md:py-20 px-4 ${inter.className}`}>
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-extrabold mb-4">
            Learn by doing, not just reading
          </h2>

          <p className="text-xl md:text-2xl opacity-95 font-light leading-[1.2] italic">
            At the MA level, your work is expected to look and feel
            professional. <br /> The programme is built around projects, labs
            and internships that mirror real world roles.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:flex gap-5 mt-14">
          {/* FULL WIDTH CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 lg:w-5/12">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Multimedia Newsroom Labs
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Work on real news stories, from pitch to publication. You practise
              reporting, verification, scripting, anchoring, editing and
              packaging stories for web, TV and mobile.
            </p>
          </div>

          {/* HALF CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Fact Checking and Media Literacy Projects
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Analyse misinformation, run fact checking exercises and build
              media literacy content for different audience groups.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:flex gap-5 mt-5">
          {/* FULL WIDTH CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Creator Economy & Community Studio
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Design creator led properties – channels, newsletters, shows or
              communities – and learn how to grow and engage audiences around
              them.
            </p>
          </div>

          {/* HALF CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 lg:w-5/12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Brand and Campaign Sprints
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Work on integrated marketing communication briefs. You plan
              campaigns, content calendars and creator collaborations for brands
              and organisations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:flex gap-5 mt-5">
          {/* FULL WIDTH CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 lg:w-5/12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Film & OTT Production Labs
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Work in teams to conceptualise, shoot and edit short films or OTT
              style pilots, trailers or digital series concepts.
            </p>
          </div>

          {/* HALF CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Data Storytelling and Visualisation Lab
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Use data journalism tools to turn datasets into interactive
              stories, charts and visual explainers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:flex gap-5 mt-5">
          {/* FULL WIDTH CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] md:w-6/12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Digital Media Entrepreneurship Project
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Design and build a real digital media or content venture – a show,
              a micro agency, a niche media brand or a product around content.
            </p>
          </div>

          {/* HALF CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] md:w-6/12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Internship and Field Work
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Use data journalism tools to turn datasets into interactive
              stories, charts and visual explainers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
