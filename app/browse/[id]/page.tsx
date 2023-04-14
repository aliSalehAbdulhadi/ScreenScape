import { News } from '@/src/components/News/News';
import { TitleCast } from '@/src/components/TitleSinglePage/TitleCast/TitleCast';
import TitleInfo from '@/src/components/TitleSinglePage/TitleInfo/TitleInfo';
import TitleRelated from '@/src/components/TitleSinglePage/TitleRelated/TitleRelated';

const page = () => {
  return (
    <div className="text-white background-fade flex flex-col justify-center items-center pt-10 px-10">
      <div className="flex justify-between">
        <div className="w-[75%]">
          <TitleInfo />
        </div>
        <div>
          <News />
        </div>
      </div>

      <div className="mt-14 flex w-full justify-between">
        <div className=" w-[45%]">
          <TitleCast />
        </div>

        <div className="w-[45%]">
          <TitleRelated />
        </div>
      </div>
    </div>
  );
};

export default page;
