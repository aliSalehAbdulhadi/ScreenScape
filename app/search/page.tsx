import LoadingCard from '@/src/components/LoadingComponent/LoadingCard/LoadingCard';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SearchPage = dynamic(
  () => import('@/src/components/SearchPage/SearchPage')
);

const Search = async () => {
  return (
    <Suspense fallback={<LoadingCard />}>
      <SearchPage />
    </Suspense>
  );
};

export default Search;
