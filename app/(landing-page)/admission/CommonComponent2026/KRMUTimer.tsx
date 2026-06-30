"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface ZenithTimerProps {
  targetDate: string;
  mainWebsiteTimer?: boolean;
}

export default function KRMUTimer({
  targetDate,
  mainWebsiteTimer,
}: ZenithTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false); // 👈 new
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const target = new Date(targetDate);

    // 👉 target ka end of day (11:59:59 PM)
    const endOfDay = new Date(target);
    endOfDay.setHours(23, 59, 59, 999);

    const now = new Date();

    const shouldShow = now.getTime() <= endOfDay.getTime();
    setShow(shouldShow);

    if (shouldShow) {
      setTimeLeft(calculateTimeLeft());

      const timer = setInterval(() => {
        const currentTime = new Date();

        // 👉 midnight ke baad hide
        if (currentTime.getTime() > endOfDay.getTime()) {
          setShow(false);
          clearInterval(timer);
          return;
        }

        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate]);

  // ⭐ hide if not tomorrow
  if (!mounted || !show) return null;

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    // <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-900 text-white px-4 py-2 rounded-xl shadow-md">
    <div
      className={`flex  ${mainWebsiteTimer ? "flex-col-reverse lg:flex-row bg-[#cb000d] px-2 py-2 gap-2" : "flex-col md:flex-row bg-[#fcd404] px-4 py-2"}  text-center md:text-left items-center gap-2  text-black  rounded-xl ${!mainWebsiteTimer && "shadow-md"} `}
    >
      {/* <span className="text-xs uppercase tracking-wider font-semibold">
        Now or Never! Grab Your 100% Scholarship Today
      </span> */}

      <span
        className={`capitalize tracking-wider font-extrabold ${mainWebsiteTimer ? "text-white text-[10px] sm:text-sm" : "text-[10px]"}`}
      >
        Grab Up to 100% Scholarships Worth Rs 27 Cr + Get a Chance to Fly to
        Europe (First Come, First Serve){" "}
        {mainWebsiteTimer && (
          <span className="border-b border-white border-dotted">Apply Now</span>
        )}
        {/* {mainWebsiteTimer && (
          <span className="border-b border-white border-dotted vi text-sm text-white pb-0.5 ml-2 font-semibold inline">
            Apply Now
          </span>
        )} */}
      </span>
      <div className="flex gap-2 font-mono text-sm">
        <TimeBox
          value={format(timeLeft.days)}
          mainWebsiteTimer={mainWebsiteTimer}
          label="D"
        />
        <TimeBox
          value={format(timeLeft.hours)}
          mainWebsiteTimer={mainWebsiteTimer}
          label="H"
        />
        <TimeBox
          value={format(timeLeft.minutes)}
          mainWebsiteTimer={mainWebsiteTimer}
          label="M"
        />
        <TimeBox
          value={format(timeLeft.seconds)}
          mainWebsiteTimer={mainWebsiteTimer}
          label="S"
        />
      </div>
    </div>
  );
}

function TimeBox({
  value,
  label,
  mainWebsiteTimer,
}: {
  value: string;
  label: string;
  mainWebsiteTimer?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-1 ${mainWebsiteTimer ? "bg-white tick-animation" : "bg-black/30"}  px-2 py-1 rounded-md`}
    >
      <span
        className={` ${mainWebsiteTimer ? "font-medium" : "font-semibold"}`}
      >
        {value}
      </span>
      <span className={`text-xs text-black`}>{label}</span>
    </div>
  );
}
