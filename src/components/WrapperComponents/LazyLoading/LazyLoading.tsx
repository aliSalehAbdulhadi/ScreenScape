import React, { ReactNode, useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

const LazyLoading = ({
  children,
  index,
  setSlidersInView,
  slidersInView,
  perView,
}: {
  children: ReactNode;
  index: number;
  perView: number;
  slidersInView: number;
  setSlidersInView: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const inViewPortRef = useRef<HTMLDivElement>(null);
  const { inViewport } = useInViewport(inViewPortRef);

  useEffect(() => {
    // lazy loading display components
    if (inViewport && index >= slidersInView) {
      setSlidersInView(slidersInView + perView);
    }
  }, [slidersInView, inViewport, index, setSlidersInView, perView]);

  return <div ref={inViewPortRef}>{children}</div>;
};

export default LazyLoading;

// Put this inside map method
// (slidersInView >= i) && Returning Elements
