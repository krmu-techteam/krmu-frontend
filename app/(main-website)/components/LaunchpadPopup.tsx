"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Domine } from "next/font/google";

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const INITIAL_DELAY = 10000; // 15s
const VISIBLE_TIME = 10000; // 10s
const REPEAT_TIME = 10 * 60 * 1000; // 10min

export default function LaunchpadPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    const displayPopup = () => {
      setShow(true);

      hideTimer = setTimeout(() => {
        setShow(false);
      }, VISIBLE_TIME);
    };

    showTimer = setTimeout(displayPopup, INITIAL_DELAY);

    const interval = setInterval(displayPopup, REPEAT_TIME);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 200,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-5 z-[9999]"
        >
          <div
            className={`${domine.className} relative w-[300px] overflow-hidden rounded-md bg-white shadow-[0_10px_40px_rgba(0,0,0,0.25)]`}
          >
            {/* Close */}
            <button
              onClick={() => setShow(false)}
              className="absolute right-3 top-3 z-20 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Heading */}
            <div className="border-b px-3 py-2">
              <h3 className="text-[18px] font-bold">LAUNCHPAD 2026</h3>
            </div>

            {/* Image */}
            <Image
              src="/hero-banner-4.png"
              alt="Launchpad"
              width={300}
              height={300}
              className="object-contain"
            />

            {/* Button */}

            <Link
              href="https://launchpad.krmangalam.edu.in"
              target="_blank"
              className="w-full font-domine py-2 inline-block p-3 text-center font-semibold transition hover:bg-slate-100"
            >
              VISIT NOW
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
