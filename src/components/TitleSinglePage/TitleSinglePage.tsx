import TitleInfo from './TitleInfo/TitleInfo';
import { News } from '../News/News';
import { TitleCast } from './TitleCast/TitleCast';
import TitleRelated from './TitleRelated/TitleRelated';
import BackgroundOverlay from './TitleInfo/BackgroundOverlay/BackgroundOverlay';

const TitleSinglePage = () => {
  return (
    <div className="text-white background-fade flex flex-col justify-center items-center pb-10 xs:pt-5 semiSm:pt-10  relative ">
      <BackgroundOverlay>
        <div className="w-full  xl:w-[70%]  sm:px-10 z-[3]">
          <TitleInfo />
        </div>
        <div className="md:w-[35%] xl:w-[30%]  hidden xl:block sm:px-10 z-[2]">
          <News />
        </div>
      </BackgroundOverlay>

      <div className="mt-14 flex flex-col semiSm:flex-row w-full justify-between px-2 xxxs:px-5 sm:px-10">
        <div className=" semiSm:w-[45%]">
          <TitleCast />
        </div>

        <div className="semiSm:w-[45%] mt-10 semiSm:mt-0">
          <TitleRelated />
        </div>
      </div>

      <div className="w-full px-2 xxs:px-0 xxs:w-[80%] md:w-[70%] mt-10 xl:hidden sm:px-10">
        <News />
      </div>
    </div>
  );
};

export default TitleSinglePage;
