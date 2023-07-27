import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useHoverDataFetch = (
  mediaType: string,
  titleId: string,
  index: number,
  hoveredIndex: number
) => {
  const [data, setData] = useState<any>(null);
  const [trailer, setTrailer] = useState<any>([]);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const hoverDataFetch = useCallback(async () => {
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
    } catch (error) {
      if (axios.isCancel(error)) {
        // Request was canceled, ignore the error
      } else {
        // Other errors
      }
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

  return [data, trailer];
};
