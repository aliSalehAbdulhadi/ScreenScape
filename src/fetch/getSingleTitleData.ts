import axios from 'axios';
import moment from 'moment';
import { useCallback, useEffect } from 'react';

export const useSingleTitleDataFetch = (
  mediaType: string,
  param: any,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setCredits: React.Dispatch<React.SetStateAction<any>>,
  setVideos: React.Dispatch<React.SetStateAction<any[]>>,
  setKeywords: React.Dispatch<React.SetStateAction<any[]>>,
  setGenres: React.Dispatch<React.SetStateAction<any>>,
  setYear: React.Dispatch<
    React.SetStateAction<{ plusYear: string; minusYear: string }>
  >,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const singleDataFetch = useCallback(async () => {
    const generateUrl = (endpoint: string) =>
      `https://api.themoviedb.org/3/${mediaType}/${param.id}${
        endpoint && `/${endpoint}`
      }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
    try {
      const [
        titleResponse,
        trailerResponse,
        creditsResponse,
        keywordsResponse,
      ] = await Promise.all([
        axios.get(generateUrl('')),
        axios.get(generateUrl('videos')),
        axios.get(
          mediaType === 'tv'
            ? generateUrl('aggregate_credits')
            : generateUrl('credits')
        ),

        axios.get(generateUrl('keywords')),
      ]);
      setGenres(
        titleResponse?.data?.genres
          ?.map((genre: { id: number; name: string }) => genre?.id)
          .join('&')
      );
      setYear({
        plusYear: moment(titleResponse?.data?.release_date)
          .subtract(1, 'year')
          .format('YYYY-MM-DD'),
        minusYear: moment(titleResponse?.data?.release_date)
          .add(1, 'year')
          .format('YYYY-MM-DD'),
      });

      setData(titleResponse?.data);
      setCredits(creditsResponse?.data);
      setVideos(trailerResponse.data?.results);

      setKeywords(
        mediaType === 'movie'
          ? keywordsResponse?.data?.keywords
          : keywordsResponse?.data?.results
      );

      if (
        titleResponse?.request?.status === 200 &&
        trailerResponse?.request?.status === 200 &&
        creditsResponse?.request?.status === 200
      ) {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType, param.id]);

  useEffect(() => {
    singleDataFetch();
  }, [singleDataFetch]);
};
