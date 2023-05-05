import { Dispatch, SetStateAction } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import MovieTvSwitchButtons from '../MovieTvSwitchButtons/MovieTvSwitchButtons';

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
      <div className="flex items-center">
        <span className=" text-secondary  ml-2 xxxs:ml-5">Appeared In</span>
        <div className="text-xs ml-3">
          <MovieTvSwitchButtons
            setMediaType={setMediaType}
            mediaType={mediaType}
          />
        </div>
      </div>

      <CardSlider
        mediaType={mediaType}
        isCast={false}
        data={appearedInTitles}
      />
    </div>
  );
};

export default SmallScreenContent;
