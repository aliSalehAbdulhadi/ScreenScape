import Image from 'next/image';
import React from 'react';

const NewsCard = () => {
  return (
    <div className="flex items-center justify-between w-[28rem] rounded border-[1px] border-secondary border-opacity-40 h-[8rem] overflow-hidden cursor-pointer bg-white bg-opacity-10 hover:opacity-90 transition-all">
      <div className="ml-5 mt-2 flex  flex-col">
        <span className="text-lg">John Wick</span>
        <span className="text-xs text-offWhite text-opacity-60">
          Now playing
        </span>
      </div>
      <div className="">
        <Image
          width={120}
          height={120}
          src="/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg"
          className=" object-fit"
          alt="poster"
        />
      </div>
    </div>
  );
};

export default NewsCard;
