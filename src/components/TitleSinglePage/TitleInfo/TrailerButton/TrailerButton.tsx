'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import PlusButton from '@/src/components/Buttons/PlusButton/PlusButton';
import { MdVideoLibrary } from 'react-icons/md';

const VideoPlayer = lazy(
  () => import('@/src/components/VideoPlayer/VideoPlayer')
);

const TrailerButton = ({ trailerUrl }: { trailerUrl: string }) => {
  const [isClientSide, setIsClientSide] = useState<boolean>(false);
  const [openTrailer, setOpenTrailer] = useState<boolean>(false);
  const [stopTrailer, setStopTrailer] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleOnEnd = () => {
    setOpenTrailer(false);
    setStopTrailer(true);
  };

  useEffect(() => {
    setIsClientSide(true);
    setStopTrailer(true);
  }, []);

  useEffect(() => {
    openTrailer && setStopTrailer(false);
  }, [openTrailer]);

  useEffect(() => {
    if (openTrailer) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [openTrailer]);

  return (
    <div className=" flex self-start items-center transition-all">
      <button
        title={trailerUrl ? 'Trailer' : 'No Trailer Available'}
        disabled={trailerUrl ? false : true}
        onClick={() => setOpenTrailer(true)}
        className={`mr-3 flex items-center bg-white rounded px-2 py-1 xs:py-2 xs:px-4 text-black ${
          trailerUrl ? ' md:hover:opacity-90 bg-opacity-100' : 'bg-opacity-40'
        } `}
      >
        <BsPlayFill size={25} className="" />
        <span className="mr-2 xs:text-lg">Trailer</span>
      </button>
      <MdVideoLibrary
        size={30}
        className="mr-3 cursor-pointer transition-all hover:opacity-80"
      />
      <div title="Add to My List">
        <PlusButton size={25} />
      </div>
      <div
        className={`fixed inset-0  w-full h-[100vh] bg-primary bg-opacity-90 bg-blur   ${
          openTrailer ? '' : 'pointer-events-none hidden'
        }`}
      >
        {isClientSide && (
          <div
            onClick={() => setOpenTrailer(false)}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="w-[95%] sm:w-[90%] semiSm:w-[80%] lg:w-[70%] ">
              <Suspense>
                <VideoPlayer
                  controls={true}
                  playVideo={openTrailer}
                  mute={false}
                  videoId={trailerUrl}
                  onEnd={handleOnEnd}
                  pauseVideo={!openTrailer}
                  stopVideo={stopTrailer}
                />
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerButton;
