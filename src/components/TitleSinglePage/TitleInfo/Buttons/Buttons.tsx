import React from 'react';
import TrailerButton from './TrailerButton/TrailerButton';
import VideoLibraryButton from './VideoLibraryButton/VideoLibraryButton';
import AddToMyListButton from './AddToMyListButton/AddToMyListButton';

const Buttons = ({ videos }: { videos: any[] }) => {
  const trailerUrl = videos?.filter((title: any) => title.type === 'Trailer');
  return (
    <div className="flex items-center justify-center ">
      <button
        title={trailerUrl ? 'Trailer' : 'No Trailer Available'}
        disabled={trailerUrl ? false : true}
        className={`mr-3 flex items-center bg-white rounded px-2 py-1 xs:py-2 xs:px-4 text-black ${
          trailerUrl ? ' md:hover:opacity-90 bg-opacity-100' : 'bg-opacity-40'
        } `}
      >
        <span className="mr-2 xs:text-lg">More Info</span>
      </button>
      <TrailerButton trailerUrl={trailerUrl[0]?.key} />
      <VideoLibraryButton videos={videos} />
      <AddToMyListButton />
    </div>
  );
};

export default Buttons;
