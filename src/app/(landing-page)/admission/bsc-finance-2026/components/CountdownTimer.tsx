"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hrs: number;
  min: number;
  sec: number;
}

function getTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hrs: 0, min: 0, sec: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
    sec: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

interface CountdownTimerProps {
  targetDate: string;
  lastDateLabel: string;
}

const UNIT_LABELS = ["Days", "Hrs", "Min", "Sec"];

const CountdownTimer = ({ targetDate, lastDateLabel }: CountdownTimerProps) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = mounted
    ? [
        { label: "Days", value: pad(timeLeft.days) },
        { label: "Hrs", value: pad(timeLeft.hrs) },
        { label: "Min", value: pad(timeLeft.min) },
        { label: "Sec", value: pad(timeLeft.sec) },
      ]
    : UNIT_LABELS.map((label) => ({ label, value: "--" }));

  return (
    <div className="flex flex-col gap-2 lg:items-start items-center">
      <div className="flex gap-2.5">
        {units.map((unit, idx) => (
          <div key={idx} className="flex flex-col w-[50px] h-[49px] rounded-[4px] overflow-hidden">
            <div className="flex-1 flex items-center justify-center bg-white">
              <span className="font-bold text-[20px] leading-6 tracking-normal text-[#0060A7] tabular-nums">
                {unit.value}
              </span>
            </div>
            <div className="flex items-center justify-center bg-white py-[3px]">
              <span className="font-[Inter] font-medium text-[10px] leading-[100%] tracking-normal text-[#565656]">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="font-medium text-[14px] leading-6 tracking-normal text-white m-0">
        {lastDateLabel}
      </p>
    </div>
  );
};

export default CountdownTimer;
