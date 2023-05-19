'use client';
import { Suspense, lazy, memo, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSearchDataFetch } from '@/src/fetch/getSearchData';

const SearchPageContent = lazy(
  () => import('./SearchPageContent/SearchPageContent')
);

const SearchPage = () => {
  const [pageNum, setPageNum] = useState<number>(1);

  const params = useParams();

  const [data, loading, totalPages] = useSearchDataFetch(params, pageNum);

  const filteredData = useMemo(() => {
    return data?.filter((title: any) => title?.media_type !== 'person');
  }, [data]);

  return (
    <div className="pt-10 background-fade px-10 fade-in">
      <Suspense>
        <SearchPageContent
          pageNum={pageNum}
          setPageNum={setPageNum}
          loading={loading}
          filteredData={filteredData}
          params={params}
          totalPages={totalPages}
        />
      </Suspense>
      {loading && (
        <div className="absolute bottom-1 translate-x-[-50%] left-[50%] scale-50">
          <div className="spinner scale-50">
            <div className="spinner-inner"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(SearchPage);
