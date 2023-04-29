import React, { Suspense, lazy, useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const VideoPlayer = lazy(() => import('../../../VideoPlayer/VideoPlayer'));

const AutoPlaySlide = ({
  setAdvanceSlide,
  setIsVideoReady,
  muteVideo,
  reloadVideo,
  imageUrl,
  trailer,
}: {
  setAdvanceSlide: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVideoReady: React.Dispatch<React.SetStateAction<boolean>>;
  muteVideo: boolean;
  reloadVideo: boolean;
  imageUrl: string;
  trailer: any;
}) => {
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
  const [isInTab, setIsInTab] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    setIsVideoVisible(inView);
  }, [inView]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsInTab(!document.hidden);
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
    <Suspense
      fallback={
        <Image
          width={1100}
          height={500}
          src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
          className="object-fit md:rounded"
          alt="poster"
        />
      }
    >
      <div ref={ref}>
        <VideoPlayer
          onEnd={handleOnEnd}
          onReady={handleOnReady}
          mute={muteVideo}
          reloadVideo={reloadVideo}
          playVideo={isVideoVisible || isInTab}
          pauseVideo={!isVideoVisible || !isInTab}
          onError={() => setAdvanceSlide(true)}
          controls={false}
          autoplay={true}
          // @ts-ignore
          videoId={trailer.key}
        />
      </div>
    </Suspense>
  );
};

export default AutoPlaySlide;
