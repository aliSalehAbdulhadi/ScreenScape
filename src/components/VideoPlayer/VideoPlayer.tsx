'use client';

import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { videoPlayerInterface } from '@/src/Interfaces/interfaces';

const ReactPlayer = lazy(() => import('react-player/lazy'));

const VideoPlayer = ({
  onEnd,
  onReady,
  onError,
  controls = true,
  autoplay = false,
  mute = false,
  reloadVideo,
  stopVideo,
  playVideo,
  pauseVideo,
  videoId,
}: videoPlayerInterface) => {
  const [isClientSide, setIsClientSide] = useState(false);

  const pathName = usePathname();
  const playerRef = useRef<any>();

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  useEffect(() => {
    if (playerRef.current && playerRef.current.getInternalPlayer) {
      const internalPlayer = playerRef.current.getInternalPlayer();
      if (internalPlayer && typeof internalPlayer.stopVideo === 'function') {
        stopVideo && internalPlayer?.stopVideo();
        playVideo && internalPlayer?.playVideo();
        pauseVideo && internalPlayer?.pauseVideo();
        reloadVideo && internalPlayer?.seekTo(0);
      }
    }
  }, [stopVideo, pauseVideo, playVideo, reloadVideo]);

  useEffect(() => {
    if (playerRef.current && playerRef.current.getInternalPlayer) {
      const internalPlayer = playerRef.current.getInternalPlayer();

      if (internalPlayer && typeof internalPlayer.stopVideo === 'function') {
        internalPlayer?.stopVideo();
      }
    }
  }, [pathName]);

  return (
    <div className="rounded overflow-hidden w-full h-full bg-black youtube-player-container">
      {isClientSide && (
        <Suspense>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=XAwpu4rQpeQ&t=31s?showinfo=0&enablejsapi=1&origin=${window?.location?.origin}`}
            width="100%"
            height="100%"
            volume={0.5}
            playsinline={true}
            controls={controls}
            muted={mute}
            onError={(e: any) => onError && onError(e)}
            onEnded={() => {
              onEnd && onEnd();
            }}
            onReady={() => onReady && onReady()}
            config={{
              youtube: {
                playerVars: {
                  autoplay: autoplay,
                  hd: 1,
                  iv_load_policy: 3,
                  modestbranding: 1,
                  rel: 0,
                },
              },
            }}
          />
        </Suspense>
      )}
    </div>
  );
};

export default VideoPlayer;
