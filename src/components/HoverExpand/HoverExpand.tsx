import { useCallback, useEffect, useState } from 'react';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import SingleGenres from '../TitleSinglePage/TitleInfo/SingleGenres/SingleGenres';
import PlusButton from '../Buttons/PlusButton/PlusButton';
import useWindowSize from '@/src/hooks/useWindowsSize';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import asyncFetch from '@/src/helper/asyncFetch';
import { imageQualityLargeScreen } from '@/src/global/globalVariables';

const HoverExpand = ({
  titleId,
  index,
  hoveredIndex,
  mediaType,
}: {
  titleId: string;
  index: number;
  hoveredIndex: number;
  mediaType: string;
}) => {
  const [muteVideo, setMuteVideo] = useState<boolean>(true);
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [trailer, setTrailer] = useState<any>([]);

  const width = useWindowSize();

  const asyncFunction = useCallback(async () => {
    try {
      const results = await asyncFetch(
        `https://api.themoviedb.org/3/${mediaType}/${titleId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );

      const trailer = await asyncFetch(
        `https://api.themoviedb.org/3/${mediaType}/${titleId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );

      setData(results);

      setTrailer(
        trailer.results.filter((title: any) => title.type === 'Trailer')
      );
    } catch (error) {}
  }, [mediaType, titleId]);

  const minutes = data.runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const runtime = hours + 'h ' + remainingMinutes + 'm';

  useEffect(() => {
    asyncFunction();
  }, [asyncFunction]);

  const HandleOnReady = () => {
    setTimeout(() => {
      setIsVideoReady(true);
    }, 1000);
  };

  const handleOnMouseLeave = () => {
    setPlayVideo(false);
    setIsVideoReady(false);
    setMuteVideo(true);
  };

  const dataObject = () => {
    let posterUrl = data?.poster_path;
    let title = mediaType === 'movie' ? data?.title : data?.name;
    let releaseDate =
      mediaType === 'movie' ? data?.release_date : data?.first_air_date;
    let endedDate = data?.last_air_date;
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
      isAdult,
      voteAverage,
      overview,
      seasons,
      episodes,
      seriesStatus,
    };
  };

  return (
    <div
      onMouseLeave={handleOnMouseLeave}
      className="flex flex-col items-center  justify-center my-10 cursor-pointer rounded hover:scale-[1.3] hover:xl:scale-[1.5] opacity-0 hover:opacity-100 hover:delay-[.5s] cardHover relative"
    >
      <div>
        {index === hoveredIndex && playVideo && trailer[0]?.key ? (
          <div className="object-contain w-[300px] cursor-pointer relative">
            <VideoPlayer
              videoId={trailer[0]?.key}
              mute={muteVideo}
              autoplay={true}
              controls={false}
              stopVideo={playVideo}
              playVideo={playVideo}
              onReady={HandleOnReady}
            />
            <div className="absolute top-0 left-0 h-full px-3  w-[300px] flex items-end justify-end ">
              <div
                onClick={() => setMuteVideo(!muteVideo)}
                className={`w-fit border-[2px] border-white border-opacity-60 opacity-40 hover:opacity-90 hover:border-opacity-90 transition-all p-[.45rem] rounded-full cursor-pointer bg-black bg-opacity-60  mb-3  ${
                  isVideoReady || 'hidden'
                }`}
              >
                {muteVideo ? (
                  <FaVolumeMute size={width > 1300 ? 13 : 10} />
                ) : (
                  <FaVolumeUp size={width > 1300 ? 13 : 10} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-[300px]">
            <Link href={`/browse/${mediaType}/${titleId}`}>
              <Image
                quality={imageQualityLargeScreen}
                width={300}
                height={150}
                src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
                className=" object-contain md:rounded m-0 cursor-pointer "
                alt="poster"
                loading="lazy"
              />
            </Link>

            <div
              className={`top-0 left-0  px-1 xl:px-3 h-full w-full flex items-center justify-center bg-black bg-opacity-50 ${
                trailer[0]?.key ? 'absolute' : 'hidden'
              }`}
            >
              <div
                onClick={() => setPlayVideo(true)}
                className={`w-fit border-[2px] border-white border-opacity-60  hover:opacity-90 hover:border-opacity-90 transition-all p-[.45rem] rounded-full cursor-pointer bg-black bg-opacity-60 `}
              >
                <FaPlay size={width > 1300 ? 13 : 10} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`py-3 px-1 xl:px-3 rounded-b background-fade-bottom-enter   w-full hover:shadow-2xl absolute -bottom-[100px]  xl:-bottom-[110px] `}
      >
        <Link href={`/browse/${mediaType}/${titleId}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs xl:text-base ">{dataObject()?.title}</span>
            <PlusButton size={width > 1300 ? 20 : 15} />
          </div>

          <div className="flex text-[.6rem] xl:text-xs my-3">
            <span className="mr-5 mt-[2px]">
              {mediaType === 'movie' ? (
                runtime
              ) : (
                <span className='className="flex items-center'>
                  {dataObject()?.seasons}{' '}
                  {dataObject()?.seasons > 1 ? 'Seasons' : 'Season'}
                </span>
              )}
            </span>
            <div className="flex items-center ">
              {data?.adult ? (
                <span className="border-[1px] rounded p-[2px] border-opacity-50 mr-3 font-averia text-[.6rem] xl:text-xs">
                  +18
                </span>
              ) : (
                <span className="border-[1px] rounded py-[1px] px-1 border-opacity-50 mr-3 font-averia text-[.6rem] xl:text-xs">
                  G
                </span>
              )}
              <span>{dataObject()?.releaseDate?.split('-')[0]}</span>
            </div>
          </div>
        </Link>
        <div>
          <SingleGenres
            underLine={false}
            className="flex items-center text-[.65rem]"
            genres={data.genres}
          />
        </div>
      </div>
    </div>
  );
};

export default HoverExpand;
