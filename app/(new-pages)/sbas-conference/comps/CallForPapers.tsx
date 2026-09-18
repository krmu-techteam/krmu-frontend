const CallForPapers = () => {
  return (
    <section className="bg-[#ede9dd] py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-bold text-xs tracking-[1.5px] text-[#a9812f] mb-3">
            SUBMISSIONS
          </p>
          <h4 className="text-3xl font-bold font-lora text-[#1C2822]">
            Call for Abstracts & Papers
          </h4>
        </div>
        <div className="flex gap-8 mb-12">
          <div className="w-1/2">
            <div className="pt-6 px-7 pb-7 bg-white rounded-[10px] border-t-3 border-[#c3a342] min-h-[292px]">
              <h5 className="font-bold font-lora text-lg text-[#1C2822] mb-3">
                Call for Abstracts
              </h5>
              <p className="text-sm leading-[21.7px] mb-6 text-[#44504A]">
                Interested participants can apply online, submitting the duly
                filled form by 15 January 2027. Limited seats are available for
                early-bird registration at discounted fees. No refunds are
                issued after registration.
              </p>
              <ul className="text-sm text-[#44504A] space-y-0.5">
                <li>
                  <strong>Title: </strong>Times New Roman, 14 pt · Authors: 12
                  pt, underline presenter
                </li>
                <li>
                  <strong>Institution & Email: </strong>Italic, Times New Roman,
                  11 pt
                </li>
                <li>
                  <strong>Title: </strong>Times New Roman, 14 pt · Authors: 12
                  pt, underline presenter
                </li>
                <li>
                  <strong>Body text: </strong>Times New Roman, 12 pt, 1.5 line
                  spacing
                </li>
                <li>
                  <strong>Word limit: </strong>250–300 words
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <div className="pt-6 px-7 pb-7 bg-white rounded-[10px] border-t-3 border-[#2f5745] min-h-[292px]">
              <h5 className="font-bold font-lora text-lg text-[#1C2822] mb-3">
                Call for Papers
              </h5>
              <p className="text-sm leading-[21.7px] mb-6 text-[#44504A]">
                Papers are invited strictly within the conference's focus areas.
                Authors may submit an abstract only, or a full paper — early
                full-paper submission is encouraged, using the official
                template.
              </p>
              <ul className="text-sm text-[#44504A] space-y-1">
                <li>
                  <strong>Oral presentation: </strong>5 minutes + 2 minutes Q&A
                </li>
                <li>One participant per poster; board size 1.2m × 1.2m</li>
                <li>Apply for oral and/or poster presentation</li>
                <li>State the focus area under which the abstract falls</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#19241f] rounded-[10px] py-6 px-7 space-y-2">
          <h5 className="text-[#C3A342] text-base font-bold font-lora">Publication Opportunities</h5>
          <p className="text-sm text-[#BFC7BF]">
            All submissions undergo rigorous peer review for originality,
            quality and relevance. Selected high-quality manuscripts,
            recommended by reviewers and Track Chairs, will be considered for
            publication in Scopus-indexed journals and conference proceedings,
            subject to editorial policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
