"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingButtons() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/univiser" && (
        <Link
          href="/univiser"
          className="bg-[#f00] text-white py-[6px] px-5 fixed top-[35%] right-[-80px] rotate-90 rounded-b-sm z-50 whitespace-nowrap shadow-2xl text-md font-medium tracking-wide"
        >
          Chat with Student
        </Link>
      )}

      <Link
        href="/campus-life/virtual-tour"
        className="bg-[#f00] text-white py-[6px] px-5 fixed top-[65%] right-[-73px] rotate-90  rounded-b-sm z-50 whitespace-nowrap shadow-2xl text-md font-medium tracking-wide"
      >
        360° Virtual Tour
      </Link>
    </>
  );
}