import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { Suspense, lazy } from 'react';
import GridComp from '../../../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../../../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../../../Cards/PosterCard/PosterCard';
import LoadingCard from '../../../LoadingComponent/LoadingCard/LoadingCard';

const ViewMoreComp = lazy(() => import('../../../ViewMoreComp/ViewMoreComp'));

const LargeScreenContent = ({
  mediaType,
  relatedTitles,
}: {
  mediaType: string;
  relatedTitles: any[];
}) => {
  const dataObject = (data: any) => {
    let posterUrl = data?.poster_path;
    let title = mediaType === 'movie' ? data?.title : data?.name;
    let releaseDate =
      mediaType === 'movie' ? data?.release_date : data?.first_air_date;
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
    <GridComp breakPointWidth={12} title="Related" className="relative">

      {relatedTitles?.map(
        (title: any, i: number) =>
          i < 10 && (
            <DelayDisplay key={uuidv4()} delay={i * 50}>
              <Link
                href={`/browse/${mediaType}/${title?.id}`}
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

      <Suspense fallback={<LoadingCard />}>
        <ViewMoreComp mediaType={mediaType} titles={relatedTitles} />
      </Suspense>
    </GridComp>
  );
};

export default LargeScreenContent;
