"use client";
import React, { useState, useEffect } from "react";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-06-23T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-1 px-12">
      <div className="px-1 py-4 w-[200px] leading-none bg-white/70 text-gray-800 rounded-lg flex flex-col justify-center items-center">
        <h1>{String(time.days).padStart(2, "0")}</h1>
        <p className="text-xs">Days</p>
      </div>
      <div className="px-1 py-4 w-[200px] leading-none bg-white/70 text-gray-800 rounded-lg flex flex-col justify-center items-center">
        <h1>{String(time.hours).padStart(2, "0")}</h1>
        <p className="text-xs">Hours</p>
      </div>
      <div className="px-1 py-4 w-[200px] leading-none bg-white/70 text-gray-800 rounded-lg flex flex-col justify-center items-center">
        <h1>{String(time.minutes).padStart(2, "0")}</h1>
        <p className="text-xs">Minutes</p>
      </div>
      <div className="px-1 py-4 w-[200px] leading-none bg-white/70 text-gray-800 rounded-lg flex flex-col justify-center items-center">
        <h1>{String(time.seconds).padStart(2, "0")}</h1>
        <p className="text-xs">Seconds</p>
      </div>
    </div>
  );
}
