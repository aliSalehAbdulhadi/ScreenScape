import React, { Suspense, lazy, useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { imageQualityLargeScreen } from '@/src/global/globalVariables';
import HeroSliderButtons from '../HeroSliderButtons/HeroSliderButtons';

const VideoPlayer = lazy(() => import('../../../VideoPlayer/VideoPlayer'));

const HeroSliderVideo = ({
  setAdvanceSlide,
  activeSlide,
  title,
  index,
  setIsVideoPlaying,
}: {
  setAdvanceSlide: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  activeSlide: number;
  title: any;
  index: number;
}) => {
  const [muteVideo, setMuteVideo] = useState<boolean>(true);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [reloadVideo, setReloadVideo] = useState<boolean>(false);
  const [pauseVideo, setPauseVideo] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    setReloadVideo(false);
  }, [reloadVideo]);

  useEffect(() => {
    setIsVideoPlaying(playVideo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playVideo]);
  useEffect(() => {
    setPlayVideo(false);
  }, [activeSlide]);

  useEffect(() => {
    setPauseVideo(!inView);
  }, [inView]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPauseVideo(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleOnEnd = () => {
    setAdvanceSlide(true);
  };
  const handleOnReady = () => {
    setTimeout(() => {
      setIsVideoReady(true);
    }, 2800);
  };
  return (
    <Suspense>
      <div className={`rounded`}>
        {activeSlide === index && playVideo ? (
          <div ref={ref}>
            <VideoPlayer
              onEnd={handleOnEnd}
              onReady={handleOnReady}
              mute={muteVideo}
              reloadVideo={reloadVideo}
              playVideo={playVideo}
              pauseVideo={pauseVideo}
              onError={() => setAdvanceSlide(true)}
              controls={false}
              autoplay
              // @ts-ignore
              videoId={title?.trailer?.key}
            />
          </div>
        ) : (
          <div className="relative">
            <Image
              quality={imageQualityLargeScreen}
              width={1000}
              height={500}
              src={`https://image.tmdb.org/t/p/original/${title?.backdrop_path}`}
              className=" object-fit md:rounded "
              alt="poster"
              loading="lazy"
            />
            <div
              className={`absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center pointer-events-none ${
                playVideo ? 'hidden' : ''
              }`}
            ></div>
          </div>
        )}
        <div className={`absolute bottom-[-5px]  left-0 h-full w-full `}>
          <HeroSliderButtons
            title={title.title}
            mediaType={title?.first_air_date ? 'tv' : 'movie'}
            id={title.id}
            muteVideo={muteVideo}
            setMuteVideo={setMuteVideo}
            setReloadVideo={setReloadVideo}
            activeSlide={activeSlide}
            isVideoReady={isVideoReady}
            setPlayVideo={setPlayVideo}
            playVideo={playVideo}
            setPauseVideo={setPauseVideo}
            pauseVideo={pauseVideo}
            i={index}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default HeroSliderVideo;
