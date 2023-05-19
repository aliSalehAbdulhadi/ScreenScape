import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useSingleActorDataFetch = (mediaType: string, param: any) => {
  const [data, setData] = useState<any>({});
  const [appearedInMovies, setAppearedInMovies] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const singleActorDataFetch = useCallback(async () => {
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;
    try {
      const [actorInfoResponse, appearedInResponse] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/person/${param.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc`
        ),
        axios.get(
          `https://api.themoviedb.org/3/person/${param.id}/combined_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc`
        ),
      ]);

      setData(actorInfoResponse?.data);
      setAppearedInMovies(appearedInResponse?.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType, param.id]);

  useEffect(() => {
    singleActorDataFetch();

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [singleActorDataFetch]);

  return [data, appearedInMovies, loading];
};
