import { Dispatch, SetStateAction, Suspense, lazy } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import MovieTvSwitchButtons from '../MovieTvSwitchButtons/MovieTvSwitchButtons';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const SmallScreenContent = ({
  appearedInTitles,
  mediaType,
  setMediaType,
}: {
  appearedInTitles: any;
  mediaType: string;
  setMediaType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="text-xs ">
          <MovieTvSwitchButtons
            setMediaType={setMediaType}
            mediaType={mediaType}
          />
        </div>

        {appearedInTitles?.length > 10 ? (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="ml-5">
              <ViewMoreComp titles={appearedInTitles} mediaType={mediaType} />
            </div>
          </Suspense>
        ) : null}
      </div>

      <CardSlider
        mediaType={mediaType}
        isCast={false}
        data={appearedInTitles}
      />
    </div>
  );
};

export default SmallScreenContent;
