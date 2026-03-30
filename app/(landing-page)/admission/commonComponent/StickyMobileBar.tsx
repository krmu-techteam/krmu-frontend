
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const StickyMobileBar = ({phoneNumber}:{phoneNumber:string}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-14 w-full md:hidden bg-[#d8232a] text-white">
      <Link
        href="#apply-form"
        className="flex w-1/2 items-center justify-center font-semibold text-lg hover:bg-red-700 transition-colors border-r border-white/20"
      >
        Apply Now
      </Link>
      <a
        href={`tel:${phoneNumber}`}
        className="flex w-1/2 items-center justify-center gap-2 font-semibold text-lg hover:bg-red-700 transition-colors"
      >
        Call
        <PhoneCall size={18} fill="currentColor" />
      </a>
    </div>
  );
};

export default StickyMobileBar;
