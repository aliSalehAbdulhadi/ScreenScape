import Image from 'next/image';
import { memo } from 'react';
import { SlPicture } from 'react-icons/sl';
import SingleGenres from './SingleGenres/SingleGenres';
import StreamedOn from './StreamedOn/StreamedOn';
import MasonryGridPics from '../../MasonryGridPics/MasonryGridPics';
import Buttons from './Buttons/Buttons';
import {
  dataObject,
  imageQualityLargeScreen,
} from '@/src/global/globalVariables';
import {
  FullMovieSingleInterface,
  FullTvShowSingleInterface,
} from '@/src/Interfaces/interfaces';
import LoadingSkeleton from '../../LoadingComponent/LoadingSkeleton/LoadingSkeleton';

const TitleInfo = ({
  data,
  videos,
  mediaType,
  loading,
}: {
  data: FullMovieSingleInterface & FullTvShowSingleInterface;
  videos: any[];
  mediaType: string;
  loading: boolean;
}) => {
  const minutes = data?.runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const movieRuntime = hours + 'h ' + remainingMinutes + 'm';
  return (
    <div className="flex flex-col  items-start w-[100%]  sm:pr-5 ">
      <div className="flex justify-center flex-col sm:justify-start  sm:flex-row w-full">
        <div className="xs:self-center  xs:w-[28rem] sm:w-[21rem]">
          <MasonryGridPics mediaType={mediaType} id={data?.id}>
            {dataObject(data, mediaType).posterUrl?.length > 0 && !loading ? (
              <Image
                quality={imageQualityLargeScreen}
                width={1000}
                height={1000}
                src={`https://image.tmdb.org/t/p/original/${
                  dataObject(data, mediaType).posterUrl
                }`}
                alt="Poster Photo"
                className={`xs:rounded object-fit h-[28rem] xxxs:h-[35rem] xxs:h-[37rem] sm:h-[30rem] xs:w-[28rem] sm:w-[21rem]`}
                blurDataURL="/images/imagePlaceholder.png"
                placeholder="blur"
                priority={true}
              />
            ) : (
              <div
                className={`flex items-center justify-center h-[30rem] w-full rounded overflow-hidden bg-placeholder ${
                  loading && 'animate-pulse'
                }`}
              >
                <SlPicture
                  className={`h-[3.5rem] w-[3.5rem] ${loading && 'hidden'}`}
                />
              </div>
            )}
          </MasonryGridPics>
        </div>

        <div className="mx-2 xs:ml-5 sm:mx-0 sm:pl-3 xxs:flex sm:block justify-between relative text-sm xx:text-xs xs:text-sm mt-5 xs:mt-14 sm:mt-0 text-white semiSm:w-[70%]">
          <div className=" w-full xxs:w-fit relative ">
            <span
              title={dataObject(data, mediaType).title}
              className="text-lg xxxs:text-xl  semiSm:text-3xl  flex items-center "
            >
              <LoadingSkeleton
                data={dataObject(data, mediaType).title}
                height={30}
                loading={loading}
              />
            </span>
            <div className=" text-opacity-75 w-fit mb-5 mt-2 ">
              <LoadingSkeleton
                data={
                  <SingleGenres
                    mediaType={mediaType}
                    genres={data?.genres}
                    className="flex"
                  />
                }
                height={30}
                loading={loading}
                width={100}
              />
            </div>
          </div>
          <div className=" w-fit opacity-75 mt-1 semiSm:mt-0 mr-2 ">
            <div className="flex items-center mb-5 ">
              <div className=" h-[2rem] flex items-center">
                <LoadingSkeleton
                  data={
                    dataObject(data, mediaType)?.rated !== 'N/A' ? (
                      <span className="border-[1px] rounded min-h-[30px] w-full  py-1 px-2 flex justify-center items-center bg-primary bg-opacity-20  border-white border-opacity-75 mr-3 font-averia">
                        {dataObject(data, mediaType)?.rated}
                      </span>
                    ) : (
                      <span className="min-h-[30px] w-full border-[1px] rounded py-1 px-2 flex justify-center items-center bg-primary bg-opacity-20  border-white border-opacity-75 mr-3 font-averia">
                        {dataObject(data, mediaType)?.isAdult ? '18+' : 'G'}
                      </span>
                    )
                  }
                  height={30}
                  loading={loading}
                  width={50}
                />
              </div>

              <div className=" ml-3">
                <LoadingSkeleton
                  data={
                    mediaType === 'movie' ? (
                      <span>
                        {dataObject(data, mediaType).releaseDate?.split('-')[0]}
                      </span>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span>
                          {
                            dataObject(data, mediaType).releaseDate?.split(
                              '-'
                            )[0]
                          }
                        </span>
                        <span className="mx-2">-</span>
                        <span>
                          {dataObject(data, mediaType).endedDate?.split('-')[0]}{' '}
                          Last Aired
                        </span>
                      </div>
                    )
                  }
                  height={30}
                  width={50}
                  loading={loading}
                />
              </div>
            </div>

            <div className="mb-5 flex flex-col justify-center whitespace-nowrap ">
              <LoadingSkeleton
                data={
                  mediaType === 'movie' ? (
                    <span> {movieRuntime}</span>
                  ) : (
                    <div className='className="flex items-center'>
                      <div>
                        <span className='className="flex items-center'>
                          {dataObject(data, mediaType)?.seasons}{' '}
                          {dataObject(data, mediaType)?.seasons > 1
                            ? 'Seasons'
                            : 'Season'}
                        </span>{' '}
                        <span className='className="flex items-center'>
                          {dataObject(data, mediaType).episodes}{' '}
                          {dataObject(data, mediaType)?.episodes > 1
                            ? 'Episodes'
                            : 'Episode'}
                        </span>
                      </div>
                    </div>
                  )
                }
                height={30}
                loading={loading}
              />
              <span className="mt-1">
                <LoadingSkeleton
                  data={dataObject(data, mediaType).seriesStatus}
                  height={30}
                  loading={loading}
                />
              </span>
            </div>

            <div className="flex flex-col semiSm:flex-row  w-fit  mt-1 xxxs:mb-0 semiSm:mt-0">
              <div className="mb-5 semiSm:mr-5 opacity-75">
                <div className="opacity-75 semiSm:hidden mt-4">
                  <StreamedOn />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[17px]  scrollBar overflow-auto hidden max-h-[13rem] w-full xl:w-[80%] semiSm:block text-offWhite">
            <span className="leading-7">
              <LoadingSkeleton
                data={dataObject(data, mediaType).overview}
                height={100}
                loading={loading}
              />
            </span>
          </div>

          <div className="bottom-0  flex sm:left-3 xxs:absolute w-full">
            <div className="flex items-center ">
              <Buttons videos={videos} />
              <div className="hidden semiSm:block w-[13rem] ml-5">
                <StreamedOn />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm xxs:text-[17px] scrollBar mx-2 xs:mx-5 sm:mx-0  mt-5 self-center  semiSm:hidden">
        <span className="leading-7">
          <LoadingSkeleton
            data={data?.overview}
            height={100}
            loading={loading}
          />
        </span>
      </div>
    </div>
  );
};

export default memo(TitleInfo);
