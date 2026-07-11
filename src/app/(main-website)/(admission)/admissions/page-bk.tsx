// import {
//   getAdmissionBannerData,
//   getAdmissionPageData,
// } from "@/lib/api/admission";
// import About from "../AdmissionSections/About";
// import AboutHeroBanner from "../AdmissionSections/AboutHeroBanner";
// import AdmissionProcess from "../AdmissionSections/AdmissionProcess";
// import Alumni from "../AdmissionSections/Alumni";
// import FAQ from "../AdmissionSections/AdmissionFAQ";
// import FeeDetails from "../AdmissionSections/FeeDetails";
// import Programs from "../AdmissionSections/Programs";
// import Location from "../AdmissionSections/Location";

// const page = async () => {
//   const admissionPageContent = await getAdmissionPageData();

//   const bannerData = await getAdmissionBannerData();

//   const admissionProcess = admissionPageContent.find(
//     (component) =>
//       component.__component ===
//       "admissionpage-components.admissionprocesscomponent"
//   );
//   const whyChooseData = admissionPageContent.find(
//     (component) =>
//       component.__component === "aboutwhychooseus-component.why-choose-us"
//   );
//   const alumniData = admissionPageContent.find(
//     (component) => component.__component === "admissionpage-components.alumni"
//   );
//   const feeDetailsData = admissionPageContent.find(
//     (component) =>
//       component.__component === "admissionpage-components.fee-details"
//   );
//   const academicData = admissionPageContent.find(
//     (component) =>
//       component.__component === "admissionpage-components.academic-excellence"
//   );

//   const locationData = admissionPageContent.find(
//     (component) => component.__component === "admissionpage-components.location"
//   );

//   return (
//     <>
//       {bannerData && <AboutHeroBanner banners={bannerData} />}
//       {admissionProcess && (
//         <AdmissionProcess
//           highlighttext={admissionProcess?.highlighttext}
//           beforehighlight={admissionProcess?.beforehighlight}
//           badgetext={admissionProcess?.badgetext}
//           desc={admissionProcess?.description}
//           readybtns={admissionProcess?.readytobeginsbtns}
//           needhelptext={admissionProcess?.needhelptext}
//           needhelplink={admissionProcess?.needhelplink}
//           needhelplinktext={admissionProcess?.needhelplinktext}
//           descriptions2={admissionProcess?.descriptions2}
//           title2={admissionProcess?.title2}
//         />
//       )}
//       {whyChooseData && (
//         <About
//           badgeheading={whyChooseData?.badgeheading}
//           blueText={whyChooseData?.titlebluetext}
//           redtext={whyChooseData?.titlehighlighttext}
//           beforeBlue={whyChooseData?.beforetitlebluetext}
//           beforehighlight={whyChooseData?.beforehighlighttitletext}
//           achievements={whyChooseData?.ourachievements}
//           achievementsdescriptions={whyChooseData?.achievementstitle}
//           achievementstitle={whyChooseData?.achievementstitle}
//           maindesc={whyChooseData?.maindescription}
//           awardsTitle={whyChooseData?.awardstitle}
//         />
//       )}
//       {academicData && (
//         <Programs
//           badge={academicData?.badgetext}
//           highlight={academicData?.highlighttext}
//           beforehighlight={academicData?.beforehighlighttext}
//           content={academicData?.content}
//           cta={academicData?.button}
//         />
//       )}
//       {feeDetailsData && (
//         <FeeDetails
//           badgeText={feeDetailsData?.badgetext}
//           highlight={feeDetailsData?.highlighttext}
//           beforehighlight={feeDetailsData?.beforehighlighttext}
//           desc={feeDetailsData?.description}
//           paymenttitle={feeDetailsData?.paymentinfotitle}
//           paymentdesc={feeDetailsData?.paymentinfocontent}
//         />
//       )}
//       {alumniData && (
//         <Alumni
//           highlightext={alumniData?.highlighttext}
//           beforehighlighttext={alumniData?.beforehighlighttext}
//           desc={alumniData?.content}
//           alumnis={alumniData?.alumniinfo}
//         />
//       )}
//       <FAQ />
//       {locationData && (
//         <Location
//           badge={locationData?.badgetext}
//           highlight={locationData?.highlighttext}
//           beforehighlightext={locationData?.beforehighlighttext}
//           desc={locationData?.description}
//         />
//       )}
//     </>
//   );
// };

// export default page;
