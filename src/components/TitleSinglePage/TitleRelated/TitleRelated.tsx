'use client';

import Link from 'next/link';
import GridComp from '../../GridComp/GridComp';
import DelayDisplay from '../../DelayDisplay/DelayDisplay';
import PosterCard from '../../Cards/PosterCard/PosterCard';

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
            <DelayDisplay key={title?.id} delay={i * 50}>
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
    </GridComp>
  );
};

export default TitleRelated;
