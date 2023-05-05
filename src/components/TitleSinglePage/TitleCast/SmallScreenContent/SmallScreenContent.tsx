import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import CastCrewSwitchButtons from '../CastCrewSwitchButtons/CastCrewSwitchButtons';
import { Dispatch, SetStateAction } from 'react';

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
    <div className=" sm:hidden">
      <div className="flex items-center ">
        <span className=" text-secondary ml-2 xxxs:ml-5">Cast</span>

        <div className="text-xs ml-3">
          <CastCrewSwitchButtons
            setCreditsType={setCreditsType}
            creditsType={creditsType}
          />
        </div>
      </div>

      <CardSlider isCast={true} data={credits} />
    </div>
  );
};

export default SmallScreenContent;
