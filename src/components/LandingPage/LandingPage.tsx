import LoadingComponent from '../LoadingComponent/LoadingComponent';
import TrailerSlider from '../Sliders/TrailerSlider/TrailerSlider';
import DisplayComp from './DisplayComp/DisplayComp';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center background-fade md:py-[6rem]">
      <LoadingComponent>
        <div className="w-[100%]">
          <TrailerSlider />
        </div>
        <div className="w-[100%] ">
          <DisplayComp />
        </div>
      </LoadingComponent>
    </div>
  );
};

export default LandingPage;
