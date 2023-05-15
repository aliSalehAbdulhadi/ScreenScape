'use client';

import { Suspense, lazy, memo, useState } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';
import { useRelatedTitlesFetch } from '@/src/fetch/getRelatedTitles';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const TitleRelated = ({
  mediaType,
  param,
}: {
  mediaType: string;
  param: any;
}) => {
  const [relatedTitles, setRelatedTitles] = useState<any>([]);

  useRelatedTitlesFetch(mediaType, param, setRelatedTitles);

  return (
    <div>
      <div className="flex items-center ">
        <span className=" text-secondary  ml-2 sm:ml-10 mr-5 text-sm xxxs:text-base sm:text-lg">
          Related
        </span>
        {relatedTitles?.length > 10 ? (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="mr-2 xs:mr-5">
              <ViewMoreComp titles={relatedTitles} mediaType={mediaType} />
            </div>
          </Suspense>
        ) : null}
      </div>

      <CardSlider mediaType={mediaType} isCast={false} data={relatedTitles} />
    </div>
  );
};

export default memo(TitleRelated);
