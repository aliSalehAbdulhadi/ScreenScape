import dynamic from 'next/dynamic';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import DisplayComp from './DisplayComp/DisplayComp';
import { Suspense } from 'react';

const TrailerSlider = dynamic(
  () => import('../Sliders/TrailerSlider/TrailerSlider')
);

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center background-fade md:py-[6rem]">
      <LoadingComponent>
        <Suspense>
          <div className="w-[100%]">
            <TrailerSlider />
          </div>
        </Suspense>
        <div className="w-[100%] ">
          <DisplayComp />
        </div>
      </LoadingComponent>
    </div>
  );
};

export default LandingPage;
