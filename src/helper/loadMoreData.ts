import { useEffect } from 'react';

export const LoadMoreData = (
  loadMoreRef: any,
  totalPages: number,
  pageNum: number,
  loading: boolean,
  loadMoreDataHandler: Function
) => {
  useEffect(() => {
    const loadMoreCurrent = loadMoreRef?.current;
    if (totalPages && pageNum) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loading && totalPages > pageNum) {
            loadMoreDataHandler();
          }
        });
      });
      if (loadMoreCurrent) {
        observer.observe(loadMoreCurrent);
      }
      return () => {
        if (loadMoreCurrent) {
          observer.unobserve(loadMoreCurrent);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, pageNum, totalPages]);
};
