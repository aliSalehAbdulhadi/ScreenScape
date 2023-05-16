'use client';

import { memo, useCallback, useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import TitleInfo from './TitleInfo/TitleInfo';
import { News } from '../News/News';
import TitleCast from './TitleCast/TitleCast';
import TitleRelated from './TitleRelated/TitleRelated';
import BackgroundOverlay from './TitleInfo/BackgroundOverlay/BackgroundOverlay';
import LoadingSpinner from '../LoadingComponent/LoadingSpinner/LoadingSpinner';
import TitleDetails from './TitleDetails/TitleDetails';
import TitleSeasons from './TitleSeasons/TitleSeasons';
import TitleRecommendation from './TitleRecommendation/TitleRecommendation';
import TitleCollection from './TitleCollection/TitleCollection';
import { useSingleTitleDataFetch } from '@/src/fetch/getSingleTitleData';
import LazyLoadComponents from '../WrapperComponents/LazyLoadComponents/LazyLoadComponents';

const TitleSinglePage = () => {
  const [year, setYear] = useState({
    plusYear: '',
    minusYear: '',
  });
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<[]>([]);
  const [data, setData] = useState<any>({});
  const [videos, setVideos] = useState<any>([]);
  const [credits, setCredits] = useState<any>([]);
  const [creditsType, setCreditsType] = useState<string>('cast');
  const [keywords, setKeywords] = useState<any>([]);

  const param = useParams();
  const pathName = usePathname();

  const mediaType = pathName?.includes('movie') ? 'movie' : 'tv';

  const cast = credits?.cast;
  const crew = credits?.crew;


  const omdbFetch = useCallback(async () => {
    const omdbRequest = await fetch(
      `https://www.omdbapi.com/?t=${
        mediaType === 'movie'
          ? data?.title?.replaceAll(' ', '+')
          : data?.name?.replaceAll(' ', '+')
      }&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
    );
    const omdbResponse = await omdbRequest?.json();

    setData((prev: any) => {
      return {
        ...prev,
        ratings: omdbResponse?.Ratings,
        rated: omdbResponse?.Rated,
        awards:
          omdbResponse?.Awards === 'N/A' || null || undefined
            ? null
            : omdbResponse?.Awards,
      };
    });
  }, [data, mediaType]);

  useSingleTitleDataFetch(
    mediaType,
    param,
    setData,
    setCredits,
    setVideos,
    setKeywords,
    setGenres,
    setYear,
    setLoading
  );

  useEffect(() => {
    if (data) {
      omdbFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.title || data?.name]);
  return (
    <div className="">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white background-fade flex flex-col justify-center items-center pb-10  xs:pt-5 semiSm:pt-10  ">
          <BackgroundOverlay imageUrl={data?.backdrop_path}>
            <div className="w-full sm:px-10">
              <TitleInfo mediaType={mediaType} data={data} videos={videos} />
            </div>
          </BackgroundOverlay>

          <div className="mt-14 flex flex-col md:flex-row-reverse  w-full relative ">
            <div className="w-full md:w-[30%] px-2 xs:px-2 sm:px-10 md:px-0 ">
              <TitleDetails
                data={data}
                mediaType={mediaType}
                keywords={keywords}
              />
              <div className="hidden xl:block sm:pr-10">
                <News />
              </div>
            </div>
            <div className="md:w-[75%]  md:pr-10 flex flex-col overflow-hidden relative ">
              <div className="slider-fade overflow-hidden">
                <TitleCast
                  credits={creditsType === 'cast' ? cast : crew}
                  setCreditsType={setCreditsType}
                  creditsType={creditsType}
                  mediaType={mediaType}
                />
              </div>
              {mediaType === 'tv' && (
                <div className="px-2 sm:px-10 md:pl-10 md:px-0">
                  <TitleSeasons
                    titleId={data?.id}
                    numberOfSeasons={data?.number_of_seasons}
                  />
                </div>
              )}
              {data?.belongs_to_collection && (
                <div className="sm:pl-10 mb-10 ">
                  <TitleCollection
                    collectionId={data?.belongs_to_collection?.id}
                    mediaType={mediaType}
                  />
                </div>
              )}

              <div className="pt-1 overflow-x-hidden flex flex-col slider-fade overflow-hidden">
                <TitleRelated
                  mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                  param={param}
                />
              </div>

              <LazyLoadComponents key="recommendation">
                <div className="pt-1 overflow-x-hidden flex flex-col slider-fade overflow-hidden">
                  <TitleRecommendation
                    mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                    param={param}
                  />
                </div>
              </LazyLoadComponents>
            </div>
          </div>

          <div className="w-full px-2 xxs:px-0 xxs:w-[80%] md:w-[70%] mt-10 xl:hidden">
            <News />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(TitleSinglePage);
