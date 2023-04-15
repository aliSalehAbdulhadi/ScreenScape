import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import PlusButton from '@/src/components/Buttons/PlusButton/PlusButton';

const TrailerButton = () => {
  return (
    <div className=" flex self-start items-center transition-all">
      <button className="mr-3 flex items-center bg-white rounded px-2 py-1 xs:py-2 xs:px-4 text-black md:hover:opacity-90 ">
        <BsPlayFill size={25} className="" />
        <span className="mr-2 xs:text-lg">Trailer</span>
      </button>
      <PlusButton size={25} />
    </div>
  );
};

export default TrailerButton;
