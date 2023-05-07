import React from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';

const SmallTextButton = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setOpen(true)}
      className="text-sm font-bold  text-white text-opacity-70 flex items-center justify-center cursor-pointer hover:text-opacity-90 transition-all"
    >
      <span>View More</span>
      <MdOutlineExpandMore className="w-5 h-5 rotate-180" />
    </div>
  );
};

export default SmallTextButton;
