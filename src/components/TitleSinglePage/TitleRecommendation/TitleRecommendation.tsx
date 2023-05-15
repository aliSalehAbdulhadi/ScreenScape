'use client';

import { Suspense, lazy, memo } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const TitleRecommendation = ({
  relatedTitles,
  mediaType,
  setLoadMore,
}: {
  relatedTitles: any;
  mediaType: string;
  setLoadMore: any;
}) => {
  return (
    <div>
      <div className="flex items-center ">
        <span className=" text-secondary  ml-2 sm:ml-5 mr-5 text-sm xxxs:text-base sm:text-lg">
          Recommended
        </span>
        {relatedTitles?.length > 10 ? (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="mr-2 xs:mr-5">
              <ViewMoreComp
                titles={relatedTitles}
                mediaType={mediaType}
                setLoadMore={setLoadMore}
              />
            </div>
          </Suspense>
        ) : null}
      </div>

      <CardSlider mediaType={mediaType} isCast={false} data={relatedTitles} />
    </div>
  );
};

export default memo(TitleRecommendation);
