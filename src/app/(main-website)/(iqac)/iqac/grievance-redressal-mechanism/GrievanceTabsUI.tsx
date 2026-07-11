"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GrievanceTabsUI() {
  const tabs = [
    { id: "grm", label: "Grievance Redressal Mechanism" },
    { id: "ic", label: "Submit Complaint under IC" },
    { id: "sg", label: "Submit Grievance" },
  ];

  const [active, setActive] = useState("grm");

  return (
    <div className="w-full bg-[#f5f5f5] p-4 md:p-6">
      <div className="bg-white border rounded-md overflow-hidden">
        
        {/* ---------- MOBILE TABS (HORIZONTAL) ---------- */}
        <div className="flex md:hidden border-b">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`
                flex-1 text-center py-3 text-[15px] font-medium
                ${
                  active === t.id
                    ? "border-b-4 border-red-600 text-[#001f3f] bg-white"
                    : "bg-[#e4e4e4] text-[#001f3f]"
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row">
          {/* ---------- LEFT TABS (DESKTOP) ---------- */}
          <div className="hidden md:block w-1/3 border-r bg-[#d9d9d9]">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`
                  w-full text-left px-6 py-6 text-[20px] font-semibold block transition-all
                  ${
                    active === t.id
                      ? "bg-white border-l-4 border-red-600 text-[#001f3f]"
                      : "bg-[#d9d9d9] text-[#001f3f] hover:bg-[#cfcfcf]"
                  }
                `}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ---------- RIGHT CONTENT AREA ---------- */}
          <div className="w-full md:w-2/3 p-4 md:p-8">
            {active === "grm" && (
              <ul className="space-y-3">
                {[
                  {
                    title: "Grievances Annual Reports",
                    link: "https://www.krmangalam.edu.in/pdfs/Grievances-Annual-Reports.pdf",
                  },
                  {
                    title: "Anti Ragging Committee Constitution",
                    link: "https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Grievances-Policies/AntiRagging-Committee-Constitution.pdf",
                  },
                  {
                    title: "Filled Form Anti Ragging and Grievances",
                    link: "https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Grievances-Policies/Filled-Form-AntiRagging-and-Grievances.pdf",
                  },
                  {
                    title: "Grievance Redressal Committee Constitution",
                    link: "https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Grievances-Policies/GrievanceRedressal-Committee-Constitution.pdf",
                  },
                  {
                    title: "ICC Constitution",
                    link: "https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Grievances-Policies/ICC-Constitution.pdf",
                  },
                  {
                    title: "Mechanism of Grievances Submission",
                    link: "https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Grievances-Policies/Mechanism-of-Grievances-Submission.pdf",
                  },
                  {
                    title: "Organization Wide Awareness",
                    link: "https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Grievances-Policies/Organization-Wide-Awareness.pdf",
                  },
                  {
                    title: "Student Grievance Redressal Policy 2022",
                    link: "https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Grievances-Policies/Student-Grievance-Redressal-Policy-2022.pdf",
                  },
                  {
                    title: "Student Grievance Redressal Policy 2023",
                    link: "https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Grievances-Policies/Student-Grievance-Redressal-Policy-2023.pdf",
                  },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      className="flex items-center gap-2 text-[#001f3f] hover:text-[#0056b3] font-medium"
                      href={item.link}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Download size={18} /> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {active === "ic" && (
              <div>
                <h5 className="text-2xl font-semibold mb-5">
                  KRMU ICC Helpline:
                </h5>
                <p>
                  <strong>Email:</strong>{" "}
                  <Link href="mailto:icc@krmangalam.edu.in" className="text-blue-600">
                    icc@krmangalam.edu.in
                  </Link>
                </p>
                <p>
                  <strong>Contact No:</strong>{" "}
                  <Link href="tel:9289114766" className="text-blue-600">
                    9289114766
                  </Link>
                </p>
              </div>
            )}

            {active === "sg" && (
              <div>
                <h5 className="text-2xl font-semibold mb-5">
                  KRMU Grievance Redressal Helpline:
                </h5>
                <p>
                  <strong>Email:</strong>{" "}
                  <Link
                    href="mailto:grievance.redressal@krmangalam.edu.in"
                    className="text-blue-600"
                  >
                    grievance.redressal@krmangalam.edu.in
                  </Link>
                </p>
                <p>
                  <strong>Contact No:</strong>{" "}
                  <Link href="tel:01242867800" className="text-blue-600">
                    0124-2867800
                  </Link>
                  , Extn. 1017,{" "}
                  <Link href="tel:8800697002" className="text-blue-600">
                    8800697002
                  </Link>
                </p>

                <Link
                  href="#"
                  className="mt-5 inline-block py-3 px-6 bg-[#0060aa] rounded text-white font-medium"
                >
                  Student Grievance
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
