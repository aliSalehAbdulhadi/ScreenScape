'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import moment from 'moment';
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
  const [relatedTitles, setRelatedTitles] = useState<any>([]);
  const [creditsType, setCreditsType] = useState<string>('cast');
  const [recommendation, setRecommendation] = useState<any[]>([]);
  const [keywords, setKeywords] = useState<any>([]);

  const param = useParams();
  const pathName = usePathname();

  const mediaType = pathName?.includes('movie') ? 'movie' : 'tv';

  const cast = credits?.cast;
  const crew = credits?.crew;

  const singleDataFetch = useCallback(async () => {
    try {
      const [
        titleRequest,
        trailerRequest,
        creditsRequest,
        relatedRequest,
        recommendedRequest,
        keywordsRequest,
        moreDataRequest,
      ] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${param.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        ),
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${param.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        ),
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${param.id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        ),
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${param.id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
        ),
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${data?.id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
        ),
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${data?.id}/keywords?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        ),
        fetch(
          `http://www.omdbapi.com/?t=${
            mediaType === 'movie'
              ? data?.title?.replaceAll(' ', '+')
              : data?.name?.replaceAll(' ', '+')
          }&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
        ),
      ]);

      const titleResponse = await titleRequest.json();
      const trailerResponse = await trailerRequest.json();
      const creditsResponse = await creditsRequest.json();
      const relatedResponse = await relatedRequest.json();
      const recommendedResponse = await recommendedRequest?.json();
      const keywordsResponse = await keywordsRequest?.json();
      const moreDataResponse = await moreDataRequest?.json();

      setGenres(
        titleResponse?.genres
          ?.map((genre: { id: number; name: string }) => genre?.id)
          .join('&')
      );
      setYear({
        plusYear: moment(data?.release_date)
          .subtract(1, 'year')
          .format('YYYY-MM-DD'),
        minusYear: moment(data?.release_date)
          .add(1, 'year')
          .format('YYYY-MM-DD'),
      });

      setData(titleResponse);
      setCredits(creditsResponse);
      setRelatedTitles(relatedResponse);
      setVideos(trailerResponse.results);

      setRecommendation(
        recommendedResponse?.results?.filter(
          (title: any) => title?.id !== data?.id
        )
      );
      setKeywords(
        mediaType === 'movie'
          ? keywordsResponse?.keywords
          : keywordsResponse?.results
      );
      if (moreDataResponse) {
        setData((prev: any) => {
          return {
            ...prev,
            ratings: moreDataResponse?.Ratings,
            rated: moreDataResponse?.Rated,
            awards:
              moreDataResponse?.Awards === 'N/A'
                ? null
                : moreDataResponse?.Awards,
          };
        });
      }

      if (
        titleRequest.status === 200 &&
        trailerRequest.status === 200 &&
        creditsRequest.status === 200 &&
        relatedRequest.status === 200
      ) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genres, param.id]);

  useEffect(() => {
    setLoading(true);
    singleDataFetch();
  }, [singleDataFetch]);

  return (
    <div className="">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white background-fade flex flex-col justify-center items-center pb-10  xs:pt-5 semiSm:pt-10  ">
          <BackgroundOverlay imageUrl={data?.backdrop_path}>
            <div className="w-full  xl:w-[70%]  sm:px-5 ">
              <TitleInfo mediaType={mediaType} data={data} videos={videos} />
            </div>
            <div className="md:w-[35%] xl:w-[30%]  hidden xl:block sm:px-5">
              <News />
            </div>
          </BackgroundOverlay>

          <div className="flex flex-col w-full">
            <div className="mt-14 flex flex-col md:flex-row-reverse  w-full">
              <div className="w-full md:w-[30%] px-2 xs:px-2 sm:px-5 md:px-0">
                <TitleDetails
                  data={data}
                  mediaType={mediaType}
                  keywords={keywords}
                />
              </div>

              <div className="md:w-[75%] pt-2 md:pr-10 flex flex-col overflow-hidden">
                <TitleCast
                  credits={creditsType === 'cast' ? cast : crew}
                  setCreditsType={setCreditsType}
                  creditsType={creditsType}
                  mediaType={mediaType}
                />
                {mediaType === 'tv' && (
                  <div className=" px-2 sm:px-5 md:pl-5 md:px-0">
                    <TitleSeasons
                      titleId={data?.id}
                      numberOfSeasons={data?.number_of_seasons}
                    />
                  </div>
                )}
                {data?.belongs_to_collection && (
                  <div className="sm:pl-5 mb-10">
                    <TitleCollection
                      collectionId={data?.belongs_to_collection?.id}
                      mediaType={mediaType}
                    />
                  </div>
                )}
              </div>
            </div>
            {relatedTitles?.results?.length > 0 && (
              <div className="pt-1 overflow-x-hidden flex flex-col">
                <TitleRelated
                  mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                  relatedTitles={relatedTitles?.results}
                />
              </div>
            )}

            {recommendation?.length > 0 && (
              <div className="pt-1 overflow-x-hidden flex flex-col">
                <TitleRecommendation
                  mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                  relatedTitles={recommendation}
                />
              </div>
            )}
          </div>
          <div className="w-full px-2 xxs:px-0 xxs:w-[80%] md:w-[70%] mt-10 xl:hidden">
            <News />
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleSinglePage;
