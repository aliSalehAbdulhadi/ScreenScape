import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import DelayDisplay from '../../WrapperComponents/DelayDisplay/DelayDisplay';
import GridComp from '../../WrapperComponents/GridComp/GridComp';
import PosterCard from '../../Cards/PosterCard/PosterCard';
import { dataObject } from '@/src/global/globalVariables';
import { Dispatch, SetStateAction, memo, useCallback, useRef } from 'react';
import { LoadMoreData } from '@/src/helper/loadMoreData';

const SearchPageContent = ({
  filteredData,
  params,
  pageNum,
  setPageNum,
  totalPages,
  loading,
}: {
  filteredData: any;
  params: any;
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
  totalPages: number;
  loading: boolean;
}) => {
  const loadMoreDataHandler = useCallback(() => {
    setPageNum((prev) => prev + 1);
  }, [setPageNum]);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  LoadMoreData(loadMoreRef, totalPages, pageNum, loading, loadMoreDataHandler);

  const decodedString = decodeURIComponent(params?.id);
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
    <div>
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
    </div>
  );
};

export default memo(SearchPageContent);
