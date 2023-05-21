import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';


export const useDataFetch = (endpoint: string, pageNum: number) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const fetchData = useCallback(async () => {
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;

    setLoading(true);
    try {
      const response = await axios.get(endpoint, {
        params: { page: pageNum },
      });

      setData((prevData) => {
        const newData = [...prevData, ...response?.data?.results];
        return Array.from(new Set(newData));
      });
      setTotalPages(response?.data?.total_pages);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Ignore cancel token error
      } else {
        setError(error);
        setLoading(false);
      }

    } finally {
      setLoading(false);
    }
  }, [endpoint, pageNum]);

  useEffect(() => {
    fetchData();

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [fetchData]);

  return [data, error, loading, totalPages];
};
