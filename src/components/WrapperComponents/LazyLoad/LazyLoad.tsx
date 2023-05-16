import React, { ReactNode, useEffect, useRef } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  threshold: number;
  onVisible: () => void;
}

function LazyLoad({ children, threshold, onVisible }: LazyLoadProps) {
  const observerRef = useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible();
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, onVisible]);

  return <div ref={targetRef}>{children}</div>;
}

export default LazyLoad;
