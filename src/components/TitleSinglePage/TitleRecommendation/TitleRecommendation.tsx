'use client';

import { Suspense, lazy, memo, useState } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';

import { useDataFetch } from '@/src/fetch/getDataWithPages';

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

  const recommendedEndPoint = `https://api.themoviedb.org/3/${mediaType}/${param?.id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;

  const [data, error, loading, totalPages, totalResults] = useDataFetch(
    recommendedEndPoint,
    pageNum
  );

  return (
    <div>
      {data?.length >= 1 && (
        <div>
          <div className="flex items-center ">
            <span className=" text-secondary  ml-2 sm:ml-10 mr-5 text-sm xxxs:text-base sm:text-lg">
              Recommended
            </span>
            {data?.length > 10 ? (
              <Suspense>
                <div className="mr-2 xs:mr-5">
                  <ViewMoreComp
                    titles={data}
                    mediaType={mediaType}
                    setPageNum={setPageNum}
                    pageNum={pageNum}
                    totalPages={totalPages}
                    loading={loading}
                    totalResults={totalResults}
                  />
                </div>
              </Suspense>
            ) : null}
          </div>

          <CardSlider mediaType={mediaType} isCast={false} data={data} />
        </div>
      )}
    </div>
  );
};

export default memo(TitleRecommendation);
