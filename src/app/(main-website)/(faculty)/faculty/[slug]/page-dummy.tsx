// import { getSingleFacultyBySlug } from "@/lib/api/schools";
// import SingleFacultyHero from "../comp/SingleFacultyHero";
// import SingleFacultyTabs from "../comp/SingleFacultyTabs";
// import { Raleway } from "next/font/google";
// import SingleFacultyAcc from "../comp/SingleFacultyAcc";

// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   fallback: ["Arial", "Helvetica", "sans-serif"],
// });

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// const page = async ({ params }: Props) => {
//   const { slug } = await params;
//   const singleFaculty = await getSingleFacultyBySlug(slug);

//   const currentFaculty = singleFaculty?.find(
//     (fac) => fac?.facultyslug === slug
//   );

//   return (
//     <main
//       style={{
//         background: `linear-gradient(168deg,#051630 6.9%,#004e8a 162.66%)`,
//       }}
//       className={`pt-[150px] sm:pt-[200px] pb-[100px] px-4 ${raleway.className}`}
//     >
//       {currentFaculty && (
//         <SingleFacultyHero
//           facName={currentFaculty?.faculty_name}
//           facultyImgURL={currentFaculty?.faculty_img?.url}
//           desg={currentFaculty?.faculty_designation}
//           intarea={currentFaculty?.faculty_interest_areas}
//           socialLinks={currentFaculty?.faculty_social_links}
//         />
//       )}

//       {/* ✅ Show Tabs on Desktop, Accordion on Mobile */}
//       {currentFaculty?.faculty_tab_content && (
//         <>
//           {/* Tabs for md+ (desktop/tablet) */}
//           <div className="hidden md:block">
//             <SingleFacultyTabs facTabs={currentFaculty?.faculty_tab_content} />
//           </div>

//           {/* Accordion for mobile */}
//           <div className="block md:hidden">
//             <SingleFacultyAcc facTabs={currentFaculty?.faculty_tab_content} />
//           </div>
//         </>
//       )}
//     </main>
//   );
// };

// export default page;
