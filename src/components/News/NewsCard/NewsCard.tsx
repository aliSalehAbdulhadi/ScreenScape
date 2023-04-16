import Image from 'next/image';
import React from 'react';

const NewsCard = () => {
  return (
    <div className="flex items-center justify-between w-full rounded border-[1px] border-secondary border-opacity-40 h-[8rem] overflow-hidden cursor-pointer bg-white bg-opacity-10 hover:opacity-90 transition-all">
      <div className="ml-5 mt-2 flex  flex-col w-[70%] xxxs:w-[80%]">
        <span className="text-lg">John Wick</span>
        <span className="text-xs text-offWhite text-opacity-60">
          Now playing
        </span>
      </div>
      <div className="w-[30%] xxxs:w-[20%] h-full">
        <Image
          width={120}
          height={120}
          src="/images/716rIayrVWL._AC_SL1500_.jpg"
          className=" object-fit h-full w-full"
          alt="poster"
        />
      </div>
    </div>
  );
};

export default NewsCard;
