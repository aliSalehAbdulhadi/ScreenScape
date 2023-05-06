import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SearchPage = dynamic(
  () => import('@/src/components/SearchPage/SearchPage')
);

const Search = async () => {
  return (
    <Suspense>
      <div className="fade-in min-h-screen bg-primary">
        <SearchPage />
      </div>
    </Suspense>
  );
};

export default Search;
