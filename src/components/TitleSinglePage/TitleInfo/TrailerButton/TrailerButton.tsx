'use client';

import React, { useEffect, useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import PlusButton from '@/src/components/Buttons/PlusButton/PlusButton';
import VideoPlayer from '@/src/components/VideoPlayer/VideoPlayer';

const TrailerButton = () => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [killVideo, setKillVideo] = useState(false);

  const handleOnEnd = () => {
    setOpenTrailer(false);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className=" flex self-start items-center transition-all">
      <button
        onClick={() => setOpenTrailer(true)}
        className="mr-3 flex items-center bg-white rounded px-2 py-1 xs:py-2 xs:px-4 text-black md:hover:opacity-90 "
      >
        <BsPlayFill size={25} className="" />
        <span className="mr-2 xs:text-lg">Trailer</span>
      </button>
      <PlusButton size={25} />
      <div
        className={`fixed inset-0  w-full h-[100vh] z-50 bg-primary bg-opacity-60 bg-blur   ${
          openTrailer ? '' : 'pointer-events-none hidden'
        }`}
      >
        {isClient && (
          <div
            onClick={() => {
              setOpenTrailer(false);
              setKillVideo(true);
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="w-[95%] sm:w-[90%] semiSm:w-[80%] lg:w-[70%]">
              <VideoPlayer
                controls={true}
                autoplay={true}
                playVideo={openTrailer}
                mute={false}
                videoId="Tp_YZNqNBhw"
                onEnd={handleOnEnd}
                pauseVideo={!openTrailer}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerButton;
