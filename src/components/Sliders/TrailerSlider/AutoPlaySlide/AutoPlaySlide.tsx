import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import asyncFetch from '@/src/helper/asyncFetch';

const VideoPlayer = lazy(() => import('../../../VideoPlayer/VideoPlayer'));

const AutoPlaySlide = ({
  setAdvanceSlide,
  setIsVideoReady,
  muteVideo,
  reloadVideo,
  imageUrl,
  id,
}: {
  setAdvanceSlide: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVideoReady: React.Dispatch<React.SetStateAction<boolean>>;
  muteVideo: boolean;
  reloadVideo: boolean;
  imageUrl: string;
  id: string;
}) => {
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
  const [isInTab, setIsInTab] = useState(true);
  const [data, setData] = useState<[]>([]);

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const asyncFunction = useCallback(async () => {
    try {
      const playingNowMovies = await asyncFetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      setData(
        playingNowMovies.results.filter(
          (title: any) => title.name === 'Official Trailer'
        )
      );
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    asyncFunction();
  }, [asyncFunction]);

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
          src={process.env.NEXT_PUBLIC_IMAGE_LINK + imageUrl}
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
          videoId={data[0]?.key}
        />
      </div>
    </Suspense>
  );
};

export default AutoPlaySlide;
