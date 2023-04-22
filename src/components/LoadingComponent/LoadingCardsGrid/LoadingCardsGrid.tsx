import React from 'react';
import LoadingCard from '../LoadingCard/LoadingCard';

const LoadingCardsGrid = () => {
  const myArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex items-center h-full overflow-hidden ml-3 xs:ml-9">
      {myArray.map((_, i) => {
        return (
          <div
            key={i}
            className={` whitespace-nowrap ${i === 1 ? 'opacity-70' : ''}
          ${i === 2 ? 'opacity-60' : ''}${i === 3 ? 'opacity-40' : ''}${
              i === 4 ? 'opacity-30' : ''
            }`}
          >
            <LoadingCard />
          </div>
        );
      })}
    </div>
  );
};

export default LoadingCardsGrid;
