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
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 lg:w-5/12 flex flex-col justify-end min-h-[300px] h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Creator lab challenge
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Build and grow a content property such as a YouTube channel, Insta
              page, podcast or newsletter. You will work on scripting, shooting,
              editing, branding and reading analytics. The best work is
              showcased on official university platforms and events.
            </p>
          </div>

          {/* HALF CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 lg:w-7/12 flex flex-col justify-end  min-h-[300px] h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Digital newsroom simulation
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Work in teams to run a digital newsroom that covers campus, city
              and youth issues. You will pitch story ideas, report on ground,
              shoot, edit and publish on real platforms. You learn deadlines,
              verification, ethics and fact checking.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:flex gap-5 mt-5">
          {/* FULL WIDTH CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 flex flex-col justify-end min-h-[400px] h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Brand and campaign sprint
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              Work on live or simulated briefs from brands, agencies or campus
              initiatives. Design social media calendars, creator collaborations
              and integrated campaigns. Present your work to a jury of faculty
              and industry guests.
            </p>
          </div>

          {/* HALF CARD */}
          <div className="bg-[#1f679f] rounded-[22px] px-8 py-5 text-white border border-[#2b7fbe] w-full md:w-1/2 flex flex-col justify-end min-h-[400px] h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Final year media venture
            </h3>

            <p className="text-xs opacity-90 leading-relaxed">
              In your final year you build a capstone: a show, channel, media IP
              or detailed research project. You are guided on content, audience,
              monetisation and partnerships. This becomes the centrepiece of
              your portfolio for jobs, further study or clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
