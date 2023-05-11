import { Dispatch, SetStateAction, Suspense, lazy } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import CastCrewSwitchButtons from '../CastCrewSwitchButtons/CastCrewSwitchButtons';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const SmallScreenContent = ({
  credits,
  creditsType,
  setCreditsType,
  mediaType,
}: {
  credits: any[];
  creditsType: string;
  setCreditsType: Dispatch<SetStateAction<string>>;
  mediaType: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className=" text-secondary ml-2 xs:ml-5">Cast</span>

          <div className="text-xs ml-3">
            <CastCrewSwitchButtons
              setCreditsType={setCreditsType}
              creditsType={creditsType}
            />
          </div>
        </div>

        {credits?.length > 10 ? (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="mr-2 xs:mr-5">
              <ViewMoreComp titles={credits} mediaType="actor" />
            </div>
          </Suspense>
        ) : null}
      </div>

      <CardSlider isCast={true} data={credits} mediaType={mediaType} />
    </div>
  );
};

export default SmallScreenContent;
