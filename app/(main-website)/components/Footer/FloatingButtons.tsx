"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingButtons() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Version: Side-floating buttons */}
      <div className="hidden lg:block">
        {pathname !== "/univiser" && (
          <Link
            href="/univiser"
            className="bg-[#cb000d] text-white py-[6px] px-5 fixed top-[35%] right-[-80px] rotate-90 rounded-b-sm z-[9999] whitespace-nowrap shadow-2xl text-md font-medium tracking-wide hover:bg-[#c4020f] transition-all"
          >
            Chat with Student
          </Link>
        )}

        <Link
          href="/campus-life/virtual-tour"
          className="bg-[#cb000d] text-white py-[6px] px-5 fixed top-[65%] right-[-73px] rotate-90  rounded-b-sm z-[9999] whitespace-nowrap shadow-2xl text-md font-medium tracking-wide hover:bg-[#c4020f] transition-all"
        >
          360° Virtual Tour
        </Link>
      </div>

      {/* Mobile Version: Sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] flex shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
        {pathname !== "/univiser" && (
          <Link
            href="/univiser"
            className="flex-1 bg-[#cb000d] text-white py-3.5 px-2 text-center text-[14px] font-medium capitalize tracking-wide border-r border-white/50 active:bg-[#c4020f]"
          >
            Chat with Student
          </Link>
        )}
        <Link
          href="/campus-life/virtual-tour"
          className="flex-1 bg-[#cb000d] text-white py-3.5 px-2 text-center text-[14px] font-medium capitalize tracking-wide active:bg-[#c4020f]"
        >
          360° Virtual Tour
        </Link>
      </div>
    </>
  );
}