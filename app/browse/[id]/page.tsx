import { News } from '@/src/components/News/News';
import { TitleCast } from '@/src/components/TitleSinglePage/TitleCast/TitleCast';
import TitleInfo from '@/src/components/TitleSinglePage/TitleInfo/TitleInfo';
import TitleRelated from '@/src/components/TitleSinglePage/TitleRelated/TitleRelated';

const page = () => {
  return (
    <div className="text-white background-fade flex flex-col justify-center items-center pb-10 xs:pt-5 semiSm:pt-10  sm:px-10">
      <div className="flex  justify-between w-full">
        <div className="w-full  xl:w-[70%]">
          <TitleInfo />
        </div>
        <div className="md:w-[35%] xl:w-[30%] hidden xl:block">
          <News />
        </div>
      </div>

      <div className="mt-14 flex flex-col semiSm:flex-row w-full justify-between px-2 xxxs:px-5 sm:px-0">
        <div className=" semiSm:w-[45%]">
          <TitleCast />
        </div>

        <div className="semiSm:w-[45%] mt-10 semiSm:mt-0">
          <TitleRelated />
        </div>
      </div>

      <div className="w-full px-2 xxs:px-0 xxs:w-[80%] md:w-[70%] mt-10 xl:hidden ">
        <News />
      </div>
    </div>
  );
};

export default page;