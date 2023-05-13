'use client';

import { memo } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';

const OtherActors = ({
  appearedInTitles,
  mediaType,
}: {
  appearedInTitles: any;
  mediaType: string;
}) => {
  return (
    <div>
      <div className=" text-secondary  ml-2 sm:ml-5 mr-5 text-sm xxxs:text-base sm:text-lg">
        Other Actor
      </div>
      <CardSlider
        mediaType={mediaType}
        isCast={false}
        data={appearedInTitles}
      />
    </div>
  );
};

export default memo(OtherActors);
