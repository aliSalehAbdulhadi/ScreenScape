import { useState } from 'react';

export const useScrollY = () => {
  const [scroll, setScroll] = useState<number>(0);
  window.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  });
  return scroll;
};
