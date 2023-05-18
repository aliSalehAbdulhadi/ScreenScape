import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useHoverDataFetch = (mediaType: string, titleId: string) => {
  const [data, setData] = useState<any>({});
  const [trailer, setTrailer] = useState<any>([]);

  const hoverDataFetch = useCallback(async () => {
    try {
      const [dataResponse, trailerResponse] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${titleId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        ),
        axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${titleId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        ),
      ]);

      setData(dataResponse?.data);

      setTrailer(
        trailerResponse?.data?.results.filter(
          (title: any) => title.type === 'Trailer'
        )
      );
    } catch (error) {}
  }, [mediaType, titleId]);

  useEffect(() => {
    hoverDataFetch();
  }, [hoverDataFetch]);

  return [data, trailer];
};
