import { Dispatch, SetStateAction } from 'react';
import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import MovieTvSwitchButtons from '../MovieTvSwitchButtons/MovieTvSwitchButtons';
import ViewMoreComp from '@/src/components/ViewMoreComp/ViewMoreComp';

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
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className=" text-secondary  ml-2 xs:ml-5">Filmography</span>
          <div className="text-xs ml-3">
            <MovieTvSwitchButtons
              setMediaType={setMediaType}
              mediaType={mediaType}
            />
          </div>
        </div>

        {appearedInTitles?.length > 10 ? (
          <div className="mr-2 xs:mr-5">
            <ViewMoreComp titles={appearedInTitles} mediaType={mediaType} />
          </div>
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

export default SmallScreenContent;
