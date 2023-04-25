import React from 'react';

const LoadingCard = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full  h-full  ${className}`}>
      <div className="bg-gray-800 rounded shadow-lg overflow-hidden h-[4.5rem] xxxs:h-[6rem] semiSm:h-[8rem] xxxl:h-[11rem] animate-pulse">
        <div className="relative pb-2/3">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
