import { News } from '@/src/components/News/News';
import { TitleCast } from '@/src/components/TitleSinglePage/TitleCast/TitleCast';
import TitleInfo from '@/src/components/TitleSinglePage/TitleInfo/TitleInfo';
import TitleRelated from '@/src/components/TitleSinglePage/TitleRelated/TitleRelated';

const page = () => {
  return (
    <div className="text-white background-fade flex flex-col justify-center items-center pt-10 px-10">
      <div className="flex  justify-between w-full">
        <div className="w-[75%]">
          <TitleInfo />
        </div>
        <div className="w-[25%]">
          <News />
        </div>
      </div>

      <div className="mt-14 flex flex-col semiSm:flex-row w-full justify-between">
        <div className=" semiSm:w-[45%]">
          <TitleCast />
        </div>

        <div className="semiSm:w-[45%]">
          <TitleRelated />
        </div>
      </div>
    </div>
  );
};

export default page;
