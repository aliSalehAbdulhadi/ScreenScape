import { Dispatch, SetStateAction, Suspense, lazy, memo } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import CastCrewSwitchButtons from './CastCrewSwitchButtons/CastCrewSwitchButtons';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const TitleCast = ({
  credits,
  setCreditsType,
  creditsType,
  mediaType,
}: {
  credits: any[];
  creditsType: string;
  setCreditsType: Dispatch<SetStateAction<string>>;
  mediaType: string;
}) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center justify-center text-xs sm:text-base mr-5 ml-2 sm:ml-5">
          <CastCrewSwitchButtons
            setCreditsType={setCreditsType}
            creditsType={creditsType}
          />
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

export default memo(TitleCast);
