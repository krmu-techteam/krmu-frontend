"use client";

import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {
  title?: string;
  url?: string;
  className?: string;
};

const SocialShareBar = ({ title, url, className = "" }: Props) => {
  const currentUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");
  const shareTitle = title || "K.R. Mangalam University Blog";

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  const buttonBaseClass =
    "group w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg active:scale-95 cursor-pointer";

  return (
    <div
      className={`flex flex-wrap items-center gap-1.5 sm:gap-3 text-white text-xs sm:text-sm font-poppins ${className}`}
    >
      <span className="font-light text-white/90 mr-0.5 sm:mr-1 text-xs sm:text-sm">
        Share:
      </span>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook Share"
        className={`${buttonBaseClass} bg-[#1877F2] hover:bg-[#1464cc] hover:shadow-[#1877F2]/40`}
      >
        <FaFacebookF className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/krmangalamuniv/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`${buttonBaseClass} bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 hover:shadow-[#dc2743]/40`}
      >
        <FaInstagram className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Share"
        className={`${buttonBaseClass} bg-[#0A66C2] hover:bg-[#08529c] hover:shadow-[#0A66C2]/40`}
      >
        <FaLinkedinIn className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Share"
        className={`${buttonBaseClass} bg-[#25D366] hover:bg-[#1eb956] hover:shadow-[#25D366]/40`}
      >
        <FaWhatsapp className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
      </a>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X Twitter Share"
        className={`${buttonBaseClass} bg-black hover:bg-gray-900 hover:shadow-black/40`}
      >
        <FaXTwitter className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};

export default SocialShareBar;
