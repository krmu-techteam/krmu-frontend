"use client";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import OverviewTab from "./tabs/OverviewTab";
import MembersghipTab from "./tabs/MembersghipTab";
import IssueOfBooks from "./tabs/IssueOfBooks";
import LateFine from "./tabs/LateFine";
import Missing from "./tabs/Missing";
import DamageBooks from "./tabs/DamageBooks";
import BookRenewal from "./tabs/BookRenewal";
import ConvenientRenewal from "./tabs/ConvenientRenewal";
import BookRecall from "./tabs/BookRecall";
import PromptCorrection from "./tabs/PromptCorrection";
import ReadingRoom from "./tabs/ReadingRoom";
import DigitalLibrary from "./tabs/DigitalLibrary";
import Suggestion from "./tabs/Suggestion";
import LibraryStaff from "./tabs/LibraryStaff";
import Feedback from "./tabs/Feedback";
import NeedHelp from "./tabs/NeedHelp";
import EBooks from "./tabs/EBooks";
import Journals from "./tabs/Journals";
const LibraryPage = () => {
  const [open, setOpen] = useState(true); // dropdown toggle
  const [activeTab, setActiveTab] = useState(0); // current active tab

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <section className="px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col md:flex-row">
        {/* SIDEBAR */}
        <div className="md:w-1/4 md:mx-8 pt-[116px] px-4 pb-[60px] bg-[url(/library/gradient.webp)] bg-cover bg-no-repeat bg-center">
          <div className="hover:border-b border-white ">
            {/* DROPDOWN HEADER */}
            <div
              className="py-2.5 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div className="flex items-center justify-between text-white font-semibold">
                <span className="leading-[4.5] py-2.5">
                  <strong>Overview</strong>
                </span>

                <ChevronUp
                  color="#fff"
                  strokeWidth={5}
                  className={`w-4 h-4 transition-transform duration-300 ${
                    open ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
            </div>

            {/* DROPDOWN CONTENT WITH ANIMATION */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2">
                <ul className="tabs flex flex-col gap-y-1.5 text-white">
                  {[
                    "Overview",
                    "Membership",
                    "Issue of Books",
                    "Late Fine",
                    "Missing / Lost of Book",
                    "Damage of Book",
                    "Book Renewal",
                    "Renewal Status",
                    "Recall of Book / Reservation",
                    "Correction",
                    "Reading Room & Discipline",
                    "Digital Library",
                    "Complaint & Suggestion",
                    "Book Recommendation",
                    "Feedback",
                    "Need Help?",
                  ].map((label, i) => (
                    <li
                      key={i}
                      className={`tab-link cursor-pointer py-1 `}
                      onClick={() => handleTabClick(i)}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* OTHER TABS */}
          <div className="flex flex-col mt-4">
            {[
              { label: "E-Books", index: 16 },
              { label: "Journals", index: 17 },
            ].map((item) => (
              <span
                key={item.index}
                onClick={() => handleTabClick(item.index)}
                className={`text-lg font-semibold py-2.5 px-[25px] cursor-pointer inline-block text-white`}
              >
                <strong>{item.label}</strong>
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION (CONTENT) */}
        <div className="md:w-3/4 pt-10 md:pt-[15%] md:px-10 pb-10 text-lg">
          {activeTab === 0 && (
            <div id="tab1">
              <OverviewTab />
            </div>
          )}
          {activeTab === 1 && (
            <div id="tab2">
              <MembersghipTab />
            </div>
          )}
          {activeTab === 2 && (
            <div id="tab3">
              <IssueOfBooks />
            </div>
          )}
          {activeTab === 3 && (
            <div id="tab4">
              <LateFine />
            </div>
          )}
          {activeTab === 4 && (
            <div id="tab5">
              <Missing />
            </div>
          )}
          {activeTab === 5 && (
            <div id="tab6">
              <DamageBooks />
            </div>
          )}
          {activeTab === 6 && (
            <div id="tab7">
              <BookRenewal />
            </div>
          )}
          {activeTab === 7 && (
            <div id="tab8">
              <ConvenientRenewal />
            </div>
          )}
          {activeTab === 8 && (
            <div id="tab9">
              <BookRecall />
            </div>
          )}
          {activeTab === 9 && (
            <div id="tab10">
              <PromptCorrection />
            </div>
          )}
          {activeTab === 10 && (
            <div id="tab11">
              <ReadingRoom />
            </div>
          )}
          {activeTab === 11 && (
            <div id="tab12">
              <DigitalLibrary />
            </div>
          )}
          {activeTab === 12 && (
            <div id="tab13">
              <Suggestion />
            </div>
          )}
          {activeTab === 13 && (
            <div id="tab14">
              <LibraryStaff />
            </div>
          )}
          {activeTab === 14 && (
            <div id="tab15">
              <Feedback />
            </div>
          )}
          {activeTab === 15 && (
            <div id="tab16">
              <NeedHelp />
            </div>
          )}

          {/* Extra Tabs */}
          {activeTab === 16 && (
            <div id="tab16">
              <EBooks />
            </div>
          )}
          {activeTab === 17 && (
            <div id="tab17">
              <Journals />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LibraryPage;
