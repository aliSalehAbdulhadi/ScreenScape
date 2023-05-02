'use client';

import { Dispatch, SetStateAction, Suspense, lazy } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import GridComp from '../../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../../Cards/PosterCard/PosterCard';
import LoadingCard from '../../LoadingComponent/LoadingCard/LoadingCard';

const ViewMoreComp = lazy(() => import('../../ViewMoreComp/ViewMoreComp'));

const ActorAppearedIn = ({
  appearedInTitles,
  setIsMovies,
  isMovies,
}: {
  appearedInTitles: any;
  setIsMovies: Dispatch<SetStateAction<boolean>>;
  isMovies: boolean;
}) => {
  const dataObject = (data: any) => {
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

  return (
    <GridComp title="Appeared In" className="relative">
      <div className=" absolute top-[1px] left-28 xxxs:left-32 flex items-center justify-center text-xs xs:text-sm ">
        <span
          onClick={() => setIsMovies(true)}
          className={`mr-3 py-1 px-2  rounded cursor-pointer transition-all border-[1px]  ${
            isMovies
              ? 'text-primary bg-secondary bg-opacity-90 border-secondary'
              : 'border-white border-opacity-80 text-white text-opacity-80'
          }`}
        >
          Movies
        </span>
        <span
          onClick={() => setIsMovies(false)}
          className={`py-1 px-2 transition-all  rounded cursor-pointer border-[1px]   ${
            !isMovies
              ? 'text-primary bg-secondary opacity-90 border-secondary'
              : 'border-white border-opacity-80 text-white text-opacity-80'
          }`}
        >
          TV Shows
        </span>
      </div>
      {appearedInTitles?.map(
        (title: any, i: any) =>
          i < 10 && (
            <DelayDisplay key={uuidv4()} delay={i * 50}>
              <Link
                href={`/browse/${isMovies ? 'movie/' : 'tv/'}${title?.id}`}
                className="flex flex-col  cursor-pointer bg-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden"
              >
                <PosterCard
                  index={i}
                  imageUrl={dataObject(title)?.posterUrl}
                  title={dataObject(title)?.title}
                  releaseDate={dataObject(title)?.releaseDate}
                  isAdult={dataObject(title)?.isAdult}
                  rating={dataObject(title)?.voteAverage * 10}
                />
              </Link>
            </DelayDisplay>
          )
      )}
      {appearedInTitles?.length > 10 && (
        <Suspense fallback={<LoadingCard />}>
          <ViewMoreComp isMovies={isMovies} titles={appearedInTitles} />
        </Suspense>
      )}
    </GridComp>
  );
};

export default ActorAppearedIn;
