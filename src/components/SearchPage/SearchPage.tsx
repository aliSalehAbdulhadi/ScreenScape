'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'next/navigation';
import asyncFetch from '@/src/helper/asyncFetch';
import GridComp from '@/src/components/WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../Cards/PosterCard/PosterCard';
import { dataObject } from '@/src/global/globalVariables';

const SearchPage = () => {
  const [data, setData] = useState<any>({});

  const params = useParams();

  const decodedString = decodeURIComponent(params?.id);

  const lookingForTitleHandler = () => {
    if (params?.searchType === 'query') {
      return decodedString?.replace(/\b\w/g, (c) => c?.toUpperCase());
    }
    if (params?.searchType === 'genre') {
      const genre = decodedString?.split(/-(.+)/)?.map((word) =>
        word
          ?.replaceAll(/%20/g, ' ')
          ?.replaceAll(/%26/g, '&')
          ?.replace(/\b\w/g, (c) => c?.toUpperCase())
      );

      return `${genre[1]} Genre`;
    }

    if (params?.searchType === 'keyword') {
      const keyword = decodedString
        ?.split(/-(.+)/)
        ?.map((word) =>
          word
            ?.replaceAll(/%20|%2C/g, ' ')
            ?.replace(/\b\w/g, (c) => c?.toUpperCase())
        );

      return `${keyword[1]} Keyword`;
    }
  };

  const searchFetchHandler = useCallback(async () => {
    try {
      if (params?.searchType === 'query') {
        const results = await asyncFetch(
          ` https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params?.id}&media_type=movie,tv&language=en-US&sort_by=popularity.desc&vote_count.gte=100`
        );
        setData(results);
      }

      if (params?.searchType === 'genre') {
        const results = await asyncFetch(
          `https://api.themoviedb.org/3/discover/${params?.mediaType}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&with_genres=${
            params.id?.split('-')?.[0]
          }&sort_by=popularity.desc&page=1&vote_count.gte=${
            params?.mediaType === 'movie' ? 200 : 25
          }`
        );
        setData(results);
      }

      if (params?.searchType === 'keyword') {
        const results = await asyncFetch(
          `https://api.themoviedb.org/3/discover/${params?.mediaType}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&with_keywords=${parseInt(params?.id)}`
        );
        setData(results);
      }
    } catch (error) {}

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    searchFetchHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = data?.results?.filter(
    (title: any) => title?.media_type !== 'person'
  );
  return (
    <div className="pt-10 background-fade px-10 fade-in">
      <GridComp
        breakPointWidth={12}
        title="Looking For"
        changeableTitle={String(lookingForTitleHandler())}
      >
        {filteredData?.map((title: any, i: number) => (
          <DelayDisplay key={uuidv4()} delay={i * 50}>
            <div className="flex flex-col  cursor-pointer bg-white text-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden">
              <Link
                href={`/browse/${title?.first_air_date ? 'tv/' : 'movie/'}${
                  title?.id
                }`}
              >
                <PosterCard
                  index={i}
                  imageUrl={
                    dataObject(title, title?.first_air_date ? 'tv' : 'movie')
                      ?.posterUrl
                  }
                  title={
                    dataObject(title, title?.first_air_date ? 'tv' : 'movie')
                      ?.title
                  }
                  releaseDate={
                    dataObject(title, title?.first_air_date ? 'tv' : 'movie')
                      ?.releaseDate
                  }
                  rating={
                    dataObject(title, title?.first_air_date ? 'tv' : 'movie')
                      ?.voteAverage * 10
                  }
                  mediaType={title?.first_air_date ? 'tv' : 'movie'}
                />
              </Link>
            </div>
          </DelayDisplay>
        ))}
      </GridComp>
    </div>
  );
};

export default SearchPage;
