'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import moment from 'moment';
import TitleInfo from './TitleInfo/TitleInfo';
import { News } from '../News/News';
import { TitleCast } from './TitleCast/TitleCast';
import TitleRelated from './TitleRelated/TitleRelated';
import BackgroundOverlay from './TitleInfo/BackgroundOverlay/BackgroundOverlay';
import LoadingSpinner from '../LoadingComponent/LoadingSpinner/LoadingSpinner';

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

  const param = useParams();
  const pathName = usePathname();

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

  useEffect(() => {
    setLoading(true);
    asyncFunction();
  }, [asyncFunction]);

  return (
    <div className="">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white background-fade flex flex-col justify-center items-center pb-10  semiSm:pt-10  ">
          <BackgroundOverlay imageUrl={data?.backdrop_path}>
            <div className="w-full  xl:w-[70%]  sm:px-10 ">
              <TitleInfo
                mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                data={data}
                videos={videos}
              />
            </div>
            <div className="md:w-[35%] xl:w-[30%]  hidden xl:block sm:px-10">
              <News />
            </div>
          </BackgroundOverlay>

          <div className="sm:px-10 w-full">
            <div className="mt-14 flex flex-col semiSm:flex-row  justify-between ">
              <div className=" semiSm:w-[48%]">
                <TitleCast
                  credits={creditsType === 'cast' ? cast : crew}
                  setCreditsType={setCreditsType}
                  creditsType={creditsType}
                />
              </div>

              <div className="semiSm:w-[48%] mt-10 semiSm:mt-0">
                <TitleRelated
                  mediaType={pathName?.includes('movie') ? 'movie' : 'tv'}
                  relatedTitles={relatedTitles?.results}
                />
              </div>
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
