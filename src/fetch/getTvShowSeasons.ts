import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

const useGetSeasons = (
  titleId: string,
  numberOfSeasons: number,
  open: boolean
): [any | null, any[], boolean, boolean, any] => {
  const [lastSeason, setLastSeason] = useState<any | null>(null);
  const [allSeasons, setAllSeasons] = useState<any[]>([]);
  const [loadingLastSeason, setLoadingLastSeason] = useState<boolean>(false);
  const [loadingAllSeasons, setLoadingAllSeasons] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const lastSeasonFetch = useCallback(async () => {
    setLoadingLastSeason(true);
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${titleId}/season/${numberOfSeasons}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
        {
          cancelToken: source.token,
        }
      );

      setLastSeason(response.data);
      setError(null);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Ignore cancel token error
      } else {
        setError(error);
      }
    } finally {
      setLoadingLastSeason(false);
    }
  }, [titleId, numberOfSeasons]);

  const allSeasonsFetch = useCallback(async () => {
    setLoadingAllSeasons(true);
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;

    try {
      const seasons = [];
      for (let i = 1; i <= numberOfSeasons; i++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${titleId}/season/${i}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
          {
            cancelToken: source.token,
          }
        );
        seasons.push(response.data);
      }
      setAllSeasons(seasons);
      setError(null);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Ignore cancel token error
      } else {
        setError(error);
      }
    } finally {
      setLoadingAllSeasons(false);
    }
  }, [titleId, numberOfSeasons]);

  useEffect(() => {
    lastSeasonFetch();

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [lastSeasonFetch]);

  useEffect(() => {
    if (open) {
      allSeasonsFetch();
    }

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [allSeasonsFetch, open]);

  return [lastSeason, allSeasons, loadingLastSeason, loadingAllSeasons, error];
};

export default useGetSeasons;
