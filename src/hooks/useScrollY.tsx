'use client';

import { useState } from 'react';

export const useScrollY = () => {
  const [scroll, setScroll] = useState<number>(0);
  if (typeof window === 'undefined') return;
  window.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  });
  return scroll;
};
