"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

export default function AnimatedCounter({
  targetDate,
}: {
  targetDate: string;
}) {
  // ✅ calculate time
  const calculateTimeLeft = (): TimeLeft => {
    const diff = new Date(targetDate).getTime() - new Date().getTime();

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  // ✅ lazy state init
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  // ✅ interval update
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // ✅ event started
  if (!timeLeft) {
    return (
      <div className="text-center font-semibold text-lg">Event Started 🎉</div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row sm:gap-2.5 lg:gap-3 items-center text-center sm:text-left uppercase text-balance py-3 sm:py-0 bg-[#f0f0f0] px-3 rounded-[10px]">
      <p className="text-sm sm:text-base font-bold">
        Grab or Gone! Last Chance for{" "}
        <span className="text-[#e31e24]">Early Bird Scholarships</span>
      </p>
      <div className="flex sm:gap-2.5 justify-center items-center">
        <TimeBox label="Days" value={timeLeft.days} />
        <span className="text-xl">{" : "}</span>
        <TimeBox label="Hours" value={timeLeft.hours} />
        <span className="text-xl">{" : "}</span>
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <span className="text-xl">{" : "}</span>
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-2.5 rounded-xl text-center">
      <p className="text-sm sm:text-base font-bold leading-tight text-shadow-lg">
        {value}
      </p>
      <p className="text-xs sm:text-[10px] opacity-70">{label}</p>
    </div>
  );
}
