"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Hash } from "lucide-react";

const admissionData = [
  {
    title: "Private Colleges & Universities",
    desc: "Many private universities and colleges offer institute-level seats or management quota admissions, where students may not need a high rank in national or state entrance exams. However, they must meet the minimum eligibility criteria and may even be required to appear for university-specific entrance exam.",
  },
  {
    title: "Deemed Universities & Institutions",
    desc: "Certain deemed-to-be universities conduct their own admission processes instead of centralised counselling systems. Admission may be based on class 12th scores, rank in university-level exams or performance in personal interviews.",
  },
  {
    title: "NRI / Management / Foreign Quota",
    desc: "Many institutions reserve a limited number of seats for NRI / OCI candidates as well as for foreign nationals. Admissions under these categories are usually done through direct application to the university with separate fee structures and additional documentation requirements.",
  },
];

export default function DirectAdmissionSection() {
  return (
    <section
      className="w-full py-16 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white scroll-mt-30"
      id="courses"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
            Direct Admission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            Is Direct Admission in B.Tech. Possible?
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            In certain conditions, direct admission in B.Tech. colleges in India
            is possible; however, it depends on the institution, its policies,
            and applicable regulations. While exams like JEE Main are required
            by many top universities, some offer alternative pathways for
            admission.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {admissionData.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1" size={22} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex gap-4 items-start">
          <Hash className="text-yellow-600 mt-1" size={22} />
          <div className="italic">
            <p className="text-sm text-gray-700">
              These are not <strong>“direct” admissions</strong> in the pure
              sense, but alternative pathways to B.Tech. CSE admission.
            </p>
            <p className="text-sm text-gray-700 mt-2">
              Before applying, ensure the institute has{" "}
              <strong>AICTE & UGC approval</strong>, as lack of accreditation
              may impact the validity of your degree and future career
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
