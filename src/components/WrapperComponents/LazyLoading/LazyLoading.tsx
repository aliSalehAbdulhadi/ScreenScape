import { ReactNode, useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

const LazyLoading = ({
  children,
  index,
  setItemsInView,
  itemsInView,
  perView,
}: {
  children: ReactNode;
  index: number;
  perView: number;
  itemsInView: number;
  setItemsInView: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const inViewPortRef = useRef<HTMLDivElement>(null);
  const { inViewport } = useInViewport(inViewPortRef);

  useEffect(() => {
    // lazy loading display components
    if (inViewport && index >= itemsInView) {
      setItemsInView(itemsInView + perView);
    }
  }, [itemsInView, inViewport, index, setItemsInView, perView]);

  return <div ref={inViewPortRef}>{children}</div>;
};

export default LazyLoading;

// Put this inside map method
// (itemsInView >= i) && Returning Elements
