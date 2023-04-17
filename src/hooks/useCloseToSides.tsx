import { useState, useEffect } from 'react';

function useCloseToSides(elementRef: any, threshold = 50, side: string) {
  const [isCloseToRight, setIsCloseToRight] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const distanceFromRight = viewportWidth - rect.right;
        setIsCloseToRight(distanceFromRight < threshold);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elementRef, threshold]);

  return isCloseToRight;
}

export default useCloseToSides;
