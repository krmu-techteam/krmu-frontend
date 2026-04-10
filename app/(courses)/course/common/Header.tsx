"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

  // Sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-2.5 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 w-full z-100000 bg-white shadow-md"
          : ""
      }`}
    >
      <nav className="px-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75"
            width={200}
            height={40}
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6 font-semibold">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#why-krmu">Why KRMU?</Link></li>
            <li><Link href="#courses">Courses</Link></li>
            <li><Link href="#facilities">Facilities</Link></li>
            <li><Link href="#scholarship">Scholarship</Link></li>
            <li><Link href="#faqs">FAQs</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>

          <div className="flex gap-2">
            <Link
              href="#"
              className="bg-red-500 text-white px-4 py-2 rounded-full"
            >
              Apply Now
            </Link>
            <Link
              href="tel:+919311411717"
              className="bg-blue-600 text-white px-4 py-2 rounded-full"
            >
              Call Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu (Animated) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4">
          <div className="bg-white p-[15px] mt-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl text-center space-y-4 font-semibold flex flex-col">
            <div className="flex flex-col">
            <Link className="py-2" href="#hero" onClick={() => setOpen(false)}>Home</Link>
            <Link className="py-2" href="#why-krmu" onClick={() => setOpen(false)}>Why KRMU?</Link>
            <Link className="py-2" href="#courses" onClick={() => setOpen(false)}>Courses</Link>
            <Link className="py-2" href="#facilities" onClick={() => setOpen(false)}>Facilities</Link>
            <Link className="py-2" href="#scholarship" onClick={() => setOpen(false)}>Scholarship</Link>
            <Link className="py-2" href="#faqs" onClick={() => setOpen(false)}>FAQs</Link>
            <Link className="py-2" href="#contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
           

            {/* Buttons */}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="#"
                className="bg-red-500 text-white py-3 rounded-full"
              >
                Apply Now
              </Link>
              <Link
                href="tel:+919311411717"
                className="bg-blue-600 text-white py-3 rounded-full"
              >
                Call Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}