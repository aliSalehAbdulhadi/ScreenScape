import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SearchPage = dynamic(
  () => import('@/src/components/SearchPage/SearchPage')
);

const Search = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <SearchPage />
    </Suspense>
  );
};

export default Search;
