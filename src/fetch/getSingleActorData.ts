import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useSingleActorDataFetch = (mediaType: string, param: any) => {
  const [data, setData] = useState<any>({});
  const [appearedInMovies, setAppearedInMovies] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [otherActors, setOtherActors] = useState<any>([]);

  const singleActorDataFetch = useCallback(async () => {
    try {
      const [actorInfoResponse, appearedInResponse, otherActorsResponse] =
        await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/person/${param.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc`
          ),
          axios.get(
            `https://api.themoviedb.org/3/person/${param.id}/combined_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc`
          ),

          axios.get(
            `https://api.themoviedb.org/3/movie/${param.id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc`
          ),
        ]);

      setData(actorInfoResponse?.data);
      setAppearedInMovies(appearedInResponse?.data);
      setOtherActors(otherActorsResponse?.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType, param.id]);

  useEffect(() => {
    singleActorDataFetch();
  }, [singleActorDataFetch]);

  return [data, appearedInMovies, loading];
};
