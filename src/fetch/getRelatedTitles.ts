import axios from 'axios';
import { useCallback, useEffect } from 'react';

export const useRelatedTitlesFetch = (
  mediaType: string,
  param: any,
  setRelatedTitles: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const relatedDataFetch = useCallback(async () => {
    const generateUrl = (endpoint: string) =>
      `https://api.themoviedb.org/3/${mediaType}/${param.id}${
        endpoint && `/${endpoint}`
      }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
    try {
      const relatedResponse = await axios({
        method: 'GET',
        url: generateUrl('similar'),
        params: { page: 1 },
      });

      setRelatedTitles((prevRelatedTitles) => {
        const newRelatedTitles = [
          ...prevRelatedTitles,
          ...relatedResponse?.data?.results,
        ];
        return Array.from(new Set(newRelatedTitles));
      });
    } catch (error) {}
  }, [mediaType, param.id, setRelatedTitles]);

  useEffect(() => {
    relatedDataFetch();
  }, [relatedDataFetch]);
};
