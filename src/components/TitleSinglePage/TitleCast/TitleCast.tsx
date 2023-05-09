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
}: {
  credits: any[];
  creditsType: string;
  setCreditsType: Dispatch<SetStateAction<string>>;
}) => {
  console.log(credits);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="text-xs ml-5 mr-5 sm:text-base ">
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

      <CardSlider isCast={true} data={credits} />
    </div>
  );
};

export default memo(TitleCast);
