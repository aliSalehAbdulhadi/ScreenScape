'use client';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'next/navigation';
import GridComp from '@/src/components/WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../Cards/PosterCard/PosterCard';
import { dataObject } from '@/src/global/globalVariables';
import { useSearchDataFetch } from '@/src/fetch/getSearchData';
import { LoadMoreData } from '@/src/helper/loadMoreData';

const SearchPage = () => {
  const [pageNum, setPageNum] = useState<number>(1);

  const params = useParams();

  const decodedString = decodeURIComponent(params?.id);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  const [data, loading, totalPages] = useSearchDataFetch(params, pageNum);

  const loadMoreDataHandler = useCallback(() => {
    setPageNum((prev) => prev + 1);
  }, [setPageNum]);

  LoadMoreData(loadMoreRef, totalPages, pageNum, loading, loadMoreDataHandler);

  const filteredData = useMemo(() => {
    return data?.filter((title: any) => title?.media_type !== 'person');
  }, [data]);

  const lookingForTitleHandler = () => {
    if (params?.searchType === 'query') {
      return decodedString?.replace(/\b\w/g, (c) => c?.toUpperCase());
    }
    if (params?.searchType === 'genre') {
      const genre = decodedString?.split(/-(.+)/)?.map((word) =>
        word
          ?.replaceAll(/%20/g, ' ')
          ?.replaceAll(/%26/g, '&')
          ?.replace(/\b\w/g, (c) => c?.toUpperCase())
      );

      return `${genre[1]} Genre`;
    }

    if (params?.searchType === 'keyword') {
      const keyword = decodedString
        ?.split(/-(.+)/)
        ?.map((word) =>
          word
            ?.replaceAll(/%20|%2C/g, ' ')
            ?.replace(/\b\w/g, (c) => c?.toUpperCase())
        );

      return `${keyword[1]} Keyword`;
    }
  };

  return (
    <div className="pt-10 background-fade px-10 fade-in">
      <GridComp
        breakPointWidth={12}
        title="Looking For"
        changeableTitle={String(lookingForTitleHandler())}
      >
        {filteredData?.map((title: any, i: number) => (
          <DelayDisplay key={uuidv4()} delay={i * 50}>
            <div className="flex flex-col  cursor-pointer bg-white text-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden">
              <Link
                href={`/browse/${title?.first_air_date ? 'tv/' : 'movie/'}${
                  title?.id
                }`}
              >
                <PosterCard
                  index={i}
                  imageUrl={
                    dataObject(title, title?.first_air_date ? 'tv' : 'movie')
                      ?.posterUrl
                  }
                  title={
                    dataObject(title, title?.first_air_date ? 'tv' : 'movie')
                      ?.title
                  }
                  releaseDate={
                    dataObject(title, title?.first_air_date ? 'tv' : 'movie')
                      ?.releaseDate
                  }
                  rating={
                    dataObject(title, title?.first_air_date ? 'tv' : 'movie')
                      ?.voteAverage * 10
                  }
                  mediaType={title?.first_air_date ? 'tv' : 'movie'}
                />
              </Link>
            </div>
          </DelayDisplay>
        ))}
        <div ref={loadMoreRef} />
      </GridComp>

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
