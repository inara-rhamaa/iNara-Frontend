"use client";

import { useEffect, useState } from 'react';

export default function Clock() {
  const [dateTime, setDateTime] = useState<Date>(new Date());
  
  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);
  
  // Format the time as HH:MM:SS
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: false 
    });
  };
  
  // Format the date as Day, DD Month YYYY
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };
  
  return (
    <div className="flex flex-col items-end">
      <div className="text-xl font-bold">{formatTime(dateTime)}</div>
      <div className="text-sm">{formatDate(dateTime)}</div>
    </div>
  );
}
