import React from 'react';
import NewsCard from './NewsCard/NewsCard';

export const News = () => {
  return (
    <div className="flex flex-col">
      <span className="text-lg xxs:text-xl text-secondary self-center xxs:self-start">
        Explore More
      </span>
      <div className="mt-5">
        <NewsCard />
      </div>
      <div className="mt-3">
        <NewsCard />
      </div>{' '}
      <div className="mt-3">
        <NewsCard />
      </div>
    </div>
  );
};
