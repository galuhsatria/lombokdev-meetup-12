'use client';

import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calculateTimeLeft = () => {
    // Adjust target date for WITA (UTC+8)
    const targetDate = new Date('2024-08-31T00:00:00Z'); // Z indicates UTC time
    const targetTimeWITA = targetDate.getTime() + 8 * 60 * 60 * 1000;

    const difference = targetTimeWITA - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        hari: 0,
        jam: 0,
        menit: 0,
        detik: 0,
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  if (!isClient) {
    return null; // Don't render on the server
  }

  return (
    <div className="mt-4 flex gap-4">
      <div className="w-max text-center">
        <div className="bg-accent rounded-md w-max p-[1px]">
          <p className="text-4xl font-bold text-white p-4 w-max rounded-md text-center bg-[#1A1E26] max-sm:text-2xl">{formatNumber(timeLeft.hari)}</p>
        </div>
        <p className="text-white mt-2">Hari</p>
      </div>
      <div className="w-max text-center">
        <div className="bg-accent rounded-md w-max p-[1px]">
          <p className="text-4xl font-bold text-white p-4 w-max rounded-md text-center bg-[#1A1E26]  max-sm:text-2xl">{formatNumber(timeLeft.jam)}</p>
        </div>
        <p className="text-white mt-2">Jam</p>
      </div>
      <div className="w-max text-center">
        <div className="bg-accent rounded-md w-max p-[1px]">
          <p className="text-4xl font-bold text-white p-4 w-max rounded-md text-center bg-[#1A1E26]  max-sm:text-2xl">{formatNumber(timeLeft.menit)}</p>
        </div>
        <p className="text-white mt-2">Menit</p>
      </div>
      <div className="w-max text-center">
        <div className="bg-accent rounded-md w-max p-[1px]">
          <p className="text-4xl font-bold text-white p-4 w-max rounded-md text-center bg-[#1A1E26]  max-sm:text-2xl">{formatNumber(timeLeft.detik)}</p>
        </div>
        <p className="text-white mt-2">Detik</p>
      </div>
    </div>
  );
};

export default Countdown;
