import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useHoverDataFetch = (
  mediaType: string,
  titleId: string,
  index: number,
  hoveredIndex: number
): [any, any, boolean, string | null] => {
  const [data, setData] = useState<any>(null);
  const [trailer, setTrailer] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const hoverDataFetch = useCallback(async () => {
    setLoading(true);
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;

    try {
      const [dataResponse, trailerResponse] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${titleId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
          {
            cancelToken: source.token,
          }
        ),
        axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${titleId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
          {
            cancelToken: source.token,
          }
        ),
      ]);

      setData(dataResponse?.data);
      setTrailer(
        trailerResponse?.data?.results.filter(
          (title: any) => title.type === 'Trailer'
        )
      );
      setError(null);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Request was canceled, ignore the error
      } else {
        setError('Failed to fetch data');
      }
    } finally {
      setLoading(false);
    }
  }, [mediaType, titleId]);

  useEffect(() => {
    if (index === hoveredIndex) {
      hoverDataFetch();
    }

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [index, hoveredIndex, hoverDataFetch]);

  return [data, trailer, loading, error];
};
