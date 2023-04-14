import React from 'react';
import NewsCard from './NewsCard/NewsCard';

export const News = () => {
  return (
    <div>
      <span className="text-xl text-secondary">Explore More</span>
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
