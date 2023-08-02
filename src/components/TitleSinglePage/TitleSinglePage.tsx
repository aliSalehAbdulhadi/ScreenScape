'use client';

import { memo, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import TitleInfo from './TitleInfo/TitleInfo';
import { News } from '../News/News';
import TitleCast from './TitleCast/TitleCast';
import TitleRelated from './TitleRelated/TitleRelated';
import BackgroundOverlay from './TitleInfo/BackgroundOverlay/BackgroundOverlay';
import TitleDetails from './TitleDetails/TitleDetails';
import TitleSeasons from './TitleSeasons/TitleSeasons';
import TitleRecommendation from './TitleRecommendation/TitleRecommendation';
import TitleCollection from './TitleCollection/TitleCollection';
import { useSingleTitleDataFetch } from '@/src/fetch/getSingleTitleData';
import LazyLoadComponent from '../WrapperComponents/LazyLoadComponents/LazyLoadComponent';

const TitleSinglePage = () => {
  const [creditsType, setCreditsType] = useState<string>('cast');

  const param = useParams();
  const pathName = usePathname();

  const mediaType = pathName?.includes('movie') ? 'movie' : 'tv';

  const [data, credits, videos, keywords, genres, year, loading] =
    useSingleTitleDataFetch(mediaType, param);

  const cast = credits?.cast;
  const crew = credits?.crew;
  return (
    <div className="text-white background-fade flex flex-col justify-center items-center pb-10  xs:pt-5 semiSm:pt-10  ">
      <BackgroundOverlay imageUrl={data?.backdrop_path}>
        <div className="w-full sm:px-10">
          <TitleInfo
            mediaType={mediaType}
            data={data}
            videos={videos}
            loading={loading}
          />
        </div>
      </BackgroundOverlay>

      <div className="mt-14 flex flex-col md:flex-row-reverse  w-full relative ">
        <div className="w-full md:w-[30%] px-2 xs:px-2 sm:px-10 md:px-0 ">
          <TitleDetails data={data} mediaType={mediaType} keywords={keywords} />
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

          <LazyLoadComponent key="seasons" threshold={0} once={true}>
            {mediaType === 'tv' && (
              <div className="px-2 sm:px-10 md:pl-10 md:px-0">
                <TitleSeasons
                  titleId={data?.id}
                  numberOfSeasons={data?.number_of_seasons}
                />
              </div>
            )}
          </LazyLoadComponent>

          <LazyLoadComponent key="collection" threshold={0} once={true}>
            {data?.belongs_to_collection && (
              <div className="sm:pl-10 mb-10 ">
                <TitleCollection
                  collectionId={data?.belongs_to_collection?.id}
                  mediaType={mediaType}
                />
              </div>
            )}
          </LazyLoadComponent>

          <LazyLoadComponent key="related" threshold={0} once={true}>
            {TitleRelated && (
              <div className="pt-1 overflow-x-hidden flex flex-col slider-fade overflow-hidden fade-in ">
                <TitleRelated
                  mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                  param={param}
                />
              </div>
            )}
          </LazyLoadComponent>

          <LazyLoadComponent key="recommended" threshold={0} once={true}>
            {TitleRecommendation && (
              <div className="pt-1 overflow-x-hidden flex flex-col slider-fade overflow-hidden fade-in ">
                <TitleRecommendation
                  mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                  param={param}
                />
              </div>
            )}
          </LazyLoadComponent>
        </div>
      </div>

      <div className="w-full px-2 xxs:px-0 xxs:w-[80%] md:w-[70%] mt-10 xl:hidden">
        <News />
      </div>
    </div>
  );
};

export default memo(TitleSinglePage);
