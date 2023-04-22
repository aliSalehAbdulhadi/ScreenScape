import React from 'react';

const LoadingCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-[8rem] xxxs:w-[12rem] xs:w-[14rem] xl:w-[18rem]  mx-2 h-full mb-8 ${className}`}
    >
      <div className="bg-gray-800 rounded shadow-lg overflow-hidden h-[4.5rem] xxxs:h-[7rem] xl:h-[10rem]">
        <div className="relative pb-2/3">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 animate-pulse"></div>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="h-4 bg-gray-900 rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-900 rounded w-5/6 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-900 rounded w-3/4 mb-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
