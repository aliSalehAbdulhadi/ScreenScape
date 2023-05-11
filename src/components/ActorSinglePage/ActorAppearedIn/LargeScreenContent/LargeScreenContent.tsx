import { Dispatch, SetStateAction, Suspense, lazy } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import GridComp from '../../../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../../../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../../../Cards/PosterCard/PosterCard';
import LoadingCard from '../../../LoadingComponent/LoadingCard/LoadingCard';
import MovieTvSwitchButtons from '../MovieTvSwitchButtons/MovieTvSwitchButtons';
import { dataObject } from '@/src/global/globalVariables';

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
                  imageUrl={dataObject(title, mediaType)?.posterUrl}
                  title={dataObject(title, mediaType)?.title}
                  releaseDate={dataObject(title, mediaType)?.releaseDate}
                  rating={dataObject(title, mediaType)?.voteAverage * 10}
                  mediaType={mediaType}
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
