'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useSearchParams } from 'next/navigation';
import asyncFetch from '@/src/helper/asyncFetch';
import GridComp from '@/src/components/WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../Cards/PosterCard/PosterCard';

const SearchPage = () => {
  const [data, setData] = useState<any>({});

  const params = useParams();
  const searchParams = useSearchParams();
  const search = searchParams.get('q');

  const movieGenres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];

  const tvGenres = [
    { id: 10759, name: 'Action & Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 10762, name: 'Kids' },
    { id: 9648, name: 'Mystery' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
    { id: 37, name: 'Western' },
  ];

  const genres = [...tvGenres, ...movieGenres];

  const title: any = genres.filter((genre) =>
    String(genre.id) === params?.id ? genre : false
  );

  const asyncFunction = useCallback(async () => {
    try {
      if (search) {
        const results = await asyncFetch(
          ` https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&media_type=movie,tv&language=en-US&sort_by=popularity.desc&vote_count.gte=100`
        );
        setData(results);
      } else {
        const results = await asyncFetch(
          `https://api.themoviedb.org/3/discover/${params?.isMovie}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&with_genres=${
            params.id
          }&sort_by=popularity.desc&page=1&vote_count.gte=${
            params?.isMovie === 'movie' ? 200 : 25
          }`
        );
        setData(results);
      }
    } catch (error) {}

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    asyncFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataObject = (data: any, isMovies: boolean) => {
    let posterUrl = data?.poster_path;
    let title = isMovies ? data?.title : data?.name;
    let releaseDate = isMovies ? data?.release_date : data?.first_air_date;
    let endedDate = data?.last_air_date;
    let isAdult = data?.adult;
    let voteAverage = data?.vote_average;
    let overview = data?.overview;
    let seasons = data?.number_of_seasons;
    let episodes = data?.number_of_episodes;
    let seriesStatus = data?.status;
    return {
      posterUrl,
      title,
      releaseDate,
      endedDate,
      isAdult,
      voteAverage,
      overview,
      seasons,
      episodes,
      seriesStatus,
    };
  };

  const filteredData = data?.results?.filter(
    (title: any) => title?.media_type !== 'person'
  );
  return (
    <div className="pt-10 background-fade px-10 fade-in">
      <GridComp
        breakPointWidth={12}
        title="Looking For"
        changeableTitle={
          search ? search?.replaceAll('%20', ' ') : `${title[0]?.name} Genre`
        }
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
                    dataObject(title, title?.first_air_date ? false : true)
                      ?.posterUrl
                  }
                  title={
                    dataObject(title, title?.first_air_date ? false : true)
                      ?.title
                  }
                  releaseDate={
                    dataObject(title, title?.first_air_date ? false : true)
                      ?.releaseDate
                  }
                  isAdult={
                    dataObject(title, title?.first_air_date ? false : true)
                      ?.isAdult
                  }
                  rating={
                    dataObject(title, title?.first_air_date ? false : true)
                      ?.voteAverage * 10
                  }
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
