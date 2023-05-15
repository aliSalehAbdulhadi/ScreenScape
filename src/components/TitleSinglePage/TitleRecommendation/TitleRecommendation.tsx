'use client';

import { Suspense, lazy, memo, useState } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';
import { useRecommendedTitlesFetch } from '@/src/fetch/getRecommendedTitles';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const TitleRecommendation = ({
  mediaType,
  param,
}: {
  mediaType: string;
  param: any;
}) => {
  const [pageNum, setPageNum] = useState(1);

  const [recommendedTitles, setRecommendedTitles] = useState<any[]>([]);

  useRecommendedTitlesFetch(mediaType, param, setRecommendedTitles, pageNum);

  return (
    <div>
      <div className="flex items-center ">
        <span className=" text-secondary  ml-2 sm:ml-10 mr-5 text-sm xxxs:text-base sm:text-lg">
          Recommended
        </span>
        {recommendedTitles?.length > 10 ? (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="mr-2 xs:mr-5">
              <ViewMoreComp
                titles={recommendedTitles}
                mediaType={mediaType}
                setPageNum={setPageNum}
              />
            </div>
          </Suspense>
        ) : null}
      </div>

      <CardSlider
        mediaType={mediaType}
        isCast={false}
        data={recommendedTitles}
      />
    </div>
  );
};

export default memo(TitleRecommendation);
