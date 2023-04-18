'use client';

import { videoPlayer } from '@/src/Interfaces/interfaces';
import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({
  onEnd,
  controls = true,
  autoplay = false,
  mute = false,
  stopVideo,
  playVideo,
  pauseVideo,
  videoId,
  height = '0',
  width = '100%',
}: videoPlayer) => {
  const [videoDuration, setVideoDuration] = useState(0);

  const booleanToNumber = (boolean: boolean) => {
    return boolean ? '1' : '0';
  };

  const playerRef = useRef<any>();

  const opts = {
    height: height,
    width: width,

    playerVars: {
      origin: window.location.origin,
      autoplay: booleanToNumber(autoplay),
      controls: booleanToNumber(controls),
      mute: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      end: -10,
    },
  };

  useEffect(() => {
    mute
      ? playerRef?.current?.internalPlayer.setVolume(0)
      : playerRef?.current?.internalPlayer.setVolume(50);
  }, [mute]);

  useEffect(() => {
    stopVideo && playerRef?.current?.internalPlayer.stopVideo();
    playVideo && playerRef?.current?.internalPlayer.playVideo();
    pauseVideo && playerRef?.current?.internalPlayer.pauseVideo();
  }, [stopVideo, pauseVideo, playVideo]);

  const handleReady = (e: any) => {
    const player = e.target;
    setVideoDuration(player.getDuration() - 10);
  };

  if (typeof window === 'undefined') return;
  return (
    <div className="rounded overflow-hidden w-full h-full bg-primary youtube-player-container">
      <YouTube
        ref={playerRef}
        className="rounded"
        videoId={videoId}
        opts={opts}
        onReady={handleReady}
        onEnd={() => {
          onEnd && onEnd();
          playerRef?.current?.internalPlayer.stopVideo();
        }}
      ></YouTube>
    </div>
  );
};

export default VideoPlayer;
