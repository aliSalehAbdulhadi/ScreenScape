import axios, { CancelTokenSource } from 'axios';
import moment from 'moment';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useSingleTitleDataFetch = (mediaType: string, param: any) => {
  const [data, setData] = useState<any>({});
  const [credits, setCredits] = useState<any>([]);
  const [videos, setVideos] = useState<any>([]);
  const [keywords, setKeywords] = useState<any>([]);
  const [genres, setGenres] = useState<[]>([]);
  const [year, setYear] = useState({
    plusYear: '',
    minusYear: '',
  });
  const [loading, setLoading] = useState(true);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);
  const cancelTokenRefOmdb = useRef<CancelTokenSource | null>(null);

  const singleDataFetch = useCallback(async () => {
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;

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
    } catch (error) {
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType, param.id]);

  const omdbFetch = useCallback(async () => {
    const source = axios.CancelToken.source();
    cancelTokenRefOmdb.current = source;

    try {
      const omdbRequest = await axios.get(
        `https://www.omdbapi.com/?t=${
          mediaType === 'movie'
            ? data?.title?.replaceAll(' ', '+')
            : data?.name?.replaceAll(' ', '+')
        }&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
      );

      setData((prev: any) => {
        return {
          ...prev,
          ratings: omdbRequest?.data?.Ratings,
          rated: omdbRequest?.data?.Rated,
          awards:
            omdbRequest?.data?.Awards === 'N/A' || null || undefined
              ? null
              : omdbRequest?.data?.Awards,
        };
      });
    } catch (error) {
    } finally {
    }
  }, [data, mediaType]);

  useEffect(() => {
    singleDataFetch();

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [singleDataFetch]);

  useEffect(() => {
    if (data) {
      omdbFetch();
    }

    return () => {
      if (cancelTokenRefOmdb.current) {
        cancelTokenRefOmdb.current.cancel('Request canceled by cleanup');
        cancelTokenRefOmdb.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.id]);

  return [data, credits, videos, keywords, genres, year, loading];
};
