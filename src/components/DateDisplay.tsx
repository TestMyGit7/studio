"use client";

import { useState, useEffect } from 'react';
import { format, addDays, differenceInDays } from 'date-fns';

export default function DateDisplay() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [futureDate, setFutureDate] = useState<string>('');
  const [daysDifference, setDaysDifference] = useState<number>(0);

  useEffect(() => {
    const now = new Date();
    setCurrentTime(format(now, "PPPppp")); // Format: Jun 20, 2024, 2:30:00 PM

    const future = addDays(now, 7);
    setFutureDate(format(future, "MMMM do, yyyy"));

    setDaysDifference(differenceInDays(future, now));
    
    // Optional: update time every second
    const intervalId = setInterval(() => {
      setCurrentTime(format(new Date(), "PPPppp"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!currentTime) {
    return <p>Loading date information...</p>;
  }

  return (
    <div className="space-y-2">
      <p>Current Date & Time: <span className="font-semibold text-primary">{currentTime}</span></p>
      <p>Date 7 days from now: <span className="font-semibold text-accent">{futureDate}</span></p>
      <p>Difference in days: <span className="font-semibold">{daysDifference} days</span></p>
      <p className="text-xs text-muted-foreground">Formatted using date-fns.</p>
    </div>
  );
}
