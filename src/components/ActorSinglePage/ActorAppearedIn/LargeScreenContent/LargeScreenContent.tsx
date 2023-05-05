import { Dispatch, SetStateAction, Suspense, lazy } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import GridComp from '../../../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../../../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../../../Cards/PosterCard/PosterCard';
import LoadingCard from '../../../LoadingComponent/LoadingCard/LoadingCard';
import MovieTvSwitchButtons from '../MovieTvSwitchButtons/MovieTvSwitchButtons';

const ViewMoreComp = lazy(() => import('../../../ViewMoreComp/ViewMoreComp'));

const LargeScreenContent = ({
  mediaType,
  setMediaType,
  appearedInTitles,
}: {
  mediaType: string;
  setMediaType: Dispatch<SetStateAction<string>>;
  appearedInTitles: any[];
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
    <GridComp
      breakPointWidth={12}
      title="Appeared In"
      className="relative hidden sm:block"
    >
      <div className=" absolute top-[5px] left-28 xxxs:left-32 flex items-center justify-center text-xs xs:text-sm ">
        <MovieTvSwitchButtons
          setMediaType={setMediaType}
          mediaType={mediaType}
        />
      </div>

      {appearedInTitles?.map(
        (title: any, i: any) =>
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
      {appearedInTitles?.length > 10 && (
        <Suspense fallback={<LoadingCard />}>
          <ViewMoreComp mediaType={mediaType} titles={appearedInTitles} />
        </Suspense>
      )}
    </GridComp>
  );
};

export default LargeScreenContent;
