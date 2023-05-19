import { memo, useCallback, useState } from 'react';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import SingleGenres from '../TitleSinglePage/TitleInfo/SingleGenres/SingleGenres';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import {
  dataObject,
  imageQualityLargeScreen,
} from '@/src/global/globalVariables';
import { BsPlus } from 'react-icons/bs';
import { useHoverDataFetch } from '@/src/fetch/getHoverData';

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

  const [data, trailer] = useHoverDataFetch(
    mediaType,
    titleId,
    index,
    hoveredIndex
  );

  const HandleOnReady = useCallback(() => {
    if (hoveredIndex === index) {
      setTimeout(() => {
        setIsVideoReady(true);
      }, 1000);
    }
  }, [hoveredIndex, index]);

  const handleOnMouseLeave = useCallback(() => {
    if (hoveredIndex === index) {
      setPlayVideo(false);
      setMuteVideo(true);
      setIsVideoReady(false);
    }
  }, [hoveredIndex, index]);

  const minutes = data?.runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const runtime = hours + 'h ' + remainingMinutes + 'm';
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
                className={`w-fit border-[2px] border-white border-opacity-60 opacity-40 hover:opacity-90 hover:border-opacity-90 transition-all p-[.45rem] rounded-full cursor-pointer bg-black bg-opacity-60  mb-3 mr-[2px] ${
                  isVideoReady || 'hidden'
                }`}
              >
                {muteVideo ? (
                  <FaVolumeMute className="w-2 h-2 xl:w-3 xl:h-3" />
                ) : (
                  <FaVolumeUp className="w-2 h-2 xl:w-3 xl:h-3" />
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
                className={`w-fit border-[2px] border-white border-opacity-60  hover:opacity-90 hover:border-opacity-90 transition-all p-[7px] rounded-full cursor-pointer bg-black bg-opacity-60 `}
              >
                <FaPlay className="w-[10px] h-[10px] xl:w-3 xl:h-3" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`py-3 px-3 rounded-b background-fade-bottom-enter   w-full hover:shadow-2xl absolute -bottom-[100px]  xl:-bottom-[110px] `}
      >
        <Link href={`/browse/${mediaType}/${titleId}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs xl:text-base ">
              {dataObject(data, mediaType)?.title}
            </span>
            <div className="border-[2px] w-fit border-white border-opacity-60 hover:border-opacity-90 transition-all p-[.2rem]  rounded-full text-white cursor-pointer bg-black bg-opacity-30">
              <BsPlus className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
          </div>

          <div className="flex text-[.6rem] xl:text-xs my-3">
            <span className="mr-5 mt-[2px]">
              {mediaType === 'movie' ? (
                runtime
              ) : (
                <span className='className="flex items-center'>
                  {dataObject(data, mediaType)?.seasons}{' '}
                  {dataObject(data, mediaType)?.seasons > 1
                    ? 'Seasons'
                    : 'Season'}
                </span>
              )}
            </span>
            <div className="flex items-center ">
              <span className="border-[1px] rounded min-w-[1.5rem] min-h-[1rem] flex justify-center items-center bg-white bg-opacity-5  border-white border-opacity-75 mr-3 font-averia">
                {dataObject(data, mediaType)?.isAdult ? '18+' : 'G'}
              </span>
              <span>
                {dataObject(data, mediaType)?.releaseDate?.split('-')[0]}
              </span>
            </div>
          </div>
        </Link>
        <div>
          <SingleGenres
            underLine={false}
            className="flex items-center text-[.65rem]"
            genres={data?.genres}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(HoverExpand);
