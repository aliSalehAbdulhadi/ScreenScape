import React from 'react';

const SmallTextButton = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setOpen(true)}
      className="text-sm   text-white text-opacity-80 flex items-center justify-center cursor-pointer hover:text-opacity-90 transition-all"
    >
      <span>View All</span>
    </div>
  );
};

export default SmallTextButton;
