'use client';

import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { videoPlayerInterface } from '@/src/Interfaces/interfaces';
// import ReactPlayer from 'react-player/lazy';

const ReactPlayer = lazy(() => import('react-player/youtube'));

const VideoPlayer = ({
  onEnd,
  controls = true,
  autoplay = false,
  mute = false,
  stopVideo,
  playVideo,
  pauseVideo,
  videoId,
}: videoPlayerInterface) => {
  const [videoDuration, setVideoDuration] = useState(0);

  const booleanToNumber = (boolean: boolean) => {
    return boolean ? '1' : '0';
  };

  const playerRef = useRef<any>();

  console.log(playerRef?.current?.getInternalPlayer());

  const config = {
    youtube: {
      playerVars: {
        autoplay: booleanToNumber(autoplay),
        controls: booleanToNumber(controls),
        mute: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        end: -10,
      },
    },
  };
  // useEffect(() => {
  //   if (playerRef.current && playerRef.current.getInternalPlayer) {
  //     const internalPlayer = playerRef.current.getInternalPlayer();
  //     if (internalPlayer && typeof internalPlayer.setVolume === 'function') {
  //       mute ? internalPlayer.setVolume(0) : internalPlayer.setVolume(50);
  //     }
  //   }
  // }, [mute]);

  // useEffect(() => {
  //   if (playerRef.current && playerRef.current.getInternalPlayer) {
  //     const internalPlayer = playerRef.current.getInternalPlayer();
  //     if (internalPlayer && typeof internalPlayer.setVolume === 'function') {
  //       stopVideo && playerRef?.current?.getInternalPlayer()?.stopVideo();
  //       playVideo && playerRef?.current?.getInternalPlayer()?.playVideo();
  //       pauseVideo && playerRef?.current?.getInternalPlayer()?.pauseVideo();
  //     }
  //   }
  // }, [stopVideo, pauseVideo, playVideo]);

  // useEffect(() => {
  //   if (playerRef.current && playerRef.current.getInternalPlayer) {
  //     stopVideo && playerRef?.current?.getInternalPlayer()?.stopVideo();
  //   }
  // });

  const handleReady = (e: any) => {
    const player = e.target;
    setVideoDuration(player.getDuration() - 10);
  };

  return (
    <Suspense>
      <div className="rounded overflow-hidden w-full h-full bg-primary youtube-player-container">
        <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/watch?v=vS3_72Gb-bI?showinfo=0&enablejsapi=1&origin=http://localhost:3001"
          width="100%"
          height="100%"
          volume={50}
          muted={mute}
          onEnded={() => {
            onEnd && onEnd();
          }}
          config={{
            youtube: {
              playerVars: {
                autoplay: autoplay,
                controls: controls,
              },
            },
          }}
        />
      </div>
    </Suspense>
  );
};

export default VideoPlayer;
