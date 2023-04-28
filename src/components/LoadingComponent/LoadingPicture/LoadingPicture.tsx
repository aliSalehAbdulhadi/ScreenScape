import React from 'react';

const LoadingPicture = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full  h-full  ${className}`}>
      <div className="bg-gray-800 rounded shadow-lg overflow-hidden h-full w-full animate-pulse">
        <div className="relative pb-2/3">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPicture;
