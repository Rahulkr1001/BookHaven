import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="text-sm text-sm md:text-xl font-semibold text-nowrap">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
