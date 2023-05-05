import React, { Suspense, lazy, useEffect, useState } from 'react';

const VideoPlayer = lazy(
  () => import('@/src/components/VideoPlayer/VideoPlayer')
);

const VideoPlayerLayout = ({
  trailerUrl,
  setOpenTrailer,
  setStopTrailer,
  openTrailer,
  stopTrailer,
}: {
  trailerUrl: string;
  setOpenTrailer: React.Dispatch<React.SetStateAction<boolean>>;
  setStopTrailer: React.Dispatch<React.SetStateAction<boolean>>;
  openTrailer: boolean;
  stopTrailer: boolean;
}) => {
  const [isClientSide, setIsClientSide] = useState<boolean>(false);

  useEffect(() => {
    setIsClientSide(true);
    setStopTrailer(true);
  }, [setStopTrailer]);

  const handleOnEnd = () => {
    setOpenTrailer(false);
    setStopTrailer(true);
  };

  return (
    <div
      className={`fixed inset-0  w-full h-[100vh] bg-primary bg-opacity-90 bg-blur z-[10]  ${
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
  );
};

export default VideoPlayerLayout;
