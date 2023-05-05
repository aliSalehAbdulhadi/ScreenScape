import Image from 'next/image';
import { useState } from 'react';
import SingleGenres from './SingleGenres/SingleGenres';
import Rating from './Rating/Rating';
import StreamedOn from './StreamedOn/StreamedOn';
import SinglePlaceholder from '../../Placeholders/SinglePlaceholder/SinglePlaceholder';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';
import MasonryGridPics from '../../MasonryGridPics/MasonryGridPics';
import Buttons from './Buttons/Buttons';

const TitleInfo = ({
  data,
  videos,
  mediaType,
}: {
  data: any;
  videos: any[];
  mediaType: string;
}) => {
  const [loading, setLoading] = useState(true);

  const minutes = data.runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const movieRuntime = hours + 'h ' + remainingMinutes + 'm';

  const dataObject = () => {
    let posterUrl = data?.poster_path;
    let title = mediaType === 'movie' ? data?.title : data?.name;
    let releaseDate =
      mediaType === 'movie' ? data?.release_date : data?.first_air_date;
    let endedDate = data?.last_air_date;
    let runtime = movieRuntime;
    let isAdult = data?.adult;
    let voteAverage = data?.vote_average;
    let overview = data?.overview;
    let seasons = data?.number_of_seasons;
    let episodes = data?.number_of_episodes;
    let seriesStatus = data?.status;
    return {
      posterUrl,
      title,
      releaseDate,
      endedDate,
      runtime,
      isAdult,
      voteAverage,
      overview,
      seasons,
      episodes,
      seriesStatus,
    };
  };

  return (
    <div className="flex flex-col  items-start w-[100%]  sm:pr-5 ">
      <div className="flex justify-center flex-col sm:justify-start  sm:flex-row w-full">
        <div className="xs:self-center">
          <MasonryGridPics
            mediaType={data?.first_air_date ? 'tv' : 'movie'}
            id={data?.id}
          >
            <SinglePlaceholder condition={data?.poster_path} isTitle={true}>
              {loading && (
                <div className="h-[30rem]">
                  <LoadingPicture />
                </div>
              )}
              <Image
                width={1000}
                height={1000}
                src={`https://image.tmdb.org/t/p/original/${
                  dataObject().posterUrl
                }`}
                alt="Poster Photo"
                className={`xs:rounded  object-fit w-full h-full  ${
                  loading === false ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() =>
                  setTimeout(() => {
                    setLoading(false);
                  }, 100)
                }
              />
            </SinglePlaceholder>
          </MasonryGridPics>
        </div>

        <div className="mx-2 xxxs:ml-5 sm:mx-0 sm:pl-3 xxs:flex sm:block justify-between relative text-sm xx:text-xs xs:text-sm mt-5 xs:mt-14 sm:mt-0 text-white">
          <div className=" w-full xxs:w-fit relative ">
            <span
              title={dataObject().title}
              className="text-lg xxxs:text-xl  semiSm:text-3xl  flex items-center  semiSm:w-[27rem] md:w-[36rem] lg:w-[44rem] xl:w-[28.5rem] xxl:w-[37rem] xxxl:w-[40rem]  scrollBar"
            >
              {dataObject().title?.length <= 40
                ? dataObject().title
                : dataObject().title?.slice(0, 40) + '...'}
            </span>
            <div className=" text-opacity-75 w-fit mb-5 mt-2">
              <SingleGenres mediaType={mediaType} genres={data?.genres} />
            </div>
          </div>
          <div className=" w-fit opacity-75 mt-1 semiSm:mt-0 mr-2 ">
            <div className="flex items-center mb-5 ">
              {dataObject().isAdult ? (
                <span className="border-[1px] rounded p-[2px] bg-white bg-opacity-20  border-white border-opacity-75 mr-3 font-averia">
                  +18
                </span>
              ) : (
                <span className="border-[1px] rounded py-[2px] bg-white bg-opacity-20 px-2 border-white border-opacity-75 mr-3 font-averia">
                  G
                </span>
              )}

              <div>
                {mediaType === 'movie' ? (
                  <span>{dataObject().releaseDate.split('-')[0]}</span>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>{dataObject().releaseDate.split('-')[0]}</span>
                    <span className="mx-2">-</span>
                    <span>
                      {dataObject().endedDate.split('-')[0]} Last Aired
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-5 flex flex-col justify-center whitespace-nowrap ">
              {mediaType === 'movie' ? (
                <span> {dataObject()?.runtime}</span>
              ) : (
                <div className='className="flex items-center'>
                  <div>
                    <span className='className="flex items-center'>
                      {dataObject()?.seasons}{' '}
                      {dataObject()?.seasons > 1 ? 'Seasons' : 'Season'}
                    </span>{' '}
                    <span className='className="flex items-center'>
                      {dataObject().episodes}{' '}
                      {dataObject()?.episodes > 1 ? 'Episodes' : 'Episode'}
                    </span>
                  </div>
                </div>
              )}
              <span className="mt-1">{dataObject().seriesStatus}</span>
            </div>

            <div className="flex flex-col semiSm:flex-row  w-fit  mt-1 xxxs:mb-0 semiSm:mt-0">
              <div className="mb-5 semiSm:mr-5 opacity-75">
                <Rating rating={dataObject().voteAverage} />
                <div className="opacity-75 semiSm:hidden mt-4">
                  <StreamedOn />
                </div>
              </div>
            </div>
          </div>

          <div className="text-[17px]  h-[5rem] md:h-[7rem] xl:h-[5rem] xxl:h-[7rem]   semiSm:w-[27rem] md:w-[36rem] lg:w-[44rem]  xl:w-[28.5rem] xxl:w-[37rem] xxxl:w-[40rem] scrollBar overflow-auto hidden  semiSm:block text-offWhite">
            <span className="leading-7">{dataObject().overview}</span>
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

      <div className="text-sm xxs:text-[17px] scrollBar mx-2 xxxs:mx-5 sm:mx-0  mt-5 self-center  semiSm:hidden">
        <span className="leading-7">{data?.overview}</span>
      </div>
    </div>
  );
};

export default TitleInfo;
