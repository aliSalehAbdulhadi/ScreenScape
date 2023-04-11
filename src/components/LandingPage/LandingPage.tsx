import TrailerSlider from '../Sliders/TrailerSlider/TrailerSlider';
import DisplayComp from './DisplayComp/DisplayComp';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center  my-[6rem]">
      <div className="w-[100%]">
        <TrailerSlider />
      </div>
      <div className="w-[100%]">
        <DisplayComp />
      </div>
    </div>
  );
};

export default LandingPage;
