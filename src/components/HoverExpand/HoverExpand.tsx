import { useState } from 'react';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import SingleGenres from '../TitleSinglePage/TitleInfo/SingleGenres/SingleGenres';
import PlusButton from '../Buttons/PlusButton/PlusButton';
import useWindowSize from '@/src/hooks/useWindowsSize';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const HoverExpand = ({
  trailerUrl,
  imageUrl,
  index,
  hoveredIndex,
}: {
  trailerUrl: string;
  imageUrl: string;
  index: number;
  hoveredIndex: number;
}) => {
  const [muteVideo, setMuteVideo] = useState<boolean>(true);
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);

  const width = useWindowSize();

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

  return (
    <div
      onMouseLeave={handleOnMouseLeave}
      className="flex flex-col items-center justify-center my-10 cursor-pointer rounded hover:scale-[1.3] hover:xl:scale-[1.5] opacity-0 hover:opacity-100 hover:delay-[.5s] cardHover relative"
    >
      <div>
        {index === hoveredIndex && playVideo ? (
          <div className="object-contain w-[288px] cursor-pointer relative">
            <VideoPlayer
              videoId="aa"
              mute={muteVideo}
              autoplay={true}
              controls={false}
              stopVideo={playVideo}
              playVideo={playVideo}
              onReady={HandleOnReady}
            />
            <div className="absolute top-0 left-0 h-full px-3  w-[288px] flex items-end justify-end ">
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
          <div className="relative w-[288px]">
            <Image
              width={288}
              height={150}
              src={imageUrl}
              className=" object-contain md:rounded m-0 cursor-pointer "
              alt="poster"
              loading="lazy"
            />

            <div className="absolute top-0 left-0  px-1 xl:px-3 h-full w-full flex items-center justify-center bg-black bg-opacity-50 ">
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

      <Link
        href={'browse/sss'}
        className={`py-3 px-1 xl:px-3 rounded-b background-fade-bottom-enter   w-full hover:shadow-2xl absolute -bottom-[100px]  xl:-bottom-[110px]  `}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs xl:text-base">The Equalizer 3</span>
          <PlusButton size={width > 1300 ? 20 : 15} />
        </div>

        <div className="flex text-[.6rem] xl:text-xs my-3">
          <span className="mr-5 mt-[2px]">1h 26m</span>
          <div className="flex items-center ">
            <span className="border-[1px] py-[1px] px-[5px]  border-white border-opacity-75 mr-3 text-[.6rem] xl:text-xs">
              18+
            </span>
            <span>2019</span>
          </div>
        </div>
        <div>
          <SingleGenres
            underLine={false}
            className="flex items-center justify-between text-[.65rem] "
          />
        </div>
      </Link>
    </div>
  );
};

export default HoverExpand;
