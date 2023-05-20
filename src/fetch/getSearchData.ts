import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useSearchDataFetch = (params: any, pageNum: number) => {
  const [data, setData] = useState<any>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const searchDataFetch = useCallback(async () => {
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;
    setLoading(true);

    try {
      if (params?.searchType === 'query') {
        const results = await axios.get(
          ` https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params?.id}&media_type=movie,tv&language=en-US&sort_by=popularity.desc&vote_count.gte=100`,
          {
            params: { page: pageNum },
          }
        );
        setData((prevData: any) => {
          const newData = [...prevData, ...results?.data?.results];
          return Array.from(new Set(newData));
        });
        setTotalPages(results?.data?.total_pages);
      } else if (params?.searchType === 'genre') {
        const results = await axios.get(
          `https://api.themoviedb.org/3/discover/${params?.mediaType}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&with_genres=${
            params.id?.split('-')?.[0]
          }&sort_by=popularity.desc&page=1&vote_count.gte=${
            params?.mediaType === 'movie' ? 200 : 25
          }
          `,

          {
            params: { page: pageNum },
          }
        );
        setData((prevData: any) => {
          const newData = [...prevData, ...results?.data?.results];
          return Array.from(new Set(newData));
        });
        setTotalPages(results?.data?.total_pages);
      } else if (params?.searchType === 'keyword') {
        const results = await axios.get(
          `https://api.themoviedb.org/3/discover/${params?.mediaType}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&with_keywords=${parseInt(params?.id)}`,
          {
            params: { page: pageNum },
          }
        );
        setData((prevData: any) => {
          const newData = [...prevData, ...results?.data?.results];
          return Array.from(new Set(newData));
        });
        setTotalPages(results?.data?.total_pages);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [pageNum, params.id, params?.mediaType, params?.searchType]);

  useEffect(() => {
    searchDataFetch();

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [searchDataFetch]);

  return [data, loading, totalPages];
};
