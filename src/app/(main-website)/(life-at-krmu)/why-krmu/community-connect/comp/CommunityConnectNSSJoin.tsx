import { Check } from "lucide-react";

const CommunityConnectNSSJoin = () => {
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(180deg,#051630 0%,#0060aa 100%)",
      }}
      className="py-[50px] px-4"
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center text-white font-bold">
          <h3 className="mb-5">Criteria to join NSS</h3>
        </div>
        <div>
          <ul className="text-white">
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                The candidate must be a legitimate student officially enrolled
                at the university.
              </span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                The candidate should not be a member of any other club/ society.
              </span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                Students are eligible to be part of NSS for a maximum of two
                years.
              </span>
            </li>
          </ul>
        </div>
        <div className="text-center text-white font-bold mt-5">
          <h3 className="mb-5">Criteria to earn NSS merit certificate</h3>
        </div>
        <div>
          <ul className="text-white">
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                Volunteers who have completed two years of volunteership.
              </span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                A volunteer should complete 240 hours during his volunteership
                (two year) tenure.
              </span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>He/ She must attend the day-night 7-day special camp.</span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                Volunteers are generally expected to attend NSS activities
                regularly and meet the attendance requirements set by the NSS
                unit.
              </span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                Volunteers who have displayed consistent attendance in all NSS
                programs and activities. They also require to submit regular
                reports or documentation of their NSS activities in the form of
                NSS diaries, including details of the work they have done and
                the impact it has had on the community.
              </span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                A volunteer who has planted minimum 2 plants/ sapling in a year
                and 4 plants in volunteership period with GEO tagging (volunteer
                should ensure for 100% survival rate of their sapling) or donate
                two times blood in two years or literate at least five
                illiterate people during his/ her volunteership period.
              </span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                On being satisfied that all requirements as per NSS norms have
                been met, the certificate can be issued.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnectNSSJoin;
