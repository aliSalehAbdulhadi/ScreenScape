import { useEffect, useRef } from 'react';

const useClickOutside = (handler: Function) => {
  const ref = useRef<any>();

  useEffect(() => {
    const handleClickOutside = (e: any): void => {
      if (!ref.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return ref;
};

export default useClickOutside;
