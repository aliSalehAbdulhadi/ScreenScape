import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import React, { Dispatch, SetStateAction } from 'react';

const SmallScreenContent = ({
  appearedInTitles,
  mediaType,
  setMediaType,
}: {
  appearedInTitles: any;
  mediaType: string;
  setMediaType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative sm:hidden">
      <span className=" text-secondary ">Other Actors</span>

      <CardSlider
        mediaType={mediaType}
        isCast={false}
        data={appearedInTitles}
      />
    </div>
  );
};

export default SmallScreenContent;
