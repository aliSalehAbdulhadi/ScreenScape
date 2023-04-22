'use client';

import React, { useEffect, useState } from 'react';

const DelayDisplay = ({
  children,
  delay,
}: {
  children: any;
  delay: number;
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDisplayed(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-500 transform ${
        isDisplayed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      {children}
    </div>
  );
};

export default DelayDisplay;
