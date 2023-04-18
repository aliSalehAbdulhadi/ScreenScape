'use client';

import { videoPlayer } from '@/src/Interfaces/interfaces';
import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({
  setAdvanceSlide,
  controls = true,
  autoplay = false,
  mute = false,
  autoSlide = false,
  videoId,
  height = '0',
  width = '100%',
}: videoPlayer) => {
  const [videoDuration, setVideoDuration] = useState(0);

  const booleanToNumber = (boolean: boolean) => {
    return boolean ? '1' : '0';
  };

  const playerRef = useRef<any>();

  useEffect(() => {
    mute
      ? playerRef?.current?.internalPlayer.setVolume(0)
      : playerRef?.current?.internalPlayer.setVolume(50);
  });

  const opts = {
    height: height,
    width: width,

    playerVars: {
      autoplay: booleanToNumber(autoplay),
      controls: booleanToNumber(controls),
      mute: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      end: -10,
    },
  };

  const handleReady = (e: any) => {
    const player = e.target;
    setVideoDuration(player.getDuration() - 10);
  };
  return (
    <div className="rounded overflow-hidden w-full h-full bg-primary youtube-player-container">
      <YouTube
        ref={playerRef}
        className="rounded"
        videoId={videoId}
        opts={opts}
        onReady={handleReady}
        onEnd={() => setAdvanceSlide(true)}
      ></YouTube>
    </div>
  );
};

export default VideoPlayer;

{
  /* <iframe
className="rounded"
width="960"
height="540"
src={`https://www.youtube.com/embed/mO0OuR26IZM?autoplay=${
  activeSlide === i ? '1' : '0'
}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=0&rel=0&iv_load_policy=0`}
title="EXTRACTION 2 | Official Teaser Trailer | Netflix"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowFullScreen
></iframe> */
}
