'use client';

import React, { useState } from 'react';
import { 
  Download, 
  X, 
  MessageSquare
} from 'lucide-react';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Download size={19} />, label: "Download Brochure", href: "#" },
    { icon: <FaWhatsapp size={19} />, label: "WhatsApp", href: "https://wa.me/918800697010" },
    { icon: <FaInstagram size={19} />, label: "Instagram", href: "https://instagram.com/krmangalamuniv" },
    { icon: <FaYoutube size={19} />, label: "YouTube", href: "https://youtube.com/@KRMangalamUniversity" },
    { icon: <MessageSquare size={19} />, label: "Live Chat", href: "#" },
  ];

  return (
    <div className="fixed bottom-[145px] right-11 z-[60] flex flex-col items-center">
      <div 
        className={`flex flex-col items-center gap-5 p-3 rounded-full bg-slate-900/80 dark:bg-black/80 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-500 origin-bottom ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-50 pointer-events-none absolute'
        }`}
      >
        <div className="flex flex-col items-center gap-6 mb-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white hover:scale-125 transition-all duration-300"
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="text-white/70 hover:text-white hover:rotate-90 transition-all duration-300 pb-1 cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 flex items-center justify-center rounded-full relative group p-1.5"
        >
          <div className="relative w-full h-full group-hover:scale-125 transition-transform duration-500 cursor-pointer">
            <Image 
              src="/krm.png" 
              alt="KRMU Logo" 
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CB000D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#CB000D]/90"></span>
          </span>
        </button>
      )}
    </div>
  );
}
