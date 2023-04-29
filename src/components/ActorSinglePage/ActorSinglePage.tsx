'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import ActorInfo from './ActorInfo/ActorInfo';
import { News } from '../News/News';
import ActorAppearedIn from './ActorAppearedIn/ActorAppearedIn';
import OtherActors from './OtherActors/OtherActors';
import LoadingSpinner from '../LoadingComponent/LoadingSpinner/LoadingSpinner';

const ActorSinglePage = () => {
  const [loading, setLoading] = useState(true);
  const [isMovies, setIsMovies] = useState(true);
  const [data, setData] = useState<any>({});
  const [appearedInMovies, setAppearedInMovies] = useState<any>([]);
  const [otherActors, setOtherActors] = useState<any>([]);

  const param = useParams();

  const tvShows = useMemo(
    () =>
      appearedInMovies?.cast?.filter(
        (title: any) => title?.media_type !== 'movie'
      ),
    [appearedInMovies]
  );

  const movies = useMemo(
    () =>
      appearedInMovies?.cast?.filter(
        (title: any) => title?.media_type === 'movie'
      ),
    [appearedInMovies]
  );

  const asyncFunction = useCallback(async () => {
    try {
      const [actorInfoRequest, appearedInRequest, otherActorsRequest] =
        await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/person/${param.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/person/${param.id}/combined_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${param.id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
          ),
        ]);

      const actorInfoResponse = await actorInfoRequest.json();
      const appearedInResponse = await appearedInRequest.json();
      const otherActorsResponse = await otherActorsRequest.json();

      setData(actorInfoResponse);
      setAppearedInMovies(appearedInResponse);
      setOtherActors(otherActorsResponse);

      if (actorInfoRequest.status === 200 && appearedInRequest.status === 200) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    } catch (error) {}
  }, [param]);

  useEffect(() => {
    asyncFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white background-fade flex flex-col justify-center items-center pb-10  xs:pt-5 semiSm:pt-10 sm:px-10 ">
          <div className="flex  justify-between w-full">
            <div className="w-full  xl:w-[70%]">
              <ActorInfo data={data} />
            </div>
            <div className="md:w-[35%] xl:w-[30%] hidden xl:block">
              <News />
            </div>
          </div>

          <div className="mt-14 flex flex-col semiSm:flex-row w-full justify-between px-2 xxxs:px-5 sm:px-0">
            <div className=" semiSm:w-[45%]">
              <ActorAppearedIn
                setIsMovies={setIsMovies}
                isMovies={isMovies}
                appearedInMovies={isMovies ? movies : tvShows}
              />
            </div>

            <div className="semiSm:w-[45%] mt-10 semiSm:mt-0">
              <OtherActors />
            </div>
          </div>

          <div className="w-full px-2 xxs:px-0 xxs:w-[80%] md:w-[70%] mt-10 xl:hidden ">
            <News />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorSinglePage;
