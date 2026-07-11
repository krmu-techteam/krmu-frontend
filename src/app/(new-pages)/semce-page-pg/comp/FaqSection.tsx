import { instrumentSerif } from "../lib/font";

const faqs = [
  {
    q: "Who is this MA programme designed for?",
    a: "This programme is designed for graduates who want to build a serious career in journalism, digital media, content strategy, creator economy, film and OTT, advertising, PR or media research. It suits both fresh graduates and early stage professionals who want to deepen their skills and move into more responsible roles.",
  },
  {
    q: "Do I need a Bachelor’s in Journalism or Mass Communication to apply?",
    a: "No. Graduates from any discipline with minimum 50 percent aggregate from a UGC recognised university can apply. However, you should have a clear interest in media, content, communication or storytelling. A basic portfolio or prior exposure helps but is not compulsory.",
  },
  {
    q: "Is this programme more theoretical or practical?",
    a: "It balances both. You study advanced media theory, research and critical thinking, and at the same time you work on labs, projects, campaigns, films, data stories and a dissertation or capstone project. The goal is to make you both industry ready and research aware.",
  },
  {
    q: " Can I work or freelance while pursuing this MA?",
    a: "Since it is a full time on campus programme, your primary commitment is to classes, projects and labs. Limited freelance or part time work that does not clash with academic requirements may be possible, especially in media and content related roles, but it must be managed responsibly.",
  },
  {
    q: "Is the degree recognised for higher studies and government jobs?",
    a: "Yes. The degree awarded is MA (Journalism & Mass Communication) from K.R. Mangalam University, a UGC recognised university. It is valid for higher studies, competitive exams and opportunities where a recognised postgraduate degree is required, as per applicable regulations.",
  },
  {
    q: "Does this programme help if I want to do a Ph.D later?",
    a: "Yes. Through courses in communication research, data journalism, development communication and the dissertation / capstone component, you build research skills and academic grounding that support applications to Ph.D programmes in media and communication.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#145f99] py-12 md:py-16 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* TITLE */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl ${instrumentSerif.className} text-white text-center mb-10`}
        >
          Frequently asked questions
        </h2>

        {/* CARD */}
        <div className="bg-[#f3f3f3] rounded-3xl p-5 sm:p-6 md:p-10 space-y-6 md:space-y-8">
          {faqs.map((item, i) => {
            return (
              <div key={i} className="space-y-3">
                {/* QUESTION ROW */}
                <div className="flex items-start gap-3 md:gap-4">
                  {/* DOT */}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#145f99] shrink-0" />

                  {/* QUESTION */}
                  <button className="bg-[#e31e24] text-white px-4 md:px-6 py-3 rounded-full text-left text-sm md:text-base font-normal w-full">
                    {item.q}
                  </button>
                </div>

                {/* ANSWER */}
                <div className="sm:pl-11 md:pl-14">
                  <div className="bg-[#dcdcdc] rounded-xl p-4 md:p-5 text-sm md:text-base italic text-gray-800 font-medium">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
