import ActorAppearedIn from '@/src/components/ActorSinglePage/ActorAppearedIn/ActorAppearedIn';
import ActorInfo from '@/src/components/ActorSinglePage/ActorInfo/ActorInfo';
import OtherActors from '@/src/components/ActorSinglePage/OtherActors/OtherActors';
import { News } from '@/src/components/News/News';

const page = () => {
  return (
    <div className="text-white background-fade pt-10 px-10">
      <div className="flex  justify-between">
        <div className="w-[75%]">
          <ActorInfo />
        </div>

        <div>
          <News />
        </div>
      </div>
      <div className="mt-14 flex justify-between">
        <div className="mr-1 w-[45%]">
          <ActorAppearedIn />
        </div>
        <div className="w-[45%]">
          <OtherActors />
        </div>
      </div>
    </div>
  );
};

export default page;
