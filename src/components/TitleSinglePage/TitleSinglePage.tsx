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
import CollectionCard from '../Cards/CollectionCard/CollectionCard';
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

  const param = useParams();
  const pathName = usePathname();

  const mediaType = pathName?.includes('movie') ? 'movie' : 'tv';

  const cast = credits?.cast;
  const crew = credits?.crew;

  const asyncFunction = useCallback(async () => {
    try {
      const [titleRequest, trailerRequest, creditsRequest, relatedRequest] =
        await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/${
              pathName.includes('movie') ? 'movie' : 'tv'
            }/${param.id}?api_key=${
              process.env.NEXT_PUBLIC_API_KEY
            }&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/${
              pathName.includes('movie') ? 'movie' : 'tv'
            }/${param.id}/videos?api_key=${
              process.env.NEXT_PUBLIC_API_KEY
            }&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/${
              pathName.includes('movie') ? 'movie' : 'tv'
            }/${param.id}/credits?api_key=${
              process.env.NEXT_PUBLIC_API_KEY
            }&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/${
              pathName.includes('movie') ? 'movie' : 'tv'
            }/${param.id}/similar?api_key=${
              process.env.NEXT_PUBLIC_API_KEY
            }&language=en-US&page=1`
          ),
        ]);

      const titleResponse = await titleRequest.json();
      const trailerResponse = await trailerRequest.json();
      const creditsResponse = await creditsRequest.json();
      const relatedResponse = await relatedRequest.json();

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

  const searchByGenre = useCallback(async () => {
    try {
      const byGenreRequest = await fetch(
        ` https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${genres}&vote_count.gte=500&with_production_countries=us`
      );

      const byGenreResponse = await byGenreRequest?.json();

      setRecommendation(
        byGenreResponse?.results?.filter((title: any) => title?.id !== data?.id)
      );
    } catch (error) {}
  }, [data?.id, genres, mediaType]);

  useEffect(() => {
    setLoading(true);
    asyncFunction();
  }, [asyncFunction]);

  useEffect(() => {
    if (genres) {
      searchByGenre();
    }
  }, [genres, searchByGenre]);

  console.log(data);

  return (
    <div className="">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white background-fade flex flex-col justify-center items-center pb-10  xs:pt-5 semiSm:pt-10  ">
          <BackgroundOverlay imageUrl={data?.backdrop_path}>
            <div className="w-full  xl:w-[70%]  sm:px-10 ">
              <TitleInfo mediaType={mediaType} data={data} videos={videos} />
            </div>
            <div className="md:w-[35%] xl:w-[30%]  hidden xl:block sm:px-10">
              <News />
            </div>
          </BackgroundOverlay>

          <div className="flex flex-col w-full">
            <div className="mt-14 flex flex-col md:flex-row-reverse  w-full">
              <div className="w-full md:w-[30%] px-2 xs:px-5 md:px-0">
                <TitleDetails data={data} />
              </div>

              <div className="md:w-[75%] pt-1 md:pr-10 flex flex-col overflow-hidden">
                <TitleCast
                  credits={creditsType === 'cast' ? cast : crew}
                  setCreditsType={setCreditsType}
                  creditsType={creditsType}
                />
                {mediaType === 'tv' && (
                  <div className=" mt-5">
                    <TitleSeasons
                      titleId={data?.id}
                      numberOfSeasons={data?.number_of_seasons}
                    />
                  </div>
                )}
                {data?.belongs_to_collection && (
                  <TitleCollection
                    collectionId={data?.belongs_to_collection?.id}
                  />
                )}
              </div>
            </div>
            <div className="pt-1 overflow-x-hidden flex flex-col">
              <TitleRelated
                mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                relatedTitles={relatedTitles?.results}
              />
            </div>

            <div className="pt-1 overflow-x-hidden flex flex-col">
              <TitleRecommendation
                mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                relatedTitles={recommendation}
              />
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

export default TitleSinglePage;
