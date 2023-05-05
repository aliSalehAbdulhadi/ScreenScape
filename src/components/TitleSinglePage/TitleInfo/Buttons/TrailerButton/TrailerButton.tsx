'use client';

import { useEffect, useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import VideoPlayerLayout from '@/src/components/VideoPlayer/VideoPlayerLayout/VideoPlayerLayout';

const TrailerButton = ({ trailerUrl }: { trailerUrl: string }) => {
  const [openTrailer, setOpenTrailer] = useState<boolean>(false);
  const [stopTrailer, setStopTrailer] = useState<boolean>(false);

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

      <VideoPlayerLayout
        trailerUrl={trailerUrl}
        setOpenTrailer={setOpenTrailer}
        setStopTrailer={setStopTrailer}
        openTrailer={openTrailer}
        stopTrailer={stopTrailer}
      />
    </div>
  );
};

export default TrailerButton;
