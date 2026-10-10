import { STRAPI_URL } from "@/app/constant";
import { getFooter } from "@/lib/api/footer";
import { getPageAssets } from "@/lib/api/global-setting";
import Image from "next/image";
import Link from "next/link";
import FloatingButtons from "./FloatingButtons";
import NpfAgent from "@/app/NpfAgent";
import BicolorDivider from "../Navbar/BicolorDivider";
import Button from "@/components/common/Button";
import { formatInternalLink, isExternalUrl } from "@/lib/utils";
import { resolveHomeFooterAlt } from "@/alt-text";

type FooterLink = {
    name: string;
    href: string;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
};

const footerLinks: Record<string, FooterLink[]> = {
    programmes: [
        {
            name: "UG Programmes",
            href: "/programmes?degree=undergraduate-programmes",
        },
        {
            name: "PG Programmes",
            href: "/programmes?degree=postgraduate-programmes",
        },
        {
            name: "Ph.D. Programmes",
            href: "/programmes?degree=doctoral-programmes",
        },
        {
            name: "Diploma Programmes",
            href: "/programmes?degree=diploma-programmes",
        },
    ],
    quickLinks: [
        { name: "Admissions", href: "/admissions" },
        { name: "Fees", href: "/fee-structure" },
        { name: "Scholarships", href: "/admission/scholarship" },
        { name: "Placements", href: "/placement" },
        { name: "Contact Us", href: "/contact-us" },
    ],
    aboutKRMU: [
        { name: "Our Story", href: "/about-krmu/the-university" },
        { name: "Leadership", href: "/leadership" },
        {
            name: "Accreditations",
            href: "/accreditations-recognition-and-approvals",
        },
        { name: "Research", href: "/research-overview" },
        { name: "Global", href: "/why-krmu/international-collaboration" },
        { name: "Collaborations", href: "/why-krmu/industry-connect" },
    ],
    studentResources: [
        {
            name: "ERP Login",
            href: "https://krmu.icloudems.com/corecampus/index.php",
            target: "_blank",
            rel: "noopener noreferrer",
        },
        {
            name: "LMS (Moodle)",
            href: "https://lms.krmangalam.edu.in",
            target: "_blank",
            rel: "noopener noreferrer",
        },
        { name: "Library", href: "/library" },
        {
            name: "Academic Calendar",
            href: "https://www.krmangalam.edu.in/pdfs/Notification-of-Academic-Calendar-for-Students-Academic-Sessio-1.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
        },
        { name: "Examination", href: "/examination" },
        {
            name: "Student Handbook",
            href: "https://www.krmangalam.edu.in/pdfs/student-handbook-26-27.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    ],
    legal: [
        { name: "Mandatory Disclosures", href: "/mandatory-disclosures" },
        {
            name: "Anti-Ragging Committee",
            href: "/krmu-committee#anti-ragging",
        },
        {
            name: "Grievance Redressal",
            href: "/iqac/grievance-redressal-mechanism",
        },
        {
            name: "Internal Complaints Committee (ICC)",
            href: "/krmu-committee#internal-complaints",
        },
        { name: "RTI", href: "/mandatory-disclosures" },
    ],
};

const Footer = async () => {
    const [footerData, footerAssets] = await Promise.all([
        getFooter(),
        getPageAssets(),
    ]);

    const { js_in_footer } = footerAssets || {};

    const footerComp1 = footerData?.footer_comp_1;
    const footerComp2 = footerData?.footer_comp_2;
    const footerComp3 = footerData?.footer_comp_3;
    const footerComp4 = footerData?.footer_comp_4;

    // Extract address, email, and phone dynamically from footerComp4 icon list
    const addressItem = footerComp4?.footer_list_icon?.find(
        (item) =>
            item.icon?.url?.includes("loc") ||
            item.footer_info?.includes("Gurugram")
    );
    const emailItem = footerComp4?.footer_list_icon?.find(
        (item) =>
            item.icon?.url?.includes("envelope") ||
            item.icon?.url?.includes("mail") ||
            item.footer_info?.includes("@")
    );
    const phoneItem = footerComp4?.footer_list_icon?.find(
        (item) =>
            item.icon?.url?.includes("phone") ||
            item.icon?.url?.includes("call") ||
            item.footer_info?.match(/\d+/)
    );

    return (
        <footer
            className="relative w-full overflow-hidden font-poppins tracking-tight bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: "url('/modules/home/footer/footer-bg.webp')",
            }}
        >
            {/* Dark Black Overlay */}
            <div className="absolute inset-0 bg-black/75 transition-opacity"></div>

            <div className="relative z-10">
                <BicolorDivider />

                {/* Main Footer Body (Top Section) */}
                <div className="py-8 md:py-16 lg:py-20">
                    <div className="max-w-[1530px] mx-auto w-full px-4 md:px-8 lg:px-11 xl:px-16">
                        <div className="columns-2 gap-6 md:gap-8 lg:gap-12 text-white text-left md:grid md:grid-cols-3 lg:grid-cols-5 space-y-6 md:space-y-0">
                            {/* Column 1: Programmes */}
                            <div className="inline-block w-full break-inside-avoid font-poppins">
                                <div className="text-[16px] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]  font-semibold mb-1 text-white tracking-wide">
                                    Programmes
                                </div>
                                <ul className="space-y-1">
                                    {footerLinks.programmes.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                target={link.target}
                                                rel={link.rel}
                                                className="text-white/80 hover:text-white transition-all duration-300 text-[15px] inline-block [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300 ease-in-out"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    href="https://www.krmangalam.edu.in/pdfs/student-handbook-26-27.pdf"
                                    className="mt-6 !border-[1px] !border-white !font-medium !text-white px-4 lg:!px-2   xl:!px-4 !text-[10px] xl:!text-[14px] hidden md:inline-flex"
                                >
                                    Download Handbook
                                </Button>
                            </div>

                            {/* Column 2: Quick Links */}
                            <div className="inline-block w-full break-inside-avoid">
                                <div className="text-[16px] font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] mb-1 text-white tracking-wide">
                                    {footerComp3?.heading?.heading ||
                                        "Quick Links"}
                                </div>
                                <ul className="space-y-1">
                                    {footerComp3?.footer_menu
                                        ? footerComp3.footer_menu.map(
                                              (menu) => {
                                                  const href =
                                                      formatInternalLink(
                                                          menu.url
                                                      ) || "#";
                                                  const external =
                                                      isExternalUrl(menu.url);
                                                  return (
                                                      <li key={menu.id}>
                                                          <Link
                                                              href={href}
                                                              target={
                                                                  external
                                                                      ? "_blank"
                                                                      : undefined
                                                              }
                                                              rel={
                                                                  external
                                                                      ? "noopener noreferrer"
                                                                      : undefined
                                                              }
                                                              className="text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] hover:text-white transition-all duration-300 text-[15px] inline-block relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300 ease-in-out"
                                                          >
                                                              {menu.title}
                                                          </Link>
                                                      </li>
                                                  );
                                              }
                                          )
                                        : footerLinks.quickLinks.map((link) => (
                                              <li key={link.name}>
                                                  <Link
                                                      href={formatInternalLink(
                                                          link.href
                                                      )}
                                                      target={link.target}
                                                      rel={link.rel}
                                                      className="text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] hover:text-white transition-all duration-300 text-[15px] inline-block relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300 ease-in-out"
                                                  >
                                                      {link.name}
                                                  </Link>
                                              </li>
                                          ))}
                                </ul>
                                <Button
                                    href="https://www.krmangalam.edu.in/pdfs/student-handbook-26-27.pdf"
                                    className="mt-6 !border-[1px] !border-white !font-medium !text-white !px-2.5 !text-[11px] xs:!text-[12px] whitespace-nowrap inline-flex md:hidden"
                                >
                                    Download Handbook
                                </Button>
                                <Image
                                    src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/footer_logos_d944bc560c.svg"
                                    width={560}
                                    height={160}
                                    alt={resolveHomeFooterAlt(
                                        "footer_logos_d944bc560c.svg",
                                        "NAAC and accreditation logos for K.R. Mangalam University"
                                    )}
                                    className="w-auto h-auto max-w-[170px] xs:max-w-[220px] mt-6 block md:hidden"
                                    unoptimized
                                />
                                <Link
                                    href="/campus-life/virtual-tour"
                                    target="_blank"
                                    className="relative group mt-4 block md:hidden"
                                >
                                    <div className="relative w-36 h-16">
                                        <Image
                                            src="/modules/home/footer/virtual-tour.webp"
                                            alt="360 Virtual Tour"
                                            fill
                                            sizes="144px"
                                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* Column 3: About KRMU */}
                            <div className="inline-block w-full break-inside-avoid">
                                <div className="text-[16px] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] font-semibold mb-1 text-white tracking-wide">
                                    About KRMU
                                </div>
                                <ul className="space-y-1">
                                    {footerComp2?.footer_menu
                                        ? footerComp2.footer_menu.map(
                                              (menu) => {
                                                  let rawUrl = menu.url || "#";
                                                  const titleLower =
                                                      menu.title?.toLowerCase() ||
                                                      "";
                                                  if (
                                                      titleLower.includes(
                                                          "sitemap"
                                                      )
                                                  ) {
                                                      rawUrl =
                                                          "/other-links/sitemap";
                                                  } else if (
                                                      titleLower.includes(
                                                          "internal complaints"
                                                      )
                                                  ) {
                                                      rawUrl =
                                                          "/krmu-committee#internal-complaints";
                                                  } else if (
                                                      titleLower.includes(
                                                          "grievance"
                                                      )
                                                  ) {
                                                      rawUrl =
                                                          "/iqac/grievance-redressal-mechanism";
                                                  }
                                                  const href =
                                                      formatInternalLink(
                                                          rawUrl
                                                      ) || "#";
                                                  const external =
                                                      isExternalUrl(rawUrl);
                                                  return (
                                                      <li key={menu.id}>
                                                          <Link
                                                              href={href}
                                                              target={
                                                                  external
                                                                      ? "_blank"
                                                                      : undefined
                                                              }
                                                              rel={
                                                                  external
                                                                      ? "noopener noreferrer"
                                                                      : undefined
                                                              }
                                                              className="text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] hover:text-white transition-all duration-300 text-[15px] inline-block relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300 ease-in-out"
                                                          >
                                                              {menu.title}
                                                          </Link>
                                                      </li>
                                                  );
                                              }
                                          )
                                        : footerLinks.aboutKRMU.map((link) => (
                                              <li key={link.name}>
                                                  <Link
                                                      href={formatInternalLink(
                                                          link.href
                                                      )}
                                                      target={link.target}
                                                      rel={link.rel}
                                                      className="text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] hover:text-white transition-all duration-300 text-[15px] inline-block relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300 ease-in-out"
                                                  >
                                                      {link.name}
                                                  </Link>
                                              </li>
                                          ))}
                                </ul>
                            </div>

                            {/* Column 4: Student Resources */}
                            <div className="inline-block w-full break-inside-avoid">
                                <div className="text-[16px] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] font-semibold mb-1 text-white tracking-wide">
                                    Student Resources
                                </div>
                                <ul className="space-y-1">
                                    {footerLinks.studentResources.map(
                                        (link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    target={link.target}
                                                    rel={link.rel}
                                                    className="text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] hover:text-white transition-all duration-300 text-[15px] inline-block relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300 ease-in-out"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            {/* Column 5: Legal & Compliance */}
                            <div className="inline-block w-full break-inside-avoid">
                                <div className="text-[16px]  [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] font-semibold mb-1 text-white tracking-wide">
                                    Legal & Compliance
                                </div>
                                <ul className="space-y-1">
                                    {footerLinks.legal.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                target={link.target}
                                                rel={link.rel}
                                                className="text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] hover:text-white transition-all duration-300 text-[15px] inline-block relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300 ease-in-out"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/campus-life/virtual-tour"
                                    target="_blank"
                                    className="relative group mt-5 hidden md:block"
                                >
                                    <div className="relative w-36 h-16">
                                        <Image
                                            src="/modules/home/footer/virtual-tour.webp"
                                            alt="360 Virtual Tour"
                                            fill
                                            sizes="144px"
                                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Divider Line (Above Helpline/Contact Section) */}
                <div className="max-w-[1530px] mx-auto w-full px-4 md:px-8 lg:px-11 xl:px-16">
                    <div className="w-full border-t border-white/30 mb-6 lg:mb-8" />
                </div>

                {/* Bottom Footer Section */}
                <div>
                    <div className="max-w-[1530px] mx-auto w-full px-4 md:px-8 lg:px-11 xl:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 text-left text-white items-start">
                            {/* Helpline Section */}
                            <div className="flex flex-col h-full justify-between min-h-0 md:min-h-[90px] lg:min-h-[112px]">
                                <div>
                                    <div className="text-md font-semibold mb-1 text-white">
                                        General Helpline No
                                    </div>
                                    <p className="text-white/70 text-[16px] font-light block mb-0 md:mb-4 hover:text-white transition-colors">
                                        01148884888, 8800697010 – 15,
                                        <br className="hidden md:block" />
                                        8192888444
                                    </p>
                                </div>
                            </div>

                            {/* Email Section */}
                            <div>
                                <div className="text-md font-semibold text-white">
                                    Email
                                </div>
                                {emailItem ? (
                                    <div
                                        className="text-white/70 text-md font-light block mb-4 hover:text-white transition-colors"
                                        dangerouslySetInnerHTML={{
                                            __html: emailItem.footer_info,
                                        }}
                                    />
                                ) : (
                                    <a
                                        href="mailto:welcome@krmangalam.edu.in"
                                        className="text-white/70 text-md font-light block mb-4 hover:text-white transition-colors"
                                    >
                                        welcome@krmangalam.edu.in
                                    </a>
                                )}

                                {/* Social Icons */}
                                <div className="flex justify-start gap-4 mt-4">
                                    {footerComp4?.footer_social_icons?.map(
                                        (comp4) => (
                                            <Link
                                                key={comp4?.id}
                                                href={comp4?.footer_url || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/30 hover:text-white transition-all duration-300 transform hover:-translate-y-1 block relative w-6 h-6 md:w-5 md:h-5"
                                            >
                                                <Image
                                                    src={`${STRAPI_URL}${comp4?.footer_icon?.url}`}
                                                    alt={resolveHomeFooterAlt(
                                                        comp4?.footer_icon?.url,
                                                        comp4?.footer_icon
                                                            ?.alternativeText ||
                                                            "Social Icon"
                                                    )}
                                                    fill
                                                    className="object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                                                />
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Address Section */}
                            <div>
                                <div className="text-md font-semibold text-white">
                                    Get in Touch
                                </div>
                                {addressItem ? (
                                    <div
                                        className="text-white/70 text-md font-light leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: addressItem.footer_info,
                                        }}
                                    />
                                ) : (
                                    <p className="text-white/70 text-md font-light leading-relaxed">
                                        Sohna Road, Gurugram,
                                        <br />
                                        Haryana – 122103
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-start md:justify-end text-md gap-4 mb-4 md:mb-0">
                                <Image
                                    src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/footer_logos_d944bc560c.svg"
                                    width={560}
                                    height={160}
                                    alt={resolveHomeFooterAlt(
                                        "footer_logos_d944bc560c.svg",
                                        "NAAC and accreditation logos for K.R. Mangalam University"
                                    )}
                                    className="w-auto h-auto max-w-[280px] hidden md:block"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Divider Line (Above Copyright) */}
                    <div className="max-w-[1530px] mx-auto w-full px-4 md:px-8 lg:px-11 xl:px-16">
                        <div className="w-full border-t border-white/30 mb-4" />
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white/90 text-[16px] pb-4">
                            <p className="text-center">
                                Copyrights © 2026 All Rights Reserved by K.R.
                                Mangalam University.
                            </p>
                        </div>
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
