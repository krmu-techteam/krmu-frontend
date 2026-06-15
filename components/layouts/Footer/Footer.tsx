// import { STRAPI_URL } from "@/app/constant";
// import NpfChatbot from "@/app/NpfChatbot";
// import { getFooter } from "@/lib/api/footer";
// import { getPageAssets } from "@/lib/api/global-setting";
// import Image from "next/image";
// import Link from "next/link";
// import FloatingButtons from "./FloatingButtons";
// import NpfAgent from "@/app/NpfAgent";
// 
// const Footer = async () => {
//   const footerData = await getFooter();
//   const footerAssets = await getPageAssets();
// 
//   const { js_in_footer } = footerAssets || {};
// 
//   const footerComp1 = footerData?.footer_comp_1;
//   const footerComp2 = footerData?.footer_comp_2;
//   const footerComp3 = footerData?.footer_comp_3;
//   const footerComp4 = footerData?.footer_comp_4;
// 
//   return (
//     <>
//       {/* <NpfPopup
//         formId="d63cf9c4d3104c39f3ac28164701a69c"
//         btnClass={`bg-[#f00] text-white border border-none py-[6px] px-[15px] fixed top-[40%] right-[-42px] rotate-90 rounded-sm h-[27px] z-10 npfWidget-d63cf9c4d3104c39f3ac28164701a69c`}
//         btnText="Enquire Now"
//         showIcon={false}
//       /> */}
// 
//       <FloatingButtons />
//       {/* <div className="fixed bottom-0 left-0 w-full text-center z-50 flex sm:hidden items-center justify-center">
//         <Link
//           href="https://admissions.krmangalam.edu.in/?utm_source=Website&utm_medium=ApplyNow-S"
//           target="_blank"
//           className="bg-[#0a41a1] w-1/2 rounded-xl border border-white  text-white py-2.5 inline-block cursor-pointer"
//         >
//           Apply Now
//         </Link>
//         <NpfPopup
//           formId="d63cf9c4d3104c39f3ac28164701a69c"
//           btnClass={`bg-[#0a41a1] w-1/2 rounded-xl border border-white  text-white py-2.5 inline-block cursor-pointer npfWidget-d63cf9c4d3104c39f3ac28164701a69c`}
//           btnText="Enquire Now"
//         />
//       </div> */}
// 
//       {/* <Link href="https://krmangalam.edu.in/univiser" className="#cb000d text-white inline-flex transition-all
//  duration-[250ms] gap-2.5 translate-x-[274px] hover:translate-x-0 cursor-pointer justify-center items-center h-12 fixed top-[40%] right-0 p-4 text-base font-semibold">
//   <Image src="/wp-content/images/message-regular-full.svg" width={20} height={20} alt="" /> Connect With Campus Pioneer</Link> */}
// 
//       <section className="px-5 py-12 xl:p-[50px] bg-[#061623]">
//         <div className="grid grid-cols-1 md:grid-cols-2  xl:flex gap-5">
//           <div className="w-full  xl:w-1/4 xl:mx-7">
//             {footerComp1 && (
//               <div>
//                 <h6 className="text-2xl font-bold pb-2.5  w-1/2 text-white mt-2.5">
//                   {footerComp1?.heading?.heading}
//                 </h6>
//                 <Image
//                   src={`${STRAPI_URL}${footerComp1?.footer_logo?.url}`}
//                   alt={footerComp1?.footer_logo?.alternativeText || ""}
//                   width={180}
//                   height={180}
//                 />
//                 <p className="text-white my-4 font-light">
//                   {footerComp1?.footer_desc}
//                 </p>
//                 {footerComp1?.footer_btn?.btn_link && (
//                   <Link
//                     href={footerComp1?.footer_btn?.btn_link || "#"}
//                     className={`text-white bg-[#cb000d] py-[5px] px-5 hover:bg-[#034272] rounded font-semibold ${
//                       footerComp1?.footer_btn?.btn_class || ""
//                     }`}
//                   >
//                     {footerComp1?.footer_btn?.btn_text || ""}
//                   </Link>
//                 )}
//               </div>
//             )}
//           </div>
//           <div className="w-full  xl:w-1/4 ">
//             <div className="xl:mx-7 ">
//               {footerComp2 && (
//                 <>
//                   <h6 className="text-2xl font-bold pb-2.5  w-1/2 text-white mt-5 md:mt-2.5">
//                     {footerComp2?.heading?.heading}
//                   </h6>
//                   <ul className="text-white mb-5">
//                     {footerComp2?.footer_menu?.map((comp2) => {
//                       return (
//                         <li key={comp2?.id} className="pb-1.5 ">
//                           <Link
//                             href={comp2?.url || "#"}
//                             className="leading-[27.2px] text-base flex items-baseline justify-between"
//                           >
//                             {comp2?.title}
//                             {/* <Image
//                               src="/white-arrow.svg"
//                               width={19}
//                               height={27}
//                               alt="White arrow"
//                             /> */}
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="w-full  xl:w-1/4">
//             <div className="xl:mx-7">
//               {footerComp3 && (
//                 <>
//                   <h6 className="text-2xl font-bold pb-2.5  w-full text-white mt-2.5">
//                     {footerComp3?.heading?.heading}
//                   </h6>
//                   <ul className="text-white mb-5">
//                     {footerComp3?.footer_menu?.map((comp3) => {
//                       return (
//                         <li key={comp3?.id} className="pb-1.5">
//                           <Link
//                             href={comp3?.url || "#"}
//                             className="leading-[27.2px] text-base flex items-baseline justify-between"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             {comp3?.title}
//                             {/* <Image
//                               src="/white-arrow.svg"
//                               width={19}
//                               height={27}
//                               alt="White arrow"
//                             /> */}
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="w-full  xl:w-1/4">
//             <div className="xl:mx-7">
//               {footerComp4 && (
//                 <>
//                   <h6 className="text-2xl font-bold pb-2.5 w-1/2   text-white mt-2.5">
//                     {footerComp4?.heading?.heading}
//                   </h6>
//                   <ul className="text-white mb-5">
//                     {footerComp4?.footer_list_icon?.map((comp4) => {
//                       return (
//                         <li key={comp4?.id} className="flex gap-3 mb-2.5">
//                           <Image
//                             src={`${STRAPI_URL}${comp4?.icon?.url}`}
//                             alt="Location"
//                             width={20}
//                             height={20}
//                           />{" "}
//                           <span className="text-white">
//                             <div
//                               dangerouslySetInnerHTML={{
//                                 __html: comp4?.footer_info,
//                               }}
//                             />
//                           </span>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                   <h6 className="text-2xl font-bold  w-1/2 text-white">
//                     {footerComp4?.heading_2?.heading}
//                   </h6>
//                   <div className="flex">
//                     {footerComp4?.footer_social_icons?.map((comp4) => {
//                       return (
//                         <Link
//                           key={comp4?.id}
//                           href={comp4?.footer_url || "#"}
//                           className="w-[34px] h-[34px] p-2 bg-white flex items-center justify-center rounded-full m-1.5"
//                         >
//                           <Image
//                             src={`${STRAPI_URL}${comp4?.footer_icon?.url}`}
//                             width={40}
//                             height={40}
//                             alt={comp4?.footer_icon?.alternativeText || ""}
//                           />
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </>
//               )}
//               <div className="mt-5">
//                 <Image
//                   src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/footer_logos_d944bc560c.svg"
//                   width={250}
//                   height={200}
//                   alt="Footer Image"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {js_in_footer && (
//         <script dangerouslySetInnerHTML={{ __html: js_in_footer }} />
//       )}
// 
//       {/* Hide Nia Chatbot */}
//       {/* <NpfChatbot /> */}
//       <NpfAgent />
//       {/* <div className="fixed bottom-10 right-24">
//         <a
//           href="https://wa.me/8800697018?text=Hi"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/whatsapp_icon_e712c9e9c0.svg"
//             width={45}
//             height={45}
//             alt="Whatsapp Icon"
//           />
//         </a>
//       </div> */}
// 
//       {/* <Script
//         src="https://cdn.npfs.co/js/widget/npfwpopup.js"
//         strategy="afterInteractive"
//       /> */}
// 
//       {/* Then run your inline script */}
//       {/* <Script id="npf-form" strategy="afterInteractive">
//         {`
//           function initNpfWidget() {
//             if (typeof NpfWidgetsInit !== "undefined") {
//               new NpfWidgetsInit({
//                 widgetId: "d63cf9c4d3104c39f3ac28164701a69c",
//                 baseurl: "widgets.nopaperforms.com",
//                 formTitle: "Feedback Form",
//                 titleColor: "#FF0033",
//                 backgroundColor: "#ddd",
//                 iframeHeight: "500px",
//                 buttonbgColor: "#ff0000",
//                 buttonTextColor: "#FFF",
//               });
//             } else {
//               console.log("NPF not ready, retrying...");
//               setTimeout(initNpfWidget, 300);
//             }
//           }
// 
//           initNpfWidget();
//         `}
//       </Script> */}
// 
//       {/* <div className="fixed bottom-0 left-0 w-full text-center z-50 flex sm:hidden items-center justify-center bg-[#0a41a1]">
//         <Link
//             href="https://admissions.krmangalam.edu.in"
//             className="bg-[#0a41a1] w-1/2 rounded-xl border border-white  text-white py-2.5 inline-block cursor-pointer"
//             target="_blank"
//           >
//             Apply Now
//           </Link>
//         <NpfButton formId="d63cf9c4d3104c39f3ac28164701a69c" text="Enquire Now" />
//       </div> */}
//     </>
//   );
// };
// 
// export default Footer;

import { STRAPI_URL } from "@/app/constant";
import { getFooter } from "@/lib/api/footer";
import { getPageAssets } from "@/lib/api/global-setting";
import Image from "next/image";
import Link from "next/link";
import FloatingButtons from "./FloatingButtons";
import NpfAgent from "@/app/NpfAgent";
import BicolorDivider from "../Navbar/BicolorDivider";

type FooterLink = {
  name: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

const footerLinks: Record<string, FooterLink[]> = {
  programmes: [
    { name: 'UG Programmes', href: '/programmes?degree=undergraduate-programmes' },
    { name: 'PG Programmes', href: '/programmes?degree=postgraduate-programmes' },
    { name: 'PhD Programmes', href: '/programmes?degree=doctoral-programmes' },
    { name: 'Diploma Programmes', href: '/programmes?degree=diploma-programmes' },
  ],
  quickLinks: [
    { name: 'Admissions', href: '/admissions' },
    { name: 'Fees', href: '/fee-structure' },
    { name: 'Scholarships', href: '/admission/scholarship' },
    { name: 'Placements', href: '/placement/overview' },
    { name: 'Contact Us', href: '/contact-us' },
  ],
  aboutKRMU: [
    { name: 'Our Story', href: '/about-krmu/the-university' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Accreditations', href: '/accreditations-recognition-and-approvals' },
    { name: 'Research', href: '/research-overview' },
    { name: 'Global', href: '/why-krmu/international-collaboration' },
    { name: 'Collaborations', href: '/why-krmu/industry-connect' },
  ],
  studentResources: [
    { name: 'ERP Login', href: 'https://krmu.icloudems.com/corecampus/index.php', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'LMS (Moodle)', href: 'https://lms.krmangalam.edu.in', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'Library', href: '/library' },
    { name: 'Academic Calendar', href: 'https://www.krmangalam.edu.in/pdfs/Academic-Calendar-2025-26.pdf', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'Examination', href: '/examination' },
    { name: 'Student Handbook', href: 'https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Policy-of-Code-of-Conduct.pdf', target: '_blank', rel: 'noopener noreferrer' },
  ],
  legal: [
    { name: 'Mandatory Disclosures', href: '/mandatory-disclosures' },
    { name: 'Anti-Ragging Committee', href: '/krmu-committee' },
    { name: 'Grievance Redressal', href: '/krmu-committee' },
    { name: 'Internal Complaints Committee (ICC)', href: '/krmu-committee' },
    { name: 'RTI', href: '/mandatory-disclosures' },
  ],
};

const Footer = async () => {
  const footerData = await getFooter();
  const footerAssets = await getPageAssets();

  const { js_in_footer } = footerAssets || {};

  const footerComp1 = footerData?.footer_comp_1;
  const footerComp2 = footerData?.footer_comp_2;
  const footerComp3 = footerData?.footer_comp_3;
  const footerComp4 = footerData?.footer_comp_4;

  // Extract address, email, and phone dynamically from footerComp4 icon list
  const addressItem = footerComp4?.footer_list_icon?.find(item =>
    item.icon?.url?.includes("loc") || item.footer_info?.includes("Gurugram")
  );
  const emailItem = footerComp4?.footer_list_icon?.find(item =>
    item.icon?.url?.includes("envelope") || item.icon?.url?.includes("mail") || item.footer_info?.includes("@")
  );
  const phoneItem = footerComp4?.footer_list_icon?.find(item =>
    item.icon?.url?.includes("phone") || item.icon?.url?.includes("call") || item.footer_info?.match(/\d+/)
  );

  return (
    <footer className="relative w-full overflow-hidden font-poppins tracking-tight">
      <BicolorDivider />

      {/* Main Footer Body (Top Section) */}
      <div className="relative py-8 md:py-16 lg:py-20 bg-cover bg-center" style={{ backgroundImage: "url('/modules/home/footer/footer-bg.png')" }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-dark/70 transition-opacity"></div>

        <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 lg:px-11 xl:px-16 relative z-10">
          <div className="columns-2 gap-6 md:gap-8 lg:gap-12 text-white text-left md:grid md:grid-cols-3 lg:grid-cols-5 space-y-6 md:space-y-0">
            {/* Column 1: Programmes */}
            <div className="inline-block w-full break-inside-avoid">
              <h4 className="text-lg font-serif font-semibold mb-2 text-white tracking-wide">Programmes</h4>
              <ul className="space-y-1">
                {footerLinks.programmes.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className="text-white/70 hover:text-white transition-colors text-[15px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={footerComp1?.footer_btn?.btn_link || "#"}
                className="cursor-pointer mt-4 px-6 py-2.5 border border-white/80 hover:bg-white hover:text-brand-dark hover:border-white transition-all text-xs font-bold uppercase tracking-widest rounded-sm inline-block text-center"
              >
                {footerComp1?.footer_btn?.btn_text || "Download Handbook"}
              </Link>
            </div>

            {/* Column 2: Quick Links */}
            <div className="inline-block w-full break-inside-avoid">
              <h4 className="text-lg font-serif font-semibold mb-2 text-white tracking-wide">
                {footerComp3?.heading?.heading || "Quick Links"}
              </h4>
              <ul className="space-y-1">
                {footerComp3?.footer_menu ? (
                  footerComp3.footer_menu.map((menu) => (
                    <li key={menu.id}>
                      <Link
                        href={menu.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors text-[15px]"
                      >
                        {menu.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  footerLinks.quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        className="text-white/80 hover:text-white transition-colors text-[15px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* Column 3: About KRMU */}
            <div className="inline-block w-full break-inside-avoid">
              <h4 className="text-lg font-serif font-semibold mb-2 text-white tracking-wide">
                {footerComp2?.heading?.heading || "About KRMU"}
              </h4>
              <ul className="space-y-1">
                {footerComp2?.footer_menu ? (
                  footerComp2.footer_menu.map((menu) => (
                    <li key={menu.id}>
                      <Link href={menu.url || "#"} className="text-white/80 hover:text-white transition-colors text-[15px]">{menu.title}</Link>
                    </li>
                  ))
                ) : (
                  footerLinks.aboutKRMU.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        className="text-white/80 hover:text-white transition-colors text-[15px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* Column 4: Student Resources */}
            <div className="inline-block w-full break-inside-avoid">
              <h4 className="text-lg font-serif font-semibold mb-2 text-white tracking-wide">Resources</h4>
              <ul className="space-y-1">
                {footerLinks.studentResources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className="text-white/80 hover:text-white transition-colors text-[15px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Legal & Compliance */}
            <div className="inline-block w-full break-inside-avoid">
              <h4 className="text-lg font-serif font-semibold mb-2 text-white tracking-wide">Compliance</h4>
              <ul className="space-y-1">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className="text-white/80 hover:text-white transition-colors text-[15px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section with Brand Dark Background */}
      <div className="bg-brand-navy pb-6 pt-10 border-t border-white/5">
        <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 lg:px-11 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 text-center md:text-left text-white items-start">
            {/* Helpline Section */}
            <div className="flex flex-col h-full justify-between min-h-[90px] lg:min-h-[120px]">
              <div>
                <h5 className="text-md font-semibold mb-1 text-white">General Helpline No</h5>
                {phoneItem ? (
                  <div
                    className="text-white/90 text-md leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: phoneItem.footer_info }}
                  />
                ) : (
                  <p className="text-white/90 text-md">
                    01148884888, 8800697010 – 15,<br />
                    8192888444
                  </p>
                )}
              </div>
              <div className="flex justify-center md:justify-start text-md gap-4">
                <Link href="#" className="text-white/90 hover:text-white transition-colors">Privacy Policy</Link>
                <span className="text-white/10">|</span>
                <Link href="#" className="text-white/90 hover:text-white transition-colors">Terms & Conditions</Link>
              </div>
            </div>

            {/* Email Section */}
            <div>
              <h5 className="text-md font-semibold text-white">Email</h5>
              {emailItem ? (
                <div
                  className="text-white/70 text-md font-light block mb-4 hover:text-white transition-colors"
                  dangerouslySetInnerHTML={{ __html: emailItem.footer_info }}
                />
              ) : (
                <a href="mailto:welcome@krmangalam.edu.in" className="text-white/70 text-md font-light block mb-4 hover:text-white transition-colors">welcome@krmangalam.edu.in</a>
              )}
              
              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                {footerComp4?.footer_social_icons?.map((comp4) => (
                  <Link
                    key={comp4?.id}
                    href={comp4?.footer_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-white transition-all duration-300 transform hover:-translate-y-1 block relative w-5 h-5"
                  >
                    <Image
                      src={`${STRAPI_URL}${comp4?.footer_icon?.url}`}
                      alt={comp4?.footer_icon?.alternativeText || "Social Icon"}
                      fill
                      className="object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Address Section */}
            <div>
              <h5 className="text-md font-semibold text-white">Get in Touch</h5>
              {addressItem ? (
                <div
                  className="text-white/70 text-md font-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: addressItem.footer_info }}
                />
              ) : (
                <p className="text-white/70 text-md font-light leading-relaxed">
                  Sohna Road, Gurugram,<br />
                  Haryana – 122103
                </p>
              )}
            </div>

            {/* Virtual Tour Section & Accreditation Logos */}
            <div className="flex flex-col items-center lg:items-end">
              <Link href="/campus-life/virtual-tour" target='_blank' className="relative group p-4 block">
                <div className="relative w-36 h-16">
                  <Image 
                    src="/modules/home/footer/virtual-tour.png"
                    alt="360 Virtual Tour"
                    fill
                    sizes="144px"
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </Link>

              {/* Accreditation Logos from Strapi */}
              <div className="mt-4 flex justify-center lg:justify-end">
                <Image
                  src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/footer_logos_d944bc560c.svg"
                  width={560}
                  height={160}
                  alt="Accreditation Logos"
                  className="w-auto h-auto max-w-[280px]"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end items-center gap-6 text-white/30 text-md mt-4 lg:mt-8 border-t border-white/5 pt-6">
            <p className="text-center md:text-right">Copyrights © 2026 All Rights Reserved by KR Mangalam University.</p>
          </div>
        </div>
      </div>

      <FloatingButtons />
      <NpfAgent />

      {js_in_footer && (
        <script dangerouslySetInnerHTML={{ __html: js_in_footer }} />
      )}
    </footer>
  );
};

export default Footer;
