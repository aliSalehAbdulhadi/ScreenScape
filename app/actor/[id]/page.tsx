import ActorAppearedIn from '@/src/components/ActorSinglePage/ActorAppearedIn/ActorAppearedIn';
import ActorInfo from '@/src/components/ActorSinglePage/ActorInfo/ActorInfo';
import React from 'react';

const page = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center background-fade pt-10 ">
      <div className="w-[60%]">
        <ActorInfo />
        <div className="mt-14">
          <ActorAppearedIn />
        </div>
      </div>
    </div>
  );
};

export default page;
