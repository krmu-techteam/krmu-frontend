"use client";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";

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

  const shareLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`,
      icon: <FaFacebookF className="w-5 h-5 text-white" />,
      bg: "bg-[#1877F2]",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}`,
      icon: <FaXTwitter className="w-5 h-5 text-white" />,
      bg: "bg-[#000000]",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`,
      icon: <FaLinkedinIn className="w-5 h-5 text-white" />,
      bg: "bg-[#0A66C2]",
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(canonicalUrl)}&media=${encodeURIComponent(ogImage)}`,
      icon: <FaPinterestP className="w-5 h-5 text-white" />,
      bg: "bg-[#E60023]",
    },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(canonicalUrl)}`,
      icon: <FaWhatsapp className="w-5 h-5 text-white" />,
      bg: "bg-[#25D366]",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full p-4 bg-[#F5F5F7] border border-[#e2e2e2] rounded-[6px] my-6">
      <span className="text-2xl font-bold text-[#1A1A1A]">Share</span>
      <div className="flex items-center gap-2.5">
        {shareLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${item.name}`}
            className={`w-11 h-11 rounded-full ${item.bg} flex items-center justify-center transition-transform hover:scale-110 duration-200 shadow-sm`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
