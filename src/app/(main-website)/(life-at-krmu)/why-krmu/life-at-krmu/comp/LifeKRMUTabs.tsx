"use client";
import { useState } from "react";

const tabs = [
  { id: "research", label: "Research Facilities" },
  { id: "classrooms", label: "Classrooms" },
  { id: "moot", label: "Moot Court" },
  { id: "arts", label: "Arts Studios" },
  { id: "medical", label: "Medical Facilities" },
  { id: "sports", label: "Sports Complex" },
  { id: "cafeteria", label: "Cafeteria" },
];

const tabContent: Record<string, string> = {
  research: `K.R. Mangalam University boasts over 100 specialized research laboratories, each equipped with modern technology to support a wide array of academic and scientific inquiries. Our labs cater to diverse disciplined, enabling groundbreaking research and innovation.  At the heart of our research infrastructure is the Central Instrumentation Facility (CIF). This premier facility is a resource hub for our researchers, providing access to high-end instruments for advanced experimental and analytical work. Key instruments available at CIF include HPLC, UV-VIS spectrophotometer. These instruments are integral to research in fields such as materials science, engineering, chemistry, and pharmaceutical sciences, providing our faculty and students with the tools necessary for cutting-edge exploration and discovery.

`,
  classrooms: `Classrooms serve as the foundation of academic infrastructure which provides students with the combined conducive environment for exceptional learning and growth. Our classrooms are equipped with modern amenities and technology. We have smart-tech classrooms that are well designed to facilitate interactive and engaging teaching and learning experiences. With comfortable seating arrangements, ample lighting, and appropriate ventilation, the classrooms foster an atmosphere of concentration and focus, allowing students to fully immerse themselves in their studies. Furthermore, well-equipped classrooms enable faculties to employ a variety of teaching methods, from traditional lectures to collaborative group activities and multimedia presentations.
`,
  moot: `The moot court facilities at School of Legal Studies, K.R.Mangalam University are a foundation of our commitment to providing students with practical and hands-on legal education. The setup is designed to simulate real courtroom settings, these state to art facilities offer students the opportunity to hone their advocacy skills, motivating students to engage in mock trials and gain valuable courtroom experiences. With the guidance from experienced faculty and legal professionals, students participate in simulated court proceedings, argue cases, and receive constructive feedback to refine their courtroom techniques. Through our moot court facilities, we aim to empower aspiring lawyers with the practical skills and confidence needed to excel in their legal profession.
`,
  arts: `Art studios at K.R. Mangalam University is a vibrant hub of creativity and expression, providing students with the ideal environment to explore their artistic talents and develop their craft. These dynamic spaces are equipped with state-of-the-art facilities and resources, including drafting tables, sculpting tools, and specialized equipment for various art mediums. With ample natural light and spacious work areas, our studios offer students the freedom and inspiration to unleash their creativity and bring their artistic visions to life.
`,
  medical: `At our university, we prioritize the health and well-being of our students, faculty, staff, and visitors by offering comprehensive medical facilities and services. Our state-of-the-art medical center is staffed with highly skilled healthcare professionals, including doctors, nurses, and support staff, who are dedicated to providing quality care and treatment.
`,
  sports: `In consensus with the Fit India Movement, KRMU believes that healthy youth will lead a healthy nation. The university has built excellent infrastructure to harness learners’ potential in cultural and sports activities. It provides dedicated space for several sports and recreational facilities such as a tennis court, badminton court, football ground and table tennis equipment, etc.
`,
  cafeteria: `K.R. Mangalam University has a well-maintained cafeteria to cater to the needs of the students and staff. Adhering to the hygiene standards, it serves healthy meals to the hostellers and day scholars. The cafeteria can accommodate more than 100 students. It also houses a Café Coffee Day outlet to satiate the cravings of coffee enthusiasts. KRMU’s cafeteria is an ideal place to unwind and relish a delicious multi-cuisine treat.
`,
};

export default function LifeKRMUTabs() {
  const [active, setActive] = useState("research");

  return (
    <section className="relative p-[30px] bg-[url('/life-at-krmu/facilities.webp')]  bg-cover bg-no-repeat">
      {/* dark overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* MAIN WRAPPER */}
      <div className="relative max-w-[1664px] mx-auto w-full flex items-center flex-col-reverse md:flex-row gap-10">
        {/* ------- RIGHT CONTENT (MOBILE FIRST) ------- */}
        <div className="order-1 md:order-2 md:w-3/4 text-white text-lg leading-relaxed">
          <p>{tabContent[active]}</p>
        </div>

        {/* ------- LEFT TABS DESKTOP ------- */}
        <div className="hidden md:block relative w-1/4 pt-10">
          {/* long vertical line (only desktop) */}
          <div className="absolute left-2 top-[18px] bottom-0 w-[2px] bg-white"></div>

          <ul className="flex flex-col gap-6">
            {tabs.map((t) => (
              <li
                key={t.id}
                className={`relative pl-10 cursor-pointer  text-[22px] font-medium transition-all  text-black
                ${active === t.id ? "font-bold text-white" : "opacity-70"}`}
                onClick={() => setActive(t.id)}
              >
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px]
                  ${active === t.id ? "bg-white" : "border-white/50"}`}
                ></span>
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        {/* ------- MOBILE TABS (STACKED BELOW CONTENT) ------- */}
        <div className="md:hidden order-2 mt-10 relative">
          {/* small vertical line height only matching the tab list */}
          <div className="absolute left-1.5 top-3 bottom-0 w-[2px] bg-white/70"></div>

          <ul className="flex flex-col gap-6">
            {tabs.map((t) => (
              <li
                key={t.id}
                className={`relative pl-10 cursor-pointer text-white text-[18px] transition-all
                ${active === t.id ? "font-bold" : "opacity-70"}`}
                onClick={() => setActive(t.id)}
              >
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-[2px]
                  ${
                    active === t.id
                      ? "bg-white border-white"
                      : "border-white/50"
                  }`}
                ></span>
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
