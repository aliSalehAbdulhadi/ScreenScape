import React from 'react';
import TrailerButton from './TrailerButton/TrailerButton';
import VideoLibraryButton from './VideoLibraryButton/VideoLibraryButton';
import AddToMyListButton from './AddToMyListButton/AddToMyListButton';

const Buttons = ({ videos }: { videos: any[] }) => {
  const trailerUrl = videos?.filter((title: any) => title.type === 'Trailer');
  return (
    <div className="flex items-center justify-center ">
      <TrailerButton trailerUrl={trailerUrl[0]?.key} />
      <VideoLibraryButton videos={videos} />
      <AddToMyListButton />
    </div>
  );
};

export default Buttons;
