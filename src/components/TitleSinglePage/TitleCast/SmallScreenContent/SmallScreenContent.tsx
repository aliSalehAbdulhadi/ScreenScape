import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import CastCrewSwitchButtons from '../CastCrewSwitchButtons/CastCrewSwitchButtons';
import { Dispatch, SetStateAction } from 'react';
import ViewMoreComp from '@/src/components/ViewMoreComp/ViewMoreComp';

const SmallScreenContent = ({
  credits,
  creditsType,
  setCreditsType,
}: {
  credits: any[];
  creditsType: string;
  setCreditsType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className=" text-secondary ml-2 xs:ml-5">Cast</span>

          <div className="text-xs ml-3">
            <CastCrewSwitchButtons
              setCreditsType={setCreditsType}
              creditsType={creditsType}
            />
          </div>
        </div>

        {credits?.length > 10 ? (
          <div className="mr-2 xs:mr-5">
            <ViewMoreComp titles={credits} mediaType="actor" />
          </div>
        ) : null}
      </div>

      <CardSlider isCast={true} data={credits} />
    </div>
  );
};

export default SmallScreenContent;
