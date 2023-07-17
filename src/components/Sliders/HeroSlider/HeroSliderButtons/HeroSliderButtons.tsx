import { GrCircleInformation } from 'react-icons/gr';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { TbReload } from 'react-icons/tb';
import Link from 'next/link';
import { HiOutlinePlus } from 'react-icons/hi';
import { Dispatch, SetStateAction } from 'react';
import useWindowSize from '@/src/hooks/useWindowsSize';
import { BsFillPauseFill } from 'react-icons/bs';

const HeroSliderButtons = ({
  title,
  id,
  mediaType,
  setReloadVideo,
  setMuteVideo,
  setPlayVideo,
  setPauseVideo,
  pauseVideo,
  playVideo,
  muteVideo,
  activeSlide,
  isVideoReady,
  i,
}: {
  title: string;
  id: string;
  mediaType: string;
  setReloadVideo: Dispatch<SetStateAction<boolean>>;
  setMuteVideo: Dispatch<SetStateAction<boolean>>;
  setPlayVideo: Dispatch<SetStateAction<boolean>>;
  setPauseVideo: Dispatch<SetStateAction<boolean>>;
  pauseVideo: boolean;
  playVideo: boolean;
  muteVideo: boolean;
  isVideoReady: boolean;
  activeSlide: number;
  i: number;
}) => {
  const width = useWindowSize();
  return (
    <div
      className={`w-full h-full  rounded  ${
        width > 1150 && 'sliderButtonsBgFade'
      } ${activeSlide === i ? '' : 'hidden'} flex items-end justify-between `}
    >
      <div
        onClick={() => setPlayVideo(true)}
        className={` items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[2px] border-white border-opacity-60 hover:border-opacity-90 transition-all rounded-full h-14 w-14 cursor-pointer ${
          !playVideo ? 'flex' : 'hidden'
        }`}
      >
        <FaPlay className="  xl:w-6 xl:h-6" />
      </div>

      <div className="flex items-end justify-between px-5  pb-5 w-full ">
        <div className={`flex flex-col`}>
          <span className="text-white text-xl xs:text-3xl md:text-2xl xl:text-[2rem] font-bold">
            {title}
          </span>
          <div className="mt-2 flex items-center">
            <Link href={`/browse/${mediaType}/${id}`}>
              <div className="flex items-center rounded bg-white hover:bg-opacity-90 transition-all text-black px-2 py-[.40rem] xxxs:px-3 xxxs:py-2 md:px-2 md:py-[.40rem] xl:px-3 xl:py-2 ">
                <GrCircleInformation className="mb-[2px] text-opacity-75 h-4 w-4  semiSm:h-5 semiSm:w-5" />
                <span className="ml-2 text-[10px] xs:text-sm xl:text-base">
                  More Info
                </span>
              </div>
            </Link>
            <div className="border-[2px] border-white border-opacity-60 hover:border-opacity-90 transition-all  p-[.45rem] rounded-full cursor-pointer mr-3 bg-black bg-opacity-60 ml-2">
              <HiOutlinePlus className="h-3 w-3 xs:h-4 xs:w-4 xl:h-5 xl:w-5" />
            </div>
          </div>
        </div>

        <div
          className={` h-fit justify-center visible  lg:flex ${
            isVideoReady || 'invisible'
          }`}
        >
          <div
            onClick={() => setPauseVideo(!pauseVideo)}
            className="mr-2 border-[2px] border-white border-opacity-60 hover:border-opacity-90 transition-all p-[.45rem] rounded-full cursor-pointer bg-black bg-opacity-60"
          >
            {pauseVideo ? (
              <FaPlay className="h-3 w-3 xs:h-4 xs:w-4 xl:h-5 xl:w-5" />
            ) : (
              <BsFillPauseFill className="h-3 w-3 xs:h-4 xs:w-4 xl:h-5 xl:w-5" />
            )}
          </div>
          <div
            onClick={() => setReloadVideo(true)}
            className="border-[2px] border-white border-opacity-60 hover:border-opacity-90 transition-all p-[.45rem] rounded-full cursor-pointer bg-black bg-opacity-60"
          >
            <TbReload className="h-3 w-3 xs:h-4 xs:w-4 xl:h-5 xl:w-5" />
          </div>
          <div
            onClick={() => setMuteVideo(!muteVideo)}
            className="ml-2 border-[2px] border-white border-opacity-60 hover:border-opacity-90 transition-all p-[.45rem] rounded-full cursor-pointer bg-black bg-opacity-60"
          >
            {muteVideo ? (
              <FaVolumeMute className="h-3 w-3 xs:h-4 xs:w-4 xl:h-5 xl:w-5" />
            ) : (
              <FaVolumeUp className="h-3 w-3 xs:h-4 xs:w-4 xl:h-5 xl:w-5" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderButtons;
