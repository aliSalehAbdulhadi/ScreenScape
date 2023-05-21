'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import ActorInfo from './ActorInfo/ActorInfo';
import { News } from '../News/News';
import ActorAppearedIn from './ActorAppearedIn/ActorAppearedIn';
import OtherActors from './OtherActors/OtherActors';
import LoadingSpinner from '../LoadingComponent/LoadingSpinner/LoadingSpinner';
import { useSingleActorDataFetch } from '@/src/fetch/getSingleActorData';
import LazyLoadComponent from '../WrapperComponents/LazyLoadComponents/LazyLoadComponent';

const ActorSinglePage = () => {
  const [mediaType, setMediaType] = useState<string>('movie');

  const param = useParams();

  const [data, appearedInMovies, loading] = useSingleActorDataFetch(
    mediaType,
    param
  );

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

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white background-fade flex flex-col justify-center items-center pb-10  xs:pt-5 semiSm:pt-10 ">
          <div className="flex  justify-between w-full   ">
            <div className="w-full  semiSm:pl-10">
              <ActorInfo data={data} />
            </div>
          </div>
          <div className="w-full mt-14">
            <LazyLoadComponent>
              <div className="flex">
                <div className="flex flex-col  xl:w-[70%] overflow-hidden">
                  <div className="w-full slider-fade">
                    <ActorAppearedIn
                      setMediaType={setMediaType}
                      mediaType={mediaType}
                      appearedInTitles={
                        mediaType === 'movie' ? movies : tvShows
                      }
                    />
                  </div>

                  <div className=" mt-10 slider-fade">
                    <OtherActors
                      mediaType={mediaType}
                      appearedInTitles={
                        mediaType === 'movie' ? movies : tvShows
                      }
                    />
                  </div>
                </div>

                <div className="w-[30%] mx-2 hidden xl:block ">
                  <News />
                </div>
              </div>
            </LazyLoadComponent>
          </div>

          <div className="w-full px-2 xs:px-5 xxs:w-[80%] md:w-[70%] mt-10 xl:hidden ">
            <News />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorSinglePage;
