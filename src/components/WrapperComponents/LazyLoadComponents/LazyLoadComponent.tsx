import React, { ReactNode, memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoadComponent = ({ children }: { children: ReactNode }) => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return <div ref={ref}>{isInView ? children : null}</div>;
};

export default memo(LazyLoadComponent);
