"use client";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  WhatsappIcon,
  PinterestIcon,
  LinkedinIcon,
  XShareButton,
  XIcon,
  FacebookIcon,
} from "react-share";

type Props = {};

const SocialShare = (props: Props) => {
  const pathName = usePathname();
  const canonicalUrl = `https://www.krmangalam.edu.in${pathName}`;

  // Fallback image url for Pinterest sharing (will read og:image client-side if available)
  const ogImage =
    typeof window !== "undefined"
      ? document
          .querySelector('meta[property="og:image"]')
          ?.getAttribute("content") ||
        "https://www.krmangalam.edu.in/wp-content/uploads/2025/11/KRMU-Logo-NAAC.webp"
      : "https://www.krmangalam.edu.in/wp-content/uploads/2025/11/KRMU-Logo-NAAC.webp";

  return (
    <div className="flex items-center justify-between w-full p-4 bg-[#F5F5F7] border border-[#e2e2e2]  rounded-[6px] my-6">
      <span className="text-2xl font-bold text-[#1A1A1A]">Share</span>
      <div className="flex items-center gap-2.5">
        {/* Facebook */}
        <FacebookShareButton url={canonicalUrl}>
          <FacebookIcon
            className="transition-transform hover:scale-110 duration-200 cursor-pointer"
            round
            size={44}
          />
        </FacebookShareButton>

        {/* X (formerly Twitter) */}
        <XShareButton url={canonicalUrl}>
          <XIcon
            className=" transition-transform hover:scale-110 duration-200 cursor-pointer"
            round
            size={44}
          />
        </XShareButton>

        {/* LinkedIn */}
        <LinkedinShareButton url={canonicalUrl}>
          <LinkedinIcon
            className=" transition-transform hover:scale-110 duration-200 cursor-pointer"
            round
            size={44}
          />
        </LinkedinShareButton>

        {/* Pinterest */}
        <PinterestShareButton url={canonicalUrl} media={ogImage}>
          <PinterestIcon
            className=" transition-transform hover:scale-110 duration-200 cursor-pointer"
            round
            size={44}
          />
        </PinterestShareButton>

        {/* WhatsApp */}
        <WhatsappShareButton url={canonicalUrl}>
          <WhatsappIcon
            className=" transition-transform hover:scale-110 duration-200 cursor-pointer"
            round
            size={44}
          />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
