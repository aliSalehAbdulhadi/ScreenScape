import { TitleCast } from '@/src/components/TitleSinglePage/TitleCast/TitleCast';
import TitleInfo from '@/src/components/TitleSinglePage/TitleInfo/TitleInfo';
import TitleRelated from '@/src/components/TitleSinglePage/TitleRelated/TitleRelated';

const page = () => {
  return (
    <div className="text-white background-fade flex flex-col justify-center items-center pt-10 ">
      <div className="w-[60%]">
        <TitleInfo />

        <div className="mt-20">
          <div className=" mt-5">
            <TitleCast />
          </div>

          <div className="mt-5">
            <TitleRelated />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
