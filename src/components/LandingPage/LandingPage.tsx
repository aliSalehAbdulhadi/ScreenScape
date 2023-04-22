import dynamic from 'next/dynamic';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { Suspense } from 'react';

const TrailerSlider = dynamic(
  () => import('../Sliders/TrailerSlider/TrailerSlider')
);

const DisplayComp = dynamic(() => import('./DisplayComp/DisplayComp'));

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center background-fade md:py-[6rem]">
      <LoadingComponent>
        <Suspense>
          <div className="w-[100%]">
            <TrailerSlider />
          </div>
        </Suspense>
        <Suspense>
          <div className="w-[100%]">
            <DisplayComp />
          </div>
        </Suspense>
      </LoadingComponent>
    </div>
  );
};

export default LandingPage;
