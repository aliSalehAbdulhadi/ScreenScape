import { Suspense, lazy } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const SmallScreenContent = ({
  relatedTitles,
  mediaType,
}: {
  relatedTitles: any[];
  mediaType: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <span className=" text-secondary ml-2 xs:ml-5">Related</span>
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

export default SmallScreenContent;
