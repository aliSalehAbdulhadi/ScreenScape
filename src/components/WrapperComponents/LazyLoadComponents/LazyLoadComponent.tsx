import React, { useState, useEffect, useRef } from 'react';

function LazyLoadComponent({
  once,
  threshold,
  children,
}: {
  once: boolean;
  threshold: number;
  children: any;
}) {
  const [intersecting, setIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIntersecting(entries[0].isIntersecting);
        if (intersecting && once) {
          observer.unobserve(containerRef.current!);
        }
      },
      {
        threshold: threshold,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    } else {
      setIntersecting(false);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [intersecting, once, threshold]);

  return <div ref={containerRef}>{intersecting ? children : null}</div>;
}

export default LazyLoadComponent;
