import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SearchPage = dynamic(
  () => import('@/src/components/SearchPage/SearchPage')
);

const Search = () => {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
};

export default Search;
