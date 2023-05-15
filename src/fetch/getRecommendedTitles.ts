import axios from 'axios';
import { useCallback, useEffect } from 'react';

export const useRecommendedTitlesFetch = (
  mediaType: string,
  param: any,
  setRecommendedTitles: React.Dispatch<React.SetStateAction<any[]>>,
  pageNum: number
) => {
  const recommendedDataFetch = useCallback(async () => {
    const generateUrl = (endpoint: string) =>
      `https://api.themoviedb.org/3/${mediaType}/${param.id}${
        endpoint && `/${endpoint}`
      }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
    try {
      const recommendedResponse = await axios({
        method: 'GET',
        url: generateUrl('recommendations'),
        params: { page: pageNum },
      });

      setRecommendedTitles((prevRecommendedTitles) => {
        const newRecommendedTitles = [
          ...prevRecommendedTitles,
          ...recommendedResponse?.data?.results,
        ];
        return Array.from(new Set(newRecommendedTitles));
      });
    } catch (error) {}
  }, [mediaType, pageNum, param.id, setRecommendedTitles]);

  useEffect(() => {
    recommendedDataFetch();
  }, [recommendedDataFetch]);
};
