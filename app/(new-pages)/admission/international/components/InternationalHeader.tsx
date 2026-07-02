"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ScrollButton from "@/app/(landing-page)/admission/CommonComponent2026/ScrollButton";
const menus = [
  {
    name: "Why Choose Us",
    href: "#why-choose",
  },
  {
    name: "Programmes",
    href: "#programmes",
  },
  {
    name: "Facilities",
    href: "#facilities",
  },
  {
    name: "FAQs",
    href: "#faqs",
  },
];

export default function InternationalHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[9999999999999] bg-[#071C38] shadow-md px-5 w-full">
      <div className="mx-auto max-w-[1664px]">
        <div className="flex h-20 items-center justify-between gap-5 lg:gap-0">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/international-admission/krm-logo.png"
              alt="KRMU"
              width={361}
              height={42}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-12">
            {menus.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[15px] font-medium text-white transition hover:text-[#1EA7FF] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#1EA7FF] after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
            <ScrollButton
              targetId="apply-section"
              highlightClass="flash-border"
              btnClass="rounded-md bg-[#E31B23] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#c6151d]"
            >
              Apply Now
            </ScrollButton>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#071C38] transition-all duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-2 px-5 py-4">
          {menus.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md py-3 text-white transition hover:bg-white/10"
            >
              {item.name}
            </Link>
          ))}

          <ScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="mt-3 w-full rounded-md bg-[#E31B23] p-3 font-semibold text-white"
          >
            Apply Now
          </ScrollButton>
        </div>
      </div>
    </header>
  );
}
