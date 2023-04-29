import React from 'react';

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex flex-col justify-center self-end">
      <span className="mb-1">7.6 IMDB</span>
      <span className="mb-1">7.2 Rotten Tomato</span>
      <span>{parseInt(String(rating * 10))}% Community</span>
    </div>
  );
};

export default Rating;
