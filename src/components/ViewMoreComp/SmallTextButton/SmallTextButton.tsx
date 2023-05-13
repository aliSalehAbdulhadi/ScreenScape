import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const SmallTextButton = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setOpen(true)}
      className="text-sm text-white text-opacity-50 flex justify-end cursor-pointer hover:text-opacity-90 transition-all duration-300 md:w-[24px] h-[30px] overflow-hidden  hover:w-[80px] delay-100"
    >
      <span className=" whitespace-nowrap self-center">View All</span>
      <span className="self-center ml-2">
        <MdOutlineArrowBackIos className="h-4 w-4 rotate-180 " />
      </span>
    </div>
  );
};

export default SmallTextButton;
