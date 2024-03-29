'use client';

import { Dispatch, SetStateAction, Suspense, lazy, memo } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import MovieTvSwitchButtons from './MovieTvSwitchButtons/MovieTvSwitchButtons';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';
import {
  MovieSingleInterface,
  TvShowSingleInterface,
} from '@/src/Interfaces/interfaces';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const ActorAppearedIn = ({
  appearedInTitles,
  setMediaType,
  mediaType,
}: {
  appearedInTitles: TvShowSingleInterface[] | MovieSingleInterface[];
  setMediaType: Dispatch<SetStateAction<string>>;
  mediaType: string;
}) => {
  return (
    <div className="">
      <div className="flex items-center pt-2 ">
        <div className="ml-2 sm:ml-10 text-xs sm:text-base ">
          <MovieTvSwitchButtons
            setMediaType={setMediaType}
            mediaType={mediaType}
          />
        </div>

        {appearedInTitles?.length > 10 ? (
          <Suspense>
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

export default memo(ActorAppearedIn);
