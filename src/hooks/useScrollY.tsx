import { useEffect, useState } from 'react';


export const useScrollY = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scroll;
};
