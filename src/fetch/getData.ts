import axios, { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useDataFetch = (endpoint: string, pageNum: number) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchData = useCallback(async () => {
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
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [endpoint, pageNum]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, error, loading, totalPages];
};
