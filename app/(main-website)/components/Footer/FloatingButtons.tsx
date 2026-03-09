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
          className="bg-[#f00] text-white py-[2px] px-[15px] fixed top-[40%] right-[-120px] rotate-90 rounded-sm h-[27px] z-10"
        >
          Connect With Campus Pioneer
        </Link>
      )}

      {/* <Link
        href="/campus-life/virtual-tour"
        className="bg-[#f00] text-white py-[6px] px-[15px] fixed top-[70%] right-[-57px] rotate-90 rounded-sm h-[27px] z-10"
      >
        360° Virtual Tour
      </Link> */}

      <Link
  href="/campus-life/virtual-tour"
  className="bg-[#f00] text-white py-[2px] px-[15px] fixed top-[80%] right-[-57px] -rotate-90 rounded-sm h-[27px] z-10"
>
  360° Virtual Tour
</Link>
    </>
  );
}