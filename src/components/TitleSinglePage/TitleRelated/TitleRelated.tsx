'use client';

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import GridComp from '../../GridComp/GridComp';
import DelayDisplay from '../../DelayDisplay/DelayDisplay';
import PosterCard from '../../Cards/PosterCard/PosterCard';
import { IoIosArrowUp } from 'react-icons/io';

const TitleRelated = ({
  relatedTitles,
  isMovies,
}: {
  relatedTitles: any;
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
    <GridComp title="Related">
      {relatedTitles?.map(
        (title: any, i: number) =>
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
      <div className="flex items-center justify-end ml-0 h-full rounded-t-r rounded-tr rounded-br w-[3rem] transition-all hover:w-[4rem] bg-white bg-opacity-10 text-black cursor-pointer hover:bg-opacity-20">
        <IoIosArrowUp className="h-10 w-10 md:w-6 md:h-6 rotate-90 text-white mr-2  cursor-pointer" />
      </div>
    </GridComp>
  );
};

export default TitleRelated;
